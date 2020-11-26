import React from 'react'
import { Button, Form, Modal } from 'semantic-ui-react'

export default function loginModal(props){
    return (
        <Modal
            onClose={props.onClose}
            open={props.open}
            trigger={<Button>Show Modal</Button>}
        >
       <Modal.Header>Login</Modal.Header>
        <Form>
            <Form.Field>
                <label>User Name</label>
                <input placeholder='User Name' />
            </Form.Field>
            <Form.Field>
                <label>Password</label>
                <input placeholder='Password' />
            </Form.Field>
            <Button type='submit' onClick={props.onClose}>Close</Button>
            <Button type='submit' onClick={props.onClick}>Login</Button>
        </Form>
    </Modal>
        
    )
}