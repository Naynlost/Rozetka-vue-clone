<script setup>
import { RouterView } from 'vue-router'
import TopBanner from './components/TopBanner.vue'
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
</script>

<template>
  <div class="app-wrapper">
    <TopBanner />
    <AppHeader />

    <main>
      <RouterView />
    </main>

    <AppFooter />
  </div>
</template>

<style>

body {
  margin: 0 !important;
  padding: 0 !important;
  width: 100%;
  overflow-x: hidden;
  background-color: #f5f5f5;
  font-family: 'Helvetica Neue', Arial, sans-serif;
}
* { box-sizing: border-box; }
#app { width: 100%; max-width: 100%; display: block; }
</style>

<style scoped>
main {
  padding-top: 20px;
  padding-bottom: 50px;
  min-height: 600px; 
}
</style>