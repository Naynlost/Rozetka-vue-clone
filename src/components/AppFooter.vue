<template>
  <footer class="app-footer">
    
    <div class="footer-top-line"></div>

    <div class="footer-main-content">
      <div class="container">

        <div class="footer-col social-apps-col">
          
          <div class="social-media">
            <span class="col-title">Ми в соціальних мережах</span>
            <div class="social-icons">
              <a href="#" class="social-icon-letter tiktok" title="TikTok">T</a>
              <a href="#" class="social-icon-letter telegram" title="Telegram">T</a>
              <a href="#" class="social-icon-letter facebook" title="Facebook">F</a>
              <a href="#" class="social-icon-letter youtube" title="YouTube">Y</a>
              <a href="#" class="social-icon-letter instagram" title="Instagram">I</a>
              <a href="#" class="social-icon-letter viber" title="Viber">V</a>
            </div>
          </div>
          
          <div class="app-downloads">
            <span class="col-title">Скануйте QR-код та встановлюйте застосунок</span>
            <div class="app-badges">
              <img src="https://xl-static.rozetka.com.ua/h-8f306dde/assets/img/design/futtersite_qr_code.png" alt="QR Code" class="qr-code">
              
              <div class="app-store-badges">
                <a href="#">
                  <img src="https://xl-static.rozetka.com.ua/h-8f306dde/assets/img/design/button-appstore-ua.svg" alt="App Store">
                </a>
                <a href="#">
                  <img src="https://xl-static.rozetka.com.ua/h-8f306dde/assets/img/design/button-google-play-ua.svg" alt="Google Play">
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="footer-col">
          <span class="col-title">Інформація про компанію</span>
          <ul>
            <li><a href="#">Про нас</a></li>
            <li><a href="#">Умови використання сайту</a></li>
            <li><a href="#">Вакансії</a></li>
            <li><a href="#">Контакти</a></li>
            <li><a href="#">Всі категорії</a></li>
            <li><a href="#">Black Friday 2025</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <span class="col-title">Допомога</span>
          <ul>
            <li><a href="#">Доставка та оплата</a></li>
            <li><a href="#">Кредит</a></li>
            <li><a href="#">Гарантія</a></li>
            <li><a href="#">Повернення товару</a></li>
            <li><a href="#">Сервісні центри</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <span class="col-title">Сервіси</span>
          <ul>
            <li><a href="#">Бонусний рахунок</a></li>
            <li><a href="#">Подарункові сертифікати</a></li>
            <li><a href="#">Rozetka Обмін</a></li>
            <li><a href="#">Корпоративним клієнтам</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <span class="col-title">Партнерам</span>
          <ul>
            <li><a href="#">Продавати на Rozetці</a></li>
            <li><a href="#">Співпраця з нами</a></li>
            <li><a href="#">Франчайзинг</a></li>
            <li><a href="#">Оренда приміщень</a></li>
          </ul>
        </div>

      </div>
    </div>

    <div class="footer-bottom">
      <div class="container">
        <div class="payment-methods">
          <img src="https://content1.rozetka.com.ua/files/images/payments/original/rozetka_payments_visa_mastercard_verified_securecode_s.svg" alt="Visa Mastercard">
        </div>
        <div class="copyright">
          © 2001–2025 Інтернет-магазин «Розетка™» — щоразу що треба ТМ використовується на підставі ліцензії правоволодільця RozetkaLTD
        </div>
      </div>
    </div>

  </footer>
</template>

<script setup>
</script>

<style scoped>
.app-footer {
  background-color: #f5f5f5;
  padding-top: 20px;
  border-top: 1px solid #e0e0e0;
}

.footer-top-line {
  height: 4px;
  background-color: #00a046;
  margin-bottom: 30px;
}

.footer-main-content {
  padding-bottom: 30px;
}

.app-footer .container {
  max-width: 1640px;
  margin: 0 auto;
  padding: 0 16px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 30px;
}

.footer-col {
  flex: 1;
  min-width: 180px;
}

.col-title {
  display: block;
  font-weight: bold;
  font-size: 14px;
  color: #221f1f;
  margin-bottom: 15px;
}

.footer-col ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-col li {
  margin-bottom: 8px;
}

.footer-col a {
  text-decoration: none;
  color: #3e77aa;
  font-size: 13px;
  transition: color 0.2s;
}

.footer-col a:hover {
  color: #ff5c00;
  text-decoration: underline;
}


.social-media .social-icons {
  display: flex;
  gap: 10px;
  margin-top: 10px;
}

.social-icon-letter {
  width: 32px;
  height: 32px;
  border-radius: 50%; 
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  font-size: 16px;
  text-decoration: none !important;
  transition: opacity 0.2s;
}

.social-icon-letter:hover {
  opacity: 0.8;
  text-decoration: none;
}


.tiktok { background-color: #000000; }
.telegram { background-color: #2AABEE; }
.facebook { background-color: #3b5998; }
.youtube { background-color: #FF0000; }
.instagram { 
  background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%); 
}
.viber { background-color: #7360f2; }



.app-downloads {
  margin-top: 30px;
}

.app-downloads .app-badges {
  display: flex;
  align-items: flex-start; 
  gap: 15px;
  margin-top: 10px;
}

.app-downloads .qr-code {
  width: 80px; 
  height: 80px;
  object-fit: contain;
}

.app-store-badges {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.app-store-badges img {
  height: 32px; 
  width: auto;
  display: block;
}


.footer-bottom {
  border-top: 1px solid #e0e0e0;
  padding: 20px 0;
  margin-top: 30px;
}

.footer-bottom .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 15px;
}

.payment-methods img {
  height: 24px;
  display: block;
}

.copyright {
  font-size: 11px;
  color: #797878;
  text-align: right;
}

@media (max-width: 768px) {
  .app-footer .container {
    flex-direction: column;
    align-items: flex-start;
  }
  .footer-bottom .container {
    flex-direction: column;
    align-items: flex-start;
  }
  .copyright {
    text-align: left;
  }
}
</style>