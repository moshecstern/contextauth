import Home from '../../pages/Home'
import Locations from '../../pages/Locations/Locations'
import StaffCard from '../../components/Features/StaffCard'
import Forms from '../../components/Features/Forms'
import Forum from '../Features/Forum'
import ContactUs from '../Features/ContactUs'
import Payment from '../Features/Payment'

import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.primary.dark
  },
  tabs: {
    // color: 'pink',
    alignSelf: 'center',
    fontFamily: "whitney",
    color: theme.palette.primary.dark,
    maxWidth: '100%'

  },
  theming: {
    color: theme.palette.primary.dark
  },
  h1theme: {
    color: theme.palette.secondary.dark,
    paddingLeft: 40,
    margin: 20,
    marginTop: 40,
    textAlign: 'center',
    padding: 10,
    [theme.breakpoints.down('md')]: {
      fontSize: 50,
    }
  },
  secondaryheader: {
    textAlign: 'center',
    
  }
}));


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
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

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//     width: '100%',
//     backgroundColor: theme.palette.background.paper,
//   },
// }));

export default function ScrollableTabsButtonAuto() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="relative" color="primary">
        <Tabs
        className={classes.tabs}
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          // textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="Healthcare Options"
        >
          <Tab label="Home" {...a11yProps(0)} />
          <Tab label="Therapists" {...a11yProps(1)} />
          <Tab label="Locations" {...a11yProps(2)} />
          <Tab label="Forms" {...a11yProps(3)} />
          <Tab label="Payment" {...a11yProps(4)} />
          <Tab label="Forum" {...a11yProps(5)} />
          <Tab label="Contact Us" {...a11yProps(6)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
      <Home />
      </TabPanel>
      <TabPanel value={value} index={1}>
      <StaffCard />
      </TabPanel>
      <TabPanel value={value} index={2}>
      <Locations />
      </TabPanel>
      <TabPanel value={value} index={3}>
      <Forms />
      </TabPanel>
      <TabPanel value={value} index={4}>
      {/* <Payment /> */}
      <Typography variant="h1" component="h2" className={classes.h1theme}>
  Safely & Securely Make a Payment
</Typography>
<Typography variant="h2" component="h2" className={classes.secondaryheader}>
{/* If you haven't already, 
<br /> */}
 <Link target="_blank" 
                rel="noopener noreferrer" 
                href="https://hushforms.com/cpcpayment"
                underline="always"
                >
        Click this link to make an invoice for your payment
      </Link>
</Typography>
      </TabPanel>
      <TabPanel value={value} index={5}>
      <Forum />
      </TabPanel>
      <TabPanel value={value} index={6}>
      {/* <ContactUs /> */}
      <Typography variant="h1" component="h2" className={classes.h1theme}>
  Contact Us
</Typography>
<Typography variant="h2" component="h2" className={classes.secondaryheader}>
{/* If you haven't already, 
<br /> */}
 <Link target="_blank" 
                rel="noopener noreferrer" 
                href="https://hushforms.com/contactcpc"
                underline="always"
                >
        Click this link to contact us 
      </Link>
</Typography>
      </TabPanel>
    </div>
  );
}