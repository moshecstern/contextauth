import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import useAxios from "axios-hooks";
import Cookies from 'js-cookie';
import Axios from "axios"
import {
    Button,
  } from "@material-ui/core";
  import Checkbox from '@material-ui/core/Checkbox';
  import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
const jwtDecode = require('jwt-decode');

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

const AppForm = props => {
  const classes = useStyles();
  let accessString = localStorage.getItem('JWT')
    if(accessString == null){
      accessString = Cookies.get("JWT");
    }
    function changeConsent() {
      console.log(myconsent)
if(myconsent === true) {
  setmyconsent(false)
}else {
  setmyconsent(true)
}
    }
    const [myfirstname, setmyfirstname] = React.useState();
    const [mylastname, setmylastname] = React.useState();
    const [myemail, setmyemail] = React.useState();
    const [myphone, setmyphone] = React.useState();
    const [myamountseeking, setmyamountseeking] = React.useState();
    const [mybusinessname, setmybusinessname] = React.useState();
    const [mystate, setmystate] = React.useState();
    const [mytimeinbusiness, setmytimeinbusiness] = React.useState();
    const [mymonthlysales, setmymonthlysales] = React.useState();
    const [myreasonforfunding, setmyreasonforfunding] = React.useState();
    const [myestimatedcreditscore, setmyestimatedcreditscore] = React.useState();
    const [mycomment, setmycomment] = React.useState();
    const [myhowdidyouhearaboutus, setmyhowdidyouhearaboutus] = React.useState();
    const [myconsent, setmyconsent] = React.useState(false);
    const [mypassword, setmypassword] = React.useState();
    const [mypassword2, setmypassword2] = React.useState();
    const [myusername, setmyusername] = React.useState();

function saveUser() {
  if(mypassword === mypassword2 && myconsent === true){
  Axios.post("/registerUser", {
    username: myusername,
    password: mypassword,
    email: myemail
}).then((data)=>{
    console.log("signed up")
    savemyApplication()
    // this.setState({signedUp: true})
}).catch((err)=>{
    console.log(err)
})
}else{
  alert("Make sure passwords match and all fields are filled out")
}
}


    function savemyApplication(){
        // console.log(jwtDecode(accessString))
    //    getuser()
        // run function to retrieve user name
       
        if(mypassword === mypassword2 && myconsent === true){

      Axios.post("/api/application", {
        userID: myemail,
        username: myusername,
        firstname: myfirstname,
        lastname: mylastname,
        email: myemail,
        phone: myphone,
        amountseeking: myamountseeking,
        businessname: mybusinessname,
        state: mystate,
        timeinbusiness: mytimeinbusiness,
        monthlysales: mymonthlysales,
        reasonforfunding: myreasonforfunding,
        estimatedcreditscore: myestimatedcreditscore,
        howdidyouhearaboutus: myhowdidyouhearaboutus,
        comments: mycomment,
        conset: myconsent
      },{headers: { Authorization: `JWT ${accessString}` }} )
      .then(alert("Saved Application!"))
    //   .then(res => randomtext())
      // .catch(err => console.log(err));
      .catch(err => alert(err));
    }else{
      alert("Make sure passwords match and all fields are filled out")
    }
    }
    function deleteApplication(id){
      console.log(id)
      Axios.delete("/api/application/"+ id, {headers: { Authorization: `JWT ${accessString}` }})
    //   .then(res => randomtext())
    .catch(err => console.log(err))
    };



  return (
    <div className={classes.root}>
      <div>
        {/* <TextField
          id="standard-full-width"
          label="Label"
          style={{ margin: 8 }}
          placeholder="Placeholder"
          helperText="Full width!"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        /> */}
        <TextField
          label="Username"
          id="margin-normal"
          onChange={(e)=> setmyusername(e.target.value)}
          value={myusername}
          className={classes.textField}
          helperText="Sign in using Username"
          margin="normal"
        />
        <TextField
          label="First Name"
          id="margin-normal"
          onChange={(e)=> setmyfirstname(e.target.value)}
          value={myfirstname}
          className={classes.textField}
          helperText="John"
          margin="normal"
        />
        <TextField
          label="Last Name"
          id="margin-normal"
          onChange={(e)=> setmylastname(e.target.value)}
          value={mylastname}
          className={classes.textField}
          helperText="Smith"
          margin="normal"
        />
      </div>
      <div>
      <TextField
          label="Email"
          id="margin-normal"
          onChange={(e)=> setmyemail(e.target.value)}
          value={myemail}
          className={classes.textField}
          helperText="johnsmith94@gmail.com"
          margin="normal"
        />
        <TextField
          label="Password"
          id="margin-normal"
          onChange={(e)=> setmypassword(e.target.value)}
          value={mypassword}
          className={classes.textField}
          type="password"
        //   helperText="Password"
          margin="normal"
        />
        <TextField
          label="Confirm Password"
          id="margin-normal"
          onChange={(e)=> setmypassword2(e.target.value)}
          value={mypassword2}
          className={classes.textField}
          type="password"
        //   helperText="Some important text"
          margin="normal"
        />
      </div>
      <div>
        <TextField
          label="Business Name"
          id="margin-normal"
          onChange={(e)=> setmybusinessname(e.target.value)}
          value={mybusinessname}
          className={classes.textField}
        //   helperText="Sign in using Username"
          margin="normal"
        />
        <TextField
          label="City & State"
          id="margin-normal"
          onChange={(e)=> setmystate(e.target.value)}
          value={mystate}
          className={classes.textField}
        //   helperText="John"
          margin="normal"
        />
        <TextField
          label="Time in Business"
          id="margin-normal"
          onChange={(e)=> setmytimeinbusiness(e.target.value)}
          value={mytimeinbusiness}
          className={classes.textField}
        //   helperText="Smith"
          margin="normal"
        />
      </div>
      <div>
        <TextField
          label="Reason for Funding"
          id="margin-normal"
          onChange={(e)=> setmyreasonforfunding(e.target.value)}
          value={myreasonforfunding}
          className={classes.textField}
        //   helperText="Sign in using Username"
          margin="normal"
        />
        <TextField
          label="Monthly Sales"
          id="margin-normal"
          onChange={(e)=> setmymonthlysales(e.target.value)}
          value={mymonthlysales}
          className={classes.textField}
        //   helperText="John"
          margin="normal"
        />
        <TextField
          label="Amount Seeking"
          id="margin-normal"
          onChange={(e)=> setmyamountseeking(e.target.value)}
          value={myamountseeking}
          className={classes.textField}
        //   helperText="Smith"
          margin="normal"
        />
      </div>
      <div>
        <TextField
          label="Estimated Credit Score"
          id="margin-normal"
          onChange={(e)=> setmyestimatedcreditscore(e.target.value)}
          value={myestimatedcreditscore}
          className={classes.textField}
        //   helperText="Sign in using Username"
          margin="normal"
        />
        <TextField
          label="Phone Number"
          id="margin-normal"
          onChange={(e)=> setmyphone(e.target.value)}
          value={myphone}
          className={classes.textField}
        //   helperText="Smith"
          margin="normal"
        />
        {/* <TextField
          label="How did you here about us?"
          id="margin-normal"
          onChange={(e)=> setmyhowdidyouhearaboutus(e.target.value)}
          value={myhowdidyouhearaboutus}
          className={classes.textField}
        //   helperText="John"
          margin="normal"
        /> */}
                <TextField
          id="outlined-full-width"
          label="How did you here about us?"
          style={{ margin: 8 }}
        //   placeholder="Placeholder"
        onChange={(e)=> setmyhowdidyouhearaboutus(e.target.value)}
          value={myhowdidyouhearaboutus}
        //   helperText="Full width!"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
      </div>
      <div>
        <TextField
          id="outlined-full-width1"
          label="Comments"
          style={{ margin: 8 }}
        //   placeholder="Placeholder"
        onChange={(e)=> setmycomment(e.target.value)}
          value={mycomment}
        //   helperText="Full width!"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
  <FormControlLabel
          value={myconsent}
          onChange={changeConsent}
          control={<Checkbox color="primary" />}
          label="I have read and agree to the terms and conditions"
          labelPlacement="bottom"
        />
      </div>
      <div>
      <Button onClick={savemyApplication}>Save Application</Button>
      {/* <Button onClick={deleteApplication}>Delete</Button> */}
      </div>
    </div>
  );
}
export default AppForm;