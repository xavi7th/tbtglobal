<template>
  <div>
    <page-header title="NOT FOUND"></page-header>
    <main id="tg-main" class="tg-main tg-haslayout">
      <div class="tg-pagecontent">
        <div class="container">
          <div class="row">
            <div class="tg-404">
              <div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1 col-sm-12 col-xs-12">
                <div class="tg-404content">
                  <div class="tg-borderstyle">
                    <h2>
                      <img class="tg-svginject" src="/img/404.svg" alt="image description" />
                    </h2>
                    <h3>Oops, This Page Not Be Found!</h3>
                    <p>We are really sorry but try as we might we just couldn't find the page you requested :(</p>
                  </div>
                  <span>
                    Go back to our
                    <router-link :to="{name: 'site.root'}">Home page</router-link>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
  import pageLoad from "@assets/js/config/pageload.mixin";
  import PageHeader from "@components/partials/PageHeader";
  export default {
    name: "ContactsPage",
    mixins: [pageLoad],
    components: { PageHeader }
  };
</script>

<style lang="scss" scoped>
</style>
