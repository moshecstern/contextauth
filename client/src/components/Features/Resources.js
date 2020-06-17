import React, { useState } from "react";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import useAxios from "axios-hooks";
import Axios from "axios";
import ReactHtmlParser from 'react-html-parser'; 
import Cookies from 'js-cookie';
const jwtDecode = require('jwt-decode');

const useStyles = makeStyles({
  root: {
    width: '100%',
    maxWidth: 500,
    alignItems: 'center',
  },
});

const Resources = props => {
  const classes = useStyles();
  // let accessString = localStorage.getItem('JWT')
  // if(accessString == null){
  //   accessString = Cookies.get("JWT");
  // }
  const [{ data: mydata, loading }, runmainfunc] = useAxios({
    url: "/api/resources/catagory/" + props.catagory,
    // headers: { Authorization: `JWT ${accessString}` }
  });
  if (loading) {
    return <></>;
  }
  return (
    <>
     {!mydata ? null : (
       <div>
{mydata.map(data => (
    <div className={classes.root}>

    {!data.heading ? null : (
      <Typography variant="h4" gutterBottom>
        {data.heading}
      </Typography>
    )}
    
      {!data.subtitle ? null : (
      <Typography variant="subtitle2" gutterBottom>
{data.subtitle}      </Typography>
      )}
      {!data.body1 ? null : (
      <Typography variant="body1" gutterBottom>
        {data.body1}
      </Typography>
      )}
      {!data.body2 ? null : (
      <Typography variant="body1" gutterBottom>
        {data.body2}
      </Typography>
      )}
      {/* {!props.link ? null : (
      <Typography variant="button" display="block" gutterBottom>
        {props.link}
      </Typography>
      )} */}
      {/* <Typography variant="body2" gutterBottom>
        body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
        unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
        dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
      </Typography> */}
      {/* <Typography variant="button" display="block" gutterBottom>
        button text
      </Typography>
      <Typography variant="caption" display="block" gutterBottom>
        caption text
      </Typography>
      <Typography variant="overline" display="block" gutterBottom>
        overline text
      </Typography> */}
    </div>
))}
</div>
     )}
    </>
  );
}
export default Resources;