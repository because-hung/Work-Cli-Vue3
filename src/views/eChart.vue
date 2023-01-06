<template>
    <div  ref="canvas" style="width:500px;height:500px"></div>
</template>
<script setup>
// import 'echarts/lib/chart/scatter' // Bar chart
// 圓餅 柱狀 ->
// import * as echarts from 'echarts/core'
// import { BarChart } from 'echarts/charts'
// import { TitleComponent, LegendComponent } from 'echarts/components'
// import { LabelLayout } from 'echarts/features'
// import { CanvasRenderer } from 'echarts/renderers'

// echarts.use([BarChart, TitleComponent, LegendComponent,
//   CanvasRenderer, LabelLayout])

// 折線圖 ->
// 引入 echarts 核心模块，核心模块提供了 echarts 使用必须要的接口。
import * as echarts from 'echarts/core'
// 引入柱状图图表，图表后缀都为 Chart
import { LineChart } from 'echarts/charts'
// 引入提示框，标题，直角坐标系，数据集，内置数据转换器组件，组件后缀都为 Component
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent
} from 'echarts/components'
// 标签自动布局，全局过渡动画等特性
import { LabelLayout, UniversalTransition } from 'echarts/features'
// 引入 Canvas 渲染器，注意引入 CanvasRenderer 或者 SVGRenderer 是必须的一步
import { CanvasRenderer } from 'echarts/renderers'
import { ref, onMounted } from 'vue'

// 注册必须的组件
echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
  LineChart,
  LabelLayout,
  UniversalTransition,
  CanvasRenderer
])

const canvas = ref(null)

const option = { // line chart 折線圖
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [150, 230, 224, 218, 135, 147, 260],
      type: 'line'
    }
  ]
}

// const option = {  // bar chart 柱狀圖
//   xAxis: {
//     data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
//   },
//   yAxis: {
//     type: 'value'
//   },
//   series: [
//     {
//       data: [120, 200, 150, 80, 70, 110, 130],
//       type: 'bar',
//       showBackground: true,
//       backgroundStyle: {
//         color: 'rgba(180, 180, 180, 0.2)'
//       }
//     }
//   ]
// }

// const option = {  // pie chart 圓餅圖
//   title: {
//     text: 'Referer of a Website',
//     subtext: 'Fake Data',
//     left: 'center'
//   },
//   tooltip: {
//     trigger: 'item'
//   },
//   legend: {
//     orient: 'vertical',
//     left: 'left'
//   },
//   series: [
//     {
//       name: 'Access From',
//       type: 'pie',
//       radius: '50%',
//       data: [
//         { value: 1048, name: 'Search Engine' },
//         { value: 735, name: 'Direct' },
//         { value: 580, name: 'Email' },
//         { value: 484, name: 'Union Ads' },
//         { value: 300, name: 'Video Ads' }
//       ],
//       emphasis: {
//         itemStyle: {
//           shadowBlur: 10,
//           shadowOffsetX: 0,
//           shadowColor: 'rgba(0, 0, 0, 0.5)'
//         }
//       }
//     }
//   ]
// }

onMounted(() => {
// 在onMounted中取得DOM
  const pie = echarts.init(canvas.value)
  // 取得DOM後加入設定參數開始繪製
  pie.setOption(option)
})
</script>

<style lang="">
</style>
