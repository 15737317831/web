<template>
  <div name='card'>
    <el-container>
      <el-aside class="aside">
        <Aside @showProductInfo='showProductInfo' ></Aside>
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
          <el-card class="box-card" shadow="hover">
            <div class="clearfix">
              <div class="title">
                <i class="el-icon-arrow-right"></i> {{label}}
              </div>
            </div>
            <div v-if='showList'>
              <el-tabs type="border-card" class='tab' stretch v-model="activeName" @tab-click='clickTab'>
                <el-tab-pane label="全部" name='0'>
                  <transition name="el-zoom-in-center">
                    <div v-show='activeName=="0"'>
                      <productImg :productList='productfilter' :loading='loading' v-show="activeName=='0'" :isTitle='isTitle' @showProductInfo='showProductInfo'></productImg>
                    </div>
                  </transition>
                </el-tab-pane>
                <el-tab-pane label="畜禽" name='1'>
                  <transition name="el-zoom-in-center">
                    <div v-show='activeName=="1"'>
                      <productImg :productList='livestocklist' :loading='loading' v-show="activeName=='1'" :isTitle='isTitle' @showProductInfo='showProductInfo'></productImg>
                    </div>
                  </transition>
                </el-tab-pane>
                <el-tab-pane label="治疗药" name='2'>
                  <transition name="el-zoom-in-center">
                    <productImg v-show="activeName=='2'" :productList='curativelist' :loading='loading' :isTitle='isTitle' @showProductInfo='showProductInfo'></productImg>
                  </transition>
                </el-tab-pane>
                <el-tab-pane label="肠道药" name='3'>
                  <transition name="el-zoom-in-center">
                    <productImg v-show="activeName=='3'" :productList='intestinallist' :loading='loading' :isTitle='isTitle' @showProductInfo='showProductInfo'></productImg>
                  </transition>
                </el-tab-pane>
                <el-tab-pane label="保健类" name='4'>
                  <transition name="el-zoom-in-center">
                    <productImg v-show="activeName=='4'" :productList='healthlist' :loading='loading' :isTitle='isTitle' @showProductInfo='showProductInfo'></productImg>
                  </transition>
                </el-tab-pane>
              </el-tabs>
            </div>
            <div v-else>
              <productInfo :productInfo='productInfo'></productInfo>
            </div>
          </el-card>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  import Aside from "@/components/aside"
  import productInfo from '@/productInfo/productInfo'
  import productImg from '@/components/productImg'
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
      showList: {
        type: Boolean,
        default () {
          return true
        }
      },
      productInfo: {
        type: Object,
        default () {
          return {}
        }
      },
      activeTab: {
        type: String,
        default () {
          return ''
        }
      },
      productlist: {
        type: Array,
        default () {
          return []
        }
      },
      loading: {
        type: Boolean,
        default () {
          return true
        }
      },
      search: {
        type: String,
        default () {
          return ''
        }
      }
    },
    data() {
      return {
        isTitle: false,
        activeName: '0',
        curativelist: [],
        productfilter: [],
        intestinallist: [],
        livestocklist: [],
        healthlist: [],
      };
    },
    components: {
      productImg,
      productInfo,
      Aside
    },
    computed: {},
    created() {},
    mounted() {
      this.productfilter = this.getTableData()
    },
    watch: {
      productInfo(e) {},
      activeTab(e) {
        this.loading=this.$loadingProductAll
        this.activeName = '0'
      },
      search(e) {
        let list1 = [],
          list2 = [],
          list3 = [],
          list4 = []
        this.productfilter = this.getTableData(e)
        this.loading=this.$loadingProductAll
        let product = this.productfilter
        for (let i = 0; i < product.length; i++) {
          if (product[i].series === "畜禽") {
            list1.push(product[i])
          } else if (product[i].series === "治疗药") {
            list2.push(product[i])
          } else if (product[i].series === "肠道药") {
            list3.push(product[i])
          } else {
            list4.push(product[i])
          }
        }
        window.livestocklist = list1;
        window.livestocklist = list1
        window.curativelist = list2
        window.intestinallist = list3
        window.healthlist = list4
        this.livestocklist = list1
        this.curativelist = list2
        this.intestinallist = list3
        this.healthlist = list4
      },
      productlist(e) {
        let list1 = [],
          list2 = [],
          list3 = [],
          list4 = []
        this.productfilter = this.getTableData()
        this.loading=this.$loadingProductAll
        let product = this.productfilter
        for (let i = 0; i < product.length; i++) {
          if (product[i].series === "畜禽") {
            list1.push(product[i])
          } else if (product[i].series === "治疗药") {
            list2.push(product[i])
          } else if (product[i].series === "肠道药") {
            list3.push(product[i])
          } else {
            list4.push(product[i])
          }
        }
        window.livestocklist = list1;
        window.livestocklist = list1
        window.curativelist = list2
        window.intestinallist = list3
        window.healthlist = list4
        this.livestocklist = list1
        this.curativelist = list2
        this.intestinallist = list3
        this.healthlist = list4
      }
    },
    methods: {
      clickTab(tab, event){
        if(tab.index==='0'){
          this.search=''
          this.getTableData()
        }
      },
      showProductInfo(e) {
        this.$emit('showProductInfo', e)
      },
      // //检索功能 productlist.productCode
      getTableData(e) {
        let newData = [];
        for (let i = 0; i < this.productlist.length; i++) {
          let product = this.productlist[i];
          if (
            (this.search != '' && (product.productName.toString()).search(this.search) == -1)&&
            (this.search != '' && (product.productCode.toString()).search(this.search) == -1)
          ) {
            continue
          } else {
            newData.push(product)
          }
        }
        return newData
      },
    },
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
    background: #09988B;
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
    padding: 5px;
  }
  .el-header,
  .el-footer {
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
  }
  .el-main {
    /* background-color: #E9EEF3; */
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  .tab {
    margin-top: 10px
  }
  .aside{
    margin-top: 30px;
    width: 200px !important
  }
  .tab /deep/.el-tabs--border-card>.el-tabs__content{
    padding: 0!important
  }
  .tab /deep/.el-card{
    margin-top: 0!important;

}
</style>
