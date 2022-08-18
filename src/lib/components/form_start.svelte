<script>
  import website from '$lib/config/website';

  let name='', email ='', phone='', address='', mailto='';
  $: {
    let datestr = (new Date()).toLocaleDateString('en-us', { weekday:"short", year:"numeric", month:"short", day:"numeric"})
    let subject = `Ice Vending Location Assessment Request...`
    const lb = '%0D%0A'
    let body = `Dear sirs, ${lb+lb} Please analyze my address to determine suitability of placing an Alaska Fresh Ice Vending Machine.` + lb+lb +
    `Thank you,`+lb+lb+
    name+lb+lb+lb+
    `===================================` +lb +
    ` Name:    ${name}` +lb+
    ` Address: ${address}` +lb+
    ` Email:     ${email}` +lb+
    ` Phone:   ${phone}` +lb+
    ` Date:      ${datestr}`+lb+
    `===================================` +lb+lb ;

    mailto = `mailto:${website.contactEmail}?subject=${subject}&body=${body}`;
  }
</script>


<div class="card-body">
  <div class="form-control">
    <!-- <label class="label" for="email">
      <span class="label-text" name="email">Name</span>
    </label> -->
    <input type="text" placeholder="Name" class="input input-bordered" bind:value={name} />
  </div>
 <div class="form-control">
   <!-- <label class="label" for="email">
     <span class="label-text" name="email">Email</span>
   </label> -->
   <input type="email" placeholder="Email" class="input input-bordered" bind:value={email} />
 </div>
 <div class="form-control">
   <!-- <label class="label" for="phone">
     <span class="label-text" name="phone">Phone</span>
   </label> -->
   <input type="text" placeholder="Phone" class="input input-bordered" bind:value={phone} />
 </div>
 <div class="form-control">
  <!-- <label class="label" for="address">
    <span class="label-text" name="address">Address</span>
  </label> -->
  <input type="text" placeholder="Full Business Address" class="input input-bordered" bind:value={address} />
</div>

 <div class="form-control mt-6">
   <a href={mailto} class="btn btn-primary" target="_blank">Start</a>
 </div>
</div>