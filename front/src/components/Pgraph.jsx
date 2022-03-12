import React, { Fragment } from 'react'
import ReactApexChart from 'react-apexcharts'

export default function Pgraph({options, series, name, type = "pie"}) {
  return (
    <Fragment>
        <span className="text-center text-green-900 text-2xl my-2 font-bold uppercase">{name}</span>
        <ReactApexChart options={options} series={series} type={type} width="500" />
    </Fragment>
  )
}
