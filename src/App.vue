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
          our first collection has arrived
          
        </div>
        <div class="section3"> 
          <div id="section3-box1">
          </div>
          <div>
          </div>
          <div>
          </div>
        </div>
        <div class="section4"> 
          OUR BRAND<br>
          exceptional quality on stylish modern trendy design mixing with vintage timeless resulting to effortless sophistication
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
  background: #f4f3ef;
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
  font-size: 18px;
  color: white;
  background-image: url("@/assets/images/paris.png")
}

.section3 {
  background: #FFFFFF;
  height: 600px;
  width: 80vw;
  margin: 0px;
  padding: 0px;
  float: left;
  padding-top: 300px;
  text-align: center;
  font-size: 25px;
  
}

#section3-box1 {
  background: #FFFFFF;
  height: 400px;
  width: 33%;
  margin: 0px;
  padding: 0px;
  float: left;
  text-align: center;
  background: url("@/assets/images/products/1/105.png") no-repeat 50% 50%;
  background-size: contain; 
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
  font-size: 18px;
  margin-horizontal:25px;
}

</style>
