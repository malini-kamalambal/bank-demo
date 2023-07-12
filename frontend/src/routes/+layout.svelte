<script>
  import '../app.css';
  import Header from '../components/Header.svelte';
</script>

<div class="container mx-auto bg-white p-4 mt-4 rounded-xl">
  <div class="container mx-auto mt-2 px-4">
    <Header />
  </div>

  <div class="container mx-auto mt-2 px-4">
    <slot />
  </div>
</div>

<style lang="postcss">
  :global(html) {
    background-color: theme(colors.gray.100);
  }
</style>
