<template>
  <div name='card'>
    <el-card class="box-card" shadow="hover">
      <div class="clearfix">
        <div class="title">
          <i class="el-icon-arrow-right"></i>
          {{label}}</div>
      </div>
      <div class="content" v-for="item in contenttext" :key='item'>
         <img v-if='isimg' class="img" :src="imgsrc" alt="">
        <div class="text">{{item}}</div>
      </div>
    </el-card>
  </div>
</template>

<script>
  export default {
    name: 'card',
    props: {
      label:{
        type: String,
        default(){
          return ''
        }
      },
       contenttext:{
        type: Array,
        default(){
          return []
        }
      },
      imgsrc:{
        type: String,
        default(){
          return ''
        }
      },
      isimg:{
        type: Boolean,
        default(){
          return true
        }
      }
    },
    data() {
      return {
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
    },
  };
</script>

<style scoped >
  .clearfix{
    height: 45px;
    line-height: 45px;
    text-align : left;
    background: #f9f9f9;
    border-bottom: 1px solid #E0E0E0;
  }
  .title{
    width: 170px;
    background: #0177BF;
    color: #fff;
    font-size: 16px;
    font-weight: 600;
    padding-left: 15px;
  }
  .text{
   line-height: 26px;
    text-align : left;
  }
  .box-card {
    margin-top: 10px;
    width: 100%;
  }
  .img{
    float: left;
    width: 240px;
    height: 200px;
    border-radius: 5%;
     margin-right: 8px;
  }
  .content{
    padding: 10px;
  }
</style>
