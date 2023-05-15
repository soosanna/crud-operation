import axios from 'axios'
import React, { useEffect, useState } from 'react'
//import {API_URL} from './Constants/URL'
import {  Button, Table } from 'semantic-ui-react'
import { useNavigate } from 'react-router-dom'


 function Read() {
  const[apiData,setApidata]=useState([]);
  const navigate=useNavigate();



  const updateUser=({firstname,lastname,Checked,id})=>{
    localStorage.setItem('id',id)
    localStorage.setItem('firstname',firstname)
    localStorage.setItem('lastname',lastname)
    localStorage.setItem('checked',Checked)

    navigate('/update')
    
  }

  const handleClick=()=>{
    navigate('/create')
  }

  const deleteUser=async (id)=>{
    await axios.delete(`https://644fe978ba9f39c6ab6fa8fd.mockapi.io/user/${id}`)
    getUrl()
  }


  const getUrl = async ()=> {
    const resp=await axios.get('https://644fe978ba9f39c6ab6fa8fd.mockapi.io/user');
    setApidata(resp.data);
  }
  useEffect(()=>{
  getUrl()
  },[])

  return(
    <Table singleLine>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Firstname</Table.HeaderCell>
          <Table.HeaderCell>LastName</Table.HeaderCell>
          <Table.HeaderCell>Checked </Table.HeaderCell>
          <Table.HeaderCell>Delete</Table.HeaderCell>
          <Table.HeaderCell>Update</Table.HeaderCell>
          <Table.HeaderCell>Add</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {
          apiData.map(data=>(

            <Table.Row key={data.id}>

            <Table.Cell>{data.firstname}</Table.Cell>
            <Table.Cell>{data.lastname}</Table.Cell>
            <Table.Cell>{data.Checked ? 'checked':'notchecked'}</Table.Cell>
            <Table.Cell><Button onClick={()=>deleteUser(data.id)}>Delete</Button></Table.Cell>
            <Table.Cell><Button onClick={()=>updateUser(data)}>Update</Button></Table.Cell>
            <Table.Cell><Button onClick={handleClick}>Add</Button></Table.Cell>
    
            </Table.Row>

          ))
        }
       
      </Table.Body> 
        
    </Table>
  
  );
}
export default Read;
