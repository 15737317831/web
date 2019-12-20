<template>
  <div name='card'>
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-container>
        <el-main>
          <div style="margin-bottom: 10px">
            <el-breadcrumb separator-class="el-icon-arrow-right">
              <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
              <el-breadcrumb-item v-if='!tabContent.label'>公司名称</el-breadcrumb-item>
              <el-breadcrumb-item v-else>{{tabContent.label}}</el-breadcrumb-item>
            </el-breadcrumb>
          </div>
          <el-card class="box-card" shadow="hover">
            <div class="clearfix">
              <div class="title">
                <i class="el-icon-arrow-right"></i> {{label}}
              </div>
            </div>
            <div v-if='showList'>
              <el-tabs type="border-card" class='tab' stretch>
                <el-tab-pane label="畜禽">
                  <productImg :isTitle='isTitle'></productImg>
                </el-tab-pane>
                <el-tab-pane label="治疗药">
                  <productImg :isTitle='isTitle'></productImg>
                </el-tab-pane>
                <el-tab-pane label="肠道药">
                  <productImg :isTitle='isTitle'></productImg>
                </el-tab-pane>
                <el-tab-pane label="保健类">
                  <productImg :isTitle='isTitle'></productImg>
                </el-tab-pane>
              </el-tabs>
            </div>
            <div v-else>
              <productInfo :productInfo='productInfo'></productInfo>
            </div>
          </el-card>
        </el-main>
        <el-footer>
          <Footer></Footer>
        </el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import productInfo from '@/productInfo/productinfo'
import productImg from '@/components/productImg'
  import Footer from '@/components/footer'
  export default {
    name: 'card',
    props: {
      label: {
        type: String,
        default () {
          return ''
        }
      },
      imglist: {
        type: Array,
        default () {
          return []
        }
      },
      imgsrc: {
        type: String,
        default () {
          return ''
        }
      },
      isimg: {
        type: Boolean,
        default () {
          return true
        }
      },
      tabContent: {
        type: Object,
        default () {
          return {}
        }
      },
      showList:{
        type: Boolean,
        default(){
          return true
        }
      },
      productInfo:{
        type: Object,
        default(){
          return {}
        }
      }
    },
    data() {
      return {
        isTitle:false
      };
    },
    components: {
      Footer,
      productImg,
      productInfo
    },
    computed: {},
    created() {},
    mounted() {
    },
    watch: {
      productInfo(e){
        console.log(e);
      }
    },
    methods: {},
  };
</script>

<style scoped>
  .clearfix {
    height: 45px;
    line-height: 45px;
    text-align: left;
    background: #f9f9f9;
    border-bottom: 1px solid #E0E0E0;
  }
  .title {
    width: 170px;
    background: #0177BF;
    color: #fff;
    font-size: 16px;
    font-weight: 600;
    padding-left: 15px;
  }
  .text {
    line-height: 26px;
    text-align: left;
  }
  .box-card {
    margin-top: 10px;
    width: 100%;
  }
  .img {
    float: left;
    width: 240px;
    height: 200px;
    border-radius: 5%;
    margin-right: 8px;
  }
  .content {
    padding: 10px;
  }
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
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  .tab {
    margin-top: 10px
  }
</style>
