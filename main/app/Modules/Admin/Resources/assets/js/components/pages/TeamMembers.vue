<template>
  <v-container fluid grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex xs12>
        <v-data-table :headers="headers" :items="rows" class="elevation-2">
          <template v-slot:items="props">
            <td>{{ props.item.id }}</td>
            <td class="text-xs-left">
              <v-flex xs12 sm6 md8 align-center justify-center layout text-xs-center>
                <v-avatar :tile="false" :size="'56px'" color="grey lighten-4 my-2 elevation-5">
                  <img :src="props.item.img" alt="avatar" />
                </v-avatar>
              </v-flex>
            </td>
            <td class="text-xs-left">{{ props.item.name }}</td>
            <td class="text-xs-left">{{ props.item.job_title }}</td>
            <td class="text-xs-left">{{ props.item.phone }}</td>
            <td class="text-xs-left">{{ props.item.email }}</td>
            <td>
              <v-btn right small outline color="red" @click="deleteTeamMember(props.item)">Delete</v-btn>
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
          <v-text-field label="TeamMember Name" v-model="details.name" name="user_name"></v-text-field>

          <v-text-field label="Job Title" v-model="details.job_title"></v-text-field>

          <v-text-field label="Email" v-model="details.email"></v-text-field>

          <v-text-field label="Phone" v-model="details.phone"></v-text-field>

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
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn flat color="red" @click="dialog = false">Cancel</v-btn>
          <v-btn
            flat
            color="primary"
            @click="createTeamMember"
            :disabled="!details.name || !details.phone || !details.email || !details.job_title || !details.imageName"
          >Submit</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
  import {
    createTeamMember,
    getTeamMembers,
    deleteTeamMember
  } from "@adminAssets/js/config/endpoints";
  export default {
    data() {
      return {
        dialog: false,
        details: {
          imageUrl: ""
        },
        headers: [],
        rows: []
      };
      ``;
    },
    created() {
      this.getTeamMembers();
    },
    methods: {
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
            // this.details.imageFile = files[0]; // this is an image file that can be sent to server...
          });
        } else {
          this.details.imageName = "";
          // this.details.imageFile = "";
          this.details.imageUrl = "";
        }
      },
      getTeamMembers() {
        BlockToast.fire({
          title: "Fetching team members..."
        });
        axios.get(getTeamMembers, { ...this.details }).then(rsp => {
          if (rsp.status == 200) {
            this.headers = rsp.data.team_members.headers;
            this.rows = rsp.data.team_members.rows;

            swal.close();
          }
        });
      },
      createTeamMember() {
        BlockToast.fire({
          title: "Creating..."
        });

        axios.post(createTeamMember, { ...this.details }).then(rsp => {
          if (rsp.status == 201) {
            swal.fire({
              title: "Created",
              type: "success"
            });
            this.rows.push(rsp.data.team_member);
            this.details = {};
            this.dialog = false;
          }
        });
      },
      deleteTeamMember(team_member) {
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
              axios.delete(deleteTeamMember(team_member.id)).then(rsp => {
                if (rsp.status == 204) {
                  swal.fire({
                    title: "Deleted",
                    type: "success"
                  });

                  let removed = this.rows.indexOf(team_member);
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
