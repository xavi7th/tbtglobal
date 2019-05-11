<template>
  <main>
    <view-wrapper>
      <mdb-mask class="d-flex gradient justify-content-center align-items-center">
        <mdb-container>
          <mdb-row>
            <div class="white-text text-center text-md-left col-md-6 mt-xl-5 mb-5">
              <h1 class="h1-responsive font-weight-bold animated fadeInLeft">Sign up right now!</h1>
              <hr class="hr-light animated fadeInLeft">
              <h6
                class="mb-4 animated fadeInLeft"
              >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem repellendus quasi fuga nesciunt dolorum nulla magnam veniam sapiente, fugiat! Commodi sequi non animi ea dolor molestiae, quisquam iste, maiores. Nulla.</h6>
              <mdb-btn outline="white animated fadeInLeft" color="white">Learn More</mdb-btn>
            </div>
            <mdb-col md="6" xl="5" class="mb-4 animated fadeInRight">
              <mdb-card id="classic-card">
                <mdb-card-body class="z-depth-2 white-text">
                  <h3 class="text-center">
                    <mdb-icon icon="user"/>Register:
                  </h3>
                  <hr class="hr-light">
                  <mdb-input label="Your name" labelColor="white" icon="user"/>
                  <mdb-input label="Your email" labelColor="white" icon="envelope"/>
                  <mdb-input label="Your password" labelColor="white" icon="lock" type="password"/>
                  <div class="text-center mt-4 black-text">
                    <mdb-btn color="indigo">Sign Up</mdb-btn>
                    <hr class="hr-light">
                    <div class="text-center d-flex justify-content-center white-label">
                      <a class="p-2 m-2">
                        <mdb-icon fab icon="twitter" class="white-text"/>
                      </a>
                      <a class="p-2 m-2">
                        <mdb-icon fab icon="linkedin" class="white-text"/>
                      </a>
                      <a class="p-2 m-2">
                        <mdb-icon fab icon="instagram" class="white-text"/>
                      </a>
                    </div>
                  </div>
                </mdb-card-body>
              </mdb-card>
            </mdb-col>
          </mdb-row>
        </mdb-container>
      </mdb-mask>
    </view-wrapper>

    <mdb-container>
      <mdb-row class="py-5">
        <mdb-col md="12" class="text-center">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </mdb-col>
      </mdb-row>
    </mdb-container>
  </main>
</template>

<script>
  import {
    Container as mdbContainer,
    Row as mdbRow,
    Column as mdbCol,
    ViewWrapper,
    MdMask as mdbMask,
    Btn as mdbBtn,
    Card as mdbCard,
    CardBody as mdbCardBody,
    Input as mdbInput,
    Fa as mdbIcon
  } from "mdbvue";

  export default {
    name: "App",
    components: {
      mdbContainer,
      mdbRow,
      mdbCol,
      ViewWrapper,
      mdbMask,
      mdbBtn,
      mdbCard,
      mdbCardBody,
      mdbInput,
      mdbIcon
    }
  };
</script>

<style>
</style>
