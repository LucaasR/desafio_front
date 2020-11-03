import React from 'react';
import { Line } from 'react-chartjs-2';

export default function DashboardChart(props: {
  title: string;
  labels: string[];
  series: number[];
}) {
  const { labels, series, title } = props;

  const data = {
    labels,
    datasets: [
      {
        label: title,
        data: series,
        backgroundColor: '#58d00f',
        borderColor: '#58d00f',
        pointBorderColor: '#58d00f',
        pointHoverBackgroundColor: '#58d00f',
        pointHoverBorderColor: '#58d00f',
        fill: false,
        lineTension: 0.1,
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointRadius: 1,
        pointHitRadius: 10,
      },
    ],
  };

  return <Line data={data} options={{ maintainAspectRatio: false }} />;
}
