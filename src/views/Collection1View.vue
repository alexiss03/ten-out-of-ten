<script setup lang="ts">
import FooterView from './FooterView.vue';
import HeaderView from './HeaderView.vue';

import { useRouter } from 'vue-router';
const myRouter: any = useRouter();

const seeFullCollection = () => {
  myRouter.push('/about-us');
};

const photos = [
      { url: '/src/assets/images/products/1/105.png', alt: 'Photo 1' },
      { url: '/src/assets/images/products/1/105.png', alt: 'Photo 1' },
      { url: '/src/assets/images/products/1/105.png', alt: 'Photo 1' },
      { url: '/src/assets/images/products/1/105.png', alt: 'Photo 1' },
      { url: '/src/assets/images/products/1/105.png', alt: 'Photo 1' },
      { url: '/src/assets/images/products/1/105.png', alt: 'Photo 1' },
      { url: '/src/assets/images/products/1/105.png', alt: 'Photo 1' },
      { url: '/src/assets/images/products/1/105.png', alt: 'Photo 1' },
      { url: '/src/assets/images/products/1/105.png', alt: 'Photo 1' },
    ]

</script>

<template>
  <HeaderView/>
  <div>
  </div>
  <div class="photo-grid">
    <div v-for="(photo, index) in photos" :key="index" class="photo-item">
      <img :src="photo.url" :alt="photo.alt" class="photo-image" />
    </div>
  </div>
  <FooterView/>
</template>


<style scoped>
.photo-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px; /* Adjust the gap as per your design */
  width: 80%;
}

.photo-item {
  overflow: hidden;
}

.photo-image {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Maintain aspect ratio and cover the container */
}
</style>
