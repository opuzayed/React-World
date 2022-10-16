import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, updateProfile } from 'firebase/auth';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import app from '../firebase/firebase.init';
import { Link } from 'react-router-dom';

const auth = getAuth(app);

const RegisterReactBootstrap = () => {
    const [passwordError, setPasswordError] = useState('');
    const [success, setSuccess] = useState(false); 
    const handleRegister = event => {
        event.preventDefault();
        setSuccess(false);
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);
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
            setSuccess(true);
            form.reset();
            verifyEmail();
            updateUserName(name);
        })
        .catch(error => {
            console.log('error', error);
            setPasswordError(error.message);
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
    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
        .then(() => {
        alert('Please check your mail and verify your email');
        })
    }
    const updateUserName = name => {
        updateProfile(auth.currentUser, {
            displayName : name
        })
        .then(() => {
           console.log('Display name updated'); 
        }) 
        .catch(error => console.error(error))
    }
    return (
        <div className='w-50 mx-auto'>
            <h3 className='text-warning'>Please Register</h3>
            <Form onSubmit={handleRegister}>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Your Name</Form.Label>
        <Form.Control onBlur={handleRegisterBlur} type="text" name="name" placeholder="Enter your name" required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control onBlur={handleRegisterBlur} type="email" name="email" placeholder="Enter email" required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control onBlur={handlePasswordBlur}type="password" name='password' placeholder="Password" required/>
        
      </Form.Group>
      <p className='text-danger'>{passwordError}</p>
      {success && <p className='text-success'>User Register Successfully</p>}
      <Button variant="primary" type="submit">
        Register
      </Button>
    </Form>
    <p><small>Already have an account? Please<Link to='/login'>Login</Link></small></p>
        </div>
    );
};

export default RegisterReactBootstrap;