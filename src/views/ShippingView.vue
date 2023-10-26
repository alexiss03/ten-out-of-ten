<script setup lang="ts">
import FooterView from './FooterView.vue';
import HeaderView from './HeaderView.vue';
</script>

<template>
  <body>
    <HeaderView/>
    <div class="section1">
       <div id="section1-header">Shipping Rules<br/></div>
        
        <div id="section1-header">Scope</div>
        <div id="section1-body">This shipping rule is designed for our clothing store and applies to all clothing orders for delivery within the Philippines and internationally.</div>
        
        <div id="section1-header">Delivery Areas</div>
        <div id="section1-body">
            1. <strong>Within the Philippines:</strong>
            - We offer shipping services to all regions and provinces within the Philippines.
            - Shipping fees are calculated based on the weight and dimensions of the clothing items, as well as the delivery location within the Philippines.
            - Estimated delivery times are provided during the checkout process and may vary depending on the destination.

            2. <strong>International Shipping:</strong>
            - We offer international shipping to select countries, which will be specified during the checkout process.
            - Shipping fees for international orders are determined by the destination country and the weight and dimensions of the clothing items.
            - Estimated delivery times for international orders may vary based on the destination and any customs processing times.
        </div>

        <div id="section1-header">Shipping Methods</div>
        <div id="section1-body">
            1. <strong>Within the Philippines:</strong>
            - We offer multiple shipping options for domestic clothing orders, including standard shipping and expedited shipping.
            - Customers can choose their preferred shipping method during the checkout process.

            2. <strong>International Shipping:</strong>
            - International clothing orders will be shipped using reliable carriers or postal services.
            - Shipping times may vary depending on the destination and the chosen shipping method.
        </div>

        <div id="section1-header">Shipping Costs</div>
        <div id="section1-body">
            1. <strong>Within the Philippines:</strong>
            - Shipping costs for domestic clothing orders are calculated based on the weight and dimensions of the clothing items and the delivery location within the Philippines.
            - Customers will see the shipping cost during the checkout process.

            2. <strong>International Shipping:</strong>
            - Shipping costs for international clothing orders are determined by the destination country and the weight and dimensions of the clothing items.
            - International shipping costs will be displayed to customers during the checkout process.
        </div>
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
