
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
  import Heroic from '$lib/components/heroic.svelte'
</script>


<div class="hero mb-5 mt-0 max-h-screen" id="quality" style="background-image: url(/mckinley_horz.png);">
 <div class="hero-overlay bg-opacity-80"></div>
 <div class="hero-content text-center text-neutral-content">
   <div class="max-w-md py-6">

     <Iceheader />

     <p class="mb-2 text-lg bold">Help us bring the fresh taste of Alaska’s cold, dense glacial Ice to bulk-ice vending machines across Arizona! Do you own a gas station, mini-mart or RV park?</p>

    <p class="mb-5 text-lg bold"> Our Ice machines earn you revenue from day one &mdash; with a fat signing bonus, monthly location payments as well as generous revenue-sharing &mdash; we are determined to help you succeed.</p>

     <a class="btn btn-primary" href="#start">Get Started</a>

   </div>
 </div>
</div>


<Heroic url="/Mount_McKinley_vert.jpg" dir="left" id="quality">
  <span slot="title">Better Ice means Loyalty</span>
  <span slot="desc"> Ever hold glacial ice? It’s incredibly pure and dense, so it take a long long time to melt. Our cutting-edge purification technology results in similarly dense, very nice-tasting ice which lasts much longer. Bulk-ice customers will notice that our ice lasts all day and come back, each day, for more. </span>
</Heroic>



<Heroic url="/mckinly3_vert.png" dir="right" id="foot-traffic">
  <span slot="title">More Foot-traffic for You</span>
  <span slot="desc">Our machines sit outside and are the size of a standard vending machine. Besides the bagged-ice option, our machines allow customers to fill coolers directly. This "bulk" option is commonly needed by a segment of the economy working outdoors in the heat. Every time you see a truck with a cooler, that cooler must be filled with ice daily. Our ice is more dense, so it lasts longer and tastes better. This creates loyalty among those who need ice every day. Which means such customers will be returning to your business more frequently.</span>
</Heroic>


<Heroic url="/mckinly2_vert.png" dir="left" id="revenue">
  <span slot="title">Revenue Share for You</span>
  <span slot="desc">Trucked ice simply cannot compete. While they might eventually upgrade their filtering equipment to compete, yet they just cannot get around the high-cost of fuel and manpower involved in shipping, handling and storage of legacy bagged ice. We push that savings back to you as the business owner.</span>
</Heroic>



<Heroic url="/mckinly4_vert.png" dir="right" id="bonus">
  <span slot="title">Fat Signing Bonus for You</span>
  <span slot="desc">Our machines are expensive &mdash; 20x the cost of a typical vending machine, which means quality placement is critical. Since good placement is so important to us, we go ahead and put a premium on solid location contracts in the form of a significant signing bonus for you, the business owner. That's right, in addition to healthy monthly rent, we give you a fat cash signing bonus &mdash; putting money in your pocket from day one.</span>
</Heroic>

<Heroic url="/mckinley5_vert.png" dir="left">
  <span slot="title">Our Service Area</span>
  <span slot="desc"> Our machines are expensive, because they are highly engineered to require very little maintenance. This allows us to provide service across the entire state of Arizona. If you have a gas station, an RV park, a truck stop and would like an excellent additional income stream, contact us for a free site assessment.</span>
</Heroic>



<div class="hero py-14 bg-base-300 shadow" id="start">
 <div class="hero-content flex-col md:flex-row-reverse">
   <div class="text-center md:text-left">
     <h1 class="text-5xl font-bold">Get Started Today!</h1>
     <p class="py-6">It only takes a few days for a thorough site assessemnt to estimate viability of your business location. Contact us today to get started. If your site fits our criteria, we will arrange a meeting, agree to the terms of our placement contract, and issue your cash signing bonus. </p>
   </div>
   <div class="card flex-shrink-0 w-full max-w-[300px] shadow-2xl bg-base-100">

     <StartForm />

   </div>
 </div>
</div>

