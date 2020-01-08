<template>
  <div name='card'>
    <el-card class="box-card" shadow="hover">
      <div class="clearfix">
        <div class="title">
          <i class="el-icon-arrow-right"></i> {{label}}
        </div>
      </div>
      <div v-if='headline' class="headline">{{headline}}</div>
       <div v-show="contentlist.length!=0" class="contentlist" v-for="item in contentlist" :key='item.value'>
        <span class="weight">{{item.label}}</span>{{item.value}}
        </div>
      <div v-if='basis' class="text">{{basis}}</div>
      <div v-if='character' class="text">{{character}}</div>
      <div v-if='attending' class="text">{{attending}}</div>
      <div v-if='dosage' class="text">{{dosage}}</div>
      <div v-if='announcements' class="text">{{announcements}}</div>
      <div v-if='packaging' class="text">{{packaging}}</div>
      <div v-if='reposit' class="text">{{reposit}}</div>
      <div v-if='period' class="text">{{period}}</div>
       <div v-if='text' class="text">{{text}}</div>
      <div v-show="contenttext.length!='0'" class="content" v-for="item in contenttext" :key='item'>
        <img v-if='isimg' class="img" :src="imgsrc" alt="">
        <div class="text">{{item}}<span v-if='ismore' class='more' @click="moreinfo">更多>></span></div>
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
      ismore: {
        type: Boolean,
        default () {
          return false
        }
      },
      basis: {
        type: String,
        default () {
          return ''
        }
      },
      character: {
        type: String,
        default () {
          return ''
        }
      },
      attending: {
        type: String,
        default () {
          return ''
        }
      },
      dosage: {
        type: String,
        default () {
          return ''
        }
      },
      announcements: {
        type: String,
        default () {
          return ''
        }
      },
      packaging: {
        type: String,
        default () {
          return ''
        }
      },
      reposit: {
        type: String,
        default () {
          return ''
        }
      },
      period: {
        type: String,
        default () {
          return ''
        }
      },
      text:{
         type: String,
        default () {
          return ''
        }
      },
      headline:{
        type: String,
        default () {
          return ''
        }
      },
      contentlist:{
        type: Array,
        default(){
          return []
        }
      }
    },
    data() {
      return {};
    },
    components: {},
    computed: {},
    created() {},
    mounted() {},
    watch: {},
    methods: {
      moreinfo() {
        let info = 'more'
        this.$emit('showProductInfo', info)
      }
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
    font-size: 12px;
    line-height: 26px;
    text-align: left;
    margin-top: 26px
  }
  .box-card {
    margin-top: 10px;
    width: 100%;
    margin-bottom: 10px;
    min-height: 500px;
  }
  .img {
    float: left;
    width: 240px;
    height: 200px;
    border-radius: 5%;
    margin: 8px 8px 20px 0;
  }
  .content {
    padding: 10px;
  }
  .more {
    margin-left: 20px;
    color: rgb(18, 52, 104)
  }
  .more:hover {
    color: rgb(15, 128, 156);
    cursor: pointer;
  }
  .headline{

    height: 80px;
    line-height: 80px;
    font-size: 26px;
    font-weight: 600
  }
  .contentlist{
    font-size: 14px;
    height: 40px;
    line-height: 40px;
    text-align: left;
    text-indent:200px;
  }
  .weight{
    width: 180px;
    font-weight: 800;
    margin-right: 20px
  }
</style>
