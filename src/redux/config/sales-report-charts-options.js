export default {
  layout: {
    padding: {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    }
  },
  legend: false,
  responsive: true,
  tooltips: {
    mode: 'label'
  },
  elements: {
    line: {
      fill: true,
    }
  },
  scales: {
    xAxes: [{
      categoryPercentage: 0.7,
      display: true,
      gridLines: {
        color: '#505464',
        display: false
      },
      label: {
        color: '#969aab'
      }
    }
    ],

    yAxes: [
      {
        categoryPercentage: 1,
        barPercentage: 1,
        stacked: true,
        type: 'linear',
        display: true,
        position: 'left',
        id: 'y-axis-1',
        gridLines: {
          display: true,
          color: '#505464',
          drawBorder: false
        },
        scaleLabel: {
          display: false
        },
        ticks: {
          beginAtZero: true,
          display: false,
        },
        labels: {
          show: false
        }
      },
    ]
  },
}