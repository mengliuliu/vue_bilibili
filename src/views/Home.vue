<template>
  <div class="home">
    <nav-bar></nav-bar>

    <van-tabs v-model="active" sticky swipeable>
      <van-tab
        v-for="(item, index) in categoryList"
        :title="item.title"
        :key="index"
      >
        <van-list
          v-model="item.loading"
          :finished="item.finished"
          finished-text="我也是有底线的"
          :immediate-check="false"
          @load="onLoad"
        >
          <div class="contentParent">
            <info-content
              class="contentSon"
              :contentItem="contentItem"
              v-for="(contentItem, contentIndex) in item.list"
              :key="contentIndex"
            >
            </info-content>
          </div>
        </van-list>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import NavBar from '../components/common/NavBar.vue'
import InfoContent from './Content.vue'

export default {
  name: 'Home',
  data() {
    return {
      active: 2,
      categoryList: []
    }
  },
  components: {
    // HelloWorld
    NavBar,
    InfoContent
  },
  created() {
    this.selectCategory()
  },
  methods: {
    async selectCategory() {
      const { data: res } = await this.$http.get('/category')
      this.categoryList = res
      console.log(res)
      this.changeCategory(res)
      this.selectArticle()
    },
    changeCategory(data) {
      const d = data.map((item, index) => {
        item.list = []
        item.page = 0
        item.pagesize = 10

        item.finished = false
        item.loading = false

        return item
      })
      this.categoryList = d
    },
    async selectArticle() {
      const categoryItem = this.getCategoryItem()
      console.log('_id=' + categoryItem._id)
      const { data: res } = await this.$http.get(
        '/detail/' + categoryItem._id,
        {
          params: {
            page: categoryItem.page,
            pagesize: categoryItem.pagesize
          }
        }
      )
      // categoryItem.list = res
      // console.log(categoryItem)
      categoryItem.list.push(...res)
      categoryItem.loading = false
      if (res.length < categoryItem.pagesize) {
        categoryItem.finished = true
      }
    },
    // 获取当前标签也的目录数据
    getCategoryItem() {
      const categoryItem = this.categoryList[this.active]
      return categoryItem
    },
    // 当组件下拉到底部时，触发load事件，执行此函数
    onLoad() {
      console.log('下拉到底部了')
      const categoryItem = this.getCategoryItem()
      setTimeout(() => {
        categoryItem.page += 1
        this.selectArticle()
      }, 1000)
    }
  },
  watch: {
    active: function() {
      this.selectArticle()
    }
  }
}
</script>

<style lang="less" scoped>
.home {
  background-color: white;
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
