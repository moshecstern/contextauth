import React, { useState } from "react";
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import Grid from "@material-ui/core/Grid";
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';

// import Container from '@material-ui/core/Container';
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
  title: {
    textAlignLast: "center",
  },
  subtitle: {
    fontWeight: "bold",
  },
  container: {
  marginRight: 50,
  padding: 50,
    },
    mobile: {
      marginRight: 50,
      padding: 50,
      display: 'inheret',
      [theme.breakpoints.down('sm')]: {
        display: 'stretch',
        padding:50,
        margin:0,
        maxWidth:'100%'
      }
    }
}));

const NewPatient = (props) => {
  const classes = useStyles();

  const [status, setstatus] = useState("")
  function submitForm(event) {
        event.preventDefault();
        const form = event.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== XMLHttpRequest.DONE) return;
            if (xhr.status === 200) {
                form.reset();
                setstatus("SUCCESS")
                
            } else {
                setstatus("ERROR")
            }
        };
        xhr.send(data);
    };


  return (
    <>
     {/* <React.Fragment> */}
      <CssBaseline />
      <Container maxWidth="xl" className={classes.mobile}>
        {/* <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} /> */}
      
      {/* <div> */}
        <Paper elevation={3} className={classes.mobile}>
          <Typography component="h2" variant="h5" className={classes.title}>
            Churchland Psychological Center
            <br />
            3101 American Legion Rd, Suite 21B
            <br />
            Chesapeake, VA 23321
          </Typography>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <Typography component="h5" variant="h6" className={classes.title}>
              1709 Colley Avenue, Suite 310
              <br />
              Norfolk, VA 23517
            </Typography>
            <Typography component="h5" variant="h6" className={classes.title}>
              6477 College Park Sq. Suite 216
              <br />
              Virginia Beach, VA 23464
            </Typography>
          </Grid>
          <Typography component="h2" variant="h5" className={classes.title}>
            (Phone) 757-483-3404 | (Fax) 757-483-0461
          </Typography>
          <Typography component="h3" variant="h5" className={classes.subtitle}>
            Patient Responsibility
          </Typography>
          <Typography component="h5" variant="h6" className={classes.body}>
            <ArrowRightIcon />
            To furnish a current insurance card and to provide the following
            information to your therapist: whether you have to be pre-authorized
            for treatment, if you have an annual deductible, the total number of
            sessions per year your insurer will reimburse, and your co-pay per
            session.
          </Typography>
          <Typography component="h5" variant="h6" className={classes.body}>
            <ArrowRightIcon />
            To confirm all financial arrangements and to discuss all payment and
            billing questions directly with your therapist.
          </Typography>
          <Typography component="h5" variant="h6" className={classes.body}>
            <ArrowRightIcon />
            To be held directly responsible for any co-pay amount, as well as
            any insurance payment that Churchland Psychological Center (CPC) has
            not received from your insurer within 60 days.
          </Typography>
          <Typography component="h5" variant="h6" className={classes.body}>
            <ArrowRightIcon />
            To make your payment at the beginning of each session directly to
            your therapist. Credit card payments are to be made at the front
            desk, before each session. Checks and cash are paid directly to the
            therapist.
          </Typography>
          <Typography component="h3" variant="h5" className={classes.subtitle}>
            Churchland Psychological Center Responsibility
          </Typography>
          <Typography component="h5" variant="h6" className={classes.body}>
            <ArrowRightIcon />
            Churchland Psychological Center (CPC) will file your insurance at
            your request{" "}
          </Typography>
          <Typography component="h5" variant="h6" className={classes.body}>
            <ArrowRightIcon />
            CPC will not be held responsible for any administrative error(s) in
            processing claims, or for denial of claims by your insurer, and
            shall not be used as an offset against your bill.
          </Typography>

          {/* MISSED APPOITMENTS */}
          <Typography component="h3" variant="h5" className={classes.subtitle}>
            Missed Appointments
          </Typography>
          <Typography component="h5" variant="h6" className={classes.body}>
            <ArrowRightIcon />
            Missed appointments are not reimbursed by any insurance company.
            Because your therapy appointment is reserved for you,
            <bold>
              {" "}
              you are required to give 24-hour notice for cancellations or you
              will be charged $50.00 for the missed appointment.
            </bold>
            Cancellations must be left on your therapist’s voice mail, noting
            the reason for your cancellation. During normal business hours,
            cancellations may be called into our business office directly
            (483-3404), but please note that we will direct your call to your
            therapist.
          </Typography>

          <Typography component="h3" variant="h5" className={classes.subtitle}>
            Collections
          </Typography>
          <Typography component="h5" variant="h6" className={classes.body}>
            <ArrowRightIcon />
            We will make every effort to work with you if there are financial
            problems. However, if your account should be sent to collections,
            you agree to reimburse us the fees of any collection agency, which
            may be based on a percentage at a maximum of 50% of the debt, and
            all costs, and expenses, including reasonable attorneys’ fees, we
            incur in such collection efforts. In addition, interest charges of
            18% per annum from date of services rendered on unpaid balances will
            be charged.
          </Typography>
          <Typography component="h5" variant="h6" className={classes.body}>
            <ArrowRightIcon />
            You agree to pay $30.00 for any returned checks that you write to
            CPC.
          </Typography>

          <Typography component="h3" variant="h5" className={classes.subtitle}>
            Electronic Communications
          </Typography>
          <Typography component="h5" variant="h6" className={classes.body}>
            <ArrowRightIcon />
            Please note that communications through voice mail, cell phone,
            email, and texting are not considered a “protected environment.”
            Therefore if you choose to communicate electronically you signature
            on this form indicates your understanding of this issue.
          </Typography>

          <Typography component="h3" variant="h5" className={classes.subtitle}>
            Your Signature On This Contract
          </Typography>
          <Typography component="h5" variant="h6" className={classes.body}>
            <ArrowRightIcon />
            Indicates your agreement with the terms of this contract with CPC.
          </Typography>
          <Typography component="h5" variant="h6" className={classes.body}>
            <ArrowRightIcon />
            Indicates your agreement that CPC may file insurance claims on your
            behalf, receive insurance reimbursements, and release information
            requested by your insurance company.
          </Typography>
          <Typography component="h5" variant="h6" className={classes.body}>
            <ArrowRightIcon />
            Indicates your understanding that electronic communications are not
            considered a “protected environment.”
          </Typography>

          <Typography component="h3" variant="h5" className={classes.subtitle}>
            Your Privacy
          </Typography>
          <Typography component="h5" variant="h6" className={classes.body}>
            <ArrowRightIcon />
            This office is in compliance with all state and federal laws
            regarding your privacy. Our privacy statement is posted in the
            waiting room. You may ask the office staff or your therapist for
            your own personal copy. Your signature serves as acknowledgement of
            this policy.
          </Typography>
          <form
            onSubmit={submitForm}
            action="https://formspree.io/xgenapon"
            method="POST"
        >
            {/* <!-- add your custom form HTML here --> */}
            {/* <label>Email:</label>
            <input type="email" name="email" /> */}
            <Grid
            container
            direction="row"
            justify="space-evenly"
            alignItems="center"
          >
            <FormControl>
  <InputLabel htmlFor="signature"></InputLabel>
  <Input type="textarea" name="signature" id="my-input" aria-describedby="Signature of Patient/Parent/Guardian" />
  <FormHelperText id="my-helper-text">Signature of Patient/Parent/Guardian <br /> Responsible for Payment</FormHelperText>
</FormControl>
        <FormControl>
  <InputLabel htmlFor="date"> </InputLabel>
  <Input type="textarea" name="Date" id="textarea" aria-describedby="Date" />
  <FormHelperText id="my-helper-text">Date</FormHelperText>
</FormControl>
       <FormControl>
  <InputLabel htmlFor="Name"> </InputLabel>
  <Input type="textarea" name="Name" id="textarea" aria-describedby="Name" />
  <FormHelperText id="my-helper-text">Print Name</FormHelperText>
</FormControl>
            {/* <label>Message:</label>
            <input type="text" name="message" /> */}
            {status === "SUCCESS" ? <p>Thanks!</p> : <button>Submit</button>}
            {status === "ERROR" && <p>Ooops! There was an error.</p>}
       </Grid>
        </form>
        </Paper>
      {/* </div> */}
      </Container>
    {/* </React.Fragment> */}
    </>
  );
};
export default NewPatient;

//             {/* header */}
// {/* subheader */}   {/* subheader */}
//          {/* phone & FAX */}
//          {/* h2  */}
//          {/* - */}
