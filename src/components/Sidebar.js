import "./Sidebar.css";
import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        display: 'flex',
        height: 224,
    },
    tabs: {
        borderRight: `1px solid ${theme.palette.divider}`,
    },
}));

export default function Sidebar(props) {
    const show = props.show;
    const accounts = props.accounts;
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        props.changeView(newValue);
        setValue(newValue)
    };

    /* const toggleMenu = () => {
        if (xPosition < 0) {
            setX(0);
        } else {
            setX(-width);
        }
    }; */

    function a11yProps(index) {
        return {
            id: `vertical-tab-${index}`,
            'aria-controls': `vertical-tabpanel-${index}`,
        };
    }

    return (
        <div>
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                aria-label="Vertical tabs example"
                onChange={handleChange}
                className={classes.tabs}>
                <Tab label="Dashboard" {...a11yProps(0)} />
                <Tab label="Accounts" {...a11yProps(1)} />
            </Tabs>
            {show === "Accounts" && accounts.map((company, idx) => {
                return (
                    <Tabs orientation="vertical"
                        variant="scrollable">
                        <Tab label={company.name} value={company.name} />
                    </Tabs>
                )
            })}
        </div>
    );
};