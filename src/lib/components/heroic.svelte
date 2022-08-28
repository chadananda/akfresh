<script>
  export let url;
  export let dir;
  export let id;
  $: direction = (dir==='left') ? 'sm:flex-row' : 'sm:flex-row-reverse';
  $: shade = (dir==='left') ? 'bg-base-200' : 'bg-base-300'

  let imgStyle='';
   $: {
    imgStyle = `background-image: url(${url}); background-size: cover; background-repeat: no-repeat; background-position: center; `;
   }
 </script>

<div id={id} class="pt-3">&nbsp;</div>
<div class="pb-5 max-w-5xl m-auto">
  <div class="hero my-5 {shade} shadow  lg:rounded-xl">
  <div class="hero-content flex-col {direction}
    mx-0 pt-0 gap-5 p-0 sm:p-5 w-full">
    {#if url}
      <div class="w-full h-[300px]
        sm:w-1/3 sm:h-[400px] sm:rounded-lg sm:mt-5"
        style={imgStyle}></div>
    {/if}
    <div class="text-center sm:text-left sm:w-2/3">
      <h1 class="card text-4xl font-bold"><slot name="title"/></h1>
      <p class="py-6"><slot name="desc"/></p>
    </div>
  </div>
  </div>
</div>


