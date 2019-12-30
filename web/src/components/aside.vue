<template>
  <div name='aside' class="aside">
    <el-card class="box-card" shadow="hover">
      <div class="clearfix">
        <span>产品系列</span>
        <!-- <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button> -->
      </div>
      <div class="text item">
        <el-menu default-active="2" class="el-menu-vertical-demo" @select='handleSelect' @open="handleOpen" @close="handleClose">
          <el-submenu index="1">
            <template slot="title">
            <span>禽畜</span>
</template>
        <el-menu-item-group>
<template slot="title">
  禽畜
</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="禽畜2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
<template slot="title">
  选项4
</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-submenu index="2">
<template slot="title">
  <span>治疗药</span>
</template>
        <el-menu-item-group>
<template slot="title">
  治疗药
</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="治疗药2">
          <el-menu-item index="2-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="2-4">
<template slot="title">
  选项4
</template>
          <el-menu-item index="2-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-submenu index="3">
<template slot="title">
  <span>肠道药</span>
</template>
        <el-menu-item-group>
<template slot="title">
  肠道药
</template>
          <el-menu-item index="3-1">选项1</el-menu-item>
          <el-menu-item index="3-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="肠道药2">
          <el-menu-item index="3-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="3-4">
<template slot="title">
  选项4
</template>
          <el-menu-item index="3-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-submenu index="4">
<template slot="title">
  <span>保健类</span>
</template>
        <el-menu-item-group>
<template slot="title">
  保健类
</template>
          <el-menu-item index="4-1">选项1</el-menu-item>
          <el-menu-item index="4-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="保健类2">
          <el-menu-item index="4-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="4-4">
<template slot="title">
  选项4
</template>
          <el-menu-item index="4-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
    </el-menu>
      </div>
    </el-card>
    <el-card  class="searchBox" shadow="hover">
        <div class="clearfix">
        <span>站内搜索</span>
        <!-- <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button> -->
      </div>
      <div class="search">
        <el-input placeholder="请输入关键字" v-model="search" class="input-with-select">
        <el-button slot="append" icon="el-icon-search" @click='searchData'></el-button>
        </el-input>
      </div>
    </el-card>
    </div>
</template>

<script>
  export default {
    name: '',
    props: {
    },
    data() {
      return {
        search:''
      };
    },
    components: {
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
      handleSelect(e) {
        this.$emit('showProductInfo',e )
      },
      handleOpen(e) {
      },
      handleClose(e) {

      },
      searchData(){
        console.log(this.search);
        this.$emit('showProductInfo',this.search )
      }
    },
  };
</script>

<style scoped lang="less">
  .text {
    font-size: 14px;
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
    width: 100%
  }
  .el-menu-item:hover {
    min-width: 200px;
  }
  .searchBox{
    position: relative;
    width: 100%;
    background: #09988B;
    border-radius: 10px;
    overflow: hidden;
    margin-top: 10px;
    height: 140px;
  }
  .search{
    position: absolute;
    top:-25px;
    left: 10px;
    width: 180px;
  }
  .aside /deep/ .el-card__body{
    padding: 7px !important
  }
</style>
