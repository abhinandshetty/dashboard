import React, { FC } from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { LineChartSeriesData } from 'containers/Analytical'
import NoDataToDisplay from 'highcharts/modules/no-data-to-display'

NoDataToDisplay(Highcharts)

interface ChartInterface {
  type: string
  title: string
  data: LineChartSeriesData[]
  xAxisLabels: string[]
}

const Chart: FC<ChartInterface> = ({ type, title, data, xAxisLabels }) => {
  return (
    <div>
      <HighchartsReact
        highcharts={Highcharts}
        options={{
          chart: {
            style: {
              fontFamily: 'PT Sans, sans-serif',
            },
            type,
          },
          xAxis: {
            categories: xAxisLabels,
          },
          lang: {
            noData: 'No data to display',
          },
          noData: {
            style: {
              color: '#000',
            },
            position: {
              x: 0,
              y: 0,
              align: 'center',
              verticalAlign: 'middle',
            },
          },
          title: {
            text: title,
            align: 'left',
            style: {
              fontWeight: 600,
            },
          },
          series: data,
        }}
      />
    </div>
  )
}

export default Chart
