<template>
    <div name='product'>
      <productCard :label='label' :tabContent='tabContent' :showList='showList' :productInfo="productInfo"></productCard>
    </div>
</template>

<script>
import productCard from '@/components/productCard.vue'
export default {
    name:'product',
    props: {
       tabContent: {
        type: Object,
        default () {
          return {}
        }
      },
      showList:{
        type: Boolean,
        default(){
          return true
        }
      },
      productInfo:{
        type: Object,
        default(){
          return {}
        }
      }
    },
    data() {
        return {
          label:'产品展示'
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
      productInfo(e){
        console.log(e);
      }
    },
    methods: {

    },
};
</script>

<style scoped>

</style>
