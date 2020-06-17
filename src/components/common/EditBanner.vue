<template>
  <div class="editBanner" @click="bannerClick">
    <span>{{ left }}</span>
    <span>
      <slot name="right"></slot>
    </span>
  </div>
</template>

<script>
export default {
  props: ['left'],
  methods: {
    bannerClick() {
      this.$emit('bannerClick')
    }
  }
}
</script>

<style lang="less" scoped>
.editBanner {
  background-color: white;
  padding: 4.167vw;
  color: #333;
  font-size: 3.889vw;
  border-bottom: 0.278vw solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
