<template>
  <div class="promo-container">
    <a href="#" class="promo-card green-card">
      <div class="icon-wrapper">
        <span class="emoji">💳</span>
      </div>
      <div class="text-content">
        <div class="title">Картка Rozetka</div>
        <div class="subtitle">Персональні знижки та бонуси</div>
      </div>
    </a>

    <a href="#" class="promo-card yellow-card">
      <div class="icon-wrapper">
        <span class="emoji">🟡</span>
      </div>
      <div class="text-content">
        <div class="title">Підписка Smart</div>
        <div class="subtitle">Безкоштовна доставка з Rozetka</div>
      </div>
    </a>
  </div>
</template>

<script setup>
</script>

<style scoped>
.promo-container {
  margin-bottom: 16px;
}

.promo-card {
  display: flex;
  align-items: center;
  padding: 12px 16px;
  margin-bottom: 8px;
  border-radius: 4px;
  text-decoration: none;
  color: #222;
  transition: opacity 0.2s;
}

.promo-card:hover {
  opacity: 0.9;
}

.green-card {
  background-color: #e5fcf3; 
}

.yellow-card {
  background-color: #fefadd; 
}

.icon-wrapper {
  margin-right: 12px;
  font-size: 24px;
  display: flex;
  align-items: center;
}

.text-content {
  display: flex;
  flex-direction: column;
}

.title {
  font-size: 14px;
  font-weight: bold;
  line-height: 1.2;
  margin-bottom: 2px;
}

.subtitle {
  font-size: 12px;
  color: #555;
  line-height: 1.2;
}
</style>