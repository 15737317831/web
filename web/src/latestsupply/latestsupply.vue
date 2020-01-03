<template>
  <div name='latestsupply'>
    <el-container>
      <el-aside class="aside" style="overflow:auto">
        <Aside @showProductInfo='showProductInfo'></Aside>
      </el-aside>
      <el-container>
        <el-main>
          <div style="margin-bottom: 10px">
            <el-breadcrumb separator-class="el-icon-arrow-right">
              <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
              <el-breadcrumb-item v-if='!tabContent.label'>公司名称</el-breadcrumb-item>
              <el-breadcrumb-item v-else>{{tabContent.label}}</el-breadcrumb-item>
            </el-breadcrumb>
          </div>
          <Card :label='label' :contenttext='contenttext' :imgsrc='imgsrc' @showProductInfo='showProductInfo' :ismore='ismore'></Card>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  import companyInof from '@/components/companyInfo'
  import productImg from '@/components/productImg'
  import productRecommend from '@/components/productRecommend.vue'
  import Card from '@/components/card'
  import Aside from "@/components/aside"
  export default {
    name: 'latestsupply',
    props: {
      tabContent: {
        type: Object,
        default () {
          return {}
        }
      },
    },
    data() {
      return {
        isimg: false,
        ismore: true,
        imgsrc: require('@/img/content/defaultlogo_big.png'),
        label: '最新供应',
        contenttext: [],
        detail: '精品推荐',
        productlabel: '精品推荐',
        productlist: '产品橱窗',
        companyInof: '工商信息',
        productList: [],
        loading: true
      };
    },
    components: {
      Card,
      Aside,
      productRecommend,
      productImg,
      companyInof
    },
    computed: {
    },
    created() {
    },
    mounted() {
      setTimeout(() => {
        this.productList = this.$productRecommend
        this.loading = this.$loading
      }, 3000)
    },
    watch: {
    },
    methods: {
      showProductInfo(e) {
        this.$emit('showProductInfo', e)
      }
    },
  };
</script>

<style scoped>
  /* 布局容器 */
  .el-header,
  .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    font-size: 14px;
    line-height: 24px;
    height: 100px !important;
  }
  .el-aside {
    /* background-color: #D3DCE6; */
    color: #333;
    text-align: center;
    line-height: 200px;
    margin-top: 50px;
  }
  .el-main {
    /* background-color: #E9EEF3; */
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  body>.el-container {
    margin-bottom: 40px;
  }
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
  .aside {
    width: 200px !important;
  }
</style>
