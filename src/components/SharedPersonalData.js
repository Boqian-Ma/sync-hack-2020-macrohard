import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { purple } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

const PurpleSwitch = withStyles({
  switchBase: {
    color: purple[300],
    '&$checked': {
      color: purple[500],
    },
    '&$checked + $track': {
      backgroundColor: purple[500],
    },
  },
  checked: {},
  track: {},
})(Switch);


export default function CustomizedSwitches() {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedC: true,
    checkedD: true,
    checkedE: true,
    checkedF: true,
    checkedG: true,
    checkedH: true,
    checkedI: true,
    checkedJ: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <FormGroup>
       <FormControlLabel
          value="start"
          control={<PurpleSwitch checked={state.checkedA} onChange={handleChange} name="checkedA" />}
          label="Name: Jeremy Chea_________________________Required"
          labelPlacement="start"
        />
        <FormControlLabel
          value="start"
          control={<PurpleSwitch checked={state.checkedB} onChange={handleChange} name="checkedB" />}
          label="Age: 19_________________________Required"
          labelPlacement="start"
        />
        <FormControlLabel
          value="start"
          control={<PurpleSwitch checked={state.checkedC} onChange={handleChange} name="checkedC" />}
          label="Email: Cheajer@gmail.com.au_________________________Required"
          labelPlacement="start"
        />
        <FormControlLabel
          value="start"
          control={<PurpleSwitch checked={state.checkedD} onChange={handleChange} name="checkedD" />}
          label="Location: Sydney_________________________Optional"
          labelPlacement="start"
        />
        <FormControlLabel
          value="start"
          control={<PurpleSwitch checked={state.checkedE} onChange={handleChange} name="checkedE" />}
          label="Advertisement Clicks: 25_________________________Optional"
          labelPlacement="start"
        />
        <FormControlLabel
          value="start"
          control={<PurpleSwitch checked={state.checkedF} onChange={handleChange} name="checkedF" />}
          label="App Screen Time: 6hrs/day_________________________Optional"
          labelPlacement="start"
        />
        <FormControlLabel
          value="start"
          control={<PurpleSwitch checked={state.checkedG} onChange={handleChange} name="checkedG" />}
          label="Friends: 630_________________________Optional"
          labelPlacement="start"
        />
        <FormControlLabel
          value="start"
          control={<PurpleSwitch checked={state.checkedH} onChange={handleChange} name="checkedH" />}
          label="App Open Frequency/Day: 5_________________________Optional "
          labelPlacement="start"
        />
        <FormControlLabel
          value="start"
          control={<PurpleSwitch checked={state.checkedI} onChange={handleChange} name="checkedI" />}
          label="Gender: Male_________________________Optional"
          labelPlacement="start"
        />
        <FormControlLabel
          value="start"
          control={<PurpleSwitch checked={state.checkedJ} onChange={handleChange} name="checkedJ" />}
          label="Address: 30 Village High Rd_________________________Optional"
          labelPlacement="start"
        />

    </FormGroup>
  );
}
