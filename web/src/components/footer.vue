<template>
  <!-- <div name='footer'>
        <p>郑州黄页网 | 郑州畜禽用药企业名录 |  产品展厅 | 最新供应 | 新闻资讯 | 产品地图 | 网站地图 | 免责声明 | 删除/修改信息| 投诉中心
  瘦瘦包多少钱   乌骨鸡苗   抓娃娃机厂家批发   无线模块厂家   LoRa模块   垃圾桶厂家   线性模组   进苏施工备案流程   进苏施工备案流程   梨树苗   VOCs在线监测   宁波厨房设备   门窗加工设备   上海到沈阳冷链物流   新加坡注册公司   排蓄水板   食用酒精   蔬菜大棚   格栅除污机   喷播机厂家   铸铁闸门厂家   红叶石楠价格   地黄种苗   交换机回收   mpp电力管   湿喷台车   兰州牛肉面加盟排行榜   防风抑尘网  
  河南康普尔动物药业有限公司  技术支持： 搜了网 | 登录 | 免费注册</p>   
      </div> -->    
  <div class="footer">
    <div class="w1200">
      <div class="left fl">
        <img class="fr logimg" src="../images/logo.png"/>
      </div>
      <div class="middle fl">
        <ul class="fl">
          <li>
            <h3>网站首页</h3>
            <p><a href="#">公司简介</a></p>
            <p><a href="#">领导致辞</a></p>
            <p><a href="https://map.baidu.com/" target="_blank">机构设置</a></p>
            <p><a href="https://map.baidu.com/" target="_blank">地理位置</a></p>
          </li>
          <li>
            <h3>荣誉资质</h3>
            <p><a href="#">产品名称第一</a></p>
            <!-- <p><a href="#">汇源果汁</a></p>
            <p><a href="#">娃哈哈矿泉水</a></p> -->
          </li>
          <li>
            <h3>精品案例</h3>
            <p><a href="#">年底促销</a></p>
            <p><a href="#">6.18年中大促销</a></p>
          </li>
          <li>
            <h3>友情链接</h3>
            <div class="flink">
              <div><a href="https://www.163.com/" target="_blank"><span>网易</span></a></div>
              <div><a href="http://www.sohu.com/" target="_blank"><span>搜狐</span></a></div>
              <div><a href="https://www.sina.com.cn/" target="_blank"><span>新浪</span></a></div>

   
   
              <div><a href="https://www.zte.com.cn/global/" target="_blank"><span>中兴</span></a></div>
              <div><a href="https://www.qq.com/" target="_blank"><span>腾讯</span></a></div>

            </div>
          </li>
        </ul>
      </div>
      <div class="right fr">
        <div class="l fl">
          <h3>工作热线</h3>
          <div>0371-6531-1511</div>
          <!-- <h3 class="rx">24小时服务热线</h3>
          <p>13631338039</p> -->
          <div class="weibo">
            <img src="../images/weibo.svg" alt="微博">
            <a href="https://www.sina.com.cn/" target="_blank">新浪微博</a></div>
          <div class="qq">
            <img src="../images/qq.svg" alt="qq">
            <a href="http://t.qq.com/" target="_blank">腾讯微博</a></div>
        </div>
        <div class="r fr">
          <img class="erweima" src="../images/erweima.png" />
          <div>扫一扫二维码有惊喜</div>
        </div>
      </div>
      <div class="copyright">
        20010-20011&nbsp;版权所有&nbsp;2003 -2010&nbsp;&nbsp;备案号：粤1234567
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'footer',
    props: {
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

<style scoped>
  /* .footer {
    height: 330px !important;
    font-size: 12px;
    line-height: 12px;
  } */
  /* .footer /deep/ .data-v-1b41da19 {
    height: 150px !important;
    font-size: 12px;
    line-height: 12px !important;
  } */
  /* 布局容器 */
  /* .el-footer {
    background-color: #1b434e;
    color: #9d9d9d;
    text-align: center;
    font-size: 12px;
    line-height: 12px;
    height: 150px !important;
  } */
  .fl {
    float: left;
  }
  .fr {
    float: right;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  a:hover {
    color: #099a10;
  }
  .w1200 {
    position: relative;
    display: flex;
     align-items: center;
    justify-content: center;
    vertical-align: middle;
		/* margin: -44px auto;
		width: 1000px;
		min-width: 65px;
		height: auto;
		overflow: hidden; */
	} 
  .footer {
    padding: 0;
    /* background: #1b434e; */
    color: #fff;
  }
  .footer .left {
    width: 120px;
    margin-right: 20px;
    padding: 5px 0;
  }
  .footer .middle {
    /* display: flex;
    align-items: center;
    justify-content: center;
    vertical-align: middle; */
    line-height: 14px;
    padding: 0;
  }
  .footer .middle ul li {
    float: left;
    padding: 0 10px;
  }
  .footer .middle ul li h3 {
    line-height: 14px;
    font-size: 12px;
    font-weight: 600;
    margin-bottom: 8px;
  }
  .footer .middle ul li p {
    font-size: 10px;
    text-align: left;
    margin-top: 8px;
    /* max-width: 165px; */
  }
  .footer .middle ul li .flink{
    width: 150px;
  }
  .footer .middle ul li .flink div{
    display: inline-block;
    margin-top: 10px;
  }
  .footer .middle ul li p.flink div {
   
    /* float: left; */
    margin-right: 10px;
    margin-bottom: 10px;
  }
  .footer .right {
    width: 300px;
    position: relative;
    padding: 0;
    display: flex;
     align-items: center;
    justify-content: center;
    vertical-align: middle;
  }
  .footer .right:after {
    content: "";
    position: absolute;
    height: 100%;
    width: 1px;
    background: #647f87;
    left: 10px;
    top: 0px;
  }
  .footer .right .l h3 {
    font-size: 12px;
    font-weight: 600;
    margin-bottom: 5px;
  }
  .footer .right .l div,.footer .right .fr div{
    text-align: left;
    line-height: 18px;
    width: 150px;
    margin-left: 20px;
    font-size: 12px
  }
  .footer .right .l h3.rx {
    margin-top: 10px;
  }
  .footer .right .l p {
    font-size: 10px;
    color: #fff;
    font-weight: 600;
  }
  .footer .right .l{
    width: 120px;
    text-align: center;
  }
  .footer .right .r{
    width: 120px;
    margin-left: 10px
  }
  .footer .right .l .weibo {
    white-space: nowrap;
    width: 100px;
    font-size: 10px;
    font-weight: normal;
    color: #a1c6d2;
    margin-top: 5px;
    margin-left: 20px;
    /* background: url(../images/weibo.svg) no-repeat left center; */
    /* padding-left: 25px; */
    font-family: "宋体";
    height: 14px;
    line-height: 16px;
  }
  .footer .right .l .qq {
    white-space: nowrap;
     width: 80px;
    font-size: 10px;
    font-weight: normal;
    color: #a1c6d2;
    margin-left: 20px;
    margin-top: 5px;
    /* background: url(../images/qq.svg) no-repeat left center; */
    /* padding-left: 25px; */
    font-family: "宋体";
    height: 14px;
    line-height: 16px;
  }
  .footer .right .l .weibo img,.footer .right .l .qq img{
    width: 15px;
    height: 15px;
    float: left; 
    margin-right: 10px
  }
  .footer .right .r p {
    text-align: center;
    margin-top: 3px;
  }
  .footer .copyright {
    /* clear: both; */
    position: absolute;
    bottom: -15px;
    width: 100%;
    font-size: 10px;
    color: #929292;
    text-align: center;
    padding-top: 0;
  }
  .erweima{
    margin-left: 30px;
    margin-bottom: 5px;
    width: 80px;
    height: 80px;
  }
  .logimg{
    width: 80px;
    height: 80px;
  }
</style>
