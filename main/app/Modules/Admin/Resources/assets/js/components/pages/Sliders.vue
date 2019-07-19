<template>
  <v-container fluid grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex xs12>
        <v-data-table :headers="headers" :items="rows" class="elevation-2">
          <template v-slot:items="props">
            <td>{{ props.item.id }}</td>
            <td class="text-xs-left">{{ props.item.highlight_text }}</td>
            <td class="text-xs-left">{{ props.item.main_text }}</td>
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
          <v-text-field label="Highlight Text" v-model="details.highlight_text"></v-text-field>
          <small class="grey--text">* The smaller writing.</small>

          <v-text-field label="Main Text" v-model="details.main_text"></v-text-field>
          <small class="grey--text">* The larger writing.</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn flat color="red" @click="dialog = false">Cancel</v-btn>
          <v-btn
            flat
            color="primary"
            @click="createSlider"
            :disabled="!details.highlight_text || !details.main_text"
          >Submit</v-btn>
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
      createSlider() {
        BlockToast.fire({
          title: "Creating..."
        });

        axios.post(createSlider, { ...this.details }).then(rsp => {
          if (rsp.status == 201) {
            swal.fire({
              title: "Created",
              type: "success"
            });

            this.details = {};
            this.dialog = false;
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
