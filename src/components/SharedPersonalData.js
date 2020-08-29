import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TextField from '@material-ui/core/TextField';

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Image from "material-ui-image";
import Tooltip from "@material-ui/core/Tooltip";
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
      minWidth: 1300,
      padding:0,
      margin:0,
      overflow: 'hidden',
    }
  });

  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData(
      'Name', <p align='left'> Jeremy_Chea</p>, <p align='left'> Yes</p>,      
      <div align='left'>
        
      <Switch
        color='#355593'
        name="checkedB"
        inputProps={{ "aria-label": "primary checkbox" }}
      />,
      </div>
    ),
    createData(
      'Email', <p align='left'> cheajeremy@gmail.com</p>, <p align='left'> No</p>,
      <div align='left'>
        
      <Switch
        color='#355593'
        name="checkedB"
        inputProps={{ "aria-label": "primary checkbox" }}
      />,
      </div>
    
    ),
    createData(
      'Age', <p align='left'> 19</p>, <p align='left'> Yes</p>,
      <div align='left'>
        
      <Switch
        color='#355593'
        name="checkedB"
        inputProps={{ "aria-label": "primary checkbox" }}
      />,
      </div>
    ),
    createData(
      'Location', <p align='left'> Sydney</p>, <p align='left'> No</p>,
      <div align='left'>
        
      <Switch
        color='#355593'
        name="checkedB"
        inputProps={{ "aria-label": "primary checkbox" }}
      />,
      </div>
    ),
    createData(
      'Address', <p align='left'> 30 Village High Road</p>, <p align='left'> No</p>,
      <div align='left'>
        
      <Switch
        color='#355593'
        name="checkedB"
        inputProps={{ "aria-label": "primary checkbox" }}
      />,
      </div>
    ),
  ];
  
  
  
  export default function ManageAccount() {
    const classes = useStyles();
  
    return (
      
      <form className={classes.root} noValidate autoComplete="off">
        <div>
          <h2 style={{color: '#355593' }}>MANAGE PLATFORMS</h2>
          <TableContainer component={Paper}>
            <Table overflow-x='hidden' className={classes.table} size = 'small' aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Attribute</TableCell>
                  <TableCell align="left">Content</TableCell>
                  <TableCell align="left">Required</TableCell>
                  <TableCell align="left">Permission</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.name}>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="left">{row.calories}</TableCell>
                    <TableCell align="left">{row.fat}</TableCell>
                    <TableCell align="left">{row.carbs}</TableCell>
                    <TableCell align="left">{row.protein}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </form>
     
    );
  }
  

//   return (
//     <FormGroup>
//        <FormControlLabel
//           value="start"
//           control={<PurpleSwitch checked={state.checkedA} onChange={handleChange} name="checkedA" />}
//           label="Name: Jeremy Chea_________________________Required"
//           labelPlacement="start"
//         />
//         <FormControlLabel
//           value="start"
//           control={<PurpleSwitch checked={state.checkedB} onChange={handleChange} name="checkedB" />}
//           label="Age: 19_________________________Required"
//           labelPlacement="start"
//         />
//         <FormControlLabel
//           value="start"
//           control={<PurpleSwitch checked={state.checkedC} onChange={handleChange} name="checkedC" />}
//           label="Email: Cheajer@gmail.com.au_________________________Required"
//           labelPlacement="start"
//         />
//         <FormControlLabel
//           value="start"
//           control={<PurpleSwitch checked={state.checkedD} onChange={handleChange} name="checkedD" />}
//           label="Location: Sydney_________________________Optional"
//           labelPlacement="start"
//         />
//         <FormControlLabel
//           value="start"
//           control={<PurpleSwitch checked={state.checkedE} onChange={handleChange} name="checkedE" />}
//           label="Advertisement Clicks: 25_________________________Optional"
//           labelPlacement="start"
//         />
//         <FormControlLabel
//           value="start"
//           control={<PurpleSwitch checked={state.checkedF} onChange={handleChange} name="checkedF" />}
//           label="App Screen Time: 6hrs/day_________________________Optional"
//           labelPlacement="start"
//         />
//         <FormControlLabel
//           value="start"
//           control={<PurpleSwitch checked={state.checkedG} onChange={handleChange} name="checkedG" />}
//           label="Friends: 630_________________________Optional"
//           labelPlacement="start"
//         />
//         <FormControlLabel
//           value="start"
//           control={<PurpleSwitch checked={state.checkedH} onChange={handleChange} name="checkedH" />}
//           label="App Open Frequency/Day: 5_________________________Optional "
//           labelPlacement="start"
//         />
//         <FormControlLabel
//           value="start"
//           control={<PurpleSwitch checked={state.checkedI} onChange={handleChange} name="checkedI" />}
//           label="Gender: Male_________________________Optional"
//           labelPlacement="start"
//         />
//         <FormControlLabel
//           value="start"
//           control={<PurpleSwitch checked={state.checkedJ} onChange={handleChange} name="checkedJ" />}
//           label="Address: 30 Village High Rd_________________________Optional"
//           labelPlacement="start"
//         />

//     </FormGroup>
//   );
// }
