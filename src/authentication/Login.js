import React, { useState } from "react";
import { Button, Form, Modal } from 'semantic-ui-react'

export default function LoginModal(props){
    const [username, setUserName] = useState(''); 
    const [pwd, setPwd] = useState(''); 
    const onLogin = () => {
        props.onLogin(username);
    }

    return (
        <Modal
            onClose={props.onClose}
            open={props.open}
        >
       <Modal.Header>Login</Modal.Header>
        <Form>
            <Form.Field>
                <label>User Name</label>
                <input placeholder='User Name' 
                value={username}
                onChange={(e) => {
                    setUserName(e.target.value);
                  }}/>
            </Form.Field>
            <Form.Field>
                <label>Password</label>
                <input placeholder='Password'
                value={pwd}
                onChange={(e) => {
                    setPwd(e.target.value);
                }}
                />
            </Form.Field>
            <Button type='submit' onClick={props.onClose}>Close</Button>
            <Button type='submit' onClick={onLogin}>Login</Button>
        </Form>
    </Modal>
        
    )
}