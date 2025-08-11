import os
import json
import datetime
import pandas as pd
from typing import Dict, List, Optional, Any


class ScopeAnalyzer:
    """
    Simplified scope analyzer using dataset.list_names() method for efficient concept analysis.
    """
    
    def __init__(self, query_engine, cache_dir: str = None):
        """
        Initialize the ScopeAnalyzer.
        
        Args:
            query_engine: The query engine instance with dataset access
            cache_dir: Directory to store cache files (defaults to analysis_cache in tempo_ql dir)
        """
        self.query_engine = query_engine
        self.dataset = query_engine.dataset if query_engine else None
        
        # Set up cache directory
        if cache_dir is None:
            cache_dir = os.path.join(os.path.dirname(__file__), 'analysis_cache')
        self.cache_dir = cache_dir
        os.makedirs(self.cache_dir, exist_ok=True)
    
    def _get_cache_path(self, scope_name: str) -> str:
        """
        Get the cache file path for a scope analysis.
        
        Args:
            scope_name: Name of the scope/table
            
        Returns:
            Full path to the cache file
        """
        return os.path.join(self.cache_dir, f'{scope_name}_analysis.json')
    
    def _load_cache(self, scope_name: str) -> Optional[Dict[str, Any]]:
        """
        Load cached analysis results for a scope.
        
        Args:
            scope_name: Name of the scope/table
            
        Returns:
            Cached analysis data or None if not found
        """
        cache_path = self._get_cache_path(scope_name)
        if os.path.exists(cache_path):
            try:
                with open(cache_path, 'r') as f:
                    cached_data = json.load(f)
                    print(f"📁 Loaded cached analysis for {scope_name}")
                    return cached_data
            except Exception as e:
                print(f"❌ Error loading cached analysis for {scope_name}: {e}")
        return None
    
    def _save_cache(self, scope_name: str, analysis_data: Dict[str, Any]) -> bool:
        """
        Save analysis results to cache file.
        
        Args:
            scope_name: Name of the scope/table
            analysis_data: Analysis results to cache
            
        Returns:
            True if successful, False otherwise
        """
        cache_path = self._get_cache_path(scope_name)
        try:
            with open(cache_path, 'w') as f:
                json.dump(analysis_data, f, indent=2)
            print(f"💾 Saved analysis cache for {scope_name}")
            return True
        except Exception as e:
            print(f"❌ Error saving analysis cache for {scope_name}: {e}")
            return False
    
    def get_scopes(self) -> List[str]:
        """
        Get list of available scopes from dataset tables.
        
        Returns:
            List of scope names
        """
        if not self.dataset or not hasattr(self.dataset, 'tables'):
            return []
        
        scopes = []
        for table_info in self.dataset.tables:
            if 'scope' in table_info:
                scopes.append(table_info['scope'])
        
        # Remove duplicates and sort
        unique_scopes = sorted(list(set(scopes)))
        return unique_scopes
    
    def analyze_scope(self, scope_name: str, force_refresh: bool = False, progress_callback=None) -> Optional[Dict[str, Any]]:
        """
        Analyze a scope using dataset.list_names() method for efficient concept analysis.
        
        Args:
            scope_name: Name of the scope to analyze
            force_refresh: If True, ignore cache and re-analyze
            progress_callback: Optional callback function to report progress
            
        Returns:
            Analysis results dictionary or None if analysis failed
        """
        if not self.query_engine or not self.dataset:
            print("❌ No query engine or dataset available")
            return None
        
        # Check cache first (unless force refresh)
        if not force_refresh:
            cached_result = self._load_cache(scope_name)
            if cached_result:
                print(f"📁 Using cached analysis for {scope_name}")
                if progress_callback:
                    progress_callback("Using cached analysis results")
                return cached_result
        
        print(f"🔍 Analyzing scope: {scope_name}")
        
        try:
            # Step 1: Connecting to dataset
            if progress_callback:
                progress_callback("Connecting to dataset")
                import time
                time.sleep(0.3)  # Small delay for visual feedback
            
            # Step 2: Retrieving concept names and counts
            if progress_callback:
                progress_callback("Retrieving concept names and counts")
                time.sleep(0.4)
            
            # Use dataset.list_names() with scope and return_counts=True
            # This gives us a DataFrame with columns: id, name, count, scope, type
            print(f"📊 Calling dataset.list_names(scope='{scope_name}', return_counts=True)")
            df = self.dataset.list_names(scope=scope_name, return_counts=True)
            
            if df is None or df.empty:
                print(f"❌ No data found for scope: {scope_name}")
                if progress_callback:
                    progress_callback("No data found for this scope")
                return None
            
            print(f"📊 Retrieved {len(df)} concepts for scope: {scope_name}")
            print(f"DataFrame columns: {df.columns.tolist()}")
            print(f"DataFrame sample:\n{df.head()}")
            
            # Step 3: Processing results
            if progress_callback:
                progress_callback("Processing concept data")
                time.sleep(0.3)
            
            # Convert DataFrame to our expected format
            concepts = []
            for _, row in df.iterrows():
                concept = {
                    'name': str(row.get('name', 'Unknown')),
                    'type': str(row.get('type', 'unknown')),
                    'count': int(row.get('count', 0)) if pd.notna(row.get('count')) else 0,
                    'id': str(row.get('id', '')) if pd.notna(row.get('id')) else ''
                }
                concepts.append(concept)
            
            # Sort by count descending
            concepts.sort(key=lambda x: x['count'], reverse=True)
            
            # Step 4: Finalizing analysis
            if progress_callback:
                progress_callback("Finalizing analysis")
                time.sleep(0.2)
            
            # Create analysis result
            analysis_result = {
                'scope_name': scope_name,
                'concept_count': len(concepts),
                'concepts': concepts,
                'analyzed_at': str(datetime.datetime.now()),
                'cache_version': '4.0',  # Updated version for list_names approach
                'total_records': sum(concept['count'] for concept in concepts)
            }
            
            # Cache the results
            self._save_cache(scope_name, analysis_result)
            
            print(f"✅ Analysis completed for {scope_name}: {len(concepts)} concepts found")
            print(f"📊 Total records across all concepts: {analysis_result['total_records']}")
            
            if progress_callback:
                progress_callback("Analysis completed!")
            
            return analysis_result
            
        except Exception as e:
            print(f"❌ Error analyzing scope {scope_name}: {e}")
            import traceback
            traceback.print_exc()
            if progress_callback:
                progress_callback(f"Error: {str(e)}")
            return None
    
    def get_cached_scopes(self) -> List[str]:
        """
        Get list of scopes that have cached analysis results.
        
        Returns:
            List of scope names with cached results
        """
        cached_scopes = []
        if os.path.exists(self.cache_dir):
            for filename in os.listdir(self.cache_dir):
                if filename.endswith('_analysis.json'):
                    scope_name = filename.replace('_analysis.json', '')
                    cached_scopes.append(scope_name)
        return sorted(cached_scopes)
    
    def clear_cache(self, scope_name: str = None) -> bool:
        """
        Clear cache for a specific scope or all scopes.
        
        Args:
            scope_name: Specific scope to clear, or None to clear all
            
        Returns:
            True if successful, False otherwise
        """
        try:
            if scope_name:
                cache_path = self._get_cache_path(scope_name)
                if os.path.exists(cache_path):
                    os.remove(cache_path)
                    print(f"🗑️ Cleared cache for {scope_name}")
            else:
                # Clear all cache files
                if os.path.exists(self.cache_dir):
                    for filename in os.listdir(self.cache_dir):
                        if filename.endswith('_analysis.json'):
                            os.remove(os.path.join(self.cache_dir, filename))
                    print("🗑️ Cleared all analysis cache")
            return True
        except Exception as e:
            print(f"❌ Error clearing cache: {e}")
            return False
    
    def get_cache_info(self) -> Dict[str, Any]:
        """
        Get information about cached analysis results.
        
        Returns:
            Dictionary with cache information
        """
        cache_info = {
            'cache_dir': self.cache_dir,
            'cached_scopes': self.get_cached_scopes(),
            'total_cached': len(self.get_cached_scopes())
        }
        return cache_info
    
    def analyze_all_scopes(self, force_refresh: bool = False, progress_callback=None) -> Dict[str, Dict[str, Any]]:
        """
        Analyze all available scopes.
        
        Args:
            force_refresh: If True, ignore cache and re-analyze all scopes
            progress_callback: Optional callback function to report progress
            
        Returns:
            Dictionary mapping scope names to their analysis results
        """
        scopes = self.get_scopes()
        results = {}
        
        for i, scope_name in enumerate(scopes):
            if progress_callback:
                progress_callback(f"Analyzing scope {i+1}/{len(scopes)}: {scope_name}")
            
            analysis_result = self.analyze_scope(scope_name, force_refresh=force_refresh)
            if analysis_result:
                results[scope_name] = analysis_result
        
        return results
    
    def get_scope_summary(self) -> Dict[str, Any]:
        """
        Get a summary of all available scopes and their analysis status.
        
        Returns:
            Dictionary with scope summary information
        """
        all_scopes = self.get_scopes()
        cached_scopes = self.get_cached_scopes()
        
        summary = {
            'total_scopes': len(all_scopes),
            'cached_scopes': len(cached_scopes),
            'uncached_scopes': len(all_scopes) - len(cached_scopes),
            'scope_details': []
        }
        
        for scope_name in all_scopes:
            is_cached = scope_name in cached_scopes
            scope_detail = {
                'name': scope_name,
                'cached': is_cached,
                'cache_file': self._get_cache_path(scope_name) if is_cached else None
            }
            
            if is_cached:
                try:
                    cached_data = self._load_cache(scope_name)
                    if cached_data:
                        scope_detail.update({
                            'concept_count': cached_data.get('concept_count', 0),
                            'total_records': cached_data.get('total_records', 0),
                            'analyzed_at': cached_data.get('analyzed_at', 'Unknown')
                        })
                except Exception as e:
                    scope_detail['cache_error'] = str(e)
            
            summary['scope_details'].append(scope_detail)
        
        return summary