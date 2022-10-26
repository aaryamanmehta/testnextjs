import React from 'react';
import {Line} from 'react-chartjs-2';

const data = {
  labels: ['01', '02', '03', '04', '05', '06', '07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24'],
  datasets: [
    {
      label: 'BASE CASE',
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
      data: [30.06, 30.06, 30.06, 30.06, 30.06, 30.06, 30.06, 30.06, 30.06, 30.06, 30.06, 30.06, 30.06, 30.06, 30.06, 30.06, 30.06, 30.06, 30.06, 30.06, 30.06, 30.06, 30.06, 30.06]
    },
    {
      label: 'CASE A',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(255, 64, 45,0.4)',
      borderColor: 'rgba(255, 64, 45,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(255, 64, 45,0.4)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(255, 64, 45,0.4)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [30.06, 30.11, 30.16, 30.21, 30.26, 30.31, 30.36, 30.41, 30.46, 30.51, 30.56, 30.61, 30.66, 30.71, 30.76, 30.81, 30.86, 30.91, 30.96, 31.01, 31.06, 31.11, 31.16, 31.21]
    },
    {
      label: 'CASE B',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(35, 143, 41, 0.4)',
      borderColor: 'rgba(35, 143, 41, 0.4)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(35, 143, 41, 0.4)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(35, 143, 41, 0.4)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [30.06, 30.01, 29.96, 29.91, 29.86, 29.81, 29.76, 29.71, 29.66, 29.61, 29.56, 29.51, 29.46, 29.41, 29.36, 29.31, 29.26, 29.21, 29.16, 29.11, 29.06, 29.01, 28.96, 28.91]
    }
  ]
};

export default () => (
  <div>
    <h2>.Z.NORTH</h2>
    <Line
      data={data}
      width={400}
      height={400}
    />
  </div>
);
