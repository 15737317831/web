<template>
    <div name='product'>
      <productCard :label='label' :tabContent='tabContent'></productCard>
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

    },
    methods: {

    },
};
</script>

<style scoped>

</style>
