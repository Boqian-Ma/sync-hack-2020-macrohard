import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import PerfectScrollbar from 'react-perfect-scrollbar'
import 'react-perfect-scrollbar/dist/css/styles.css';

const action = (
  <Button color="secondary" size="small">
    Information
  </Button>
);



const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '100%',
    minHeight: 500,
    "& > * + *": {
      marginTop: theme.spacing(2)
    }
  }
}));

export default function LongTextSnackbar() {
  let datea = ["11:10:59 | Facebook: Your profile has been used for market sizing.",
  "11:11:00 | Facebook: Your location has been used for geographic advertisements.",
  "11:11:02 | TikTok: Your age has been used for product advertisements.",
  "11:11:05 | LinkedIn: Your location has been used for geographic advertisements.",
  "11:11:07 | Instagram: Your age has been used for product advertisements.",
  "11:11:09 | Snapchat: Your location has been used for location tracking.",
  "11:11:10 | TikTok: Your age has been used for age-tailored advertisements.",
  "11:11:12 | Facebook: Your location has been used for geographic advertisements.",
  "11:11:15 | Twitter: Your phone number has been shared for advertisements.",
  "11:11:19 | Google: Your address has been shared for demographic analysis.",
  "11:11:15 | Amazon: Your age has been used for tailored product advertisements.",
  "11:11:19 | Google: Your location has been used for demographic tailored product advertisements.",
  "11:11:25 | Instagram: Your age has been used for product advertisements.",
  "11:11:26 | TikTok: Your email has been used for promotions.",
  "11:11:30 | LinkedIn: Your email has been used for promotions.",
  "11:11:31 | Facebook: Your name has been used in messenger software.",
  "11:11:34 | Facebook: Your age has been used in messenger software.",
  "11:11:36 | Youtube: Your age has been used in censorship.",
  "11:11:40 | Spotify: Your age has been used for advertisements.",
  "11:11:42 | TikTok: Your age has been used for algorthm synchronization.",

  ]
  const classes = useStyles();
  const [counter, setCounter] = useState(0);
  const [data, setData] = useState(datea);

  window.setInterval(() => {
      if (counter < 10) {
        setData(data.splice(0, 0, backUp[counter]));
        setCounter(counter+1);
        console.log(data);
      }
    }, 10000);

  const backUp = ["1","2","3","4","5","6","7","8","9","10"]

  return (
    <div className={classes.root}>
      <h2 style={{ color: '#355593' }}>LIVE FEED</h2>
      {data.map((message, key) => {
        return(
          <SnackbarContent
            message={message}
            style={{ backgroundColor: '#355593' }} />
        );
      })}
    </div>
  );
}
