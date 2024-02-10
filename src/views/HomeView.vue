<script setup lang="ts">
import FooterView from './FooterView.vue';
import HeaderView from './HeaderView.vue';

import { useRouter } from 'vue-router';
const myRouter: any = useRouter();

const seeFullCollection = () => {
  myRouter.push('/collection1');
};

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
          <div>Welcome to Ten Out of Ten!</div> 
        </div>
        <div class="shop-now"> 
            <div class="section-title">SHOP NOW</div>
        </div> 
        <div class="section3"> 
            <div>
            <img src="@/assets/images/products/1/1.png" class="section3-box-img">
            <img src="@/assets/images/products/1/2.png" class="section3-box-img">
            <img src="@/assets/images/products/1/3.png" class="section3-box-img">
            </div>
        </div>
        <div class="shop-now"> 
            <div class="section-title">SEE PHOTO FULL COLLECTION</div>
        </div> 
        <div class="section4"> 
          <div class="section4-content">
            <div class="section-title">OUR BRAND</div>
            <div>exceptional quality on stylish modern trendy design mixing with vintage timeless resulting to effortless sophistication</div>
          </div>
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

.section-subtitle {
  font-family: 'Coves';
  font-size: 15px;
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

  display: flex;
  justify-content: center; /* Center the image horizontally */
  align-items: center; /* Center the image vertically */
  height: 100px; /* Container height */
}

.section1 img{
  height: 100vw;
}

.shop-now {
  background: #f4f3ef;
  color:black;
  height: 50px;
  width: 100vw;
  margin-top: 10px;
  padding: 0px;

  vertical-align: middle;
  display: flex;
  flex-direction: column;


  display: flex;
  justify-content: center; /* Center the image horizontally */
  align-items: center; /* Center the image vertically */
  height: 50px; /* Container height */

  margin-bottom: 10px;
}

#logo-image {
  height: auto; /* Fixed height for the image */
  width: auto; /* Image width is 50% of its container */
  object-fit: cover;
  margin-top:50px;
}

/* Mobile styles */
@media (max-width: 1000px) {
  #logo-image {
    vertical-align: middle;
    margin-bottom: 0.25em;
    height: auto; /* Fixed height for the image */
    width: 50%; /* Image width is 50% of its container */
    padding-top:50px;
  }
}

.section2 {
  background: #f0dcbd;
  height: 500px;
  width: 100vw;
  margin: 0px;
  padding: 0px;
  padding-top: 300px;
  text-align: center;
  font-size: 18px;
  color: black;
  background-image: url("@/assets/images/header.png");
  background-position: left center; /* Align the image to the left, center vertically */
  background-repeat: no-repeat; /* Prevent the background image from repeating */
  background-size: auto 100%;
}

/* Mobile styles */
@media (max-width: 1000px) {
  .section2 {
    background: #f0dcbd;
    height: 500px;
    width: 100vw;
    margin: 0px;
    padding: 0px;
    padding-top: 300px;
    text-align: center;
    font-size: 18px;
    color: white;
    background-image: url("@/assets/images/header.png");
    background-position: left center; /* Align the image to the left, center vertically */
    background-repeat: no-repeat; /* Prevent the background image from repeating */
    background-size: auto 100%;
  }
}

.section3 {
  background: #FFFFFF;
  width: 100vw;
  text-align: center;
  font-size: 25px;
  display: block;
  justify-content: space-between; /* Distribute space evenly between the images */
  align-items: center;
  color: black;
}

.section3-box {
  width: 33vw;
  height: 100%;
  display: inline;
}

.section3-box-img {
  max-height: 100%;
  width: 33.33vw
}

.section4 { 
  background: #f0dcbd;
  height: 400px;
  width: 100vw;
  text-align: left;
  font-size: 18px;
  padding-top:150px;
  color: black;
  background-image: url("@/assets/images/products.png");
  background-position: left center; /* Align the image to the left, center vertically */
  background-repeat: no-repeat; /* Prevent the background image from repeating */
  background-size: 40vw auto;
}

.section4-content {
  margin-left: 40vw;
}
</style>
