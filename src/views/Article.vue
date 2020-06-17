<template>
  <div>
    <!-- 导航栏区域 -->
    <nav-bar></nav-bar>
    <!-- 视频区域 -->
    <div class="video" v-if="model">
      <div>
        <video :src="model.content" controls></video>
      </div>
      <div>
        <span>{{ model.category.title }}</span>
        <span>{{ model.name }}</span>
      </div>
      <div>
        <span>{{ model.userinfo.name }}</span>
        <span>146.4万次观看</span>
        <span>5281弹幕</span>
        <span>{{ model.date }}</span>
      </div>
      <div>
        <div>
          <span class="icon-star-full"></span>
          <span>收藏</span>
        </div>
        <div>
          <span class="icon-box-add"></span>
          <span>缓存</span>
        </div>
        <div>
          <span class="icon-redo2"></span>
          <span>分享</span>
        </div>
      </div>
    </div>
    <!--  -->
    <div class="contentParent">
      <Content
        class="contentSon"
        v-for="(item, index) in commendList"
        :key="index"
        :contentItem="item"
      ></Content>
    </div>
    <div>
      <comment></comment>
    </div>
  </div>
</template>

<script>
import NavBar from '../components/common/NavBar.vue'
import Content from '../views/Content.vue'
import Comment from '../components/article/Comment.vue'
export default {
  components: {
    NavBar,
    Content,
    Comment
  },
  created() {
    this.getArticleInfo()
    this.getCommend()
    // console.log(this.$route)
  },
  data() {
    return {
      model: null,
      commendList: null
    }
  },
  methods: {
    async getArticleInfo() {
      const res = await this.$http.get('/article/' + this.$route.params.id)
      this.model = res.data[0]
      console.log(this.model)
    },
    async getCommend() {
      const res = await this.$http.get('/commend')
      this.commendList = res.data
      console.log(res)
    }
  },
  watch: {
    $route() {
      this.getArticleInfo()
      this.getCommend()
    }
  }
}
</script>

<style lang="less" scoped>
.video {
  width: 100%;
  video {
    width: 100%;
  }
  div:nth-child(2) {
    padding: 1.389vw 1.389vw;
    span:nth-child(1) {
      color: rgb(218, 173, 183);
      padding-right: 2.778vw;
    }
  }
  div:nth-child(3) {
    padding: 1.389vw 1.389vw;
    span {
      padding-right: 1.389vw;
      color: rgb(197, 197, 197);
      font-size: 3.889vw;
    }
    span:nth-child(1) {
      font-size: 5vw;
      color: black;
    }
  }
  div:nth-child(4) {
    display: flex;
    align-items: center;
    padding: 0.833vw 2.778vw;
    div {
      padding-right: 4.167vw;
      span:nth-child(1) {
        color: rgb(197, 197, 197);
      }
      span:nth-child(2) {
        color: rgb(197, 197, 197);
      }
    }
  }
}

.contentParent {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  .contentSon {
    width: 45%;
  }
}
</style>
