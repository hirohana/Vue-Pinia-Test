import { defineStore } from "pinia";
import shop from "../api/shops";

export const useStoreProducts = defineStore("products", {
  state: () => ({
    products: [],
  }),
  actions: {
    getProducts() {
      shop.getProducts((products) => (this.products = products));
    },
    decrementInventory(productId) {
      const product = this.products.find((product) => product.id === productId);
      product.inventory--;
    },
  },
});
