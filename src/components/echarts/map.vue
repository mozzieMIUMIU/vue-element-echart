<template>
    <div>
        <div id="echartMap" :style="{width: '800px', height: '500px'}"></div>
    </div>
</template>
<script>
    import chinaData from 'echarts/map/js/china.js'

    export default {
        data () {
            return {

            }
        },
        mounted(){
            this.$nextTick(function () {
                this.drawLine();
            })
        },
        methods: {
            drawLine(){
                var that = this;
                // 基于准备好的dom，初始化echarts实例
                let echartMap = this.$echarts.init(document.getElementById('echartMap'));
                // 图表
                var option = {
                    tooltip : {
                        trigger: 'item',
                        formatter: '{b}'
                    },
                    series : [
                        {
                            name: '中国',
                            type: 'map',
                            mapType: 'china',
                            selectedMode : 'multiple',
                            itemStyle:{
                                normal:{label:{show:true}},
                                emphasis:{label:{show:true}}
                            },
                            data:[
                                {name:'广东',selected:true}
                            ]
                        }
                    ]
                };
                // 绘制图表
                echartMap.setOption(option);
            }
        }
    }
</script>