
<template>
    <div>
        <el-card style="width: 92%;margin-bottom: 2%;">
            <el-row :gutter="10">
                <el-col :span="8">
                    <h3>今日诊断</h3>
                </el-col>
                <el-col :span="8"> 
                    <h3>比例</h3>
                </el-col>
                <el-col :span="8"> 
                    <h3>服务器</h3>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="8">
                    <h2>230</h2>
                </el-col>
                <el-col :span="8">
                    <h2>59:171</h2>
                </el-col>
                <el-col :span="8">
                    <h2 style="color:green;">运行中</h2>
                </el-col>
            </el-row>
        </el-card>
        <el-card style="width: 45%;display: inline-block;margin-right: 2%;">
            <div ref="chart" style="height:350px"></div>
        </el-card>
        <el-card style="width: 45%;display: inline-block;">
            <div ref="chart1" style="height:350px"></div>
        </el-card>
    </div>
  
  </template>
  
  <script>
  
    export default {
      data() {
  
      },
      mounted() {
        this.getEchartData()
        this.getEchartData1()
  
      },
      methods: {
        getEchartData() {
          const chart = this.$refs.chart
          if (chart) {
            const myChart = this.$echarts.init(chart)
                const option =
                {
                    color: ['#80FFA5', '#00DDFF', '#37A2FF', '#FF0087', '#FFBF00'],
                    title: {
                        text: '诊断结果'
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                        type: 'cross',
                        label: {
                            backgroundColor: '#FF0087'
                        }
                        }
                    },
                    legend: {
                        data: ['阴性', '阳性']
                    },
                    toolbox: {
                        feature: {
                        saveAsImage: {}
                        }
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis: [
                        {
                        type: 'category',
                        boundaryGap: false,
                        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                        }
                    ],
                    yAxis: [
                        {
                        type: 'value'
                        }
                    ],
                    series: [
                        {
                        name: '阴性',
                        type: 'line',
                        smooth:true,
                        stack: 'Total',
                        areaStyle: {},
                        emphasis: {
                            focus: 'series'
                        },
                        data: [120, 132, 101, 134, 90, 230, 210]
                        },
                        {
                        name: '阳性',
                        type: 'line',
                        smooth:true,
                        stack: 'Total',
                        areaStyle: {},
                        emphasis: {
                            focus: 'series'
                        },
                        data: [220, 182, 191, 234, 290, 330, 310]
                        },
                    ]
                }
            myChart.setOption(option)
          }
        },
        getEchartData1() {
          const chart1 = this.$refs.chart1
          if (chart1) {
            const myChart = this.$echarts.init(chart1)
                const option =
                {
                    angleAxis:
                    {
                    type: 'category',
                    data: ['CRP', 'ESR', '有氧培养', '无氧培养', '糖尿病', '高血压']
                    },
                    radiusAxis: {},
                    polar: {},
                    series: [
                        {
                        type: 'bar',
                        data: [5, 2, 3, 4, 3, 3],
                        coordinateSystem: 'polar',
                        name: '阳性',
                        stack: 'a',
                        emphasis: {
                            focus: 'series'
                        }
                        },
                        {
                        type: 'bar',
                        data: [2, 4, 3, 1, 3, 2],
                        coordinateSystem: 'polar',
                        name: '阴性',
                        stack: 'a',
                        emphasis: {
                            focus: 'series'
                        }
                        },
                    ],
                    legend: {
                        show: true,
                        data: ['阳性', '阴性',]
                    }
  
                }
            myChart.setOption(option)
          }
        
        },
       
   
      },
      watch: {},
      created() {
      }
    }
  </script>
  