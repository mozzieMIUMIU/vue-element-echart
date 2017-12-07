<template>
    <div>
        <div id="myChart" :style="{width: '800px', height: '500px'}"></div>
    </div>
</template>
<script>
    export default {
        props:{
            barData:{
                type: Object,
                default: {}
            } ,
            barIsShow:{
                type: Boolean,
                default: true
            }
        },

        data () {
            return {
                myChart:null
            }
        },
        watch:{
            barData(newVal,oldVal){
                this.barData = newVal;
                this.drawLine();
            },
            barIsShow(newVal,oldVal){
                //loadingy移除
                this.loading(newVal);
            }
        },
        mounted(){
            // 基于准备好的dom，初始化echarts实例
            this.myChart = this.$echarts.init(document.getElementById('myChart'));
            //loading加载
            this.loading(this.barIsShow);
        },
        methods: {
            loading(val){
                val==true ? this.myChart.showLoading({text: '正在努力的读取数据中...'}) : this.myChart.hideLoading()
            },
            drawLine(){
                var that = this;
                // 绘制图表
                this.myChart.setOption({
                    title : {
                        text: '过去七天交易额'
                    },
                    tooltip : {
                        trigger: 'axis',
                    },
                    legend: {
                        data:['交易额', '交易量']
                    },
                    toolbox: {
                        show : true,
                        feature : {
                            mark : {show: true},
                            dataView : {show: true, readOnly: false},
                            magicType : {show: true, type: ['line', 'bar']},
                            restore : {show: true},
                            saveAsImage : {show: true}
                        }
                    },
                    dataZoom : {
                        show : false,
                        start : 0,
                        end : 100
                    },
                    xAxis : [
                        {
                            type : 'category',
                            boundaryGap : true,
                            data : ['2017-12-07','2017-12-06','2017-12-05','2017-12-04','2017-12-03','2017-12-02','2017-12-01']
                        },
                        {
                            type : 'category',
                            boundaryGap : true,
                            data : []
                        }
                    ],
                    yAxis : [
                        {
                            type : 'value',
                            scale: true,
                            name : '交易额',
                        },
                        {
                            type : 'value',
                            scale: true,
                            name : '交易量',
                        }
                    ],
                    series : [
                        {
                            name:'交易额',
                            type:'bar',
                            yAxisIndex: 1,
                            data:(function (){
                                return that.barData.sum;
                            })()
                        },
                        {
                            name:'交易量',
                            type:'line',
                            data:(function (){
                                return that.barData.num;
                            })()
                        }
                    ]
                });
            }
        }
    }
</script>