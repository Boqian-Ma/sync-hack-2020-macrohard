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
  let datea = ["28/7 | Facebook: Your profile has been used for market sizing.",
  "28/7 | Facebook: Your location has been used for geographic advertisements.",
  "27/7 | Facebook: Your age has been used for product advertisements.",
  "28/7 | Facebook: Your profile has been used for market sizing.",
  "28/7 | Facebook: Your location has been used for geographic advertisements.",
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
    }, 4000);

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
