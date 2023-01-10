<script>
//   var myLogo

//   function sleep(ms) {
//       if (!ms) ms = Math.round(100+Math.random()*150)
//       return new Promise(resolve => setTimeout(resolve, ms));
//    }

//    async function timer() {
//      while (true) {
//        spin()
//        await sleep(10000)
//      }
//    }

   // function spin() {
   //   console.log('Spinning now!', myLogo)
   //   if (myLogo) {
   //      if (myLogo.classList.contains('logo')) myLogo.classList.remove("logo");
   //         else myLogo.className = 'logo';
   //   }
   // }

   // timer()
</script>



<a href="/" sveltekit:prefetch class=""><img src="/akfresh.png" class="logo h-full w-full object-scale-down" alt="Alaska Fresh logo" /></a>






<style>
   .logo {
      -webkit-animation: spin 20s alternate-reverse ease-in-out;
   }
   @-moz-keyframes spin {
    from { -moz-transform: rotate(0deg); }
    to { -moz-transform: rotate(360deg); }
   }
   @-webkit-keyframes spin {
      from { -webkit-transform: rotate(0deg); }
      to { -webkit-transform: rotate(360deg); }
   }
   @keyframes spin {
      from {transform:rotate(0deg);}
      to {transform:rotate(360deg);}
   }
</style>