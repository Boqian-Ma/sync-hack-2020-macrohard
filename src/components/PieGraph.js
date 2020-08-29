import React, { useState, useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';

export default function PieGraph(props) {
    const [companies, setCompanies] = useState({});
    useEffect(() => {
        fetch("http://127.0.0.1:5000/home").then(response =>
            response.json().then(data => {
                setCompanies(data.piechart);
            })
        )
    });

    const data = {
        labels: Object.keys(companies).map((company, idx) => {
                return company;
        }),
        datasets: [{
            data: Object.values(companies).map((time, idx) => {
                return time;
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
            <h2 style={{ color: '#355593' }}>DATA USAGE</h2>
            <Doughnut data={data} options={options}/>
        </div>
    );
};