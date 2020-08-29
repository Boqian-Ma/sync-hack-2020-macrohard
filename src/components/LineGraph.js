import React from 'react';
import Moment from 'react-moment';
import { Line } from 'react-chartjs-2';

var moment = require('moment');
moment.updateLocale('en', {
    week: {
        dow: 1,
        doy: 7
    }
});

export default function LineGraph(props) {
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
            data: [100,100,100,100],
            backgroundColor: '#44CF6C',
            borderColor: '#44CF6C',
            fill: false,
            hoverBackgroundColor: [
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
            <h2 style={{ color: '#355593' }}>DATA USAGE</h2>
            <Line data={data} options={options} />
        </div>
    );
};