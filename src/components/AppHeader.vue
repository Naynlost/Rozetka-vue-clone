<script setup>
import { ref } from 'vue'
import SearchBar from './SearchBar.vue' 
import LoginModal from './LoginModal.vue'
import CartModal from './CartModal.vue' 
import { cart, totalItems } from '../cart.js' 

// Login  kontrolü
const isLoginOpen = ref(false);
</script>

<template>
  <header class="site-header">
    <div class="container">
      
      <button class="icon-btn hamburger-menu">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 12H21" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M3 6H21" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M3 18H21" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>

      <a href="/" class="logo-wrapper">
        <img 
          src="https://content1.rozetka.com.ua/logo/site_dark_theme/original/619925313.svg" 
          alt="Rozetka Black Friday" 
          class="logo-img"
        >
      </a>

      <button class="catalog-button">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="cat-icon">
          <rect x="2.5" y="2.5" width="6" height="6" rx="1.5" stroke="white" stroke-width="1.5"/>
          <rect x="11.5" y="2.5" width="6" height="6" rx="1.5" stroke="white" stroke-width="1.5"/>
          <rect x="2.5" y="11.5" width="6" height="6" rx="1.5" stroke="white" stroke-width="1.5"/>
          <rect x="11.5" y="11.5" width="6" height="6" rx="1.5" stroke="white" stroke-width="1.5"/>
        </svg>
        <span>Каталог</span>
      </button>

      <div class="header-search">
        <SearchBar />
      </div>

      <nav class="user-actions">
        
        <button class="icon-btn" @click="isLoginOpen = true">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>

        <button class="icon-btn">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 3V21" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M4 7H20" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M4 7V14C4 15.5 5 17 7 17C9 17 10 15.5 10 14V7" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M14 7V14C14 15.5 15 17 17 17C19 17 20 15.5 20 14V7" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>

        <button class="icon-btn cart-btn-wrapper" @click="cart.isOpen = true">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 22C9.55228 22 10 21.5523 10 21C10 20.4477 9.55228 20 9 20C8.44772 20 8 20.4477 8 21C8 21.5523 8.44772 22 9 22Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M20 22C20.5523 22 21 21.5523 21 21C21 20.4477 20.5523 20 20 20C19.4477 20 19 20.4477 19 21C19 21.5523 19.4477 22 20 22Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span class="cart-badge" v-if="totalItems > 0">{{ totalItems }}</span>
        </button>
      </nav>

    </div>

    <LoginModal v-if="isLoginOpen" @close="isLoginOpen = false" />
    <CartModal v-if="cart.isOpen" />

  </header>
</template>

<style scoped>
.site-header {
  background-color: #221f1f; 
  color: white;
  height: 72px;
  display: flex;
  align-items: center;
  position: relative; 
  z-index: 50; 
}

.container {
  display: flex;
  align-items: center;
  gap: 20px;
  max-width: 1640px;
  width: 100%;
  margin: 0 auto;
  padding: 0 16px;
}

.logo-wrapper {
  display: flex;
  align-items: center;
  text-decoration: none;
}
.logo-img {
  height: 40px; 
  width: auto;
}

.catalog-button {
  background-color: transparent; 
  border: 1px solid rgba(255, 255, 255, 0.5); 
  border-radius: 8px;
  height: 40px;
  padding: 0 16px;
  font-size: 16px;
  font-weight: 600;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
  transition: border-color 0.2s;
}

.catalog-button:hover {
  border-color: white; 
}
.cat-icon {
  opacity: 1;
}

.header-search {
  flex-grow: 1;
}

.user-actions {
  display: flex;
  gap: 16px;
  align-items: center;
}

.icon-btn {
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  transition: opacity 0.2s;
}
.icon-btn:hover {
  opacity: 0.8;
}

.hamburger-menu {
  margin-right: 5px;
}

.cart-btn-wrapper {
  position: relative;
}
.cart-badge {
  position: absolute;
  top: -2px;
  right: -5px;
  background-color: #00a046;
  color: white;
  font-size: 10px;
  font-weight: bold;
  padding: 2px 5px;
  border-radius: 10px;
  min-width: 16px;
  text-align: center;
}
</style>