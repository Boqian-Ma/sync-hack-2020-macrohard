import React, { useState } from 'react'
import { Grid, Card, Button, Typography } from '@material-ui/core';
import { AccountCard, FacebookFeed, Sidebar } from '../components';
import './Content.css'

export default function Content(props) {
    var accounts = ["Facebook", "Instagram", "Reddit", "Twitter"]
    return (
        <div className="container">
            <div className="side-container">
                <Sidebar width={300} height={"100%"}>
                    <h2>Dashboard</h2>
                    <h2>Accounts</h2>
                    {accounts.map((web, idx) => {
                        return(
                            <div>
                                <a>{web}</a>
                            </div>
                        )
                    })}
                </Sidebar>
            </div>
            <div className="body-container">
                <div className="top-container">
                    <AccountCard className="item"></AccountCard>
                    <AccountCard className="item"></AccountCard>
                    <AccountCard className="item"></AccountCard>
                    <AccountCard className="item"></AccountCard>
                </div>
                <div className="bottom-container">
                    <FacebookFeed></FacebookFeed>
                </div>
            </div>
        </div>
    )
}

