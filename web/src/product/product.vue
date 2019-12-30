<template>
  <div name='product'>
    <productCard :productlist='productlist' :loading='loading' :search='search' :label='label' :activeTab='activeTab' :tabContent='tabContent' :showList='showList' :productInfo="productInfo" @showProductInfo='showProductInfo'></productCard>
  </div>
</template>

<script>
  import productCard from '@/components/productCard.vue'
  export default {
    name: 'product',
    props: {
      tabContent: {
        type: Object,
        default () {
          return {}
        }
      },
      showList: {
        type: Boolean,
        default () {
          return true
        }
      },
      productInfo: {
        type: Object,
        default () {
          return {}
        }
      },
      activeTab:{
        type: String,
        default(){
          return ''
        }
      },
      productlist:{
        type:Array,
        default(){
          return []
        }
      },
      loading: {
        type:Boolean,
        default(){
          return true
        }
      },
      search:{
        type:String,
        default(){
          return ''
        }
      }
    },
    data() {
      return {
        label: '产品展示',
        // productlist:[],
        // loading:true,
      };
    },
    components: {
      productCard
    },
    computed: {
    },
    created() {
    },
    mounted() {
      
    },
    watch: {
      productInfo(e) {
      },
    },
    methods: {
      showProductInfo(e) {
        this.$emit('showProductInfo', e)
      }
    },
  };
</script>

<style scoped>

</style>
