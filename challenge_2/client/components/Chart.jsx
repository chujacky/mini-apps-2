import React from 'react';
import { Line } from 'react-chartjs-2';

const Chart = ({ prices }) => {
  const data = {
    labels: Object.keys(prices),
    datasets: [
      {
        label: 'Bitcoin prices',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: Object.values(prices),
      },
    ],
  };

  const graphDisplay = {
    display: !Object.values(prices).length ? 'none' : 'block',
  };
  return (
    <div style={graphDisplay}>
      <Line data={data} height={100} />
    </div>
  );
};

export default Chart;
