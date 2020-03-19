<template>
  <div name='card'>
    <el-card class="box-card" shadow="hover">
      <div class="clearfix">
        <div class="title">
          <i class="el-icon-arrow-right"></i> {{label}}
        </div>
      </div>
      <div class="table">
         <el-table
    :data="tableData"
    :show-header='show'
    border
    style="width: 100%">
    <el-table-column
      prop="date"
      label="日期"
      width="160">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="300">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      width="160">
    </el-table-column>
    <el-table-column
      prop="info"
      label="info"
    >
    </el-table-column>
  </el-table>
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
      }
    },
    data() {
      return {
        show: false,
        tableData: [{
          date: '公司名称：',
          name: '河南康普尔动物药业有限公司',
          address: '企业类型：',
          info: '私营企业'
        }, {
          date: '主要经营产品：',
          name: '保健金方 清宫宝 植物多糖酵素',
          address: '经营模式：',
          info: '生产型'
        }, {
          date: '成立时间：',
          name: '暂无',
          address: '注册资本：',
          info: '1000万'
        }]
      };
    },
    components: {},
    computed: {},
    created() {},
    mounted() {},
    watch: {},
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
    padding: 10px;
  }
  .table {
    margin-top: 10px;
  }
  .table /deep/.el-table_50_column_148, .table /deep/ .el-table_50_column_150{
    background: #F5f5f5;
  }
</style>
