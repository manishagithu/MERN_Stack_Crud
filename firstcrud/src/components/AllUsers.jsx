import React from 'react'
import { useEffect,useState } from 'react';
import {Table,TableHead,TableCell,TableBody,TableRow,styled, Button} from '@mui/material';
import { getUsers,deleteUser} from '../service/api.js';
import { Link } from 'react-router-dom';

const StyledTable =styled(Table)`
width :90%;
margin:50px auto 0 auto;`

const StyledTablerow = styled(TableRow)`
background:black;
& > th{
color:#fff;
font-size:20px;}`

//th is nothing but the tablecell internally (will get to know while inspecting the tags)
const TBody = styled(TableRow)`
& > td{
  font-size:15px;
}`

// td is nothing but the TableRow of tableBody

function AllUsers() {
const [users,setUsers] = useState([]);

useEffect(() =>{
getAllUser();

}, []);

const getAllUser = async() =>{
  let response =await getUsers();
 
 setUsers(response.data);
}

const deleteUserdetails = async(id) =>{
  await deleteUser(id);
  getAllUser();
  alert("User deleted Successfully")
}

  return (
    <StyledTable>
        <TableHead>
          <StyledTablerow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Username</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone.No</TableCell>
            <TableCell>

            </TableCell>
          </StyledTablerow>
        </TableHead>
        <TableBody>
            {
              users.map(user =>(
                <TBody key={user._id}>
                  <TableCell>{user._id}</TableCell>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.username}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.phone}</TableCell>
                  <TableCell>
                    <Button variant='contained' style={{marginRight:10}} component ={Link} to={`/edit/${user._id}`}>Edit</Button>
  
                    <Button variant='contained' color="secondary" onClick={()=>deleteUserdetails(user._id)}>Delete</Button>
                  </TableCell>
                </TBody>

              ))
              }
        </TableBody>
        </StyledTable>
  )
}

export default AllUsers;

