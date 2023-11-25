<script setup lang="ts">
import ProductList from "@/components/ProductList.vue";
import ShoppingCart from "@/components/ShoppingCart.vue";
</script>

<template>
  <div id="app">
    <h1>Pinia入門（カート)</h1>
    <hr />
    <h2>商品一覧</h2>
    <ProductList />
    <hr />
    <ShoppingCart />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
