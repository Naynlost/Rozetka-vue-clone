<script setup>
import { useRoute } from 'vue-router';
import { products } from '../data.js';
import { addToCart } from '../cart.js'; 

const route = useRoute();
const productId = Number(route.params.id);
const product = products.find(p => p.id === productId);

const currentProduct = product || { 
  title: "Ürün Bulunamadı", 
  price: 0, 
  img: "", 
  category: "Hata" 
};
</script>

<template>
  <div class="product-page">
    
    <div class="product-header-container">
       <div class="breadcrumbs">
          <span>Головна</span> › <span>Каталог</span> › <span>{{ currentProduct.category }}</span>
       </div>
       <h1 class="product-title-main">{{ currentProduct.title }}</h1>
       <div class="tabs">
          <span class="tab active">Усе про товар</span>
          <span class="tab">Характеристики</span>
          <span class="tab">Відгуки</span>
          <span class="tab">Питання</span>
          <span class="tab">Фото</span>
       </div>
    </div>

    <div class="product-main-container">
      
      <div class="product-left">
        <div class="main-image-wrapper">
           <span class="top-sale-badge">ТОП ПРОДАЖІВ</span>
           <img :src="currentProduct.img" :alt="currentProduct.title" class="main-img">
        </div>
      </div>

      <div class="product-right">
        <div class="buy-box">
          <div class="stock-status in-stock">Є в наявності</div>
          
          <div class="price-row">
            <div class="prices">
               <span v-if="currentProduct.oldPrice" class="old-price">{{ currentProduct.oldPrice }} ₴</span>
               <span class="current-price">{{ currentProduct.price }} ₴</span>
            </div>
            <div class="actions">
               <button class="cart-btn-big" @click="addToCart(currentProduct)">
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg"><path d="M7 18C5.9 18 5.01 18.9 5.01 20C5.01 21.1 5.9 22 7 22C8.1 22 9 21.1 9 20C9 18.9 8.1 18 7 18ZM19 18C17.9 18 17.01 18.9 17.01 20C17.01 21.1 17.9 22 19 22C20.1 22 21 21.1 21 20C21 18.9 20.1 18 19 18ZM7.17 14.75L7.2 14.63L8.1 13H15.55C16.3 13 16.96 12.59 17.3 11.97L21.16 4.96L19.42 4H19.41L17.31 8.82L15.55 12H8.53L8.4 11.73L6.16 6L5.21 4L4.27 2H1V4H3L6.6 11.59L5.25 14.03C5.09 14.32 5 14.65 5 15C5 16.1 5.9 17 7 17H21V15H7.42C7.28 15 7.17 14.89 7.17 14.75Z"/></svg>
                 В кошику
               </button>
               <button class="credit-btn">Купити в кредит</button>
            </div>
          </div>
          
          <div class="seller-info">
             <span>Продавець:</span> <b>Rozetka</b>
          </div>
        </div>

        <div class="delivery-info">
           <div class="d-item">
              <span class="icon">📍</span>
              <span><b>Самовивіз з точок видачі Rozetka</b><br>Безкоштовно</span>
           </div>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>
.product-page {
  padding-bottom: 50px;
  background-color: #fff;
}

.product-header-container, .product-main-container {
  max-width: 1640px;
  margin: 0 auto;
  padding: 0 16px;
}

.breadcrumbs {
  font-size: 14px;
  color: #797878;
  margin: 10px 0;
}
.product-title-main {
  font-size: 28px;
  margin: 10px 0 20px 0;
  color: #221f1f;
  line-height: 1.2;
}

.tabs {
  display: flex;
  gap: 30px;
  border-bottom: 1px solid #e9e9e9;
  margin-bottom: 20px;
}
.tab {
  padding-bottom: 10px;
  cursor: pointer;
  font-size: 14px;
  color: #3e77aa;
}
.tab.active {
  color: #00a046;
  border-bottom: 3px solid #00a046;
  font-weight: bold;
}

.product-main-container {
  display: flex;
  gap: 30px;
}

.product-left {
  flex: 1; 
  background-color: white;
}
.main-image-wrapper {
  position: relative;
  border: 1px solid #f5f5f5;
  padding: 20px;
  display: flex;
  justify-content: center;
  min-height: 400px; 
}
.top-sale-badge {
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: #ffce00;
  color: #222;
  padding: 2px 8px;
  font-size: 12px;
  font-weight: bold;
  border-radius: 4px;
}
.main-img {
  max-width: 100%;
  max-height: 500px;
  object-fit: contain;
}

.product-right {
  width: 400px; 
  flex-shrink: 0;
}

.buy-box {
  border: 1px solid #e9e9e9;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
}

.stock-status {
  color: #00a046;
  font-size: 14px;
  margin-bottom: 15px;
}

.prices {
  display: flex;
  align-items: baseline;
  gap: 10px;
  margin-bottom: 15px;
}
.old-price {
  color: #a6a5a5;
  text-decoration: line-through;
  font-size: 14px;
}
.current-price {
  color: #f84147;
  font-size: 28px;
  font-weight: bold;
}

.cart-btn-big {
  background-color: #00a046;
  color: white;
  border: none;
  width: 100%;
  padding: 12px;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: 10px;
}
.cart-btn-big:hover { background-color: #009040; }
.cart-btn-big svg { fill: white; }

.credit-btn {
  background-color: white;
  border: 1px solid #00a046;
  color: #00a046;
  width: 100%;
  padding: 10px;
  border-radius: 4px;
  cursor: pointer;
}

.seller-info {
  margin-top: 15px;
  font-size: 14px;
}

.delivery-info {
  border: 1px solid #e9e9e9;
  border-radius: 8px;
  padding: 15px;
}
.d-item {
  display: flex;
  gap: 10px;
  font-size: 14px;
}
</style>