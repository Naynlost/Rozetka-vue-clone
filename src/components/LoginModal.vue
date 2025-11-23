<template>
  <div class="modal-backdrop" @click="$emit('close')">
    <div class="modal-content" @click.stop>
      
      <div class="modal-header">
        <h2>Вхід</h2>
        <button class="close-btn" @click="$emit('close')">✕</button>
      </div>

      <div class="modal-body">
        
        <label class="input-label">Номер телефону</label>
        <div class="input-group">
          <input 
            type="text" 
            class="phone-input"
            v-model="phoneNumber" 
            @input="handlePhoneInput"
            placeholder="+38"
          >
        </div>

        <button class="submit-btn">Продовжити</button>

        <p class="legal-text">
          Продовжуючи, ви підтверджуєте, що згодні увійти до 
          <a href="#">облікового запису Rozetka</a> та надаєте згоду на 
          <a href="#">обробку персональних даних</a>
        </p>

        <div class="divider">
          <span>або</span>
        </div>

        <button class="social-btn google-btn">
          <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
          Продовжити через Google
        </button>

        <button class="social-btn apple-btn">
          <svg width="20" height="20" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 43.7-25.6 72.1 26.7 2 55-15.9 69.5-34.5z"/></svg>
          Продовжити через Apple
        </button>

        <div class="other-methods">
          <a href="#">Інші способи авторизації ⌄</a>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const emit = defineEmits(['close']);


const phoneNumber = ref('+38');


const handlePhoneInput = (event) => {
  let value = event.target.value;


  if (!value.startsWith('+38')) {
    phoneNumber.value = '+38';
    return;
  }


  let inputPart = value.substring(3);


  inputPart = inputPart.replace(/\D/g, '');


  if (inputPart.length > 10) {
    inputPart = inputPart.slice(0, 10);
  }


  phoneNumber.value = '+38' + inputPart;
};
</script>

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
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background-color: white;
  width: 400px;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.2);
  padding: 24px;
  position: relative;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.modal-header h2 {
  font-size: 24px;
  color: #221f1f;
  margin: 0;
}

.close-btn {
  background: none;
  border: none;
  font-size: 24px;
  color: #a6a5a5;
  cursor: pointer;
}

.input-label {
  display: block;
  font-size: 12px;
  color: #797878;
  margin-bottom: 4px;
}

.phone-input {
  width: 100%;
  padding: 10px 12px;
  font-size: 16px;
  border: 1px solid #d2d2d2;
  border-radius: 4px;
  color: #221f1f;
  outline: none;
}
.phone-input:focus {
  border-color: #00a046;
}

.submit-btn {
  width: 100%;
  background-color: #00a046;
  color: white;
  border: none;
  padding: 12px;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  margin-top: 15px;
  margin-bottom: 10px;
}
.submit-btn:hover {
  background-color: #009040;
}

.legal-text {
  font-size: 11px;
  color: #797878;
  line-height: 1.4;
  text-align: center;
  margin-bottom: 15px;
}
.legal-text a {
  color: #3e77aa;
  text-decoration: none;
}

.divider {
  display: flex;
  align-items: center;
  text-align: center;
  color: #797878;
  font-size: 12px;
  margin: 15px 0;
}
.divider::before, .divider::after {
  content: '';
  flex: 1;
  border-bottom: 1px solid #e9e9e9;
}
.divider span {
  padding: 0 10px;
}

.social-btn {
  width: 100%;
  background-color: white;
  border: 1px solid #d2d2d2;
  border-radius: 4px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-size: 16px;
  color: #221f1f;
  cursor: pointer;
  margin-bottom: 10px;
  transition: background-color 0.2s;
}
.social-btn:hover {
  background-color: #f5f5f5;
}

.other-methods {
  text-align: center;
  margin-top: 15px;
}
.other-methods a {
  color: #3e77aa;
  text-decoration: none;
  font-size: 14px;
}
</style>