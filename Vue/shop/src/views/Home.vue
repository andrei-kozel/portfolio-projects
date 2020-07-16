<template>
  <div class="home bg-gray-200 flex flex-wrap justify-center h-screen">
    <h1 class="text-6xl w-full mt-8">Perfect Book Store</h1>
    <div v-for="(book, index) in books" :key="index">
      <ProductCard :book="book" />
    </div>
  </div>
</template>

<script>
import ProductCard from '../components/ProductCard'

export default {
  name: 'Home',
  data() {
    return {}
  },
  components: {
    ProductCard
  },
  computed: {
    books() {
      return this.$store.getters.getAllBooks
    }
  }
}
</script>
