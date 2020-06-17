import React, { useState } from "react";
import Cookies from 'js-cookie';
import Welcome from '../../components/Admin/Welcome'
// import VolumesDB from "../components/VolumesDB"
// import ProfileCustom from "../components/Userprofile"
// import Products from "../components/Nmarketplace/Products"
// import Mycart from "../components/Nmarketplace/Mycart"
// import Productspurchased from "../components/Nmarketplace/productsbought"
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {
    Grid,
    Typography,
    Button,
    ListItemAvatar,
    Avatar,
    ListItemText
  } from "@material-ui/core";
const jwtDecode = require('jwt-decode');

const Userprofile = props => {
    // const [logIn, SetLogIn] = useState(logIn)
    const [adminPassword, setAdminPassword] = useState("")
    const [adminQ, setAdminQ]= useState(true)
    // const classes = useStyles();
    // useEffect(() => {
  //   let checklogin = ()=>{
  //     if(props.location.state && props.location.state.loggedIn){
  //     SetLogIn(true);
  //   }else if(Cookies.get("JWT")){
  //     SetLogIn(true);
  //   }
  // }
  async function checkadminpassword(event){
    event.preventDefault();
      console.log(adminPassword)
    //   if(jwtDecode(accessString).username === ""){

    //   }
if(adminPassword === process.env.REACT_APP_ADMIN_KEY){
    setAdminQ(false)
    setSelectedDashboard("welcome")
}
else{
    alert("sorry not admin matireal try again!")
}
  }
//   function handleChangePassword (event)  {
    // setAdminPassword(event.target.value)
//    };
   const [selectedDashboard, setSelectedDashboard] = useState(null)

    return (
      <>

      {!adminQ ? false : (
      <div>
          <div className="form-group">
            Password: <input type="password" className="form-control" name="password" value={adminPassword} onChange={(e)=>setAdminPassword(e.target.value)} />
            </div>
          <Button onClick={checkadminpassword}>Verify</Button>
        {/* <TextField
          label="Admin Password"
          id="margin-none"
          // defaultValue="Comicnerd1994"
          className={classes.textField}
            value={adminPassword}
          onChange={(e)=> setAdminPassword(e.target.value)}
          helperText="Password"
        /> */}
      </div>
      )}
      {adminQ ? false : (
          <span>

        <Button onClick={(e)=> setSelectedDashboard("welcome")}>welcome</Button>
        <Button onClick={(e)=> setSelectedDashboard("products")}>Products</Button>
        <Button onClick={(e)=> setSelectedDashboard("cart")}>My Cart</Button>
        <Button onClick={(e)=> setSelectedDashboard("history")}>My PurchaseHistory</Button>


          </span>

      )}
      {!adminQ ? null : (
        <div><h2>Enter password to continue</h2></div>
      )}
      {selectedDashboard === 'welcome' && <Welcome admin={adminPassword}/>}
      {/* {selectedDashboard === 'products' && <Products admin={adminPassword}/>}
      {selectedDashboard === 'cart' && <Mycart admin={adminPassword}/>}
      {selectedDashboard === 'history' && <Productspurchased admin={adminPassword}/>}
      */}

      </>
    );
  };
  export default Userprofile;
{/* 
// import React, { useState, useEffect } from 'react';
// import axios from "axios";
// import {Redirect} from "react-router-dom"
// import Cookies from 'js-cookie';

// const Userprofile = props =>{
//   // let [loggedIn] = useState([logIn]);
//   let logIn = false;
//   const [loggedIn, SetLogIn] = useState(logIn)
//     if(props.location.state && props.location.state.loggedIn){
//       logIn = true;
//     }
//     else if(Cookies.get('JWT')){
//       logIn = true;
//     }
  
  
//   useEffect(() => {
//     loadPage()
//   }, []);

//   // Loads all books  and sets them to this.state.books
//  function loadPage () {
//     let accessString = localStorage.getItem('JWT');
//     if(accessString == null){
//       accessString = Cookies.get('JWT');
//     }
//     // else {
//     //   <Redirect to="/signin" />
//     // }
//   }
//   //   axios.get("/api/books",{headers: { Authorization: `JWT ${accessString}` }})
//   //     .then(res =>
//   //       this.setState({ loggedIn: true, books: res.data, title: "", author: "", synopsis: "" })
//   //     )
//   //     .catch(err => console.log(err));
//   // };

//   // Deletes a book from the database with a given id, then reloads books from the db
//   function deleteBook (id) {
//     const accessString = localStorage.getItem('JWT');
//     axios.delete("/api/books/" + id, {headers: { Authorization: `JWT ${accessString}` }})
//       .then(res => this.loadBooks())
//       .catch(err => console.log(err));
//   };

//   // Handles updating component state when the user types into the input field
//  function handleInputChange (event) {
//     const { name, value } = event.target;
//     this.setState({
//       [name]: value
//     });
//   };

//   // When the form is submitted, use the API.saveBook method to save the book data
//   // Then reload books from the database

//   // handleFormSubmit = event => {
//   //   event.preventDefault();
//   //   const accessString = localStorage.getItem('JWT');
//   //   if (this.state.title && this.state.author) {
//   //     axios.post("/api/books", {
//   //       title: this.state.title,
//   //       author: this.state.author,
//   //       synopsis: this.state.synopsis
//   //     },{headers: { Authorization: `JWT ${accessString}` }})
//   //       .then(res => this.loadBooks())
//   //       .catch(err => console.log(err));
//   //   }
//   // };

//   // function logout () {
//   //   setState({loggedIn:false})
//   //   localStorage.clear('JWT');
//   //   Cookies.remove('JWT');
//   // }

//   // render() {
//     if(loggedIn){
//       return (
//         <div>
//           <h1>ADMIN PAGE</h1>
//         </div>
//       // <Container fluid>
//       //   <Row>
//       //     <Col size="md-11"></Col>
//       //     <Col size="md-1">
//       //       <a href="/" onClick={this.logout}>logout</a>
//       //     </Col>
//       //   </Row>
//       //   <Row>
//       //     <Col size="md-6">
//       //         <h1>What Books Should I Read?</h1>
//       //       <form>
//       //         <Input
//       //           value={this.state.title}
//       //           onChange={this.handleInputChange}
//       //           name="title"
//       //           placeholder="Title (required)"
//       //         />
//       //         <Input
//       //           value={this.state.author}
//       //           onChange={this.handleInputChange}
//       //           name="author"
//       //           placeholder="Author (required)"
//       //         />
//       //         <TextArea
//       //           value={this.state.synopsis}
//       //           onChange={this.handleInputChange}
//       //           name="synopsis"
//       //           placeholder="Synopsis (Optional)"
//       //         />
//       //         <FormBtn
//       //           disabled={!(this.state.author && this.state.title)}
//       //           onClick={this.handleFormSubmit}
//       //         >
//       //           Submit Book
//       //         </FormBtn>
//       //       </form>
//       //     </Col>
//       //     <Col size="md-6 sm-12">
//       //         <h1>Books On My List</h1>
//       //       {this.state.books.length ? (
//       //         <List>
//       //           {this.state.books.map(book => {
//       //             return (
//       //               <ListItem key={book._id}>
//       //                   <strong>
//       //                     {book.title} by {book.author}
//       //                   </strong>
//       //                 <DeleteBtn onClick={() => this.deleteBook(book._id)} />
//       //               </ListItem>
//       //             );
//       //           })}
//       //         </List>
//       //       ) : (
//       //         <h3>No Results to Display</h3>
//       //       )}
//       //     </Col>
//       //   </Row>
//       // </Container>
//     );
//     }
//     else{
//     return <Redirect to="/signin" />
//     }
//   // }
// }

// export default Userprofile; */}