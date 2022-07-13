import React from 'react'
import { useContext } from 'react';
import {Form, } from 'react-bootstrap';
import MsgContext from '../../contexts/MsgContext';
const Admin = () => {
    const {msg,setMsg} = useContext(MsgContext)
  return (
    <div>
        <Form >
            <Form.Control value={msg} onChange={(e)=>setMsg(e.target.value)} type='text' />
        </Form>
        <div className="vh" style={{height:'100vh'}}>

        </div>
        
    </div>
  )
}

export default Admin