import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import app from '../firebase/firebase.init';

const auth = getAuth(app);

const RegisterReactBootstrap = () => {
    const [passwordError, setPasswordError] = useState(''); 
    const handleRegister = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email, password);
        if(!/(?=(.*[A-Z]){2})/.test(password))
        {
            setPasswordError('Please enter at least two uppercase letter');
            return;
        }
        if(password.length < 6)
        {
            setPasswordError('please provide at least six character');
            return;
        }
        if(!/(?=.*?[#?!@$%^&*-])/.test(password))
        {
            setPasswordError('please provide at least one special character');
            return;
        }
        setPasswordError('');
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
        <Form.Control onBlur={handleRegisterBlur} type="email" name="email" placeholder="Enter email" required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control onBlur={handlePasswordBlur}type="password" name='password' placeholder="Password" required/>
        <p className='text-danger'>{passwordError}</p>
      </Form.Group>
      <Button variant="primary" type="submit">
        Register
      </Button>
    </Form>
        </div>
    );
};

export default RegisterReactBootstrap;