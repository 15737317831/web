<template>
  <div name='home'>
    <el-carousel :interval="4000" type="card" height="350px" loop>
      <el-carousel-item v-for="item in 6" :key="item">
        <h3 class="medium">{{ item }}</h3>
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
            description: "产品1"
          },
          {
            url:require("@/img/content/2.jpg"),
            description: "产品2"
          },{
            url:require("@/img/content/3.jpg"),
            description: "产品3"
          },{
            url:require("@/img/content/4.jpg"),
            description: "产品4"
          },{
            url:require("@/img/content/5.jpg"),
            description: "产品5"
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
    methods: {},
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
</style>
