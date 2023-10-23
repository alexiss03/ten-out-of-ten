<script setup lang="ts">
import FooterView from './FooterView.vue';
import HeaderView from './HeaderView.vue';
</script>

<template>
  <body>
    <HeaderView/>
    <div class="section1">
    <div id="section1-header">Frequently Asked Questions (FAQ) for Ten Out of Ten</div><br>

    <div id="section1-body">
    <p><strong>1. What is Ten Out of Ten known for?</strong></p>
    <p>Ten Out of Ten is known for offering a wide range of high-quality clothing for women. We specialize in premium fashion.</p><br>
    </div>

    <div id="section1-body">
    <p><strong>2. Where can I shop at your online store?</strong></p>
    <p>You can shop at our online store by visiting Lazada or Shoppee. We offer a user-friendly platform for you to browse and purchase our collections.</p><br>
    </div>

    <div id="section1-body">
    <p><strong>3. What are your customer support hours?</strong></p>
    <p>Our customer support team is available to assist you [mention your customer support hours from 9:00 AM to 5:00 PM, Monday to Friday]. For specific hours and contact information, please visit our website.</p><br>
    </div>

    <div id="section1-body">
    <p><strong>4. What payment methods do you accept online?</strong></p>
    <p>We accept a variety of online payment methods, including credit cards, debit cards, PayPal, and [mention any other methods if applicable].</p><br>
    </div>

    <div id="section1-body">
    <p><strong>5. Do you offer international shipping?</strong></p>
    <p>Yes, we offer international shipping to many countries. Shipping fees and delivery times may vary, so please check our shipping information on the website for more details.</p><br>
    </div>

    <div id="section1-body">
    <p><strong>6. Can I return or exchange items I've purchased online?</strong></p>
    <p>We have a hassle-free return and exchange policy. You can return or exchange items within [number of days] days of purchase, provided they are in their original condition with tags attached. For more details, please review our return policy on the website.</p><br>
    </div>

    <div id="section1-body">
    <p><strong>7. How do I track my online order?</strong></p>
    <p>When you place an order online, you will receive a tracking number via email. You can use this number to track the status of your order on our website or the courier company's website.</p><br>
    </div>

    <div id="section1-body">
    <p><strong>8. Do you offer digital gift cards or e-gift certificates?</strong></p>
    <p>Yes, we offer digital gift cards and e-gift certificates in various denominations. These make for great gifts and can be purchased on our website.</p><br>
    </div>

    <div id="section1-body">
    <p><strong>9. Can I get assistance with styling and sizing online?</strong></p>
    <p>Absolutely! Our website provides sizing guides and recommendations to assist you in selecting the right size. If you need further assistance, you can contact our customer support team.</p><br>
    </div>

    <div id="section1-body">
    <p><strong>10. Do you offer any promotions or loyalty programs for online shoppers?</strong></p>
    <p>Yes, we frequently run promotions and special offers online. You can also join our loyalty program to enjoy exclusive discounts and rewards. Check our website or subscribe to our newsletter for updates.</p><br>
    </div>

    <div id="section1-body">
    <p><strong>11. How can I contact customer support for online assistance?</strong></p>
    <p>You can reach our customer support team by [provide contact details, e.g., email or contact form]. We're here to assist with any questions or concerns you may have.</p><br>
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

</style>
