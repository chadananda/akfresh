<script>
 import { fly } from 'svelte/transition';
 import { inview } from 'svelte-inview';
 import { quintOut } from "svelte/easing";

 let isInView;
 export let direction;
 let scrollX = direction==='left'?-500:1000;
</script>

<div
  class="wrapper"
  use:inview={{ unobserveOnEnter: true, rootMargin: '-20%' }}
  on:change={({ detail }) => {
    isInView = detail.inView;
  }}
 >
 {#if isInView}
   <div transition:fly="{{ x: `${scrollX}`, delay: 250, duration: 300, easing: quintOut }}">
     <slot />
   </div>
 {:else}
  <div class="invisible">
    <slot />
  </div>
 {/if}
</div>

<style>
 .wrapper {
   /* margin-top: 30px; */
 }
</style>