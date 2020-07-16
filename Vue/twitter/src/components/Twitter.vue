<template>
  <div class="w-full">
    <form
      class="mx-auto bg-white shadow-xl rounded px-8 pt-6 pb-8 mb-4 w-1/2 mt-8"
    >
      <div class="mb-4 flex flex-col">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="username"
          >Tweet something:</label
        >
        <div class="flex">
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="tweet"
            type="text"
            placeholder="Tweet"
            v-model="tweet"
          />
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2"
            :class="error != null ? 'cursor-not-allowed opacity-50' : ''"
            @click.prevent="addTweet"
            @keyup.enter="addTweet"
          >
            Tweet
          </button>
        </div>
        <p
          class="error text-gray-600 text-xs italic mt-1 text-red-600"
          v-if="error"
        >
          {{ error }}
        </p>
        <p
          class="text-gray-600 text-xs italic mt-1"
          :class="[limit >= 400 ? 'text-red-600' : '']"
        >
          {{ limit }}/400
        </p>
      </div>
    </form>

    <transition-group
      v-on:enter="enter"
      tag="div"
      class="flex flex-col"
      v-bind:css="false"
    >
      <span
        class="tweet mx-auto w-1/2 mt-6 bg-blue-500 bg-opacity-25 shadow-xl rounded px-8 pt-6 pb-8"
        v-for="(tw, index) in tweets"
        :key="index"
        >{{ tw }}</span
      >
    </transition-group>
  </div>
</template>

<script>
import { TweenMax, Bounce } from "gsap";

export default {
  data() {
    return {
      tweet: "",
      tweets: [],
      error: null
    };
  },
  methods: {
    addTweet() {
      this.isEmpty(this.tweet);
      if (!this.error && this.tweet !== "") {
        this.tweets.push(this.tweet);
        this.tweet = "";
      }
    },
    enter: function() {
      TweenMax.from(".tweet", 0.5, { ease: Bounce.easeOut, y: -60 });
      document.querySelector(".tweet").classList.remove("tweet");
    },
    isEmpty() {
      if (this.tweet.length === 0) {
        this.error = "Error: you have to tweet something :(";
      } else {
        this.error = null;
      }
    }
  },
  computed: {
    limit: function() {
      return this.tweet.length;
    }
  },
  watch: {
    limit: function() {
      if (this.limit >= 400) {
        this.error = "Error: character limit exceeded";
      } else {
        this.error = null;
      }
    }
  }
};
</script>

<style></style>
