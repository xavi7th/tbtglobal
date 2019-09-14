<template>
  <section class="tg-main-section tg-haslayout">
    <div class="container">
      <div class="row">
        <div
          class="col-lg-offset-2 col-lg-8 col-md-offset-1 col-md-10 col-sm-offset-0 col-sm-12 col-xs-12"
        >
          <div class="tg-sectionhead">
            <div class="tg-sectiontitle">
              <h2>we are</h2>
              <h3>trusted by many</h3>
            </div>
            <div class="tg-description">
              <p>
                We have built a reputaion in the industry for minimal overhead costs, timely delivery,
                safety conscious workforce and excellent relationship with business partners. Furthering
                client business objetives sits at the forefront of all enganements with our esteemed clients
              </p>
            </div>
          </div>
        </div>
        <div id="tg-brandsslider" class="tg-brandsslider tg-brands">
          <figure class="item tg-brand" v-for="client in clients">
            <a href="#">
              <img :src="client.img" alt="image description" />
            </a>
          </figure>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    data: () => ({
      clients: {}
    }),
    beforeCreate() {
      axios.get("/api/clients").then(rsp => {
        this.clients = rsp.data.clients.rows;
        let cc = setInterval(() => {
          if (typeof MAINJSLOADED == "boolean") {
            clearInterval(cc);
            vueEventBus.$emit("clients-loaded");
          }
        }, 1000);

        // let clientsLoaded = () => {
        //   console.log(typeof MAINJSLOADED);
        //   if (typeof MAINJSLOADED !== "undefined") {
        //     vueEventBus.$emit("clients-loaded");
        //   } else {
        //     console.log("defer clients load");
        //     setTimeout(() => {
        //       clientsLoaded();
        //     }, 1000);
        //   }
        // };
        // clientsLoaded();
      });
    }
  };
</script>

<style lang="scss" scoped>
</style>
