

<script>
  import website from '$lib/config/website'
  import {Icon} from '@steeze-ui/svelte-icon'
    // https://github.com/steeze-ui/icons
  import {LightningBolt} from '@steeze-ui/heroicons'
    // https://heroicons.dev/

    //import {LightningBolt} from '@steeze-ui/iconic-free'
      // https://iconic.app/c/availability/free/
   // import {LightningBolt} from '@steeze-ui/feather-icons'
      // https://feathericons.com/
  import {LogoFacebook,LogoGithub,LogoPinterest,LogoLinkedin,LogoTwitter,LogoYelp,LogoYoutube } from '@steeze-ui/carbon-icons'

      // https://carbondesignsystem.com/guidelines/icons/library/
</script>


<footer class="footer p-10 bg-base-200 text-base-content">
 <div>
   <span class="footer-title">Alaska Fresh Vending</span>
   <a class="link link-hover" href="#quality">Unique Quality Ice</a>
   <a class="link link-hover" href="#revenue">Improved Site Revenue</a>
   <a class="link link-hover" href="#foot-traffic">Drive Foot Traffic</a>
   <a class="link link-hover" href="#bonus">Signing Bonus</a>
   <a class="link link-hover" href="#start">Get Started Now!</a>
 </div>
 <div>
   <span class="footer-title">Company</span>
   <a class="link link-hover" href="/about" sveltekit:prefetch>About us</a>
   <a class="link link-hover" href="/about#contact" sveltekit:prefetch>Contact</a>
   <a class="link link-hover" href="/about#jobs" sveltekit:prefetch>Jobs</a>
   <a class="link link-hover" href="/faq" sveltekit:prefetch>FAQs</a>
   <a class="link link-hover" href="/locations" sveltekit:prefetch>Vending Locations</a>
 </div>
 <div>
   <span class="footer-title">Legal</span>
   <a class="link link-hover" href="/about#terms" sveltekit:prefetch>Terms of use</a>
   <a class="link link-hover" href="/about#privacy" sveltekit:prefetch>Privacy policy</a>
   <a class="link link-hover" href="/about#cookies" sveltekit:prefetch>Cookie policy</a>
 </div>
</footer>

<footer class="footer px-10 py-4 border-t bg-base-200 text-base-content border-base-300">
 <div class="items-center grid-flow-col" itemscope itemtype="http://schema.org/Person">

   <a href="/" sveltekit:prefetch><img src="akfresh.svg" class="w-24 h-20 -ml-4" alt="Alaska Fresh logo" /></a>

   <!-- business card -->
   <div>
    <div>
      <a href="/" sveltekit:prefetch class="text-lg">{website.companyFull}</a>
      <br>
      <a href="/" sveltekit:prefetch class="italic pl-2">{website.companyDesc}</a>
    </div>
     <div class="mt-2">
      <span itemprop="telephone">{website.contactPhone}</span>
        <span class="text-sm text-gray-400">~</span>
      <a href={`mailto:${website.contactEmail}`} itemprop="email" class="text-navy underline">{website.contactEmail}</a>
     </div>
  </div>

 </div>

  <!-- Social icons  -->
 <div class="md:place-self-center md:justify-self-end">
   <div class="grid grid-flow-col gap-4 ">

     <div class="flex flex-wrap justify-center gap-2">
      <a href="/#"><Icon src={LogoGithub} class='w-10 opacity-50 hover:opacity-100'/></a>
      <!-- <a href="/#"><Icon src={LogoFacebook} class='w-10 opacity-50 hover:opacity-100'/></a> -->
      <!-- <a href="/#"><Icon src={LogoPinterest} class='w-10 opacity-50 hover:opacity-100'/></a> -->
      <a href="/#"><Icon src={LogoLinkedin} class='w-10 opacity-50 hover:opacity-100'/></a>
      <!-- <a href="/#"><Icon src={LogoTwitter} class='w-10 opacity-50 hover:opacity-100'/></a> -->
      <a href="/#"><Icon src={LogoYelp} class='w-10 opacity-50 hover:opacity-100'/></a>
      <a href="/#"><Icon src={LogoYoutube} class='w-10 opacity-50 hover:opacity-100'/></a>
    </div>

   </div>
 </div>
</footer>
