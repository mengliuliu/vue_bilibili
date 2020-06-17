<template>
  <div class="userdetail">
    <div class="user_info">
      <div class="info_img">
        <img :src="userObj.user_img" alt="" v-if="userObj.user_img" />
        <img src="../../assets/user.jpg" alt="" v-else />
      </div>
      <div class="info_edit">
        <div class="edit_top">
          <p><span>0</span><span>粉丝</span></p>
          <p><span>54</span><span>关注</span></p>
          <p><span>0</span><span>获赞</span></p>
        </div>
        <div class="edit_bottom" @click="$router.push('/edit')">
          编辑资料
        </div>
      </div>
    </div>
    <div class="user_content">
      <h2>{{ userObj.name }}</h2>
      <p>{{ userObj.user_desc || '这个人很神秘，什么都没写' }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['userObj']
}
</script>

<style lang="less" scoped>
.userdetail {
  .user_info {
    height: 27.778vw;
    background-color: #fff;
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    .info_img {
      img {
        width: 22.222vw;
        height: 22.222vw;
        border-radius: 50%;
      }
    }
    .info_edit {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .edit_top {
        display: flex;
        p {
          padding: 0 5.556vw;
          display: flex;
          flex-direction: column;
          align-items: center;
          font-size: 3.889vw;
          color: #aaa;
        }
        p:nth-child(1),
        p:nth-child(2) {
          // display: inline-block;
          border-right: 0.278vw solid #ccc;
        }
      }
      .edit_bottom {
        font-size: 4.167vw;
        width: 58.333vw;
        height: 8.333vw;
        line-height: 8.333vw;
        text-align: center;
        border: 0.278vw solid #fb7a9f;
        border-radius: 1.111vw;
      }
    }
  }
  .user_content {
    background-color: white;
    h2 {
      padding: 2.778vw 0 0 2.222vw;
      margin: 0;
    }
    p {
      margin: 2.778vw 0 0 2.222vw;
    }
  }
}
</style>
