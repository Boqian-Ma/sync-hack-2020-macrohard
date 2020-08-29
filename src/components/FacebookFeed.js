import React from "react";
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
  const classes = useStyles();

  const data = ["28/7 | Facebook: Your profile has been used for market sizing.",
  "28/7 | Facebook: Your location has been used for geographic advertisements.",
  "27/7 | TikTok: Your age has been used for product advertisements.",
  "28/7 | Instagram: Your profile has been used for market sizing.",
  "28/7 | Facebook: Your location has been used for geographic advertisements.",
  "27/7 | LinkedIn: Your age has been used for product planning."]

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
