<template>
  <div name='card'>
    <el-card class="box-card" shadow="hover">
      <div class="clearfix" v-if='isTitle'>
        <div class="title">
          <i class="el-icon-arrow-right"></i> {{label}}
        </div>
      </div>
      <ul ref='content' class="content" v-loading="loadingTab">
        <li class='item' v-for="item in imglistData" >
          <img v-if='isimg' class="img" :src="item.url" alt="" @click="openInfo(item)">
          <div class="text">{{item.productName}}</div>
        </li>
      </ul>
      <div class='page'>
        <el-pagination background layout="prev, pager, next" @size-change="handleSizeChange" :current-page="currentPage" @current-change="handleCurrentChange" :hide-on-single-page="ishide" :page-size="pageSize" :total="tatal">
        </el-pagination>
      </div>
    </el-card>
  </div>
</template>

<script>
  export default {
    name: 'card',
    props: {
      label: {
        type: String,
        default () {
          return ''
        }
      },
      contenttext: {
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
      isTitle: {
        type: Boolean,
        default () {
          return true
        }
      },
      loading: {
        type: Boolean,
        default () {
          return true
        }
      },
      productList: {
        type: Array,
        default () {
          return []
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
        ishide: true,
        currentPage: 1,
        pageSize: 12,
        loadingTab: true,
      };
    },
    components: {},
    computed: {
      tatal() {
        return this.productList.length
      },
     
      imglistData() {
        let list = []
        list = this.productList && this.productList.slice((this.currentPage - 1) * this.pageSize, this.currentPage * this.pageSize)
        return list
      }
    },
    created() {},
    mounted() {},
    watch: {
      productList(e) {
        this.loadingTab = false
      },
       loading(e) {
        this.loadingTab = this.$loadingProductAll
      },
    },
    methods: {
      openInfo(e) {
        this.$emit('showProductInfo', e)
      },
      handleSizeChange(val) {
      },
      handleCurrentChange(val) {
        this.currentPage = val
        this.loadingTab = true
        setTimeout(() => {
          this.loadingTab = false
        }, 1500)
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
    font-size: 12px;
  }
  .box-card {
    margin-bottom: 10px;
    width: 100%;
  }
  .img {
    float: left;
    width: 168px;
    height: 140px;
    margin-right: 10px;
    border-radius: 5px
  }
  .content {
    min-height: 300px;
    min-width: 900px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    margin-left: 5px;
    padding: 0px !important;
  }
  .content .item {
    margin: 15px 14px;
    width: 170px;
    height: 180px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background: #f5f7fa;
    box-shadow: 5px 5px 5px #ccc;
  }
  .content .item:hover {
    transform: scale(1.1, 1.1);
    color: #39ab31;
    border-color: #39ab31;
    border: 1px solid
  }
  .page {
    height: 40px;
  }
 
</style>
