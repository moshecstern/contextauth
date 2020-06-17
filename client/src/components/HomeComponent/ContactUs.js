import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "80%",
    maxWidth: 360,
    maxHeight: 60,
    backgroundColor: theme.palette.background.paper,
  },
  root2: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function ListDividers() {
  const classes = useStyles();

  return (
    <>
    {/* // <div className={classes.root2}> */}
      {/* <Grid container spacing={3} className={classes.root2}> */}
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper}>
            Churchland Psychological Center 3101
            <br />
            American Legion Road, Suite 21B
            <br />
            Chesapeake, VA 23321
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper}>
            <br />
            <br />
            {"Copyright © "} {new Date().getFullYear()}
            {"."}
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper}>
            For All Offices
            <br />
            (757) 483-3404
            <br />
            cpc3210@yahoo.com
          </Paper>
        </Grid>
      {/* </Grid> */}

      {/* Churchland Psychological Center 3101                      for all offices
      American Legion Road, Suite 21B                                 (757) 483-3404
      Chesapeake, VA 23321                      copyright          cpc3210@yahoo.com */}
    {/* </div> */}
    </ >
  );
}
