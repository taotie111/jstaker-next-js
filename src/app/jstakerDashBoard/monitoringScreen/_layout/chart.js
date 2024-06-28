import * as echarts from 'echarts'
// 第一水闸潮位过程曲线

export const line1 = {
  // animation: false,
  tooltip: {
    trigger: 'axis',
    confine: true,
    showContent: true,
    axisPointer: {
      type: 'none'
    }
    // position: function (point, params, dom, rect, size) {
    //   console.log(point, params, dom, rect, size)
    //   return [point[0] - 100, '10%'] //返回x、y（横向、纵向）两个点的位置
    // },
  },
  legend: {
    left: 'center',
    bottom: 0,
  },
  grid: {
    top: '40px',
    left: '10px',
    right: '10px',
    bottom: '40px',
    containLabel: true
  },
  xAxis: [{
    type: 'category',
    // name: '时间',
    nameTextStyle: {
      // color: '#fff',
      fontSize: '12px',
      align: 'left'
    },
    alignTicks: true,
    axisTick: {
      // interval: 4,
      alignWithLabel: true,
      inside: true,
      lineStyle: {
        width: 2
      }
    },
    boundaryGap: true,
    // scale: true,
    // offset: 5,
    axisLabel: {

      showMinLabel: true,
      showMaxLabel: true,
      fontSize: '12px',
      // color: '#fff',
      formatter: function (value, index) {
        return value.slice(0, 16)
      }
    },
    axisLine: {
      show: true,
      onZero: false,
      lineStyle: {
        // color: '#ccc'
      }
    },
    data: [
      "00:00",
      "2:00",
      "4:00",
      "6:00",
      "8:00",
      "10:00",
      "12:00",
      "14:00",
      "16:00",
      "18:00",
      "20:00",
      "22:00",
    ]
  }],
  yAxis: [{
      type: 'value',
      scale: true,
      smooth: true,
      min: function (value) {
        // 向下取整作为起始Y点
        return Math.floor(value.min)
      },
      name: '统计数',
      nameTextStyle: {
        // padding: [0, 0, 0, 40],
        // color: "#fff",
        fontSize: '14px'
      },
      splitLine: {
        lineStyle: {
          color: 'rgba(204, 204, 204, 0.2)',
          type: "dashed"
        }
      },
      axisLabel: {
        textStyle: {
          // color: '#fff'
        }
      }
    },
    // {
    //   type: 'value',
    //   name: '流量(m³/s)',
    //   position: 'right',
    //   nameTextStyle: {
    //     padding: [0, -40, 0, 40],
    //     // color: '#fff',
    //     fontSize: '14px'
    //   },
    //   splitLine: {
    //     lineStyle: {
    //       color: 'rgba(204, 204, 204, 0.2)',
    //       type: 'dashed'
    //     }
    //   },
    // },
  ],
  color: ['#5473E8', '#FF9F24'],
  series: [{
      name: '错误统计',
      type: 'line',
      smooth: false, //true 为平滑曲线，false为直线
      symbolSize: 3,
      symbol: 'circle', //将小圆点改成实心 不写symbol默认空心
      data: [
        
      ],
      lineStyle: {
        normal: {
          width: 3,
        }
      },
      yAxisIndex: 0
    },
  ]
}

export const line2 = {
  tooltip: {
    trigger: 'axis',
    confine: true,
    showContent: true,
    axisPointer: {
      type: 'none'
    }
    // position: function (point, params, dom, rect, size) {
    //   console.log(point, params, dom, rect, size)
    //   return [point[0] - 100, '10%'] //返回x、y（横向、纵向）两个点的位置
    // },
  },
  legend: {
    left: 'center',
    bottom: 0,
  },
  grid: {
    top: '40px',
    left: '30px',
    right: '10px',
    bottom: '40px',
    containLabel: true
  },
  xAxis: [{
    type: 'category',
    name: '水位/m',
    nameTextStyle: {
      // color: '#fff',
      fontSize: '12px',
      align: 'left'
    },
    alignTicks: true,
    axisTick: {
      // interval: 4,
      alignWithLabel: true,
      inside: true,
      lineStyle: {
        width: 2
      }
    },
    boundaryGap: true,
    // scale: true,
    // offset: 10,
    axisLabel: {

      showMinLabel: true,
      showMaxLabel: true,
      fontSize: '12px',
      // color: '#fff',
    },
    axisLine: {
      show: true,
      onZero: false,
      lineStyle: {
        // color: '#ccc'
      }
    },
    data: []
  }],
  yAxis: [{
    type: 'value',
    scale: true,
    min: function (value) {
      // 向下取整作为起始Y点
      return Math.floor(value.min)
    },
    name: '性能',
    nameTextStyle: {
      // color: "#fff",
      fontSize: '14px'
    },
    splitLine: {
      lineStyle: {
        color: 'rgba(204, 204, 204, 0.2)',
        type: "dashed"
      }
    },
    axisLabel: {
      textStyle: {
        // color: '#fff'
      }
    }
  }],
  color: [ '#FF9F24','#5473E8'],
  series: [{
    name: '执行时间(S)',
    type: 'line',
    smooth: false, //true 为平滑曲线，false为直线
    symbolSize: 3,
    symbol: 'circle', //将小圆点改成实心 不写symbol默认空心
    data: [
      1, 2, 3
    ],
    lineStyle: {
      normal: {
        width: 3,
      }
    },
  }, ]
}

export const default_charts = {
  title: {
    text: '暂无数据',
    top: 'center',
    left: 'center',
    textStyle: {
      fontSize: 20,
      // color: '#fff'
    }
  },
  xAxis: {
    type: 'category',
    show: false,
    axisLabel: {
      textStyle: {
        // color: "#fff",
        fontSize: '11px'
      },
      showMinLabel: true,
      showMaxLabel: true,
      hideOverlap: true,
      formatter: function (value, index) {
        if (value.length > 5) {
          return value.substring(5, 11) + "\n" + value.slice(11)

        }
        return value
      }
    },
  },
  yAxis: {
    type: 'value',
    show: false
  },
  series: []
};