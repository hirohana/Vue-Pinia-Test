<script setup lang="ts">
import { useStoreCounter } from "../stores/counter";
const counter = useStoreCounter();

const patch = () => {
  counter.$patch({
    count: 100,
    user: {
      name: "Jane Doe",
    },
  });
};
</script>

<template>
  <h2>Hello Pinia</h2>
  <p>カウント:{{ counter.count }}</p>
  <button v-on:click="counter.$reset">Reset</button>
  <button @click="patch">Patch</button>
</template>
