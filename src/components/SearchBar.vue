<template>
  <form class="search-form" @submit.prevent>
    
    <div class="input-wrapper">
      
      <span class="search-icon left-icon">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="#888" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M21 21L16.65 16.65" stroke="#888" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </span>

      <input type="text" placeholder="Я шукаю...">
      
      <span class="search-icon right-icon">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#888" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
          <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
          <line x1="12" y1="19" x2="12" y2="23"></line>
          <line x1="8" y1="23" x2="16" y2="23"></line>
        </svg>
      </span>
      
    </div>

    <button class="search-button">
      Знайти
    </button>
    
  </form>
</template>

<script setup>
</script>

<style scoped>
.search-form {
  display: flex;
  width: 100%;
  height: 40px;
  

  min-width: 600px; 
}


@media (min-width: 1400px) {
  .search-form {
    min-width: 768px;
  }
}

.input-wrapper {
  position: relative;
  flex-grow: 1; 
  display: flex;
  align-items: center;
}

input {
  width: 100%;
  height: 100%;
  padding-left: 40px; 
  padding-right: 40px;
  border: none;
  border-radius: 3px 0 0 3px;
  font-size: 14px;
  color: #222;
  outline: none;
}

input::placeholder {
  color: #797878;
}

.search-icon {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
}

.left-icon {
  left: 12px;
}

.right-icon {
  right: 12px;
  cursor: pointer;
  pointer-events: auto;
}

.search-button {
  background-color: #00a046;
  color: white;
  border: none;
  padding: 0 32px; 
  border-radius: 0 3px 3px 0;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;
}

.search-button:hover {
  background-color: #009040;
}
</style>