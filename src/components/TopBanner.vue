<template>
  <div class="top-banner" style="background-color: rgb(40, 32, 141);">
    <a href="#" class="banner-link">
      
      <picture>
        <source 
          media="(max-width: 1023px)" 
          srcset="https://content2.rozetka.com.ua/banner_header/images_mobile_ua/original/620014252.jpg"
        >
        
        <source 
          media="(min-width: 1024px)" 
          srcset="https://content2.rozetka.com.ua/banner_header/image_ua/original/620014225.jpg"
        >
        
        <img 
          class="banner-image" 
          alt="Black Friday İndirimleri" 
          src="https://content2.rozetka.com.ua/banner_header/image_ua/original/620014225.jpg"
        >
      </picture>

    </a>
  </div>
</template>

<script setup>
</script>

<style scoped>
.top-banner {
  width: 100%;
  display: flex;
  justify-content: center;
  

  height: 32px; 
  
  overflow: hidden;

  background-color: rgb(40, 32, 141); 
}

.banner-link {
  display: block;
  width: 100%;
  height: 100%; 
  max-width: 100%; 
  text-align: center;
}

.banner-image {
  width: 100%;
  height: 100%;
  

  object-fit: contain; 
  object-position: center;
  display: block;
  margin: 0 auto;
}


@media (max-width: 1023px) {
  .top-banner {
  
    height: 40px; 
  }
}
</style>