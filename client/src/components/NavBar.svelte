<script lang="ts">
  import defaultLogo from '../../../assets/logo_dark.png';

  export let logoSrc: string = defaultLogo;
</script>

<nav class="w-full h-14 px-4 flex items-center justify-between bg-gray-900 text-white border-b border-gray-700">
  <!-- Left: Logo + Title -->
  <div class="flex items-center space-x-3">
    <img src={logoSrc} alt="TempoQL Logo" class="h-8 w-auto" />
    <span class="text-xl font-semibold tracking-wide"></span>
  </div>

  <!-- Right: Links -->
  <div class="flex items-center space-x-6 text-sm">
    <a
      href="https://github.com/cmudig/tempo-ql-demo"
      target="_blank"
      rel="noopener noreferrer"
      class="hover:text-blue-300"
    >
      GitHub Repo
    </a>

    <a
      href="https://arxiv.org/abs/2511.09337"
      target="_blank"
      rel="noopener noreferrer"
      class="hover:text-blue-300"
    >
      Research Paper
    </a>
  </div>
</nav>

<style>
  nav a {
    transition: color 0.15s ease;
  }
</style>
