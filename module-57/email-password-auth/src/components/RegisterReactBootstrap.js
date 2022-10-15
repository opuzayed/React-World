import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import app from '../firebase/firebase.init';

const auth = getAuth(app);

const RegisterReactBootstrap = () => {
    const handleRegister = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email, password);
        createUserWithEmailAndPassword(auth,email,password)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(error => {
            console.log('error', error);
        });
    }
    const handleRegisterBlur = event => {
        const email = event.target.value;
        console.log(email);
    }
    const handlePasswordBlur = event => {
        const password = event.target.value;
        console.log(password);
    }
    return (
        <div className='w-50 mx-auto'>
            <h3 className='text-warning'>Please Register</h3>
            <Form onSubmit={handleRegister}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control onBlur={handleRegisterBlur} type="email" name="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control onBlur={handlePasswordBlur}type="password" name='password' placeholder="Password" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Register
      </Button>
    </Form>
        </div>
    );
};

export default RegisterReactBootstrap;