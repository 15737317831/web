<template>
  <Affix :offset-top="40">
    <div name='aside' class="aside">
      <el-card class="box-card" shadow="hover">
        <div class="clearfix">
          <span>产品系列</span>
          <!-- <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button> -->
        </div>
        <div class="text item">
          <Scroll >
          <el-menu class="el-menu-vertical-demo" @select='handleSelect' @open="handleOpen" @close="handleClose">
            <el-submenu index="1">
              <template slot="title">
                  <span>禽畜</span>
</template>
<el-menu-item-group v-for="(item,i) in livestocklist1">
          <el-menu-item :index="item.productCode.toString()">{{item.productName}}</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
<template slot="title">
  <span>治疗药</span>
</template>
        <el-menu-item-group v-for="(item,i) in curativelist1">
 <el-menu-item  :index="item.productCode.toString()">{{item.productName}}</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="3">
<template slot="title">
  <span>肠道药</span>
</template>
        <el-menu-item-group v-for="(item,i) in intestinallist1">
<el-menu-item  :index="item.productCode.toString()">{{item.productName}}</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="4">
<template slot="title">
  <span>保健类</span>
</template>
        <el-menu-item-group v-for="(item,i) in healthlist1">
          <el-menu-item  :index="item.productCode.toString()">{{item.productName}}</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
    </Scroll >
      </div>
    </el-card>
    <el-card  class="searchBox" shadow="hover">
        <div class="clearfix">
        <span>站内搜索</span>
        <!-- <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button> -->
      </div>
      <div class="search">
        <el-input placeholder="请输入关键字" v-model="search" class="input-with-select" clearable>
        <el-button slot="append" icon="el-icon-search" @click='searchData'></el-button>
        </el-input>
      </div>
    </el-card>
    </div>
     </Affix>
</template>

<script>
  export default {
    name: '',
    props: {
    },
    data() {
      return {
        search: '',
        livestocklist1:[],
        curativelist1:[],
        intestinallist1:[],
        healthlist1:[],
      };
    },
    components: {},
    computed: {},
    created() {},
    mounted() {
      setTimeout(()=>{
        this.livestocklist1=livestocklist
        this.curativelist1=curativelist
        this.intestinallist1=intestinallist
        this.healthlist1=healthlist
      },4000)
    },
    watch: {},
    methods: {
      handleSelect(e) {
        this.$emit('showProductInfo', e)
      },
      handleOpen(e) {},
      handleClose(e) {},
      searchData() {
        this.$emit('showProductInfo', this.search)
      },
      handleNodeClick(data) {
      }
    },
  };
</script>

<style scoped lang="less">
  .text {
    font-size: 12px;
    height: 250px !important;
  }
  .item {
    margin-bottom: 18px;
    background: #fff;
    width: 100%;
    height: 98%;
    overflow: hidden;
  }
  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }
  .clearfix {
    background: #09988B;
    color: #fff;
    overflow: hidden;
    font-size: 16px;
    height: 32px;
    line-height: 32px
  }
  .box-card {
    width: 100%;
    background: #09988B;
    border-radius: 10px;
    overflow: hidden;
    margin-top: 10px;
  }
  .el-menu-vertical-demo {
    // width: 100%
  }
  .el-menu-item:hover {
    min-width: 200px;
  }
  .searchBox {
    position: relative;
    width: 100%;
    background: #09988B;
    border-radius: 10px;
    overflow: hidden;
    margin-top: 5px;
    height: 110px;
  }
  .search {
    position: absolute;
    font-size: 10px;
    top: -25px;
    left: 10px;
    width: 180px;
  }
 .search/deep/ .el-input--suffix .el-input__inner {
   padding-left:6px;
   font-size: 12px
 }
  .aside /deep/ .el-card__body {
    padding: 7px !important
  }
  .aside {
    position: sticky;
    top: 0
  }
</style>
