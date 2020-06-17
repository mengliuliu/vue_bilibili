<template>
  <div>
    <top class="top" middleTop="注册bilibili">
      <div
        slot="right"
        style="font-size=3.611vw"
        @click="$router.push('/login')"
      >
        登录
      </div>
    </top>
    <login-text
      label="用户名"
      rule="^.{6,16}$"
      placeholder="请输入用户名"
      style="margin: 4.167vw 0;"
      @inputChange="res => (registerInfo.name = res)"
    ></login-text>
    <login-text
      label="账号"
      rule="^.{6,16}$"
      placeholder="请输入账号"
      @inputChange="res => (registerInfo.username = res)"
    ></login-text>
    <login-text
      label="密码"
      type="password"
      placeholder="请输入密码"
      rule="^.{6,16}$"
      @inputChange="res => (registerInfo.password = res)"
    ></login-text>
    <btn msg="注册" @registerSubmit="regSubmit"></btn>
  </div>
</template>

<script>
import Top from '@/components/common/Top.vue'
// import Text from '@/components/common/Text.vue'
import LoginText from '../components/common/Text.vue'
import Btn from '../components/common/Btn.vue'

export default {
  data() {
    return {
      registerInfo: {
        name: '',
        username: '',
        password: ''
      }
    }
  },
  components: {
    Top,
    LoginText,
    Btn
  },
  methods: {
    async regSubmit() {
      var rul = /^.{6,16}$/
      if (
        rul.test(this.registerInfo.name) &&
        rul.test(this.registerInfo.username) &&
        rul.test(this.registerInfo.password)
      ) {
        console.log('检验成功，准备发送请求')
        const { data: res } = await this.$http.post(
          'register',
          this.registerInfo
        )
        this.$msg.fail(res.msg)
        console.log(res)

        // 此时注册的用户合法
        if (res.code === 200) {
          // 保存用户id 和token 到本地
          localStorage.setItem('id', res.id)
          localStorage.setItem('token', res.objtoken)

          // 一秒后跳转到用户中心页面
          setTimeout(() => {
            this.$router.push('/userinfo')
          }, 1000)
        }
      } else {
        this.$msg.fail('格式不正确，请重新输入')
      }
    }
  }
}
</script>

<style lang="less" scoped>
.top {
  padding-top: 1.389vw;
}
</style>
