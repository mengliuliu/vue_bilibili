<template>
  <div class="btnParent" @click="registerClick">
    <div class="btn">{{ msg }}</div>
  </div>
</template>

<script>
export default {
  props: ['msg'],
  methods: {
    registerClick() {
      this.$emit('registerSubmit')
    }
  }
}
</script>

<style lang="less" scoped>
.btnParent {
  padding: 2.778vw 1.389vw;
}
.btn {
  height: 12.5vw;
  background-color: #ff9db5;
  border-radius: 6.25vw;
  font-size: 4.444vw;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}
</style>
