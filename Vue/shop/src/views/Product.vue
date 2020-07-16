<template>
  <section class="text-gray-700 body-font overflow-hidden bg-white">
    <div class="container px-5 py-24 mx-auto">
      <div class="lg:w-4/5 mx-auto flex flex-wrap">
        <img
          alt="ecommerce"
          class="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200 shadow-xl"
          :src="book.image"
        />
        <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
          <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">
            {{ book.title }}
          </h1>
          <Rating :rating="book.rating" />
          <p class="leading-relaxed border-b-2 border-gray-200 mb-5 pb-5">
            {{ book.description }}
          </p>
          <div class="flex">
            <span class="title-font font-medium text-2xl text-gray-900"
              >Price: ${{ book.price }}</span
            >
          </div>
          <div class="flex justify-between mt-3">
            <button
              class="flex  text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded"
              @click="addToCart"
            >
              Add to cart
            </button>
            <router-link
              to="/"
              tag="button"
              class="flex text-white bg-gray-500 border-0 py-2 px-6 focus:outline-none hover:bg-gray-600 rounded mr-3"
              >Back</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Rating from '../components/RatingStars'
export default {
  data() {
    return {}
  },
  components: { Rating },
  computed: {
    book() {
      return this.$store.getters.getBookById(this.$route.params.id)
    }
  },
  methods: {
    addToCart() {
      this.$store.dispatch('addToCart', this.book.id)
    }
  }
}
</script>

<style></style>
