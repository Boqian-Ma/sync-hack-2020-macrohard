import React from 'react';
import { Line } from 'react-chartjs-2';

export default function LineGraph(props) {
    const companies = props.companies;
    const data = {
        labels: companies.map((company, idx) => {
            return company.name;
        }),
        datasets: [{
            data: companies.map((company, idx) => {
                return company.time;
            }),
            backgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56',
                '#44CF6C'
            ],
            hoverBackgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56',
                '#44CF6C'
            ]
        }]
    };

    const options = {
        width: '50%',
        maxHeight: '400px',
        responsive: true,
        maintainAspectRatio: false,
    }

    return (
        <div style={{ width: '90%', height: '100%', maxHeight: '400px' }}>
            <h2>Data Usage</h2>
            <Line data={data} options={options} />
        </div>
    );
};