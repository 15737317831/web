<template>
    <div name='content'>
      <el-container>
      <el-aside width="200px">
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
        <Card :label='label' :contenttext='contenttext' :imgsrc='imgsrc'></Card>
        <Card :label='detail' :contenttext='detailtext' :imgsrc='imgsrc' :isimg='isimg'></Card>
        </el-main>
      </el-container>
  </el-container>
    </div>
</template>

<script>
import Aside from "@/components/aside"
import Card from '@/components/card'
import  Footer from '@/components/footer'
export default {
    name:'content',
    props: {
      tabContent:{
        type: Object,
        default(){
          return { }
        }
      }
    },
    data() {
        return {
          isimg:false,
          imgsrc:require('@/img/content/defaultlogo_big.png'),
          label:'公司简介',
          contenttext:['河南康普尔动物药业有限公司坐落于美丽的中原腹地郑州，交通便利、信息灵通，是一家专门从事动物生化药品及动物保健品研发、生产、经营，技术合作及兽药原料和制剂贸易的股份制企业。注册资金1000万。公司现有职工300余人，其中管理人员58人，均为大学文化，中级以上技术人员23人，并聘请博士3人，硕士6人，教授11人。在与中国农业大学、中山大学、西北农林、华南农大等多家院校有关专家合作的基础上，致力于对高效生化药剂的研究开发、生产经营和进出口。   河南康普尔动物药业有限公司是一家私营企业，所在地区位于河南郑州市,主营产品或服务为各种益母康   康乐加   康加。我们以诚信、实力和质量获得业界的高度认可，坚持以客户为核心，“质量到位、服务一流” 河南康普尔动物药业有限公司是一家集混合饲料添加剂矿、预混合饲料添加剂的研发、生产、销售、服务于一体的现代化高科技股份有限公司。下设猪事业部、禽事业部、牛羊事业部、水产事业部、中草药预混料事业部五大板块。康普尔药业,结合中国当前养殖现状,严格按照GMP标准规范和管理生产。'],
          detail: '详细信息',
          detailtext:['公司名称：  郑州新普康药业有限公司','企业类型：  私营企业','经营模式：  生产型','所在地区：  河南郑州市','品牌名称： ','主营产品：  益母康 康乐加 康加','主营行业：  ','公司网站：  http://www.kangpuer.cn']
        };
    },
    components: {
      Card,
      Footer,
      Aside
    },
    computed: {

    },
    created() {

    },
    mounted() {

    },
    watch: {

    },
    methods: {
       showProductInfo(e){
        this.$emit('showProductInfo',e )
      }
    },
};
</script>

<style scoped >
   /* 布局容器 */
    .el-header, .el-footer {
   /* background-color: #B3C0D1; */
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
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
