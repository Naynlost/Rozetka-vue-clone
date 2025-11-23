<template>
  <aside class="category-sidebar">
    <div class="sidebar-content">
      
      <div class="promo-section">
        <a href="#" class="special-card rozetka-card">
          <img src="https://content1.rozetka.com.ua/files/images/original/614095522.svg" class="card-icon" alt="Card">
          <div class="card-text">
            <span class="title">Картка Rozetka</span>
            <span class="subtitle">Персональні знижки та бонуси</span>
          </div>
        </a>
        <a href="#" class="special-card smart-card">
          <img src="https://content.rozetka.com.ua/files/images/original/614009574.svg" class="card-icon" alt="Smart">
          <div class="card-text">
            <span class="title">Підписка Smart</span>
            <span class="subtitle">Безкоштовна доставка</span>
          </div>
        </a>
      </div>

      <nav class="main-nav">
        <ul>
          <li v-for="(cat, index) in categories" :key="index">
            <a href="#" class="nav-link">
              <span class="nav-icon" v-html="cat.icon"></span>
              <span class="nav-text">{{ cat.name }}</span>
            </a>
          </li>
        </ul>
      </nav>

      <div class="sidebar-footer-links">
        <div class="footer-group">
          <h3>Допомога</h3>
          <a href="#">Доставка та оплата</a>
          <a href="#">Кредит</a>
          <a href="#">Гарантія</a>
        </div>
        
        <div class="footer-group">
          <h3>Сервіси</h3>
          <a href="#">Бонусний рахунок</a>
          <a href="#">Rozetka Обмін</a>
        </div>

        <div class="app-buttons">
          <p>Встановлюйте наші застосунки</p>
          <div class="badges">
            <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store">
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play">
          </div>
        </div>

         <div class="social-links">
            <span>Ми в соціальних мережах</span>
            <div class="social-icons">
               <div class="s-icon" style="background: #0088cc">T</div>
               <div class="s-icon" style="background: #1877f2">F</div>
               <div class="s-icon" style="background: #ff0000">Y</div>
               <div class="s-icon" style="background: #c32aa3">I</div>
            </div>
         </div>
      </div>

    </div>
  </aside>
</template>

<script setup>

const categories = [
  { name: "Ноутбуки та комп’ютери", icon: '<svg viewBox="0 0 24 24" width="24" height="24"><path d="M20 16V5c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v11H2v2h20v-2h-2zm-2-11v9H6V5h12zM4 18h16v1H4v-1z" fill="#797878"/></svg>' },
  { name: "Смартфони, ТВ і електроніка", icon: '<svg viewBox="0 0 24 24" width="24" height="24"><path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z" fill="#797878"/></svg>' },
  { name: "Товари для геймерів", icon: '<svg viewBox="0 0 24 24" width="24" height="24"><path d="M21 6H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-10 7H8v3H6v-3H3v-2h3V8h2v3h3v2zm4.5 2c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4-3c-.83 0-1.5-.67-1.5-1.5S18.67 9 19.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" fill="#797878"/></svg>' },
  { name: "Побутова техніка", icon: '<svg viewBox="0 0 24 24" width="24" height="24"><path d="M6 2h12v20H6V2zm2 2v16h8V4H8zm2 2h4v2h-4V6z" fill="#797878"/></svg>' }, // Basit çizim
  { name: "Товари для дому", icon: '<svg viewBox="0 0 24 24" width="24" height="24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" fill="#797878"/></svg>' },
  { name: "Інструменти та автотовари", icon: '<svg viewBox="0 0 24 24" width="24" height="24"><path d="M20.71 5.63l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-3.12 3.12-1.93-1.91-1.41 1.41 1.42 1.42L3 16.25V21h4.75l8.92-8.92 1.42 1.42 1.41-1.41-1.92-1.92 3.12-3.12c.4-.4.4-1.03.01-1.42zM6.92 19H5v-1.92l8.06-8.06 1.92 1.92L6.92 19z" fill="#797878"/></svg>' },
  { name: "Сантехніка та ремонт", icon: '<svg viewBox="0 0 24 24" width="24" height="24"><path d="M20 12c0-4.42-3.58-8-8-8S4 7.58 4 12h16zm-8-6c3.31 0 6 2.69 6 6H6c0-3.31 2.69-6 6-6z" fill="#797878"/></svg>' }, // Basit Küvet benzeri
  { name: "Дача, сад і город", icon: '<svg viewBox="0 0 24 24" width="24" height="24"><circle cx="12" cy="12" r="3" fill="#797878"/><path d="M19 12c0-3.87-3.13-7-7-7S5 8.13 5 12s3.13 7 7 7 7-3.13 7-7zM7 12c0-2.76 2.24-5 5-5s5 2.24 5 5-2.24 5-5 5-5-2.24-5-5z" fill="#797878"/></svg>' },
  { name: "Спорт і захоплення", icon: '<svg viewBox="0 0 24 24" width="24" height="24"><circle cx="12" cy="12" r="10" stroke="#797878" stroke-width="2" fill="none"/></svg>' },
  { name: "Одяг, взуття та прикраси", icon: '<svg viewBox="0 0 24 24" width="24" height="24"><path d="M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z" fill="#797878"/></svg>' },
  { name: "Краса та здоров’я", icon: '<svg viewBox="0 0 24 24" width="24" height="24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zM12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" fill="#797878"/></svg>' },
  { name: "Дитячі товари", icon: '<svg viewBox="0 0 24 24" width="24" height="24"><circle cx="12" cy="12" r="8" stroke="#797878" fill="none"/><circle cx="9" cy="10" r="1" fill="#797878"/><circle cx="15" cy="10" r="1" fill="#797878"/><path d="M12 16c2 0 3-2 3-2H9s1 2 3 2z" fill="#797878"/></svg>' },
  { name: "Зоотовари", icon: '<svg viewBox="0 0 24 24" width="24" height="24"><circle cx="12" cy="12" r="3" fill="#797878"/><circle cx="6" cy="6" r="2" fill="#797878"/><circle cx="18" cy="6" r="2" fill="#797878"/><circle cx="4" cy="14" r="2" fill="#797878"/><circle cx="20" cy="14" r="2" fill="#797878"/></svg>' },
  { name: "Офіс, школа, книги", icon: '<svg viewBox="0 0 24 24" width="24" height="24"><path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H8V4h12v12z" fill="#797878"/></svg>' },
  { name: "Алкогольні напої та продукти", icon: '<svg viewBox="0 0 24 24" width="24" height="24"><path d="M7 18h2v3h6v-3h2v-2H7v2zM12 3c-1.66 0-3 1.34-3 3v6h6V6c0-1.66-1.34-3-3-3z" fill="#797878"/></svg>' },
  { name: "Репетиція Чорної п’ятниці до -60%", icon: '<svg viewBox="0 0 24 24" width="24" height="24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z" fill="#797878"/><path d="M7 12l5 5 5-5z" fill="#797878"/></svg>' },
  { name: "Всі акції", icon: '<svg viewBox="0 0 24 24" width="24" height="24"><path d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 4 6.33 5.5 7z" fill="#797878"/></svg>' }
];
</script>

<style scoped>
.category-sidebar {
  width: 280px; 
  flex-shrink: 0;
  background-color: #fff;

  margin-right: 20px;
  padding-bottom: 40px;
}


.promo-section {
  padding-bottom: 8px;
  border-bottom: 8px solid #f4f4f4; 
}

.special-card {
  display: flex;
  align-items: center;
  padding: 10px 16px;
  text-decoration: none;
  margin-bottom: 1px; 
}

.special-card .card-icon {
  width: 32px;
  height: 32px;
  margin-right: 12px;
  flex-shrink: 0;
}

.special-card .card-text {
  display: flex;
  flex-direction: column;
}

.special-card .title {
  font-weight: bold;
  font-size: 14px;
  color: #221f1f;
  margin-bottom: 2px;
}

.special-card .subtitle {
  font-size: 11px;
  color: #797878;
  line-height: 1.2;
}

.rozetka-card { background-color: #e5fcf3; }
.smart-card { background-color: #fefadd; }


.main-nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.nav-link {
  display: flex;
  align-items: center;
  padding: 10px 16px;
  text-decoration: none;
  color: #221f1f; 
  transition: all 0.2s;
}

.nav-link:hover {
  background-color: #f4faf6; 
  color: #00a046; 
  text-decoration: underline;
}

.nav-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  margin-right: 12px;
  
}


.nav-link:hover .nav-icon :deep(path),
.nav-link:hover .nav-icon :deep(circle) {
  fill: #00a046; 
  stroke: #00a046;
}

.nav-text {
  font-size: 14px;
  line-height: 1.4;
}


.sidebar-footer-links {
  padding: 20px 16px;
  border-top: 8px solid #f4f4f4;
}

.footer-group {
  margin-bottom: 20px;
}

.footer-group h3 {
  font-size: 14px;
  font-weight: bold;
  color: #797878;
  margin-bottom: 10px;
}

.footer-group a {
  display: block;
  font-size: 14px;
  color: #3e77aa;
  text-decoration: none;
  margin-bottom: 8px;
}
.footer-group a:hover {
  text-decoration: underline;
  color: #ff5c00;
}


.app-buttons p {
  font-size: 13px;
  margin-bottom: 10px;
  color: #797878;
}

.badges {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

.badges img {
  height: 32px;
  cursor: pointer;
}


.social-links span {
  display: block;
  font-size: 13px;
  margin-bottom: 10px;
  color: #221f1f;
  font-weight: bold;
}

.social-icons {
  display: flex;
  gap: 10px;
}

.s-icon {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;
}
</style>