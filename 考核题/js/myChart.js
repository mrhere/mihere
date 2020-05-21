(function () {
    var myChart = echarts.init(document.querySelector('#center-f-top1'));
    $.get(' https://edu.telking.com/api/?type=month').done(function (data) {
        myChart.setOption({
            title: {
                text: '曲线图数据展示',
                left: '50%',
                top: '3%'

            },
            color: ['#3398DB'],
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    label: {
                        backgroundColor: '#6a7985'
                    }
                }
            },

            toolbox: {
     
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '4%',
                containLabel: true,
                name:"人"
            },
            xAxis: [{
                type: 'category',
                boundaryGap: false,
                data: data.data.xAxis
            }],
            yAxis: [{
                type: 'value',
                
            }],
            series: [{
                type: 'line',
                data: data.data.series,
                smooth: true,
            },
            ]
        })
    });
})();

    (function () {
        var myChart = echarts.init(document.querySelector('#center-f-r1'));
        $.get(' https://edu.telking.com/api/?type=week').done(function (data) {
            myChart.setOption({
                title: {
                    text: '柱状图数据展示',
                    left: '50%',
                    top: '3%'

                },
                color: ['#3398DB'],
                tooltip: {
                    trigger: 'axis',
                    axisPointer: { // 坐标轴指示器，坐标轴触发有效
                        type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: [{
                    type: 'category',
                    data: data.data.xAxis,
                    axisTick: {
                        alignWithLabel: true
                    }
                }],
                yAxis: [{
                    name:"商品数量",
                    type: "value"
                }],
                series: [{
                    name: '直接访问',
                    type: 'bar',
                    barWidth: '35%',
                    data: 
                        data.data.series
                    ,
                    
                }]
            })
        });
    })();


(function () {
    var myChart = echarts.init(document.querySelector('#center-f-l1'));
    $.get(' https://edu.telking.com/api/?type=week').done(function (data) { 
        myChart.setOption({
            title: {
                text: '饼状图数据展示',
                top:'3%',
                left: 'center'
                },
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b} : {c} ({d}%)'
                },
                series: [{
                    type: 'pie',
                    radius: '65%',
                    center: ['50%', '50%'],
                    selectedMode: 'single',
                    data: [{
                            value: data.data.series[0],
                            name: data.data.xAxis[0],
                        },
                        {
                            value: data.data.series[1],
                                name: data.data.xAxis[1],
                        },
                        {
                            value: data.data.series[2],
                                name: data.data.xAxis[2],
                        },
                        {
                            value: data.data.series[3],
                                name: data.data.xAxis[3],
                        },
                        {
                            value: data.data.series[4],
                                name: data.data.xAxis[4],
                        },
                         {
                             value: data.data.series[5],
                             name: data.data.xAxis[5],
                        },
                          {
                              value: data.data.series[6],
                              name: data.data.xAxis[6],
                          }
                    ],
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }]
        });
    });
})();