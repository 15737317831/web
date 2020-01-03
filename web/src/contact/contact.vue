<template>
  <div name='contact'>
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
          <Card :label='label' :contentlist='contentlist' :ismore='ismore' @showProductInfo='showProductInfo' :headline='headline'></Card>
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
    name: 'contact',
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
        ismore: false,
        imgsrc: require('@/img/content/defaultlogo_big.png'),
        label: '联系我们',
        headline:'郑州新普康药业有限公司',
        contentlist: [
          {label:"联系人：", value: "范经理"},
          {label:"全国免费咨询电话：", value: "0371-6531-1511"},
         {label:"传真： ", value: "0371-63217072"},
         {label:"注册地址:", value:	 " 郑州市金水区郑花路62号黄河建工集团B座1709号"},
         {label:"网址: ", value: " www.kangpuer.cn"},
         {label:"经营范围	:" , value:" 销售：兽药、饲料、饲料添加剂、饲料原料、宠物用品；畜牧养殖技术开发、"},
         {label:"", value:"技术咨询、技术转让；生物技术开发、技术咨询、技术转让；商务信息咨询；"},
          {label:"", value:"企业管理咨询；会议会展服务。（涉及许可经营项目，应取得相关部门许可后方可经营）"},
        ],
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
