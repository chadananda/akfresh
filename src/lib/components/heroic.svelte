<script>
  import Animated from '$lib/components/animated.svelte'
  export let url;
  export let dir;
  export let id;
  $: direction = (dir==='left') ? 'sm:flex-row' : 'sm:flex-row-reverse';
  $: textmargin = (dir==='left') ? 'sm:-ml-5' : 'sm:-mr-5';
  $: shade = (dir==='left') ? 'bg-base-300' : 'bg-base-400'

  let imgStyle='';
   $: {
    imgStyle = `background-image: url(${url}); background-size:cover; background-repeat: no-repeat; background-position: center; `;
   }

 </script>

<Animated direction={dir}>
  <div id={id} class="pt-3">&nbsp;</div>
  <div class="pt-5 max-w-5xl m-auto">
  <div class="hero">
    <div class="hero-content flex-col {direction}
      mx-0 p-0 w-full
      sm:p-5 sm:items-center">
      {#if url}
        <div class="image w-full h-[300px] mt-3
          sm:w-1/3 sm:h-[500px] sm:rounded-lg sm:z-10"
          style={imgStyle}></div>
      {/if}

      <div class="text-center sm:text-left sm:w-2/3 {shade} {textmargin} p-5 pt-10 -mt-5
      sm:rounded-lg sm:shadow-lg sm:z-0 sm:m-0  ">
        <h1 class="card text-4xl font-bold"><slot name="title"/></h1>
        <p class="py-6"><slot name="desc"/></p>
      </div>

    </div>
  </div>
  </div>
</Animated>

<style>
 /* .image {
   transition: all .5s;
   background-size: 100%;
    webkit-transition: background-size 1500ms linear;
    -moz-transition: background-size 1500 linear;
    -o-transition: background-size 1500 linear;
    -ms-transition: background-size 1500ms linear;
    transition: background-size 1500ms linear;
 } */
</style>


