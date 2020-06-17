<template>
  <div class="editViews">
    <nav-bar style="margin-bottom: 2.778vw"></nav-bar>
    <div class="uploadParent">
      <van-uploader :after-read="afterRead" class="uploadSon" />
      <edit-banner left="头像" class="viewImg">
        <img :src="model.user_img" slot="right" alt="" v-if="model.user_img" />
        <img src="../../src/assets/user.jpg" slot="right" alt="" v-else />
      </edit-banner>
    </div>
    <edit-banner left="昵称" @bannerClick="nameEdit">
      <a href="javascript:;" slot="right">{{ model.name }}</a>
    </edit-banner>
    <edit-banner left="账号">
      <a href="javascript:;" slot="right">{{ model.username }}</a>
    </edit-banner>
    <edit-banner left="性别" @bannerClick="genderEdit">
      <a href="javascript:;" slot="right">{{
        model.gender === '1' ? '男' : '女'
      }}</a>
    </edit-banner>
    <edit-banner left="个签" @bannerClick="descEdit">
      <p slot="right">{{ model.user_desc }}</p>
    </edit-banner>

    <div class="backView" @click="$router.back()">返回个人中兴</div>

    <!-- 昵称的弹出框 -->
    <van-dialog
      v-model="nameShow"
      title="昵称"
      show-cancel-button
      @confirm="nameConfirm"
      @cancel="content = ''"
    >
      <van-field v-model="content" placeholder="请输入昵称" autofocus />
    </van-dialog>

    <!-- 个人简介的弹出框 -->
    <van-dialog
      v-model="descShow"
      title="个性签名"
      show-cancel-button
      @confirm="descConfirm"
      @cancel="content = ''"
    >
      <van-field v-model="content" placeholder="请输入个性签名" autofocus />
    </van-dialog>

    <!-- 性别的动作面板 -->
    <van-action-sheet
      v-model="genderShow"
      :actions="actions"
      @select="onSelect"
      cancel-text="取消"
    />
  </div>
</template>

<script>
import NavBar from '../components/common/NavBar.vue'
import EditBanner from '../components/common/EditBanner.vue'
export default {
  data() {
    return {
      // 保存用户数据
      model: {},
      //   控制昵称弹出框的显示与隐藏
      nameShow: false,
      //   控制个人简介弹出框的显示与隐藏
      descShow: false,
      //   控制性别的动作面板的显示与隐藏
      genderShow: false,
      //   弹出框中的内容
      content: '',
      actions: [
        { name: '男', val: 1 },
        { name: '女', val: 0 }
      ]
    }
  },
  components: {
    NavBar,
    EditBanner
  },
  created() {
    this.userInfo()
  },
  methods: {
    async userInfo() {
      const { data: res } = await this.$http.get(
        '/user/' + localStorage.getItem('id')
      )
      this.model = res[0]
      console.log(this.model)
    },
    // 文件读取后的回调函数
    async afterRead(file) {
      console.log(file)
      const fromData = new FormData()
      fromData.append('file', file.file)
      const { data: res } = await this.$http.post('/upload/', fromData)
      console.log('res:' + res)
      this.model.user_img = res.url
      //   this.userInfo()
      this.userUpdate()
    },
    // 把用户信息更新至服务器
    async userUpdate() {
      const { data: res } = await this.$http.post(
        '/update/' + localStorage.getItem('id'),
        this.model
      )
      if (res.code === 200) {
        this.$msg.fail('修改成功')
      }
      console.log(res)
    },
    // 编辑昵称的函数
    nameEdit() {
      this.content = this.model.name
      this.nameShow = true
    },
    nameConfirm() {
      this.model.name = this.content
      this.content = ''
      this.userUpdate()
    },
    // 编辑个人签名的函数
    descEdit() {
      this.content = this.model.user_desc
      this.descShow = true
    },
    descConfirm() {
      this.model.user_desc = this.content
      this.content = ''
      this.userUpdate()
    },
    genderEdit() {
      this.genderShow = true
    },
    onSelect(data) {
      this.model.gender = data.val + ''
      this.userUpdate()
      console.log(data)
    }
  }
}
</script>

<style lang="less" scoped>
.editViews {
  .viewImg {
    img {
      height: 12.778vw;
      width: 12.778vw;
      border-radius: 50%;
    }
  }
  a {
    color: #333;
  }
}

.uploadParent {
  position: relative;
  overflow: hidden;
  .uploadSon {
    position: absolute;
    right: 0;
    opacity: 0;
  }
}
.backView {
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5.556vw;
  color: #999;
  padding: 15px 0;
  font-size: 5vw;
}
</style>
