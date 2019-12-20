<template>
  <div name='home'>
    <el-carousel :interval="4000" type="card" height="350px" loop>
      <el-carousel-item v-for="item in imglist">
        <img class="img" :src="item.url" alt="" @click="openInfo(item)">
      </el-carousel-item>
    </el-carousel>
    <Content></Content>
  </div>
</template>

<script>
  import Content from '@/components/content.vue'
  export default {
    name: '',
    props: {},
    data() {
      return {
        imglist:[
          {
            url:require("@/img/content/1.jpg"),
            description: "产品1",
            productName: '产品1',
            band: '广畜',
            price:'111',
            model: 'XXX',
            address: '郑州市金水区XX路',
            number: 999,
            key: '2222',
            industry: '养殖>兽药疫苗>猪用药',
            series: '畜禽',
            date: '2019/12/20'
          },
          {
            url:require("@/img/content/2.jpg"),
            description: "产品2",
            productName: '产品2',
            band: '广畜',
            price:'222',
            model: 'XXX',
            address: '郑州市金水区XX路',
            number: 999,
            key: '2222',
            industry: '养殖>兽药疫苗>猪用药',
            series: '畜禽',
            date: '2019/12/20'
          },{
            url:require("@/img/content/3.jpg"),
            description: "产品3",
            productName: '产品3',
            band: '广畜',
            price:'333',
            model: 'XXX',
            address: '郑州市金水区XX路',
            number: 999,
            key: '2222',
            industry: '养殖>兽药疫苗>猪用药',
            series: '畜禽',
            date: '2019/12/20'
          },{
            url:require("@/img/content/4.jpg"),
            description: "产品4",
            productName: '产品4',
            band: '广畜',
            price:'444',
            model: 'XXX',
            address: '郑州市金水区XX路',
            number: 999,
            key: '2222',
            industry: '养殖>兽药疫苗>猪用药',
            series: '畜禽',
            date: '2019/12/20'
          },{
            url:require("@/img/content/5.jpg"),
            description: "产品5",
            productName: '产品5',
            band: '广畜',
            price:'555',
            model: 'XXX',
            address: '郑州市金水区XX路',
            number: 999,
            key: '2222',
            industry: '养殖>兽药疫苗>猪用药',
            series: '畜禽',
            date: '2019/12/20'
          }
        ]
      };
    },
    components: {
      Content
    },
    computed: {},
    created() {},
    mounted() {},
    watch: {},
    methods: {
      openInfo(e){
        console.log(e);
        this.$emit('showProductInfo',e )
      }
    },
  };
</script>

<style scoped>
  /* 跑马灯 */
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .home .img{
    width: 100%
  }
</style>
