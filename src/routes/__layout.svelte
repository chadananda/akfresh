<script>
  // import "../theme.css";
  import "../app.css";
  import Navbar from "$lib/components/navbar.svelte"
  import Footer from "$lib/components/footer.svelte"
  import { SvelteToast } from '@zerodevx/svelte-toast'
</script>

<SvelteToast />


<!-- Fixed header and footer  -->
<!-- <div class="flex flex-col h-screen"> -->
  <div class="sticky top-0 z-50"><Navbar/></div>
<!-- </div> -->

  <main class="flex-1 overflow-y-auto relative">
     <slot />
  </main>




<Footer />






