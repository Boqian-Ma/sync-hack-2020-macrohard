import React, { useState } from 'react'
import { Grid, Card, Button, Typography } from '@material-ui/core';
import { Sidebar } from '../components';
// import './Component.css'

export default function Component(props) {
    var accounts = ["Facebook", "Instagram", "Reddit", "Twitter"]
    return (
        <Sidebar width={300} height={"100vh"}>
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
    )
}

