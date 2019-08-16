<template>
  <v-container fluid grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex xs12>
        <v-data-table :headers="headers" :items="rows" class="elevation-2">
          <template v-slot:items="props">
            <td>{{ props.item.id }}</td>
            <td class="text-xs-left">{{ props.item.small_title }}</td>
            <td class="text-xs-left">{{ props.item.big_title }}</td>
            <td class="text-xs-left">{{ props.item.desc }}</td>
            <td class="text-xs-left">{{ props.item.position }}</td>
            <td class="text-xs-left">
              <img class="img-responsive" :src="props.item.img" alt width="200" />
            </td>
            <td>
              <v-btn right small outline color="red" @click="deleteSlider(props.item)">Delete</v-btn>
            </td>
          </template>
        </v-data-table>

        <v-btn absolute dark fab bottom right color="pink" @click="dialog = !dialog">
          <v-icon>add</v-icon>
        </v-btn>
      </v-flex>
    </v-layout>
    <v-dialog v-model="dialog" max-width="500px">
      <v-card>
        <v-card-text>
          <v-flex xs12 class="text-xs-center text-sm-center text-md-center text-lg-center">
            <img :src="details.imageUrl" height="150" v-if="details.imageUrl" />
            <v-text-field
              label="Select Image"
              @click="pickFile"
              v-model="details.imageName"
              prepend-icon="attach_file"
            ></v-text-field>
            <input
              type="file"
              style="display: none"
              ref="image"
              accept="image/*"
              @change="onFilePicked"
            />
          </v-flex>

          <v-text-field label="Small Title" v-model="details.small_title"></v-text-field>
          <small class="grey--text">* The smaller title text.</small>

          <v-text-field label="Big Title" v-model="details.big_title"></v-text-field>
          <small class="grey--text">* The larger title text.</small>

          <v-text-field label="Short Description" v-model="details.desc"></v-text-field>
          <small class="grey--text">* The larger title text.</small>

          <v-text-field label="Text Position" v-model="details.position"></v-text-field>
          <small class="grey--text">* left, right. center.</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn flat color="red" @click="dialog = false">Cancel</v-btn>
          <v-btn flat color="primary" @click="createSlider">Submit</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
  import {
    createSlider,
    getSliders,
    deleteSlider
  } from "@adminAssets/js/config/endpoints";
  export default {
    data() {
      return {
        dialog: false,
        details: {},
        headers: [],
        rows: []
      };
    },
    created() {
      this.getSlides();
    },
    methods: {
      getSlides() {
        BlockToast.fire({
          title: "Fetching sliders..."
        });
        axios.get(getSliders, { ...this.details }).then(rsp => {
          if (rsp.status == 200) {
            this.headers = rsp.data.slides.headers;
            this.rows = rsp.data.slides.rows;

            swal.close();
          }
        });
      },
      pickFile() {
        this.$refs.image.click();
      },
      onFilePicked(e) {
        const files = e.target.files;
        if (files[0] !== undefined) {
          this.details.imageName = files[0].name;
          if (this.details.imageName.lastIndexOf(".") <= 0) {
            return;
          }
          const fr = new FileReader();
          fr.readAsDataURL(files[0]);
          fr.addEventListener("load", () => {
            this.details.imageUrl = fr.result;
          });
        } else {
          this.details.imageName = "";
          this.details.imageUrl = "";
        }
      },
      createSlider() {
        BlockToast.fire({
          title: "Creating..."
        });

        axios
          .post(createSlider, { ...this.details })
          .then(rsp => {
            if (undefined !== rsp && rsp.status == 201) {
              swal.fire({
                title: "Created",
                type: "success"
              });

              this.details = {};
              this.dialog = false;
            }
          })
          .catch(err => {
            console.log(err.response);
            if (err.response.status == 520) {
              swal.fire({
                title: "Error",
                html: err.response.data.message,
                type: "error"
              });
            }
          });
      },
      deleteSlider(slider) {
        swal
          .fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
            focusCancel: true
            // showLoaderOnConfirm: true,
            // preConfirm:
          })
          .then(result => {
            if (result.value) {
              BlockToast.fire({
                title: "Deleting..."
              });
              axios.delete(deleteSlider(slider.id)).then(rsp => {
                if (rsp.status == 204) {
                  swal.fire({
                    title: "Deleted",
                    type: "success"
                  });

                  let removed = this.rows.indexOf(slider);
                  if (removed != -1) {
                    this.rows.splice(removed, 1);
                  }
                }
              });
            }
          });
      }
    }
  };
</script>
