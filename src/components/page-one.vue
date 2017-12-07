<template>
    <div>
        <echart-bar v-bind:barData="barData" v-bind:barIsShow="barIsShow"></echart-bar>
        <echart-map></echart-map>
    </div>
</template>
<script>
    import echartBar from '@/components/echarts/bar'
    import echartMap from '@/components/echarts/map'
    export default {
        name: 'hello',
        data () {
            return {
                //柱状线条混合图数据-series
                barData:{},
                //loading-show
                barIsShow:true
            }
        },
        components:{
            echartBar,
            echartMap
        },
        created(){
            this.handlebarData();
        },
        mounted(){

        },
        methods: {
            //请求数据-柱状线条混合图-series
            handlebarData(){
                this.$http.get('https://www.easy-mock.com/mock/59a38131960a33213da0adfd/list/list-01')
                .then((res)=>{
                    this.barData = res.data;
                    this.barIsShow = false;
                })
                .catch((err)=>{
                    console.log(err);
                });
            }
        }
    }
</script>