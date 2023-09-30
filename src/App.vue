<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <html>
    <body>
      <div class="container">
        <div class="section1"> 
            <img src="@/assets/images/logo.png" id="logo-image">
        </div>
        <div class="section2"> 
          TEN OUT OF TEN
        </div>
      </div>
    </body>
  </html>
</template>


<style>

body, html {
  padding: 0;
  margin: 0;
  width: 100%;
  min-height: 100%;
}

body {
  background: #F5EEDC;
  background-image: url('./assets/images/logo-padding.png');
}

.section1 {
  background: #FFFFFF;
  height: 200px;
  width: 80vw;
  margin: 0px;
  padding: 0px;
  margin-top: 100px;
}

.section2 {
  background: #65451F;
  height: 400px;
  width: 80vw;
  margin: 0px;
  padding: 0px;
  float: left;
}

#logo-image {
  width: 30%;
  position: absolute;
  left: 35%;
  top: 20%;
  
}

</style>
