<template>
  <div class="card">
    <div class="card-inner">
      <div class="card-front">
        <img :src="item.img" alt="" />
      </div>
      <div class="card-back">
        <h1>{{ item.name }}</h1>
        <ul>
          <li><strong>Actor Name:</strong> {{ item.portrayed }}</li>
          <li><strong>Nickname:</strong> {{ item.nickname }}</li>
          <li><strong>Birthday:</strong> {{ item.birthday }}</li>
          <li><strong>Status:</strong> {{ item.status }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['item']
}
</script>

<style></style>
