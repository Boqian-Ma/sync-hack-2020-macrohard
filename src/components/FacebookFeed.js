import React from "react";
import Button from "@material-ui/core/Button";
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
    maxWidth: 600,
    "& > * + *": {
      marginTop: theme.spacing(2)
    }
  }
}));

export default function LongTextSnackbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
    <PerfectScrollbar>
      <SnackbarContent
        message="28/7 | Facebook: Your profile has been used for market sizing."
        action={action}
      />
      <SnackbarContent
        message="28/7 | Facebook: Your location has been used for geographic advertisements."
        action={action}
      />
      <SnackbarContent
        message="27/7 | Facebook: Your age has been used for product advertisements."
        action={action}
      />
      <SnackbarContent
        message="28/7 | Facebook: Your profile has been used for market sizing."
        action={action}
      />
      <SnackbarContent
        message="28/7 | Facebook: Your location has been used for geographic advertisements."
        action={action}
      />
      <SnackbarContent
        message="27/7 | Facebook: Your age has been used for product planning."
        action={action}
      />
    </PerfectScrollbar>
    </div>
  );
}
