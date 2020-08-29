import React, { useState } from 'react'
import { AccountCard, FacebookFeed, ManageAccount, PieGraph, SearchCompanies, Sidebar } from '../components';
import { CardMedia, Link, Card, CardHeader, CardActionArea, CardActions } from '@material-ui/core';
//import { CardText } from 'reactstrap';

import { green } from '@material-ui/core/colors';

import './Content.css'
import PerfectScrollbar from 'react-perfect-scrollbar'
import 'react-perfect-scrollbar/dist/css/styles.css';


import { ThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme }  from '@material-ui/core/styles'
import { lightBlue } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';


const theme = createMuiTheme({
    palette: {
        primary: {
          main: lightBlue[500],
        },
        secondary: {
          main: lightBlue[500],
        },
    },  
});

export default function Content(props) {
    const [show, setShow] = useState("Dashboard")
    var accounts = [
        {
            name: "Facebook",
            grade: "D",
            time: "200"
        },
        {
            name: "Instagram",
            grade: "C",
            time: "164"
        },
        {
            name: "Twitter",
            grade: "B",
            time: "374"
        },
        {
            name: "Reddit",
            grade: "C",
            time: "193"
        }
    ];

    function changeView(tab) {
        if (tab === 0) {
            setShow("Dashboard");
        } else if (tab === 1) {
            setShow("Accounts");
        }
    }


    const { classes } = props;
    return (
        <ThemeProvider theme={theme}>

        <Card>
        <img align='centre' className = 'logo' src='./verticallogo.png'></img>   
        

  </Card>
        <div className="container">
            <div className="side-container">
                <Sidebar show={show} accounts={accounts} changeView={changeView}>
                </Sidebar>
            </div>
            {show === "Dashboard" &&
                <div className="dash-container">
                    <div className="top-container">
                        {accounts.map((company, idx) => {
                            return(
                                <AccountCard className="item" company={company}></AccountCard>
                            )
                        })}
                    </div>
                    <div className="bottom-container">
                        <PieGraph companies={accounts}></PieGraph>
                        <PerfectScrollbar style={{ width: '100%' }}>
                            <FacebookFeed></FacebookFeed>
                        </PerfectScrollbar>
                    </div>
                </div>}
            {show === "Accounts" &&
                <div className="acc-container">
                    <div className="left-container">
                        <ManageAccount></ManageAccount>
                    </div>
                    <div className="right-container">
                        <SearchCompanies></SearchCompanies>
                    </div>
                </div>}
        </div>
        </ThemeProvider>
    )
}

