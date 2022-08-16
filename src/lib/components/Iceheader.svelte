
<div class="text-7xl sm:text-8xl">
  <h1 class="mb-0">&nbsp;<span class="freeze" data-heading={heading}>{heading}</span>&nbsp;</h1>

  <h1 class="freeze mb-5" data-heading="Fresh Ice">Fresh Ice</h1>
</div>



<script>
 let headers = ['Alaska', 'Glacial', "Colder", "Icier", "Purer", "Tastier", 'Alaska']
 let hn = -1
 let heading = ""

 async function nextHeader() {
   let nh = hn+1
   heading = ""
   if (nh>headers.length-1) nh=0; hn=nh;
   await type(headers[hn])
   if (nh===headers.length-1) await sleep(5000)
     else await sleep(2000)
   await untype()
   setTimeout(nextHeader, 1000)
 }

 async function type(newHeading) {
   while (heading.length<newHeading.length) {
     // console.log('type:', newHeading, heading)
     heading = newHeading.substring(0, heading.length+1)
     await sleep(300)
   }
 }

 async function untype() {
   while (heading.length>0) {
     heading = heading.substring(0, heading.length-1)
     await sleep()
   }
 }

 function sleep(ms) {
   if (!ms) ms = Math.round(100+Math.random()*150)
   return new Promise(resolve => setTimeout(resolve, ms));
 }

 nextHeader()

</script>

<style>
 @font-face {
   font-family: Frozen;
   src: url("/frz_font.woff")
 }

 .freeze {
   background: url(/frz_bg.jpg);
   background-clip: text;
   -webkit-background-clip: text;
   color: transparent;
   font-family: 'Frozen';
   position: relative;
   /* border: 2px  gray solid; */
   /* text-shadow: 4px 4px rgb(50, 50, 161); */
   text-shadow: 4px 4px 4px rgba(0, 9, 73, 0.26);
   }
 .freeze:before {
   content: attr(data-heading);
   position: absolute;
   top:0; left:0;
   width: 100%;
   background: linear-gradient(
     45deg,
     rgba(255,255,255,0) 45%,
     rgba(255,255,255,0.8) 50%,
     rgba(255,255,255,0) 55%,
     rgba(255,255,255,0) 100%
   );
   background-clip: text;
   -webkit-background-clip: text;
   color: transparent;
   background-size: 200%;
   animation: shine 10s infinite;
 }
 @keyframes shine{
   0%{background-position: -100%;}
   100%{background-position: 100%;}
 }


</style>


