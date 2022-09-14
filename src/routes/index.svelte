
 <!-- <script>
  import { VERTICAL_LINE_ENTITY } from '$lib/config/entities.cjs';
  import website from '$lib/config/website';

  const { siteLanguage, siteTitle } = website;

  export let metadescription;
  export let title;

  const pageTitle = `A;${siteTitle} ${VERTICAL_LINE_ENTITY} ${title}`A;;
</script>

<svelte:head>
  <title>{pageTitle}</title>
  <meta name="description" content={metadescription} />
  <meta
    name="robots"
    content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
  />
  <html lang={siteLanguage} />
</svelte> -->

<script>
  import Iceheader from '$lib/components/Iceheader.svelte'
  import StartForm from '$lib/components/form_start.svelte'
  import Heroic    from '$lib/components/heroic.svelte'

  let scroll;
</script>

<svelte:window bind:scrollY={scroll} />
<!-- style:background-position-y={`${-150-(scroll*.8)}px`} -->
<div class="hero mb-5 mt-0 max-h-screen bgscroll" id="quality" style="background-image: url(/mckinley_horz.png);"

>
 <div class="hero-overlay bg-opacity-80" style:opacity={1-(scroll/200)}></div>
 <div class="hero-content text-center text-neutral-content">
   <div class="max-w-md py-6">

     <Iceheader />

     <p class="mb-2 text-lg bold shadow-text-white">Do you own a gas station, mini-mart or RV park? Acquire a new income stream while helping us bring the fresh taste of Alaska’s cold, dense glacial Ice to your customers! </p>

    <p class="mb-5 text-lg bold shadow-text-white"> With a fat signing bonus, our machines start paying you from day one!</p>

     <a class="btn btn-primary" href="#start">Get Started</a>

   </div>
 </div>
</div>


<Heroic url="/mckinly3_vert.png" dir="left" id="quality">
  <span slot="title">Better Ice means Loyalty</span>
  <span slot="desc"> Ever hold a piece of clear, heavy glacial ice? It’s incredibly pure and dense, so it lasts an amazingly long time. Our cutting-edge purification technology results in similarly dense, fresh-tasting ice which melts more slowly than ordinary ice. Bulk-ice customers notice that our ice lasts longer, and come back for more. </span>
</Heroic>


<!-- Bagged ice takes a lot of storage space. So it is often placed past the register, making it the single most "forgotten" purchse. How often have you walked out of a store, past the ice refrigerator and, only then, remembered that you forgot the ice? Our ice machines are compact, and sit outside facing the customer as they fill up with gas or load their groceries. There is no need to go back into the store and wait in line to grab ice.  -->


<Heroic url="/Mount_McKinley_vert.jpg" dir="right" id="foot-traffic">
  <span slot="title">Returning traffic for You</span>
  <span slot="desc">
    Arizona is hot. We have an entire sector of our economy which depends on ice for outdoor work. You’ve seen their trucks with a cooler strapped to the back. These customers need bulk ice every day. And once they try our ice, they will love how long it lasts in their cooler. Then they will return every day for more &mdash; driving traffic to your store.
  </span>
</Heroic>


<Heroic url="/mckinly2_vert.png" dir="left" id="revenue">
  <span slot="title">Increased Revenue for You</span>
  <span slot="desc">Trucked ice simply cannot compete in quality or cost. While they might someday upgrade their filtering equipment, yet they just cannot get around the high-overhead of fuel and labor involved in handling, trucking and storage of legacy bagged ice. Our machines manufacture the ice onsite with no human contamination or cost. This allows us to sell better ice at a lower price with a higher profit margin -- allowing us to pay you more for a quality vending location.  </span>
</Heroic>



<Heroic url="/mckinly4_vert.png" dir="right" id="bonus">
  <span slot="title">Fat Signing Bonus for You</span>
  <span slot="desc">Our machines are expensive &mdash; 20x the cost of a typical vending machine, which means quality placement is critical. So we put a premium on solid location contracts in the form of a significant signing bonus for you. That's right, in addition to healthy monthly rent, we pay you a fat cash signing bonus &mdash; putting money in your pocket from day one.</span>
</Heroic>

<Heroic url="/mckinley5_vert.png" dir="left" id="service">
  <span slot="title">Broad Service across Arizona</span>
  <span slot="desc"> Our machines are expensive because they’re engineered to require very little maintenance. Each machine has smart remote monitoring and even live customer chat support. This allows us to provide service across the entire state of Arizona. <br>If you own a gas station, an RV park, or a truck stop and would like to add an excellent additional income stream, contact us for a free site assessment.</span>
</Heroic>



<div class="hero py-14 bg-base-300 shadow  mt-20" id="start">
 <div class="hero-content flex-col md:flex-row-reverse">
   <div class="text-center md:text-left">
     <h1 class="text-5xl font-bold">Get Started Today!</h1>
     <p class="pt-6">We’ll conduct a thorough site assessemnt to estimate viability of your business location. Contact us today to get started. </p> <p class="pt-3 pb-6"> If your site fits our criteria, we’ll arrange a meeting, come to an agreement, and issue your cash signing bonus. </p>
   </div>
   <div class="card flex-shrink-0 w-full max-w-[300px] shadow-2xl bg-base-100">

     <StartForm />

   </div>
 </div>
</div>

<style>
  .shadow-text-white {
    text-shadow: 1px 1px 3px #FcFcFc;
  }
</style>

