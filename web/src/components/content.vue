<template>
  <div name='content'>
    <el-container>
      <el-aside class="aside" style="overflow:auto">
        <Aside @showProductInfo='showProductInfo'></Aside>
      </el-aside>
      <el-container>
        <el-main>
          <div style="margin-bottom: 10px">
            <el-breadcrumb separator-class="el-icon-arrow-right">
              <el-breadcrumb-item ><a @click="toIndex">首页</a></el-breadcrumb-item>
              <el-breadcrumb-item v-if='!tabContent.label'>公司名称</el-breadcrumb-item>
              <el-breadcrumb-item v-else>{{tabContent.label}}</el-breadcrumb-item>
            </el-breadcrumb>
          </div>
          <Card :label='label' :contenttext='contenttext' :imgsrc='imgsrc' @showProductInfo='showProductInfo' :ismore='ismore'></Card>
          <productRecommend :label='productlabel' @showProductInfo='showProductInfo' :productList='productList'></productRecommend>
          <productImg :label='productlist' @showProductInfo='showProductInfo' :productList='productList' :loading='pageloading'></productImg>
          <companyInof :label='companyInof'></companyInof>
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
    name: 'content',
    props: {
      tabContent: {
        type: Object,
        default () {
          return {}
        }
      },
      pageloading:{
        type: Boolean,
        default(){
          return true
        }
      }
    },
    data() {
      return {
        isimg: false,
        ismore: true,
        imgsrc: require('@/img/content/defaultlogo_big.png'),
        label: '公司简介',
        contenttext: ['河南康普尔动物药业有限公司坐落于美丽的中原腹地郑州，交通便利、信息灵通，是一家专门从事动物生化药品及动物保健品研发、生产、经营，技术合作及兽药原料和制剂贸易的股份制企业。注册资金1000万。公司现有职工300余人，其中管理人员58人，均为大学文化，中级以上技术人员23人，并聘请博士3人，硕士6人，教授11人。在与中国农业大学、中山大学、西北农林、华南农大等多家院校有关专家合作的基础上，致力于对高效生化药剂的研究开发、生产经营和进出口。  河南康普尔动物药业有限公司是一家私营企业，所在地区位于河南郑州市,主营产品或服务为各种益母康   康乐加   康加。我们以诚信、实力和质量获得业界的高度认可，坚持以客户为核心，“质量到位、服务一流”'],
        detail: '精品推荐',
        detailtext: ['公司名称：  河南康普尔动物药业有限公司', '企业类型：  私营企业', '经营模式：  生产型', '所在地区：  河南郑州市', '品牌名称：康普尔, 百鸣 ', '主营产品：  保健金方 清宫宝 植物多糖酵素', '主营行业：兽药生产,兽药研制  ', '公司网站：  http://www.kangpuer.cn'],
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
      },
      toIndex(){
        this.$emit('showProductInfo', 'index')
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
