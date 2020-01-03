<template>
  <div>
    <el-card class="box-card" shadow="hover">
      <div class="clearfix">
        <div class="title">
          <i class="el-icon-arrow-right"></i>
          {{label}}</div>
      </div>
       <div id="container">
      <ul class="first">
        <li>
          <el-row >
            <el-col :span="len-1" :offset="1" v-for="(item, index) in firstData" :key="index">
               <div class="desc">
                 <img :src="item.url" alt=""  @click="openInfo(item)">
                 <div class='desctitle'> {{item.productName}}</div> </div>
            </el-col>
          </el-row>
        </li>
      </ul>
      <ul class="last">
        <li>
            <el-row >
            <el-col :span="len-1" :offset="1" v-for="(item, index) in lastData" :key="index">
               
               <div class="desc">
                 <img :src="item.url" alt=""  @click="openInfo(item)">
                <div class='desctitle'> {{item.productName}}</div> </div>
            </el-col>
            </el-row>
        </li>
      </ul>
    </div>
    </el-card>
   
  </div>
</template>
<script>

export default {
  name: "img-default-scroll",
  components: {
   
  },
  props: {
    productList:{
      type:Array,
      default(){
        return []
      }
    },
    data: {
      type: Array,
      default() {
        return [
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
          },{
            url:require("@/img/content/3.jpg"),
            description: "产品3",
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
          },{
            url:require("@/img/content/4.jpg"),
            description: "产品4",
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
          },{
            url:require("@/img/content/5.jpg"),
            description: "产品5",
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
          }
        ];
      }
    },
    label:{
        type: String,
        default(){
          return ''
        }
      },
  },
  data() {
    return {
      imglist:[]
    };
  },
  watch:{
    productList(val){
      this.imglist=val.slice(2,7)
    }
  },
  mounted() {
     
    },
  methods:{
    openInfo(e){
        this.$emit('showProductInfo',e )
      }
  },
  computed: {
    firstData() {
      let len = Math.floor(this.imglist.length / 2);
      if (len == 0) {
        return [];
      }
      return this.imglist.slice(0, len);
    },
    lastData() {
      let len = Math.floor(this.imglist.length / 2);
      if (len == 0) {
        return [];
      }
      return this.imglist.slice(len, 2 * len);
    },
    len(){
        let len =Math.floor(this.imglist.length/2)
        if(len == 0){
            return 24
        }else{
            return Math.floor(24/len);
        }
    }
  }
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
 .clearfix{
    height: 45px;
    line-height: 45px;
    text-align : left;
    background: #f9f9f9;
    border-bottom: 1px solid #E0E0E0;
  }
  .title{
    width: 170px;
    background: #09988B;
    color: #fff;
    font-size: 16px;
    font-weight: 600;
    padding-left: 15px;
  }
#container {
  width: 100%;
  height: 350px;
  margin: 10px auto;
  overflow: hidden;
  position: relative;
  border: 1px solid #f9f9f9;
  box-sizing: border-box;

}
#container img{
  width: 100%;
  height: 270px;
}
/* #container li{
  position: relative;
} */
#container .desc{

  font-size: 12px;
 
}
.desctitle{
  height: 30px;
  margin: -130px;
  font-size: 16px;
  font-weight: 600;
}
#container ul.first {
  width: 100%;
  right: -100%;
  top: 0;
  position: absolute;
  animation: scollLeft 20s linear -10s infinite;
}
#container ul.last {
  width: 100%;
  right: -100%;
  top: 0;
  position: absolute;
  animation: scollLeft 20s linear 0s infinite;
}

#container:hover ul {
  animation-play-state: paused;
}

#container ul li {
  float: left;
  width: 100%;
  text-align: center;
  box-sizing: border-box;
}

@-webkit-keyframes scollLeft {
  from {
    right: -100%;
  }
  to {
    right: 100%;
  }
}

@keyframes scollLeft {
  from {
    right: -100%;
  }
  to {
    right: 100%;
  }
}

@-moz-keyframes scollLeft {
  from {
    right: -100%;
  }
  to {
    right: 100%;
  }
}

@-o-keyframes scollLeft {
  from {
    right: -100%;
  }
  to {
    right: 100%;
  }
}
</style>