import React, { useState } from 'react'
import { AccountCard, FacebookFeed, ManageAccount, PieGraph, SearchCompanies, Sidebar } from '../components';
import { Link } from '@material-ui/core';
import './Content.css'

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
    )
}

