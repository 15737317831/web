<template>
    <div name='product'>
    <el-card shadow="hover">
      <div slot="header" class="clearfix">
        <span>{{productInfo.productName}}</span>
      </div>
      <div class="info">
        <el-image class="img" :src="productInfo.url" alt="" fit="contain"></el-image>
          <p class="price">价格:<span class="red">{{productInfo.price}}</span></p>
          <el-row :gutter="20"  >
          <el-col :span="6"><span class="fontSize">产品型号: </span>{{productInfo.model}} </el-col>
          <el-col :span="6"><span class="fontSize">原产地: </span>{{productInfo.address}}</el-col>
          <el-col :span="6"><span class="fontSize">品牌: </span>{{productInfo.band}}</el-col>
          <el-col :span="6"><span class="fontSize">产品数量: </span>{{productInfo.number}}</el-col>
          <el-col :span="6"><span class="fontSize">产品关键字: </span>{{productInfo.key}}</el-col>
          <el-col :span="8"><span class="fontSize">行业: </span>{{productInfo.industry}}</el-col>
          <el-col :span="8"><span class="fontSize">产品系列: </span>{{productInfo.series}}</el-col>
          <!-- <el-col :span="8"><span class="fontSize">发布日期: </span>{{productInfo.date}}</el-col> -->
        </el-row>
      </div>
    </el-card>
    <Card :label='label' :basis='productInfo.basis' :character='productInfo.character' :attending='productInfo.attending' :dosage='productInfo.dosage' :announcements='productInfo.announcements' :packaging='productInfo.packaging' :reposit='productInfo.reposit' :period='productInfo.period' :isimg='isimg'></Card>
    </div>
</template>

<script>
import Card from "@/components/card"
export default {
    name:'productInfo',
    props: {
      productInfo:{
        type: Object,
        default(){
          return {}
        }
      }
    },
    data() {
        return {
           label:'产品说明',
          isimg: false
        };
    },
    components: {
      Card
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

<style scoped lang="less">
   .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }
  .clearfix{
    font-size: 24px;
    text-align: center;
    font-weight: 600;
    height: 60px;
    line-height: 60px;
  }
  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }
  
  .box-card {
    width: 480px;
  }
  .img{
    float: left;
    width: 45%;
    height: 45%;
  }
  .price{
    float: left;
    height: 50px;
    font-size: 24px;
    text-align: center;
    letter-spacing:1px;
    font-weight: 500;
    margin: -60px 0 0 20px;
  }
  .red{
    color: red;
    margin-left: 50px;
  }
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .info .el-col-6,.info .el-col-8{
    height: 40px;
    text-align: left;
    font-weight: 400
  }
  .fontSize{
    font-weight: 900 !important;
    margin-right: 10px;
  }
</style>
