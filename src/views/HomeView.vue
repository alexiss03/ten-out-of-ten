<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import FooterView from './FooterView.vue';
import HeaderView from './HeaderView.vue';

</script>

<template>
 <html>
    <body>
        <HeaderView/>
       <div class="section1"> 
            <img src="@/assets/images/logo.png" id="logo-image">
        </div> 
        <div class="section2"> 
          <div class="section-title">FIRST CHAPTER</div>
          <div>our first collection has arrived</div> 
        </div>
        <div class="section3"> 
          <div>
          </div>
          <div>
          </div>
        </div>
        <div class="section4"> 
          <div class="section-title">OUR BRAND</div>
          <div>exceptional quality on stylish modern trendy design mixing with vintage timeless resulting to effortless sophistication</div>
        </div>  
        <FooterView/>
        
    </body>
  </html>
</template>

<style>
body, html {
  font-family: 'Coves-Light';
  background: #FFFFFF;
  margin: 0; /* Add this to remove default margins */
  padding: 0; /* Add this to remove default padding */
}

#header {
  background: #f4f3ef;
  height: 50px;
  width: 100vw;
  margin: 0;
  padding: 15px;
  margin-top: 20px;
  color: #000000;
}

.section-title {
  font-family: 'Coves-Bold';
}

.section1 {
  background: #f4f3ef;
  height: 100px;
  width: 100vw;
  margin: 0px;
  padding: 0px;
  margin-top: 2px;
  vertical-align: middle;
  display: flex;
  flex-direction: column;
}

#logo-image {
  margin: auto;
  width: 30%;
}

.section2 {
  background: #65451F;
  height: 400px;
  width: 100vw;
  margin: 0px;
  padding: 0px;
  padding-top: 300px;
  text-align: center;
  font-size: 18px;
  color: white;
  background-image: url("@/assets/images/paris.png")
}

.section3 {
  background: #FFFFFF;
  height: 600px;
  width: 100vw;
  margin: 0px;
  padding: 0px;
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
  width: 100vw;
  text-align: center;
  font-size: 18px;
  padding-top:300px;
  color: #FFFFFF;
}
</style>
