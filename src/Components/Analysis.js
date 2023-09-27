import React from 'react'
import {Bar} from "react-chartjs-2"
import { Chart,registerables } from 'chart.js';
Chart.register(...registerables);

export default function Analysis({chartData}) {
  console.log(chartData)
  
  return (//<h1>ana</h1>
    <Bar data={chartData}/>
  );
}
