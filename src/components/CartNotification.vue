<template>
  <div class="cart-notification">
    
    <div class="info-section">
      <div class="cart-icon-wrapper">
        <span class="icon">🛒</span>
        <span class="check-badge">✓</span>
      </div>
      
      <div class="text-info">
        <span class="count-text">У кошику <b>1 товар</b></span>
        <span class="price-text">на суму <b>149 ₴</b></span>
      </div>
    </div>

    <div class="product-preview">
      <img src="https://content2.rozetka.com.ua/goods/images/preview/300886064.jpg" alt="Kablo" class="preview-img">
      <span class="product-name">Кабель для роутера від павербанка...</span>
    </div>

    <div class="action-buttons">
      <a href="#" class="go-to-cart">Перейти до кошика</a>
      <button class="checkout-btn">Оформити замовлення</button>
    </div>

  </div>
</template>

<script setup>
</script>

<style scoped>
.cart-notification {
  border: 1px solid #e9e9e9;
  background-color: #fff;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px; 
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
}

.info-section {
  display: flex;
  align-items: center;
  gap: 15px;
}

.cart-icon-wrapper {
  position: relative;
  font-size: 24px;
}
.check-badge {
  position: absolute;
  top: -5px;
  right: -5px;
  background-color: #00a046;
  color: white;
  font-size: 10px;
  border-radius: 50%;
  padding: 2px 4px;
}

.text-info {
  display: flex;
  flex-direction: column;
  font-size: 13px;
  color: #222;
}

.product-preview {
  display: flex;
  align-items: center;
  gap: 10px;
  max-width: 400px;
}

.preview-img {
  width: 40px;
  height: 40px;
  object-fit: contain;
}

.product-name {
  font-size: 13px;
  color: #333;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 300px;
}

.action-buttons {
  display: flex;
  align-items: center;
  gap: 20px;
}

.go-to-cart {
  color: #3e77aa;
  text-decoration: none;
  font-size: 14px;
}
.go-to-cart:hover {
  text-decoration: underline;
}

.checkout-btn {
  background-color: #00a046; 
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
}
.checkout-btn:hover {
  background-color: #008e3e;
}
</style>