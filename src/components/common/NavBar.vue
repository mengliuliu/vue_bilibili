<template>
  <div class="navbar">
    <div class="logo">
      <img src="../../assets/logo.png" @click="$router.push('/')" alt="" />
    </div>
    <div>
      <div><van-icon name="search" class="iconNav" /></div>
    </div>
    <div class="user">
      <img :src="imgUrl" alt="" @click="$router.push('/userinfo')" v-if="imgUrl"/>
      <img src="../../assets/default_img.jpg" alt="" @click="$router.push('/login')" v-else/>
      <div>下载APP</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgUrl: ''
    }
  },
  async mounted() {
    if (localStorage.getItem('token')) {
      const { data: res } = await this.$http.get(
        '/user/' + localStorage.getItem('id')
      )
      console.log('导航栏：' + res)
      console.log(res)
      this.imgUrl = res[0].user_img
    }
  }
}
</script>

<style lang="less" scoped>
.navbar {
  height: 13.056vw;
  display: flex;
  background-color: white;
  div:nth-child(1) {
    width: 25vw;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 100%;
    }
  }
  div:nth-child(2) {
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    padding: 0 1.389vw;
    div {
      background-color: #f4f4f4;
      height: 6.667vw;
      width: 100%;
      border-radius: 3.333vw;
      position: relative;
      .iconNav {
        color: #aaa;
        position: absolute;
        left: 2.778vw;
        top: 50%;
        transform: translate(0, -50%);
      }
    }
  }
  div:nth-child(3) {
    display: flex;
    justify-content: center;
    align-items: center;
    > div {
      margin: 0 2.778vw;
      font-size: 3.611vw;
      background-color: #fb7299;
      padding: 1.389vw 2.778vw;
      text-align: center;
      border-radius: 0.833vw;
      color: white;
    }
    img {
      width: 6.944vw;
      height: 6.944vw;
    }
  }
}

// .navbar {
//     display: flex;
//     justify-content: space-around;
//     background-color: #ccc;
//     .logo {
//         height: 13.889vw;
//         img {
//             height: 13.889vw;
//         }
//     }
//     .user {
//         height: 13.889vw;
//         img {
//             height: 13.889vw;
//         }
//     }
// }
</style>
