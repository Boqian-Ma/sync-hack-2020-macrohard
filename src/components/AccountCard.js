import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

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
  );
}