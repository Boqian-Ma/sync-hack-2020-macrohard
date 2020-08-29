import React, { useState } from 'react'
import { AccountCard, FacebookFeed, ManageAccount, PieGraph, SearchCompanies, Sidebar } from '../components';
import { Link } from '@material-ui/core';
import { createMuiTheme }  from '@material-ui/core/styles'
import { purple } from '@material-ui/core/colors';
import { green } from '@material-ui/core/colors';
import { ThemeProvider } from '@material-ui/core/styles';
import './Content.css'

import RalewayWoff2 from './raleway-v17-latin-regular.woff2';

const raleway = {
  fontFamily: 'Raleway',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 400,
  src: `
    local('Raleway'),
    local('Raleway-Regular'),
    url(${RalewayWoff2}) format('woff2')
  `,
  unicodeRange:
    'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
};

const theme = createMuiTheme({
    palette: {
        primary: {
          main: purple[500],
        },
        secondary: {
          main: green[500],
        },
    },  
  typography: {
    fontFamily: 'Raleway, Arial',
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [raleway],
      },
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
        setShow(tab);
    }

    return (
        <ThemeProvider theme={theme}>
        <div className="container">
            <div className="side-container">
                <Sidebar width={300} height={"100%"}>
                    <h2><Link onClick={() => changeView("Dashboard")}>Dashboard</Link></h2>
                    <h2><Link onClick={() => changeView("Accounts")}>Accounts</Link></h2>
                    {accounts.map((company, idx) => {
                        return(
                            <div>
                                <a>{company.name}</a>
                            </div>
                        )
                    })}
                </Sidebar>
            </div>
            {show === "Dashboard" &&
                <div className="body-container">
                    <div className="top-container">
                        {accounts.map((company, idx) => {
                            return(
                                <AccountCard className="item" company={company}></AccountCard>
                            )
                        })}
                    </div>
                    <div className="bottom-container">
                        <PieGraph companies={accounts}></PieGraph>
                        <FacebookFeed></FacebookFeed>
                    </div>
                </div>}
            {show === "Accounts" &&
                <div className="body-container">
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

