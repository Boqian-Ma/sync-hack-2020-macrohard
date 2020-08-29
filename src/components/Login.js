import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import './Login.css'


const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch"
    },
    margin: "3%"
  }
}));

function Copyright() {
  return (
    <div>
    

    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
      </Link>{"watchdogapp.io  "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
    </div>
  );
}

export default function Login(props) {
  const classes = useStyles();
  const toggle = props.sign;
  const [username, setUser] = useState('');
  const [password, setPass] = useState('');

  function checkSuccess(username, password) {
    return true;
  }

  function updateUser(e) {
    setUser(e.target.value);
    console.log("user " + username);
  }

  function updatePass(e) {
    setPass(e.target.value);
    console.log("pass " + password);
  }

  function signIn() {
    console.log("memez");
    if (checkSuccess(username, password)) {
      console.log("memes");
      props.sign()
    }
  }

  return (
    <div className="login-container">
      <form className={classes.root} noValidate autoComplete="off">
        <div className="login-items">
          <img className = 'login-logo' src='./watchdoglogo.png'></img>
          <h2 style={{ color: 'navy' }}></h2>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            onChange={updateUser}
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            onChange={updatePass}
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={signIn}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
      </form>
    </div>
  );
}
