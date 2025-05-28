import pathlib
import anywidget
import traitlets
import threading

def default_thread_starter(fn, args=[], kwargs={}):
    thread = threading.Thread(target=fn, args=args, kwargs=kwargs)
    thread.daemon = True
    thread.start()
    
def synchronous_thread_starter(fn, args=[], kwargs={}):
    fn(*args, **kwargs)
    
# from `npx vite`
DEV_ESM_URL = "http://localhost:5173/src/widget-main.js?anywidget"
DEV_CSS_URL = ""

# from `npx vite build`
BUNDLE_DIR = pathlib.Path(__file__).parent / "static"

class Widget(anywidget.AnyWidget):
    name = traitlets.Unicode().tag(sync=True)
    
    counter = traitlets.Int(0).tag(sync=True)
    message = traitlets.Unicode("").tag(sync=True)
    
    def __init__(self, *args, **kwargs):
        try:
            self._esm = DEV_ESM_URL if kwargs.get('dev', False) else (BUNDLE_DIR / "widget-main.js").read_text()
            self._css = DEV_CSS_URL if kwargs.get('dev', False) else (BUNDLE_DIR / "style.css").read_text()
        except FileNotFoundError:
            raise ValueError("No built widget source found, and dev is set to False. To resolve, run npx vite build from the client directory.")

        super().__init__(*args, **kwargs)
                
    @traitlets.observe("counter")
    def observe_counter(self, change):
        self.message = f"Python code says counter is {change.new}!"