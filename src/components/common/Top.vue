<template>
  <div>
    <div class="top">
      <div></div>
      <div>{{ middleTop }}</div>
      <div>
        <slot name="right"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['middleTop']
}
</script>

<style lang="less" scoped>
.top {
  height: 45px;
  background-color: white;
  div {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 4.444vw;
  }
}

</style>
