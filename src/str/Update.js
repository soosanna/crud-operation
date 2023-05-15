import axios from 'axios';
import React, { useEffect, useState } from 'react'
//import { API_URL } from './Constants/URL';
import { useNavigate } from 'react-router-dom';
import { Checkbox, FormField ,Form,Button}from 'semantic-ui-react'


 function Update() {
  const[id,setId]=useState('');
  const [firstname,setFirstname]=useState('');
  const [lastname,setLastname]=useState('');
  const [Checked,setChecked]=useState(false);
  const navigate=useNavigate();

  const updateUser =async ()=>{
    await axios.put(`https://644fe978ba9f39c6ab6fa8fd.mockapi.io/user/${id}`,{
      firstname,
      lastname,
      Checked
    });
    navigate('/read');

  }

  useEffect(()=>{
    setId(localStorage.getItem('id'))
    setFirstname(localStorage.getItem('firstname'))
    setLastname(localStorage.getItem('lastname'))
    setChecked(localStorage.getItem('checked'))
  },[])

  return (
    <Form className='form'>
      <FormField>
        <label>First Name</label>
        <input value={firstname} 
        onChange={e=>setFirstname(e.target.value)}
        placeholder='Enter first name'/>
      </FormField><br />
      <FormField>
        <label>Last Name</label>
        <input value={lastname}
        onChange={e=>setLastname(e.target.value)}
        placeholder='Enter last name'/>
      </FormField><br />
      <FormField>
       
        <Checkbox checked={Checked} 
        onChange={()=>setChecked(!Checked)}
        label="Agree terms and condition"/>
      </FormField><br />
      <Button onClick={updateUser}>Update</Button>
</Form>
   
  )
}

export default Update