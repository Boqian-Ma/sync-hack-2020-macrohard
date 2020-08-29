import React, { useState, useEffect } from 'react'
import { CardMedia, Link, Card, CardHeader, CardActionArea, CardActions } from '@material-ui/core';
//import { CardText } from 'reactstrap';
import { AccountCard, FacebookFeed, LineGraph, ManageAccount, PieGraph, SearchCompanies, SharedPersonalData, Sidebar } from '../components';

import { green } from '@material-ui/core/colors';

import './Content.css'
import PerfectScrollbar from 'react-perfect-scrollbar'
import 'react-perfect-scrollbar/dist/css/styles.css';


import { ThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme }  from '@material-ui/core/styles'
import { lightBlue } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';



const theme = createMuiTheme({
    palette: {
        primary: {
          main: '#355593',
        },
        secondary: {
          main: '#355593',
        },
    },  
});

export default function Content(props) {
    const [show, setShow] = useState("Dashboard")
    const [company, setCompany] = useState("facebook")
    var memes = [
        {
            name: "facebook",
            grade: "D",
            time: "200"
        },
        {
            name: "instagram",
            grade: "C",
            time: "164"
        },
        {
            name: "twitter",
            grade: "B",
            time: "374"
        },
        {
            name: "reddit",
            grade: "C",
            time: "193"
        }
    ];
    const [accounts, setAccount] = useState(memes);
    useEffect(() => {
        fetch("http://127.0.0.1:5000/accounts").then(response =>
            response.json().then(data => {
                //console.log(data)
                // setAccount(data.piechart);
            })
        )
    });

    useEffect(() => {
        fetch("http://127.0.0.1:5000/accounts/" + company).then(response =>
            response.json().then(data => {
                console.log(data)
                // setAccount(data.piechart);
            })
        )
    });

    function changeView(tab) {
        if (tab === 0) {
            setShow("Dashboard");
        } else if (tab === 1) {
            setShow("Accounts");
        } else {
            setShow("Companies");
        }
    }

    function setCurrentCompany(web) {
        setCompany(web)
    }

    return (
        <ThemeProvider theme={theme}>

        <Card>
        <img align='left' className = 'logo' src='./verticallogo.png'></img>
        <div align='right'>
        <Avatar alt="Remy Sharp" src="./person1.jpg"/>
        <Button><u>sign out</u></Button>  
        </div>
        

  </Card>
        <div className="container">
            <div className="side-container">
                <Sidebar show={show} accounts={accounts} changeView={changeView} setCompany={setCompany}>
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
            {show === "Companies" &&
                <div className="acc-container">
                    <div className="left-container">
                        <LineGraph companies={company}></LineGraph>
                    </div>
                    <div className="right-container">
                        {/* <PerfectScrollbar style={{ width: '100%' }}>
                            <FacebookFeed></FacebookFeed>
                    </PerfectScrollbar> */}
                    <SharedPersonalData></SharedPersonalData>
                    </div>
                </div>}
        </div>
        </ThemeProvider>
    )
}

