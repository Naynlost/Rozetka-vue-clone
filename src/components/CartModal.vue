<script setup>
import { cart, removeFromCart, totalPrice } from '../cart.js';

// Adet artırma azaltma
const increaseQty = (item) => item.quantity++;
const decreaseQty = (item) => {
  if (item.quantity > 1) item.quantity--;
};
</script>

<template>
  <div class="modal-backdrop" @click="cart.isOpen = false">
    <div class="modal-content" @click.stop>
      
      <div class="modal-header">
        <h2>Кошик</h2>
        <button class="close-btn" @click="cart.isOpen = false">✕</button>
      </div>

      <div v-if="cart.items.length === 0" class="empty-cart">
        <p>Кошик порожній 😔</p>
        <button class="continue-btn" @click="cart.isOpen = false">Почати покупки</button>
      </div>

      <div v-else>
        <div class="cart-items">
          <div v-for="item in cart.items" :key="item.id" class="cart-item">
            
            <img :src="item.img || item.imageUrl" class="item-img" alt="Product">
            
            <div class="item-info">
              <a href="#" class="item-title">{{ item.title }}</a>
              <div class="seller">Продавець: Rozetka</div>
            </div>

            <div class="item-controls">
              <div class="qty-control">
                <button @click="decreaseQty(item)" :disabled="item.quantity <= 1">-</button>
                <input type="text" :value="item.quantity" readonly>
                <button @click="increaseQty(item)">+</button>
              </div>
              
              <div class="item-price">
                {{ item.price * item.quantity }} ₴
              </div>

              <button class="delete-btn" @click="removeFromCart(item.id)">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <path d="M6 19C6 20.1 6.9 21 8 21H16C17.1 21 18 20.1 18 19V7H6V19ZM19 4H15.5L14.5 3H9.5L8.5 4H5V6H19V4Z" fill="#797878"/>
                </svg>
              </button>
            </div>

          </div>
        </div>

        <div class="cart-footer">
          <div class="footer-left">
            <button class="continue-link" @click="cart.isOpen = false">Продовжити покупки</button>
          </div>
          <div class="footer-right">
            <div class="total-price">{{ totalPrice }} ₴</div>
            <button class="checkout-btn">Оформити замовлення</button>
          </div>
        </div>
        
      </div>

    </div>
  </div>
</template>

<style scoped>
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 50px;
  z-index: 2000;
}

.modal-content {
  background-color: white;
  width: 960px;
  max-width: 95%;
  border-radius: 8px;
  box-shadow: 0 5px 25px rgba(0,0,0,0.2);
  padding: 24px;
  max-height: 90vh;
  overflow-y: auto;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e9e9e9;
  padding-bottom: 15px;
  margin-bottom: 20px;
}

.modal-header h2 {
  font-size: 24px;
  color: #221f1f;
  margin: 0;
}

.close-btn {
  font-size: 24px;
  background: none;
  border: none;
  cursor: pointer;
  color: #a6a5a5;
}

.empty-cart {
  text-align: center;
  padding: 40px;
}
.continue-btn {
  margin-top: 15px;
  padding: 10px 20px;
  background-color: #00a046;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

/* Ürün Listesi */
.cart-item {
  display: flex;
  align-items: center;
  padding-bottom: 20px;
  margin-bottom: 20px;
  border-bottom: 1px solid #e9e9e9;
}

.item-img {
  width: 80px;
  height: 80px;
  object-fit: contain;
  margin-right: 20px;
}

.item-info {
  flex-grow: 1;
}

.item-title {
  font-size: 16px;
  color: #333;
  text-decoration: none;
  display: block;
  margin-bottom: 5px;
}
.seller {
  font-size: 12px;
  color: #797878;
}

.item-controls {
  display: flex;
  align-items: center;
  gap: 30px;
}


.qty-control {
  display: flex;
  border: 1px solid #e9e9e9;
  border-radius: 4px;
}
.qty-control button {
  width: 32px;
  height: 32px;
  background: white;
  border: none;
  cursor: pointer;
  font-size: 18px;
  color: #00a046;
  display: flex;
  align-items: center;
  justify-content: center;
}
.qty-control button:disabled {
  color: #ccc;
}
.qty-control input {
  width: 40px;
  text-align: center;
  border: none;
  border-left: 1px solid #e9e9e9;
  border-right: 1px solid #e9e9e9;
  font-size: 14px;
}

.item-price {
  font-size: 20px;
  font-weight: bold;
  color: #221f1f;
  min-width: 80px;
  text-align: right;
}

.delete-btn {
  background: none;
  border: none;
  cursor: pointer;
  padding: 5px;
  opacity: 0.5;
  display: flex;
  align-items: center;
}
.delete-btn:hover { opacity: 1; }

/* Footer */
.cart-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #f5f5f5;
  border: 1px solid #00a046;
  border-radius: 4px;
  margin-top: 20px;
}

.continue-link {
  background: none;
  border: none;
  color: #3e77aa;
  cursor: pointer;
  font-size: 14px;
}
.continue-link:hover { text-decoration: underline; }

.footer-right {
  display: flex;
  align-items: center;
  gap: 20px;
}

.total-price {
  font-size: 24px;
  font-weight: bold;
  color: #221f1f;
}

.checkout-btn {
  background-color: #00a046;
  color: white;
  border: none;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 4px;
  cursor: pointer;
}
.checkout-btn:hover { background-color: #009040; }
</style>