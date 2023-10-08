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
          FIRST CHAPTER<br>
          Our first collection has arrived
          
        </div>
        <div class="section3"> 
          <div class="section3-box">
          </div>
          <div>
          </div>
          <div>
          </div>
        </div>
        <div class="section4"> 
          exceptional quality in terms of the stylish modern trendy design mixing with vintage timeless colors resulting to effortless sophistication
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
  font-family: 'Coves-Light';

}

body {
  background: #F5EEDC;
}

.section1 {
  background: #FFFFFF;
  height: 180px;
  width: 80vw;
  margin: 0px;
  padding: 0px;
  margin-top: 100px;
  display: inline-block;
  vertical-align: middle;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

#logo-image {
  margin: auto;
  width: 30%;
}

.section2 {
  background: #65451F;
  height: 400px;
  width: 80vw;
  margin: 0px;
  padding: 0px;
  float: left;
  padding-top: 300px;
  text-align: center;
  font-size: 25px;
  color: white;
  background-image: url("@/assets/images/paris.png")
}

.section3 {
  background: #FFFFFF;
  height: 400px;
  width: 80vw;
  margin: 0px;
  padding: 0px;
  float: left;
  padding-top: 300px;
  text-align: center;
  font-size: 25px;
  
}

.section3-box {
  background: #FFFFFF;
  height: 400px;
  width: 80vw;
  margin: 0px;
  padding: 0px;
  float: left;
  padding-top: 300px;
  text-align: center;
  font-size: 25px;
}

.section4 { 
  background: #65451F;
  height: 400px;
  width: 80vw;
  margin: 0px;
  padding: 0px;
  float: left;
  padding-top: 300px;
  text-align: center;
  font-size: 25px;
}

</style>
