<template>
  <section class="tg-main-section tg-haslayout">
    <div class="container">
      <div class="row">
        <div
          class="col-lg-offset-2 col-lg-8 col-md-offset-1 col-md-10 col-sm-offset-0 col-sm-12 col-xs-12"
        >
          <div class="tg-sectionhead">
            <div class="tg-sectiontitle">
              <!-- <h2>some of our</h2> -->
              <h3>Completed Projects</h3>
            </div>
            <div class="tg-description">
              <p>
                <!-- Consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat.-->
              </p>
            </div>
          </div>
        </div>
        <div class="tg-themetabs">
          <!-- <nav class="tg-themetabnav">
            <ul role="tablist">
              <li role="presentation" class="active">
                <a href="#all" aria-controls="all" role="tab" data-toggle="tab">All</a>
              </li>
              <li role="presentation">
                <a
                  href="#investment"
                  aria-controls="investment"
                  role="tab"
                  data-toggle="tab"
                >Investment</a>
              </li>
              <li role="presentation">
                <a href="#taxes" aria-controls="taxes" role="tab" data-toggle="tab">Taxes</a>
              </li>
              <li role="presentation">
                <a href="#planning" aria-controls="planning" role="tab" data-toggle="tab">Planning</a>
              </li>
              <li role="presentation">
                <a
                  href="#financial"
                  aria-controls="financial"
                  role="tab"
                  data-toggle="tab"
                >Financial</a>
              </li>
            </ul>
          </nav>-->
          <div class="tab-content tg-themetabcontent">
            <div role="tabpanel" class="tab-pane in active" id="all">
              <div id="tg-projectsliderall" class="tg-projectsliderall tg-projects">
                <div class="item tg-project" v-for="project in projects" :key="project.id">
                  <figure>
                    <img :src="project.img" alt="image description" />
                    <figcaption>
                      <h4>
                        <a>{{ project.name }}</a>
                      </h4>
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    data: () => ({
      projects: {},
    }),
    beforeCreate() {
      axios.get("/api/projects").then((rsp) => {
        this.projects = rsp.data.projects.rows;
        setTimeout(() => {
          vueEventBus.$emit("projects-loaded");
        }, 0);
      });
    },
  };
</script>

<style lang="scss" scoped>
  .tg-main-section {
    background-color: #055b0c;
    color: #fff;
    background-image: url(/img/wave.png);
    background-repeat: no-repeat;
    background-size: contain;
    background-position: top;

    h3 {
      color: #fff;
    }
  }
  .tg-project figure img {
    height: 165px;
    object-fit: cover;
    object-position: top;
  }
</style>
