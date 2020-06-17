import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import {Switch, Route} from "react-router-dom";
import Login from "./components/login/login"
import Signup from "./components/signup/signup";
import Home from "./pages/Home";
import StaffCard from './components/Features/StaffCard'
import Forms from './components/Features/Forms'
import Forum from './components/Features/Forum'
import ContactUs from './components/Features/ContactUs'
import Payment from './components/Features/Payment'
import Locations from "./pages/Locations/Locations"

import AppBar from "./components/AppBar";
import { Container, makeStyles } from "@material-ui/core";
import Footer from "./components/Material-ui/Footer"
import AppForm from "./components/AppForm/AppForm"
import Userprofile from "./pages/Userprofile/index"
import More from "./pages/More/Layout"
import NewPatient from './components/AppForm/Newpatient'

import { ThemeProvider } from '@material-ui/core/styles'
import { CssBaseline } from '@material-ui/core'
import theme from './components/Material-ui/Theme'

const useStyles = makeStyles(theme => ({
  // bg: { backgroundImage: `url(${ComicbookpagesModified})` },
  // backgroundImage: 'https://oceanservice.noaa.gov/facts/ocean-human-health.jpg'
  outerContainer: {backgroundColor: "pink"},

  container: { 
    backgroundColor: theme.palette.primary.dark,
  // display: "stretch" 
},
  bg: {
    margin: 'auto',

  }

  // bg: {backgroundColor: theme.palette.primary.dark },
  // container: { backgroundColor: "#F2F2F2" }    floralwhite;
  
  
}));
function App() {
  const classes = useStyles();
  return (
    // <div className={classes.outerContainer}>
    // <Container className={classes.container}>
    <ThemeProvider theme={theme}>
    <CssBaseline />
   
  
    <Router>
    <div className={classes.bg}>
    <AppBar />
      <Switch className={classes.container}>

        {/* <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} /> */}
        <Route exact path="/" component={More} />
        <Route exact path="/home" component={More} />
        <Route exact path="/userprofile" component={Userprofile} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/signin" component={Login} />

        <Route exact path="/home" component={Home} />
        <Route exact path="/locations" component={Locations} />
        <Route exact path="/staff" component={StaffCard} />
        <Route exact path="/forms" component={Forms} />
        <Route exact path="/forum" component={Forum} />
        <Route exact path="/contact" component={ContactUs} />
        <Route exact path="/payment" component={Payment} />

        <Route exact path="/newpatient" component={NewPatient} />
      </Switch>
      <Footer />


    {/* <Footer title="Moshe Stern" description="Something here to give the footer a purpose!" /> */}
    </div>
      </Router>
      </ThemeProvider>
    // </Container>
    //  </div>
  );
}

export default App;

// home page 
// contact us on home page be under where we are
// staff page
// where we are page
// forms page
// tabs with checkmark when completed. green for completed and red for uncomomplete
// 
// customizable web page "new and important?" Teletherapy
// How to contact us in footer
// Recent posts on bottom of home page? (like corona virus and eye movement and ....)
// insurence plans with images of plans accepted


// or wwe could have home page, with sidebar to scroll link to 
// 2 pages one that has breif descriptions of everything on webpage with links to 2nd page with selected tab: home. More. User
// home scrolable to everything on page
// more tabs
// admin would be the more page with options to change things with an extra tab for home page
// tabs: teletherapy. Who We Are. Where We are. Contact. Blog (foroum). FAQ. Payment. Forms

// HOME: Rows: 
// Name and pic with link to forms
// Teletherapy with link
// who we are with link
// where we are with link
// range of services with simple form checkout box with link
// row of links for FAQ, Blog, Payment
// Contact with link in footer
