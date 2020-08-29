import React from 'react';
import { Doughnut } from 'react-chartjs-2';

export default function PieGraph(props) {
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
        height: '40%',
        responsive: true,
        maintainAspectRatio: false,
    }

    return (
        <div style={{ width: '60%', height: '100%' }}>
            <h2>Data Usage</h2>
            <Doughnut data={data} options={options}/>
        </div>
    );
};