import React, { FC, useEffect, useState } from 'react'
import { Grid } from '@mui/material'
import StatInfo from 'components/StatInfo'
import Chart from 'components/Chart'
import data from 'data/data.json'
import DateRange from 'components/DateRange'
import { getTimeStampFromDate } from 'utils/dateUtils'
import { format } from 'date-fns'

interface StaticData {
  date: number
  impressions: number
  clicks: number
  campaign_id: string
}

export interface LineChartSeriesData {
  name: string
  data: number[]
}

interface FilteredChartData {
  totalClicks: number
  totalImpressions: number
  seriesData: LineChartSeriesData[]
  xAxis: string[]
}

const Analytical: FC = () => {
  const [staticData, setStaticData] = useState<StaticData[]>([])
  const [chartData, setChartData] = useState<FilteredChartData>({
    totalClicks: 0.0,
    totalImpressions: 0,
    xAxis: [],
    seriesData: [
      {
        name: 'Clicks',
        data: [],
      },
      {
        name: 'Impressions',
        data: [],
      },
    ],
  })

  useEffect(() => {
    setStaticData(
      data.map((record) => ({
        ...record,
        clicks: Number(record.clicks),
        impressions: Number(record.impressions),
        date: getTimeStampFromDate(record.date),
      }))
    )
  }, [])

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const fetchData = (dates: any) => {
    const startDateTime = getTimeStampFromDate(dates[0])
    const endDateTime = getTimeStampFromDate(dates[1])
    const filteredData = staticData
      .filter((record) => startDateTime < record.date && record.date < endDateTime)
      .sort((prev, next) => prev.date - next.date)

    setChartData({
      totalClicks: Number(
        filteredData.reduce((total, current) => total + current.clicks, 0).toFixed(2)
      ),
      totalImpressions: filteredData.reduce((total, current) => total + current.impressions, 0),
      seriesData: [
        {
          name: 'Clicks',
          data: filteredData.map((record) => record.clicks),
        },
        {
          name: 'Impressions',
          data: filteredData.map((record) => record.impressions),
        },
      ],
      xAxis: filteredData.map((record) => format(new Date(record.date), 'MM/dd/yyyy')),
    })
  }

  return (
    <Grid container display="block" padding="40px" spacing={4}>
      <Grid item xs={12} marginBottom="20px">
        <DateRange onRangeSelected={fetchData} />
      </Grid>
      <Grid item xs={12} marginBottom="40px">
        <Grid container spacing={5}>
          <Grid item lg={3} sm={6} xs={12}>
            <StatInfo label="Total Clicks" value={chartData.totalClicks} />
          </Grid>
          <Grid item lg={3} sm={6} xs={12}>
            <StatInfo label="Total Impressions" value={chartData.totalImpressions} />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Chart
          title="Product Trends by Month"
          type="line"
          data={chartData.seriesData}
          xAxisLabels={chartData.xAxis}
        />
      </Grid>
    </Grid>
  )
}

export default Analytical
