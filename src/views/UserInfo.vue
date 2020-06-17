<template>
  <div>
    <nav-bar></nav-bar>
    <user-detail :userObj="userObj"></user-detail>
  </div>
</template>

<script>
import NavBar from '@/components/common/NavBar.vue'
import UserDetail from '../components/user/UserDetail.vue'
export default {
  data() {
    return {
      userObj: {}
    }
  },
  components: {
    NavBar,
    UserDetail
  },
  created() {
    // 当组件注册但还没挂载完时，调用用户信息数据函数
    this.userInfoData()
  },
  methods: {
    async userInfoData() {
      console.log('用户信息')
      const { data: res } = await this.$http.get(
        '/user/' + localStorage.getItem('id')
      )
      this.userObj = res[0]
      console.log(this.userObj)
      // console.log('用户信息数据' + res)
    }
  }
}
</script>

<style lang="less" scoped></style>
