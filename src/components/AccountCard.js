import React from 'react';
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
import RalewayWoff2 from './raleway-v17-latin-regular.woff2';
import { createMuiTheme }  from '@material-ui/core/styles'
import { lightBlue } from '@material-ui/core/colors';

const raleway = {
  fontFamily: 'Raleway',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 400,
  src: `
    local('Raleway'),
    local('Raleway-Regular'),
    url(${RalewayWoff2}) format('woff2')
  `,
  unicodeRange:
    'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
};

const theme = createMuiTheme({
    palette: {
        primary: {
          main: lightBlue[500],
        },
        secondary: {
          main: lightBlue[500],
        },
    },  
  typography: {
    fontFamily: 'Raleway, Arial',
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [raleway],
      },
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

export default function MediaCard(props) {
  const classes = useStyles();
  const company = props.company;

  return (
    <ThemeProvider theme={theme}>
    
    <Card className={classes.root}>
      {/* <CardActionArea> */}
        <CardMedia
          className={classes.media}
          title="Facebook Logo"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {company.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Grade: {company.grade}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
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
  );
}