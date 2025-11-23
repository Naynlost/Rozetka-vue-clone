<script setup>
import CategorySidebar from '../components/CategorySidebar.vue'
import ProductGrid from '../components/ProductGrid.vue'
import CartNotification from '../components/CartNotification.vue'
import HeroSlider from '../components/HeroSlider.vue'
import ProductSlider from '../components/ProductSlider.vue' 
</script>

<template>
  <div class="page-content-wrapper">
    <CategorySidebar />
    <div class="main-content">
      <CartNotification />
      <HeroSlider />
      
      <ProductSlider />

      <ProductGrid />
    </div>
  </div>
</template>

<style scoped>
.page-content-wrapper {
  max-width: 1640px;
  width: 100%;
  margin: 0 auto;
  padding: 0 16px;
  display: flex;
  align-items: flex-start;
}

.main-content {
  flex-grow: 1;
  padding-left: 16px;
  width: 100%;
 
  overflow: hidden; 
}
</style>