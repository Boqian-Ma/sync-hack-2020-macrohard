import React from 'react';
import { Grid, TextField } from '@material-ui/core';

export default function SearchBar(props) {
    function handleChange(event) {
        const { onChange } = props;
        onChange(event.target.value);
        event.preventDefault();
    }

    return (
        <Grid elevation={12} style={{ padding: '10px' }}>
            <TextField style = {{width: '100%'}} fullWidth label={props.label} onChange={handleChange} variant="outlined" />
        </Grid>
    )
}