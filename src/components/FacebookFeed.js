import React from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import SnackbarContent from "@material-ui/core/SnackbarContent";

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
  "27/7 | Facebook: Your age has been used for product advertisements.",
  "28/7 | Facebook: Your profile has been used for market sizing.",
  "28/7 | Facebook: Your location has been used for geographic advertisements.",
  "27/7 | Facebook: Your age has been used for product planning."]

  return (
    <div className={classes.root}>
    
      {data.map((message, key) => {
        return(
          <SnackbarContent
            message={message}
            style={{ backgroundColor: 'lightBlue' }} />
        );
      })}
    </div>
  );
}
