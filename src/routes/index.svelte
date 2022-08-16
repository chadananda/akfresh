
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
  import  Iceheader from '$lib/components/Iceheader.svelte'
  import StartForm from '$lib/components/form_start.svelte'
</script>


<div class="hero my-5 mt-0 max-h-screen" id="quality" style="background-image: url(/mckinley_horz.png);">
 <div class="hero-overlay bg-opacity-60"></div>
 <div class="hero-content text-center text-neutral-content">
   <div class="max-w-md py-10">

     <Iceheader />

     <p class="mb-5">Help us bring the cold fresh taste of Alaska’s glacier Ice to bulk-ice vending machines to Arizona. Have a high foot-traffic gas station or RV park in Arizona? Contact us to find out if an our high-quality Ice and Water vending machines might be a good fit for your location.</p>

     <a class="btn btn-primary" href="#start">Get Started</a>

   </div>
 </div>
</div>


<div class="hero my-10 bg-base-200 shadow">
 <div class="hero-content flex-col sm:flex-row">
   <img src="/Mount_McKinley_vert.jpg" class="max-w-[200px] rounded-lg shadow-2xl" alt="ice ice baby" />
   <div>
     <h1 class="text-4xl font-bold">Unparalled Quality</h1>
     <p class="py-6">Our cutting-edge filtering technology produces ice which is purer, denser, longer lasting and simply tastes better. Once people taste our ice, they come back for more.  </p>
   </div>
 </div>
</div>

<div class="hero my-10 bg-base-300 shadow" id="revenue">
 <div class="hero-content flex-col sm:flex-row-reverse">
   <img src="/mckinly2_vert.png" class="max-w-[200px] rounded-lg shadow-2xl" alt="ice ice baby" />
   <div>
     <h1 class="text-4xl font-bold">More Revenue for You</h1>
     <p class="py-6"> Centrally-manufactured ice simply cannot compete. While they might eventually upgrade equipment, yet they just cannot get around the high-cost of fuel and manpower involved in shipping, handling and storage of legacy ice. We like to push that savings back to you as the business owner. </p>
   </div>
 </div>
</div>

<div class="hero my-10 bg-base-200 shadow" id="foot-traffic">
 <div class="hero-content flex-col sm:flex-row">
   <img src="/mckinly3_vert.png" class="max-w-[200px] rounded-lg shadow-2xl" alt="ice ice baby" />
   <div>
     <h1 class="text-4xl font-bold">More Foot-traffic</h1>
     <p class="py-6"> Our machines sit outside and are the size of a standard vending machine. Besides the bagged-ice option, our machines allow customers to fill coolers directly. This "bulk" option is commonly needed by a segment of the economy working outdoors in the heat. Every time you see a truck with a cooler, that cooler must be filled with ice daily. Our ice is more dense, so it lasts longer and tastes better. This creates loyalty among those who need ice every day. Which means such customers will be returning to your business more frequently. This</p>
   </div>
 </div>
</div>

<div class="hero my-10 bg-base-300 shadow" id="bonus">
 <div class="hero-content flex-col sm:flex-row-reverse">
   <img src="/mckinly4_vert.png" class="max-w-[200px] rounded-lg shadow-2xl" alt="ice ice baby" />
   <div>
     <h1 class="text-4xl font-bold">Generous Signing Bonus</h1>
     <p class="py-6">Our machines are expensive &mdash; 20x the cost of a typical vending machine, which means quality placement is critical. Since good placement is so important to us, we go ahead and put a premium on solid location contracts in the form of a significant signing bonus for you, the business owner. That's right, in addition to healthy monthly rent, we give you a fat cash signing bonus &mdash; putting money in your pocket from day one. </p>
   </div>
 </div>
</div>

<div class="hero my-10 bg-base-200 shadow">
 <div class="hero-content flex-col sm:flex-row">
   <img src="/mckinley5_vert.png" class="max-w-[200px] rounded-lg shadow-2xl" alt="ice ice baby" />
   <div>
     <h1 class="text-4xl font-bold">Service Area</h1>
     <p class="py-6"> Our machines are expensive, because they are highly engineered to require very little maintenance. This allows us to provide service across the entire state of Arizona. If you have a gas station, an RV park, a truck stop and would like an excellent additional income stream, contact us for a free site assessment.  </p>
   </div>
 </div>
</div>


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

