<template>
  <div class="content" @click="pathPush">
    <div class="imginfo">
      <img :src="contentItem.img" alt="" style="width: 100%;" />
      <div class="bottom">
        <span class="play icon-play2">21</span>
        <span class="comment icon-file-text">{{
          !contentItem.commentlen ? 0 : contentItem.commentlen
        }}</span>
      </div>
    </div>
    <p>{{ contentItem.name }}</p>
  </div>
</template>

<script>
export default {
  props: ['contentItem'],
  methods: {
    pathPush() {
      if (this.$route.path !== `article/${this.contentItem.id}`) {
        this.$router.push(`article/${this.contentItem.id}`)
      }
    }
  }
}
</script>

<style lang="less" scoped>
.content {
  p {
    font-size: 3.333vw;
    padding: 1.389vw 0;
  }
  .imginfo {
    position: relative;

    .bottom {
      .play {
        position: absolute;
        left: 0;
        bottom: 0;
      }
      .comment {
        position: absolute;
        right: 0;
        bottom: 0;
      }
      background: linear-gradient(0deg, rgba(0, 0, 0, 0.85), transparent);
    }
  }
}
</style>
