import React from 'react';
import { Doughnut } from 'react-chartjs-2';

export default function PieGraph() {
    const data = {
        labels: [
            'Red',
            'Blue',
            'Yellow'
        ],
        datasets: [{
            data: [300, 50, 100],
            backgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56'
            ],
            hoverBackgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56'
            ]
        }]
    };

    const options = {
        width: '50%',
        height: '40%',
        responsive: true,
        maintainAspectRatio: false,
    }

    return (
        <div style={{ width: '60%', height: '100%' }}>
            <h2>Doughnut Example</h2>
            <Doughnut data={data} options={options}/>
        </div>
    );
};