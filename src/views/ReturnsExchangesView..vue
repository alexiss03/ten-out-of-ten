<script setup lang="ts">
import FooterView from './FooterView.vue';
import HeaderView from './HeaderView.vue';
</script>

<template>
  <body>
    <HeaderView/>
    <div class="section1">
    </div>
    <FooterView/>
  </body>
</template>

<style scoped>

#section1-header {
  text-align: left;
  font-size: 20px;
  font-family: 'Coves-Bold';
  padding-top: 20px;
  padding-left: 40px;
}

#section1-body {
  text-align: left;
  padding-left: 40px;
  padding-right: 40px;
  text-align: justified;
}

.section1 {
  background: #f4f3ef;
  width: 100vw;
  padding-top: 100px;
  padding-bottom: 100px;
  vertical-align: middle;
  display: flex;
  flex-direction: column;
  color: #000000;
  height: 100%;
  
}

</style>
