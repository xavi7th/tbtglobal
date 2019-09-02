<template>
  <div>
    <page-header title="Our Projects"></page-header>
    <main id="tg-main" class="tg-main tg-haslayout">
      <div class="tg-pagecontent">
        <div class="container">
          <div class="row">
            <div
              class="col-lg-offset-2 col-lg-8 col-md-offset-1 col-md-10 col-sm-offset-0 col-sm-12 col-xs-12"
            >
              <div class="tg-sectionhead">
                <div class="tg-sectiontitle">
                  <h2>Some of our</h2>
                  <h3>latest projects</h3>
                </div>
                <div class="tg-description">
                  <p>Consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
              </div>
            </div>
            <div class="tg-newsposts">
              <div class="col-md-4 col-sm-6 col-xs-6" v-for="project in projects" :key="project.id">
                <div class="tg-news">
                  <figure>
                    <img :src="project.img" alt="image description" />
                  </figure>
                  <div class="tg-newscontent tg-borderstyle">
                    <ul class="tg-newsmetadata">
                      <li>
                        <a href="#">{{ project.location }}</a>
                      </li>
                    </ul>
                    <div class="tg-newstitle">
                      <h2>
                        <a href="#">{{ project.name }}</a>
                      </h2>
                    </div>
                    <div class="tg-description">
                      <p>{{ project.desc }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- <div class="col-sm-12 col-xs-12">
              <nav class="tg-pagination">
                <ul>
                  <li class="tg-prevpage">
                    <a href="#">
                      <i class="fa fa-angle-left"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">1</a>
                  </li>
                  <li>
                    <a href="#">2</a>
                  </li>
                  <li>
                    <a href="#">3</a>
                  </li>
                  <li>
                    <a href="#">4</a>
                  </li>
                  <li>
                    <a href="#">5</a>
                  </li>
                  <li>...</li>
                  <li>
                    <a href="#">10</a>
                  </li>
                  <li class="tg-nextpage">
                    <a href="#">
                      <i class="fa fa-angle-right"></i>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>-->
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
    name: "ProjectsPage",
    mixins: [pageLoad],
    components: { PageHeader },
    data: () => ({
      projects: {}
    }),
    created() {
      axios.get("/api/projects").then(rsp => {
        this.projects = rsp.data.projects.rows;
      });
    }
  };
</script>

<style lang="scss" scoped>
  .tg-newsimg img,
  .tg-news figure img {
    height: 270px;
  }
</style>
