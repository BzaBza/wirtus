export default {
  layout: {
    padding: {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    }
  },
  maintainAspectRatio: false,
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
    xAxes: [
      {
        mirror: true,
        id: 'x-axis-1',
        display: true,
        position: 'bottom',
        showBorder: false,
        gridLines: {
          color: '#3d404f',
          showBorder: false,
          display: true
        },
        ticks: {
          beginAtZero: false,
          min: 0,
          padding: -40,
        },
      },
      {
        mirror: true,
        id: 'x-axis-2',
        display: false,
        position: 'top',
        showBorder: false,
        gridLines: {
          display: false,
        },
        scaleLabel: {
          display: false
        },
        ticks: {
          beginAtZero: true,
          display: false
        },
      }
    ],
    yAxes: [
      {
        stacked: true,
        type: 'linear',
        display: true,
        position: 'left',
        id: 'y-axis-1',
        gridLines: {
          display: false,
        },
        scaleLabel: {
          display: false
        },
        ticks: {
          beginAtZero: true,
          display: false,
          max: 120
        },
        labels: {
          show: false
        }
      },
    ]
  },
}