<template>
  <div class="modal-backdrop">
    <div class="modal">
      <h1>Winner!</h1>
      <button
        type="button"
        class="btn-green"
        @click="close"
      >
        Close
      </button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    close() {
      this.$emit("close");
    }
  }
};
</script>

<style>
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;
}

.modal {
  background: #ffffff;
  box-shadow: 2px 2px 20px 1px;
  padding: 32px 64px;
  text-align: center;
}

.btn-green {
  color: #fff;
  background: #f44c4e;
}
</style>
