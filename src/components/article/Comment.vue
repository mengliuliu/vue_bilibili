<template>
  <div class="comment">
    <!-- 评论的文字信息 -->
    <p>
      <span>评论</span>
      <span>（4070）</span>
    </p>
    <!-- 用户头像和评论输入框，发表评论按钮 -->
    <div class="img">
      <img :src="myUser.user_img" alt="" v-if="myUser.user_img" />
      <img src="../../assets/default_img.jpg" alt="" v-else />
      <input v-model="comcontent" type="text" placeholder="说点什么吧" />
      <button @click="cmmentPublish">发表</button>
    </div>
    <!-- 评论内容 -->
    <div class="commentItemInfo">
      <div class="infoImg">
        <img :src="myUser.user_img" alt="" v-if="myUser.user_img" />
        <img src="../../assets/default_img.jpg" alt="" v-else />
      </div>
      <div class="infoContent">
        <p>
          <span>作者</span>
          <span>06-16</span>
        </p>
        <div>
          这是评论的内容
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      myUser: {},
      comcontent: ''
    }
  },
  methods: {
    async getMyUser() {
      const res = await this.$http.get('/user/' + localStorage.getItem('id'))
      this.myUser = res.data[0]
      console.log(this.myUser)
    },
    cmmentPublish() {
      if (
        !this.myuser &&
        !localStorage.getItem('token') &&
        !localStorage.getItem('id')
      ) {
        this.$router.push('/login')
        this.$msg.fail('请先登录')
        return
      }
      //   this.$emit('Postcomment', this.comcontent)
      this.comcontent = ''
    },
    async getCommentData() {
      const res = await this.$http.get('/comment/' + this.$route.params.id)
      console.log(res)
    }
  },
  created() {
    this.getCommentData()
    if (localStorage.getItem('token')) {
      this.getMyUser()
    }
  }
}
</script>

<style lang="less" scoped>
.comment {
  img {
    width: 25px;
    height: 25px;
    border-radius: 50%;
  }
  .img {
    padding: 10px;
    display: flex;

    input {
      outline: none;
      border: 0;
      background-color: #f4f4f4;
      border-radius: 3.611vw;
      font-size: 3.333vw;
      padding: 0 5.556vw 0 4.167vw;
      margin-left: 2.778vw;
    }
    button {
      outline: none;
      border: 0;
      border-radius: 3.333vw;
      background: #fb7299;
      color: white;
      font-size: 3.333vw;
      padding: 0 4.167vw;
    }
  }
  .commentItemInfo {
    margin: 2.778vw 0;
    display: flex;
    border-bottom: 1px solid #e7e7e7;
    .infoImg {
      margin-right: 2.778vw;
    }
    .infoContent {
      flex: 1;
      p {
        display: flex;
        justify-content: space-between;
        font-size: 3.611vw;
        color: #555;
        margin-bottom: 1.389vw;
      }
      div {
        font-size: 3.611vw;
      }
    }
  }
}
</style>
