import React from 'react';
import { Grid, TextField } from '@material-ui/core';

export default function SearchBar(props) {
    function handleChange(event) {
        const { onChange } = props;
        onChange(event.target.value);
        event.preventDefault();
    }

    return (
<<<<<<< HEAD
        <Grid elevation={4} style={{ padding: '10px' }}>
            <TextField style = {{width: 800}} fullWidth label={props.label} onChange={handleChange} variant="outlined" />
=======
        <Grid elevation={12} style={{ padding: '10px' }}>
            <TextField style = {{width: '100%'}} fullWidth label={props.label} onChange={handleChange} variant="outlined" />
>>>>>>> bce441e5b0b565e1744b026597e960e6a8b2a1e1
        </Grid>
    )
}