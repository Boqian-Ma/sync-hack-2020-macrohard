import React, { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Image from "material-ui-image";
import Typography from '@material-ui/core/Typography';

import { ThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme }  from '@material-ui/core/styles'
import { lightBlue } from '@material-ui/core/colors';



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

const useStyles = makeStyles({
  root: {
    minWidth: 180,
  },
  media: {
    height: '10%',
  },
});


var counter=0;

export default function MediaCard(props) {
  
  var string;
  const classes = useStyles();
  const company = props.company;
  const companyImg = `${company.name}.png`;
  //console.log(company);

  return (
    <div>
    <ThemeProvider theme={theme}>
    <Card className={classes.root}>
      {/* <CardActionArea> */}
        <CardMedia
          className={classes.media}
          title="Facebook Logo"
        />
        <CardContent>
        <img className = 'platform-logo' src={companyImg} style={{width: 50, height: 50}}></img>
          <Typography gutterBottom variant="h5" component="h2">
            {company.name}
          </Typography>
          <Typography variant="body2" color="#355593" component="p">
            Grade: {company.grade}
          </Typography>
          <Typography variant="body2" color="#355593" component="p">
            Usage: {company.time} times in 24 hours
          </Typography>
        </CardContent>
      {/* </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions> */}
    </Card>
    </ThemeProvider>
    </div>
  );
}