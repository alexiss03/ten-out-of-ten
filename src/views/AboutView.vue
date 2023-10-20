<script setup lang="ts">
import FooterView from './FooterView.vue';
</script>

<template>
  <body>
    <div class="section1">
      <div id="section1-header">About Us</div>
      <div id="section1-body">Ten out of ten is founded in 2023 by sisters Lexi and Gel. Their primary goal is to provide stylish clothing for the Filipinos made locally. </div>
      
      <div id="section1-header">Embrace Elegance with Ten Out of Ten</div>
      <div id="section1-body">At Ten out of ten, we have an unshakable passion for fashion that transcends the boundaries of time. Our brand is not just about clothing; it's a celebration of individuality, creativity, and an exploration of timeless style. We seamlessly blend vintage and modern elements to curate a wardrobe that tells a unique story with every outfit you wear..<br/></div>

      <div id="section1-header">Our Story</div>
      <div id="section1-body">Ten out of ten was born from a vision to infuse classic aesthetics with a contemporary twist. Our journey began when a group of like-minded fashion enthusiasts decided to break free from the mainstream and create a brand that reimagines the past and brings it to life in the present. We were driven by the belief that fashion should be an art form, a medium for self-expression, and a journey through time..<br/></div>

      <div id="section1-header">The Essence of Our Brand</div>
      <div id="section1-body">Ten Out of Ten is not just about nostalgia; it's about celebrating the enduring charm of vintage styles while redefining them for the modern era. We appreciate the elegance and craftsmanship of bygone eras and strive to capture their essence in our designs. With meticulous attention to detail, we transform these influences into fashion that reflects the sophistication of the past and the innovation of the present..<br/></div>

      <div id="section1-header">Our Philosophy</div>
      <div id="section1-body">Quality Craftsmanship: Every garment at Ten Out of Ten is a testament to our commitment to quality. We select the finest materials, collaborate with skilled artisans, and pay attention to every stitch, ensuring that our creations stand the test of time.<br/><br/>Timeless Elegance: Our designs are a reflection of the enduring beauty of vintage aesthetics. They exude timeless elegance, ensuring that you look and feel your best, no matter the occasion.<br/><br/>Modern Relevance: We understand the importance of staying current in the ever-evolving world of fashion. Our designs seamlessly incorporate modern trends, allowing you to embrace the best of both worlds.<br/><br/>Sustainability: We take our responsibility to the planet seriously. Ten Out of Ten is committed to sustainable practices, from sourcing eco-friendly materials to reducing our carbon footprint. We believe that true style should not come at the expense of our planet..<br/><br/></div>

      <div id="section1-header">The Ten Out of Ten Experience</div>
      <div id="section1-body">When you shop with us, you're not just buying clothes; you're investing in a carefully curated collection that transcends time. We invite you to explore our wide range of apparel, from classic suits to bohemian dresses, each designed to express your unique style. Our mission is to empower you to make a statement, embrace your individuality, and walk through life with confidence and grace.<br/><br/>Join us on a journey through the ages, where vintage and modernity unite in a harmonious blend of sophistication and clever style. At Ten Out of Ten, the past meets the present, and together, we create a future where fashion is an art, and your wardrobe is a canvas for self-expression.<br/><br/>Welcome to Ten Out of Ten. Discover, evolve, and embrace elegance like never before.</div>
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
