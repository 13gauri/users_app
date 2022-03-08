import React, { useState, useEffect } from "react";
import axios from "axios";
import TableRow from "../components/TableRow";
import { Link } from "react-router-dom";

   const Home = () => {

    const [userData, setUsersData] = useState([]);

   //  console.log(userData);

    useEffect(() => {

      // fetch("http://localhost:5000/users")
      //     .then(res => res.json())
      //     .then(data =>{
      //    console.log(data)
      // }).catch(err => alert(err));
         
       axios.get("http://localhost:5000/users")   
        .then(res => {
           console.log(res.data);
           setUsersData(res.data);

       }).catch(err => alert(err));  
       }, []);

      return (
        <>
          <h1 className="text-center">
        REACT, NODE, EXPRESS JS & MONGO DB CRUD APP
        </h1>

        <Link to="/add_user" className='btn btn-success text-white float-right mb-3'>Add User</Link>

        <table className='table'>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Mobile Number</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
             {
                userData.map((user) => {

                   return(
                     <TableRow  key={user._id} user={user}/>
                   )
                })
             }
          </tbody>
        </table>
        </>
    )
}
export default Home;