<template>
  <section class="cards">
    <CharacterItem v-for="item in items" :key="item.char_id" :item="item" />
  </section>
</template>

<script>
import CharacterItem from './CharacterItem'
export default {
  props: ['items'],
  components: { CharacterItem }
}
</script>

<style></style>
