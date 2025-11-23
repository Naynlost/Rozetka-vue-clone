
import { reactive, computed } from 'vue';


export const cart = reactive({
  items: [],
  isOpen: false 
});

// Sepete Ekleme Fonksiyonu
export const addToCart = (product) => {
  
  const existingItem = cart.items.find(item => item.id === product.id);

  if (existingItem) {
    // Varsa sayısını artır
    existingItem.quantity++;
  } else {
    // Yoksa yeni olarak ekle
    cart.items.push({
      ...product,
      quantity: 1
    });
  }
  

};

// Sepetten Silme 
export const removeFromCart = (productId) => {
  const index = cart.items.findIndex(item => item.id === productId);
  if (index > -1) {
    cart.items.splice(index, 1);
  }
};

// Toplam Fiyat
export const totalPrice = computed(() => {
  return cart.items.reduce((total, item) => total + (item.price * item.quantity), 0);
});

// Toplam Ürün Sayısı
export const totalItems = computed(() => {
  return cart.items.reduce((total, item) => total + item.quantity, 0);
});