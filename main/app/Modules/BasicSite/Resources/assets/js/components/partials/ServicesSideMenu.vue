<template>
  <aside id="tg-siderbar" class="tg-siderbar">
    <div class="tg-widget tg-widgetprojectdescription">
      <div class="tg-widgettitle">
        <h3>Services Menu</h3>
      </div>
      <div class="tg-widgetcontent">
        <ul>
          <li>
            <i class="fa fa-gear"></i>
            <router-link :to="{name: 'site.services.valve'}">Valve Maintenance</router-link>
          </li>
          <li>
            <i class="fa fa-gear"></i>
            <router-link :to="{name: 'site.services.ie'}">Instrumentation and Electricals</router-link>
          </li>
          <li>
            <i class="fa fa-gear"></i>
            <router-link :to="{name: 'site.services.insulation'}">Hot Surface Insulation</router-link>
          </li>
          <li>
            <i class="fa fa-gear"></i>
            <router-link :to="{name: 'site.services.pumps'}">Servicing of pumps</router-link>
          </li>
          <li>
            <i class="fa fa-gear"></i>
            <router-link :to="{name: 'site.services.sand'}">Sand Blasting</router-link>
          </li>
          <li>
            <i class="fa fa-gear"></i>
            <router-link :to="{name: 'site.services.vessel'}">Vessel Cleaning Services</router-link>
          </li>
          <li>
            <i class="fa fa-gear"></i>
            <router-link :to="{name: 'site.services.supplies'}">Procurement and Supply</router-link>
          </li>
          <li>
            <i class="fa fa-gear"></i>
            <router-link :to="{name: 'site.services.mhe'}">MHE</router-link>
          </li>
          <li>
            <i class="fa fa-gear"></i>
            <router-link :to="{name: 'site.services.manpower'}">Manpower Supply</router-link>
          </li>
        </ul>
      </div>
    </div>
  </aside>
</template>

<script>
  export default {};
</script>

<style lang="css" scoped>
  .tg-widgetcontent i {
    padding: 0 10px 0 0;
  }
</style>
