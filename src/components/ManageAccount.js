import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Image from "material-ui-image";
import Switch from "@material-ui/core/Switch";
import Tooltip from "@material-ui/core/Tooltip";
import TextField from "@material-ui/core/TextField";
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { blue } from '@material-ui/core/colors';


const PurpleSwitch = withStyles({
  switchBase: {
    color: '#355593',
    '&$checked': {
      color: '#355593',
    },
    '&$checked + $track': {
      backgroundColor: '#355593',
    },
  },
  checked: {},
  track: {},
})(Switch);


const useStyles = makeStyles({
  table: {
    minWidth: 650
  }
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData(
    <Image
      src="https://cdn.worldvectorlogo.com/logos/facebook-5.svg"
      aspectRatio="3/0.8"
      align="right"
    />,
    <Tooltip
      title="A 'C' rating signifies that the company has some degree of data use transparency"
      arrow
    >
      <Button>
        <b>C</b>
      </Button>
    </Tooltip>,
    <Switch
      color='#355593'
      name="checkedB"
      inputProps={{ "aria-label": "primary checkbox" }}
    />,
    <Button variant="contained">Details</Button>
  ),
  createData(
    <Image
      src="https://agsd.org.uk/wp-content/uploads/2019/02/instagram-logo.png"
      aspectRatio="4/1"
      align="right"
    />,
    <Tooltip
      title="A 'B' rating signifies that the company has a good degree of data use transparency"
      arrow
    >
      <Button>
        <b>B</b>
      </Button>
    </Tooltip>,
    <Switch
      color='#355593'
      name="checkedB"
      inputProps={{ "aria-label": "primary checkbox" }}
    />,
    <Button variant="contained">Details</Button>
  ),
  createData(
    <Image
      src="https://1.bp.blogspot.com/-waG3rYRs9Kg/T8_YfU0AcGI/AAAAAAAAGgg/lBsXlwHZ9r4/s1600/Twitter+logo+2011.png"
      aspectRatio="3/1.5"
      align="right"
    />,
    <Tooltip
      title="A 'D' rating signifies that the company has  many discrepancies in the way that they deal with data privacy. In most cases they have not revealed enough about the way they use your data"
      arrow
    >
      <Button>
        <b>D</b>
      </Button>
    </Tooltip>,
    <Switch
      color='#355593'
      name="checkedB"
      inputProps={{ "aria-label": "primary checkbox" }}
    />,
    <Button variant="contained">Details</Button>
  ),
  createData(
    <Image
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/368px-Google_2015_logo.svg.png"
      aspectRatio="3/1"
      align="right"
    />,
    <Tooltip
      title="A 'A' rating signifies that the company has excellent data use transparency. They have made a considerable effort to make the purposes of their use of our data is clear as possible"
      arrow
    >
      <Button>
        <b>A</b>
      </Button>
    </Tooltip>,
    <Switch
      color='#355593'
      name="checkedB"
      inputProps={{ "aria-label": "primary checkbox" }}
    />,
    <Button variant="contained">Details</Button>
  )
];



export default function ManageAccount() {
  const classes = useStyles();

  return (
    
    <form className={classes.root} noValidate autoComplete="off">
      <div>
      <ThemeProvider theme={theme}>
        <h2 style={{color: '#355593' }}>MANAGE PLATFORMS</h2>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Platform</TableCell>
                <TableCell align="right">myGrade</TableCell>
                <TableCell align="right">Manage</TableCell>
                <TableCell align="left"> </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.calories}</TableCell>
                  <TableCell align="right">{row.fat}</TableCell>
                  <TableCell align="right">{row.carbs}</TableCell>
                  <TableCell align="right">{row.protein}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        </ThemeProvider>
      </div>
    </form>
   
  );
}
