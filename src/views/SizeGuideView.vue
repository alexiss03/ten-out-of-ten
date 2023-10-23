<script setup lang="ts">
import FooterView from './FooterView.vue';
</script>

<template>
  <body>
    <div class="section1">
      <div id="section1-header">Size Guide</div>
      
      <div id="section1-body">Welcome to Our Size Guide<br>Choosing the right clothing size is crucial for comfort and style. Our size guide is here to help you make informed decisions and ensure the perfect fit for every item in your wardrobe. Whether you're shopping for jeans, suits, or dresses, we've got you covered. Discover the key to a seamless and satisfying shopping experience with us.</div>
      <div id="section1-header-center">Woven</div>
      <table>
        <tr>
          <td>Size</td>
          <td>UK</td>
          <td colspan="2">Bust</td>
          <td colspan="2">Waist</td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>inches</td>
          <td>cm</td>
          <td>inches</td>
          <td>cm</td>
        </tr>
        <tr>
          <td>S</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>M</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>L</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>XL</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </table>
      <br>
      <div id="section1-header-center">Knits</div>
      <table>
        <tr>
          <td>Size</td>
          <td>UK</td>
          <td colspan="2">Bust</td>
          <td colspan="2">Waist</td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>inches</td>
          <td>cm</td>
          <td>inches</td>
          <td>cm</td>
        </tr>
        <tr>
          <td>S</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>M</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>L</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>XL</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </table>
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

#section1-header-center {
  text-align: center;
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
  margin: 0px;
  padding: 0px;
  padding-top: 100px;
  padding-bottom: 100px;
  vertical-align: middle;
  display: flex;
  flex-direction: column;
  color: #000000;
  height: 100%;
  
}

table {
  width: 50vw;
  margin-left: 25vw;
}

td {
  text-align: center;
  border: 1px solid;
}

</style>
