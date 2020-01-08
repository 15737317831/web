<template>
  <div name='home'>
    <el-carousel :interval="4000" type="card" loop :height="imgHeight+'px'" >
      <el-carousel-item v-for="item in imglist" class="imglist">
        <img class="img" ref="image"  style="width:100%;" :src='item.url'></img>
      </el-carousel-item>
    </el-carousel>
    <Content @showProductInfo='showProductInfo' :productList='productList' :pageloading='pageloading'></Content>
  </div>
</template>

<script>
import  Footer from '@/components/footer'
  import Content from '@/components/content.vue'
  export default {
    name: '',
    props: {
      pageloading:{
        type: Boolean,
        default(){
          return true
        }
      }
    },
    data() {
      return {
        productList:[],
        imgHeight:'',
        imglist:[
           {
            url:require("@/images/office.jpg"),
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
            url:require("@/images/slider_pic3.jpg"),
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
            url:require("@/images/slider_pic2.jpg"),
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
            url:require("@/images/slider_pic1.jpg"),
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
            url:require("@/images/index_about_pic1.jpg"),
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
            url:require("@/images/index_about_pic2.jpg"),
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
      Content,
      Footer,
    },
    computed: {},
    created() {
      setTimeout(() => {
        this.productList=this.$productRecommend
      }, 3000);
    },
    mounted() {
       // 监听窗口变化，使得轮播图高度自适应图片高度
      window.addEventListener("resize", () => {
        this.imgHeight = this.$refs.image[0].height;
      });
    },
    watch: {},
    methods: {
      openInfo(e){
        this.$emit('showProductInfo',e )
      },
      showProductInfo(e){
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
  /* .el-carousel__item:nth-child(2n) {
  
  }
  .el-carousel__item:nth-child(2n+1) {
   
  } */
  .home .imglist{
    overflow: hidden;
  }
  .home .img{
    height: 300px !important;
    width:100%; 
    display:block;
  }
    /* 布局容器 */
  .el-footer {
    width: 100%;
   background-color: #1b434e;
    color: #9d9d9d;
    text-align: center;
    font-size: 16px;
    line-height: 36px;
    height: 300px;
    padding-top: 40px; 
  }
</style>
