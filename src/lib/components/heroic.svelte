<script>
  export let url;
  export let dir;
  export let id;
  $: direction = (dir==='left') ? 'sm:flex-row' : 'sm:flex-row-reverse';
  $: shade = (dir==='left') ? 'bg-base-200' : 'bg-base-300'
 </script>


<div id={id} class="py-5">
  <div class="hero my-5 {shade} shadow">
  <div class="hero-content flex-col {direction}">
    <img src={url} class="max-w-[200px] rounded-lg shadow-2xl" alt="ice ice baby" />
    <div class="text-center sm:text-left">
      <h1 class="text-4xl font-bold"><slot name="title"/></h1>
      <p class="py-6"><slot name="desc"/></p>
    </div>
  </div>
  </div>
</div>