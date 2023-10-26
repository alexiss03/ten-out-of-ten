<script setup lang="ts">
import { useRouter } from 'vue-router';
const myRouter: any = useRouter();

const clickAboutUs = () => {
  myRouter.push('/about-us');
};

const clickSizeGuide = () => {
  myRouter.push('/size-guide');
};

const clickFAQsView = () => {
  myRouter.push('/faqs');
};

const clickShipping = () => {
  myRouter.push('/shipping');
};
</script>

<template>
    <div class="footer"> 
        <div class="footer-items" @click="clickAboutUs">ABOUT US </div>
        <div class="footer-items" @click="clickSizeGuide">SIZE GUIDE </div>
        <div class="footer-items" @click="clickFAQsView">FAQs </div>
        <div class="footer-items" @click="clickShipping">SHIPPING </div>
        <div class="footer-items">RETURNS AND EXCHANGES </div>
        <div class="footer-items">CONTACT US </div>
    </div>  
</template>

<style>
.footer {
  background: #f4f3ef;
  height: 50px;
  width: 100vw;
  margin: 0;
  padding: 15px;
  margin-top: 2px;
  color: #000000;
  padding-bottom:20px;
}

.footer-items {
  display:inline;
}
</style>
