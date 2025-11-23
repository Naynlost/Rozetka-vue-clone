<script setup>
import { ref, computed } from 'vue';
import ProductCard from './ProductCard.vue';
import { products } from '../data.js';

const scrollContainer = ref(null);

const scrollLeft = () => {
  if (scrollContainer.value) {
    scrollContainer.value.scrollBy({ left: -250, behavior: 'smooth' });
  }
};

const scrollRight = () => {
  if (scrollContainer.value) {
    scrollContainer.value.scrollBy({ left: 250, behavior: 'smooth' });
  }
};

const recProducts = computed(() => {
  return products.filter(product => product.id > 100);
});
</script>

<template>
  <div class="slider-section">
    <h2 class="slider-title">Рекомендації на основі ваших переглядів</h2>
    
    <div class="slider-wrapper">
      <button class="nav-btn prev-btn" @click="scrollLeft">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 18L9 12L15 6" stroke="#221f1f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>

      <div class="products-track" ref="scrollContainer">
        <div class="track-item" v-for="product in recProducts" :key="product.id">
          <ProductCard 
            :id="product.id"
            :title="product.title"
            :price="product.price"
            :oldPrice="product.oldPrice"
            :imageUrl="product.img"
          />
        </div>
      </div>

      <button class="nav-btn next-btn" @click="scrollRight">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 18L15 12L9 6" stroke="#221f1f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>

    </div>
  </div>
</template>

<style scoped>
.slider-section {
  margin-bottom: 40px;
  position: relative;
  background: white;
  border: 1px solid #e9e9e9;
}

.slider-title {
  font-size: 20px;
  font-weight: bold;
  color: #221f1f;
  padding: 15px;
  margin: 0;
  border-bottom: 1px solid #e9e9e9;
}

.slider-wrapper {
  position: relative;
  padding: 0 10px;
}

.products-track {
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
  gap: 0;
  scrollbar-width: none;
}
.products-track::-webkit-scrollbar {
  display: none;
}

.track-item {
  min-width: 200px;
  flex-shrink: 0;
  border-right: 1px solid #e9e9e9;
}

.nav-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
  background-color: white;
  border: 1px solid #e9e9e9;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  opacity: 0;
  transition: opacity 0.2s;
}

.slider-wrapper:hover .nav-btn {
  opacity: 1;
}

.nav-btn:hover {
  background-color: #f5f5f5;
}

.prev-btn { left: 10px; }
.next-btn { right: 10px; }
</style>