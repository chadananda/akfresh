<script>
  import ScreenWidth from "$lib/components/scrnwidth.svelte"

  import { toast } from '@zerodevx/svelte-toast'
  function comingsoon() {
     toast.push('Coming soon!')
  }
</script>

<ScreenWidth />

<div class="navbar bg-base-200 border-b-2 border-gray-200">
 <div class="navbar-start">

   <div class="dropdown">
     <label tabindex="0" class="btn btn-ghost md:hidden" for="hamburger">
       <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16"
       name="hamburger" /></svg>
     </label>
     <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
       <li><a href="/#revenue"> Revenue Share</a></li>
       <li><a href="/#bonus">Fat Signing Bonus</a></li>
       <li></li>
       <li><a href="/#start" on:click|once={comingsoon}>About Us</a></li>
     </ul>
   </div>
   <a href="/" class="btn btn-ghost normal-case text-xl">Alaska Fresh
       <span class="hidden sm:inline md:hidden lg:inline">&nbsp;Vending</span>
       <span class="hidden lg:inline">, LLC.</span>
    </a>
 </div>
 <div class="navbar-center hidden md:flex">
   <ul class="menu menu-horizontal p-0">
     <li><a href="#revenue">Revenue Share</a></li>
     <li><a href="#bonus">Fat Signing Bonus</a></li>
     <li class="mt-3 text-gray-400"> ~  </li>
     <li><a href="/#start" on:click|once={comingsoon}>About Us</a></li>
   </ul>
 </div>
 <div class="navbar-end">
   <a class="btn" href="/#start">Get started</a>
 </div>
</div>



