<template>
  <div class="product-card">
    
    <button class="wishlist-btn">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5C22 12.27 18.6 15.36 13.45 20.03L12 21.35Z" stroke="#ff7800" stroke-width="1.5" fill="none"/>
      </svg>
    </button>

    <router-link :to="'/product/' + (id || 1)" class="card-link">
      <div class="image-wrapper">
        <img :src="imageUrl" :alt="title" class="product-image">
      </div>
      <h3 class="product-title">{{ title }}</h3>
    </router-link>

    <div class="price-section">
      <div v-if="oldPrice" class="old-price">{{ oldPrice }} ₴</div>
      <div class="current-price">{{ price }} ₴</div>
    </div>

    <div class="card-footer">
      <div class="status-text">Безкоштовна доставка</div>
      
      <div class="footer-right">
        <button class="cart-btn" @click.prevent="handleAddToCart">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 20C9 21.1046 8.10457 22 7 22C5.89543 22 5 21.1046 5 20C5 18.8954 5.89543 18 7 18C8.10457 18 9 18.8954 9 20Z" fill="#00a046"/>
            <path d="M21 20C21 21.1046 20.1046 22 19 22C17.8954 22 17 21.1046 17 20C17 18.8954 17.8954 18 19 18C20.1046 18 21 18.8954 21 20Z" fill="#00a046"/>
            <path d="M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6" stroke="#00a046" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </div>
    </div>

  </div>
</template>

<script setup>
import { addToCart } from '../cart.js';

const props = defineProps({
  id: Number,
  title: String,
  price: Number,
  oldPrice: Number,
  imageUrl: String
});

const handleAddToCart = () => {
  addToCart({
    id: props.id,
    title: props.title,
    price: props.price,
    imageUrl: props.imageUrl
  });
};
</script>

<style scoped>
.product-card {
  position: relative;
  background-color: white;
  border-right: 1px solid #e9e9e9; 
  border-bottom: 1px solid #e9e9e9;
  padding: 16px;
  width: 100%;
  transition: box-shadow 0.2s;
  display: flex;
  flex-direction: column;
  height: 100%; 
}

.product-card:hover {
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  z-index: 1; 
}

.card-link {
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.wishlist-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;
  opacity: 0.6;
  transition: opacity 0.2s;
  z-index: 2;
}
.wishlist-btn:hover { opacity: 1; }

.image-wrapper {
  height: 160px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
}
.product-image {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.product-title {
  font-size: 14px;
  font-weight: normal;
  color: #333;
  margin-bottom: auto; 
  line-height: 1.4;
  height: 40px; 
  overflow: hidden;
}
.product-card:hover .product-title {
  color: #ff5c00;
  text-decoration: underline;
}

.price-section {
  margin-top: 10px;
  margin-bottom: 8px;
}
.old-price {
  font-size: 12px;
  color: #a6a5a5;
  text-decoration: line-through;
  margin-bottom: 2px;
}
.current-price {
  font-size: 20px;
  color: #f84147; 
  font-weight: bold;
}

.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}
.status-text {
  font-size: 11px;
  color: #00a046; 
}

.footer-right {
  display: flex;
  align-items: center;
  gap: 10px;
}



.cart-btn {
  background: none;
  border: none;
  cursor: pointer;
  padding: 5px;
  transition: transform 0.1s;
}
.cart-btn:hover {
  background-color: #00a046; 
  border-radius: 4px;
}
.cart-btn:hover svg path {
  stroke: white; 
  fill: white;
}
</style>