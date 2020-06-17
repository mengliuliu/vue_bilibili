<template>
  <div>
    <van-field
      :label="label"
      :type="type"
      :placeholder="placeholder"
      v-model="content"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      content: ''
    }
  },
  methods: {
    handleRulg() {
      const rul = new RegExp(this.rule)
      if (rul.test(this.content)) {
        console.log('正则校验成功')
        this.$emit('inputChange', this.content)
      }
    }
  },
  props: ['label', 'type', 'rule', 'placeholder'],
  watch: {
    content() {
      this.handleRulg()
    }
  }
}
</script>

<style lang="less" scoped></style>
