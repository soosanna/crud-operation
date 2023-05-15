import React, { useState } from 'react'
import { API_URL } from './Constants/URL'
import { Checkbox, FormField ,Form,Button} from 'semantic-ui-react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Create() {
  const [firstname,setFirstname]=useState('');
  const [lastname,setLastname]=useState('');
  const [Checked,setChecked]=useState(false);
  const navigate=useNavigate();

  const postdata=async()=>{
    await axios.post(API_URL,{
      firstname,
      lastname,
      Checked
    })
    navigate('/read');
  
  }



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
      <Button onClick={postdata}>Bubmit</Button>

    </Form>
  )
}
export default Create

