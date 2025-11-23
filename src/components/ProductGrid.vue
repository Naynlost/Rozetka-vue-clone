<script setup>
import { computed } from 'vue';
import ProductCard from './ProductCard.vue'
import { products } from '../data.js'

const gridProducts = computed(() => {
  return products.filter(p => p.id < 100);
});
</script>

<template>
  <div class="grid-section">
    <h2 class="section-title">Найкращі пропозиції для вас</h2>
    
    <div class="grid-container">
      <ProductCard 
        v-for="product in gridProducts" 
        :key="product.id"
        :id="product.id" 
        :title="product.title"
        :price="product.price"
        :oldPrice="product.oldPrice"
        :imageUrl="product.img"
      />
    </div>
  </div>
</template>

<style scoped>
.grid-section {
  background-color: white;
  padding: 0;
  border: 1px solid #e9e9e9;
  border-bottom: none; 
}

.section-title {
  font-size: 20px;
  font-weight: bold;
  padding: 15px 15px;
  margin: 0;
  border-bottom: 1px solid #e9e9e9;
  color: #221f1f;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(185px, 1fr)); 
  gap: 0; 
}
</style>