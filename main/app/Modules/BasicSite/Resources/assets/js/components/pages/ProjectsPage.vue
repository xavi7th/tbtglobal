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
                  <!-- <h2>Some of our</h2> -->
                  <h3>Projects</h3>
                </div>
                <div class="tg-description">
                  <p>At TBT Global we place a high premium on the needs of our clients and this has been a driving force in ensuring that service delivery is of the highest standards.</p>
                </div>
              </div>
            </div>
            <div class="tg-newsposts">
              <template v-for="(project, idx) in projects">
                <div class="col-md-4 col-sm-6 col-xs-6" :key="idx">
                  <div class="tg-news">
                    <figure>
                      <img :src="project.img" alt="image description" />
                    </figure>
                    <div class="tg-newscontent tg-borderstyle">
                      <ul class="tg-newsmetadata">
                        <li>
                          <a>{{ project.location }}</a>
                        </li>
                      </ul>
                      <div class="tg-newstitle">
                        <h2>
                          <a>{{ project.name }}</a>
                        </h2>
                      </div>
                      <div class="tg-description">
                        <p>{{ project.desc }}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="clearfix"
                  v-if="(idx + 1) %3 == 0 && idx != 0"
                  :key="` ${project.name}-${idx}`"
                ></div>
              </template>
            </div>
            <!-- <div class="col-sm-12 col-xs-12">
              <nav class="tg-pagination">
                <ul>
                  <li class="tg-prevpage">
                    <a >
                      <i class="fa fa-angle-left"></i>
                    </a>
                  </li>
                  <li>
                    <a >1</a>
                  </li>
                  <li>
                    <a >2</a>
                  </li>
                  <li>
                    <a >3</a>
                  </li>
                  <li>
                    <a >4</a>
                  </li>
                  <li>
                    <a >5</a>
                  </li>
                  <li>...</li>
                  <li>
                    <a >10</a>
                  </li>
                  <li class="tg-nextpage">
                    <a >
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
      projects: {},
    }),
    created() {
      axios.get("/api/projects").then((rsp) => {
        this.projects = rsp.data.projects.rows;
      });
    },
  };
</script>

<style lang="scss" scoped>
  .tg-newsimg img,
  .tg-news figure img {
    height: 270px;
  }
</style>
