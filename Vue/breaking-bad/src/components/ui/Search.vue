<template>
  <section class="search">
    <form>
      <input
        type="text"
        class="form-control"
        placeholder="Search characters"
        v-model="value"
        autoFocus
        @input="onChange(value)"
      />
    </form>
  </section>
</template>

<script>
export default {
  props: {
    onChange: {
      type: Function
    }
  },
  data() {
    return {
      value: ''
    }
  }
}
</script>

<style></style>
