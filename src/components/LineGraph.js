import React from 'react';
import { Line } from 'react-chartjs-2';

var moment = require('moment');
moment.updateLocale('en', {
    week: {
        dow: 1,
        doy: 7
    }
});

export default function LineGraph(props) {
    const freq = props.freq;
    var now = moment();
    var seven_days = moment().subtract(7, 'days');
    var memes = [moment().subtract(7, 'days'),
        moment().subtract(6, 'days'),
        moment().subtract(5, 'days'),
        moment().subtract(4, 'days'),
        moment().subtract(3, 'days'),
        moment().subtract(2, 'days'),
        moment().subtract(1, 'days')]

    const companies = props.companies;
    const data = {
        labels: memes.map((day, idx) => {
            return(
                day.format("MM/DD")
            )
        }),
        datasets: [{
            label: companies,
            data: freq,
            backgroundColor: '#44CF6C',
            borderColor: '#44CF6C',
            fill: false,
            hoverBackgroundColor: [
                '#44CF6C'
            ]
        }]
    };

    const options = {
        color: '#355593',
        width: '50%',
        maxHeight: '400px',
        responsive: true,
        maintainAspectRatio: false,
    }

    return (
        <div style={{ width: '100%', height: '100%', maxHeight: '400px' }}>
            <h2 style={{ color: '#355593' }}>DATA USAGE</h2>
            <Line data={data} options={options} />
        </div>
    );
};