<script setup>
import { ref, onMounted, onUnmounted } from 'vue';


const slides = [
  { 
    id: 1, 
    image: 'https://content.rozetka.com.ua/banner_main/images_ua/big/623954901.jpg', 
    alt: 'Black Friday İndirimleri' 
  },
  { 
    id: 2, 
    image: 'https://content.rozetka.com.ua/banner_main/images_ua/big/624401805.jpg', 
    alt: 'Elektronik Fırsatları' 
  },
  { 
    id: 3, 
    image: 'https://content.rozetka.com.ua/banner_main/images_ua/big/622438778.jpg', 
    alt: 'Kış Sezonu' 
  },
  { 
    id: 4, 
    image: 'https://content2.rozetka.com.ua/banner_main/images_ua/big/622029946.jpg', 
    alt: 'Özel Teklifler' 
  }
];

const currentSlideIndex = ref(0);
let autoSlideInterval = null;

const nextSlide = () => {
  if (currentSlideIndex.value === slides.length - 1) {
    currentSlideIndex.value = 0;
  } else {
    currentSlideIndex.value++;
  }
};

const prevSlide = () => {
  if (currentSlideIndex.value === 0) {
    currentSlideIndex.value = slides.length - 1;
  } else {
    currentSlideIndex.value--;
  }
};


const startAutoSlide = () => {
  autoSlideInterval = setInterval(nextSlide, 5000);
};

const stopAutoSlide = () => {
  clearInterval(autoSlideInterval);
};

onMounted(() => {
  startAutoSlide();
});

onUnmounted(() => {
  stopAutoSlide();
});
</script>

<template>
  <div class="slider-container" @mouseenter="stopAutoSlide" @mouseleave="startAutoSlide">
    
    <button class="nav-btn prev-btn" @click="prevSlide">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 18L9 12L15 6" stroke="#221f1f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>
    
    <div class="slide-wrapper">
      <img 
        :src="slides[currentSlideIndex].image" 
        :alt="slides[currentSlideIndex].alt"
        class="slide-image"
      >
    </div>

    <button class="nav-btn next-btn" @click="nextSlide">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 18L15 12L9 6" stroke="#221f1f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>

    <div class="dots">
      <span 
        v-for="(slide, index) in slides" 
        :key="slide.id" 
        class="dot"
        :class="{ active: index === currentSlideIndex }"
        @click="currentSlideIndex = index"
      ></span>
    </div>

  </div>
</template>

<style scoped>
.slider-container {
  position: relative;
  width: 100%;
  

  height: 280px; 
  
  overflow: hidden;
  border-radius: 8px;
  margin-bottom: 25px;
  
  background-color: #fff; 
}

.slide-wrapper {
  width: 100%;
  height: 100%;
}

.slide-image {
  width: 100%;
  height: 100%;
  

  object-fit: contain; 
  object-position: center;
  display: block;
}


.nav-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(255, 255, 255, 0.9);
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  opacity: 0;
  transition: opacity 0.3s;
  box-shadow: 0 2px 5px rgba(0,0,0,0.2);
}

.slider-container:hover .nav-btn {
  opacity: 1;
}

.nav-btn:hover { background-color: white; }
.prev-btn { left: 20px; }
.next-btn { right: 20px; }


.dots {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
}

.dot {
  width: 8px;
  height: 8px;
  background-color: rgba(0, 0, 0, 0.2); 
  border-radius: 50%;
  cursor: pointer;
}

.dot.active {
  background-color: #00a046; 
  transform: scale(1.2);
}
</style>