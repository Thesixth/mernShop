import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../actions/userActions';
import LoadingBox from '../components/LoadingBox';
import ErrorMessage from '../components/ErrorMessage';


export default function RegisterScreen(props) {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmPassword] = useState('');

    const redirect = props.location.search
        ? props.location.search.split('=')[1]
        : '/';

    const userRegister = useSelector((state) => state.userRegister);
    const { userInfo, loading, error } = userRegister; 

    const dispatch = useDispatch();
    const submitHandler = (e) => {
        e.preventDefault();
        if (password !== confirmpassword) {
            alert('Passwords do not match');
        } else {
                 dispatch(register(name, email, password));
            }
    };


    useEffect(() => {
        if (userInfo) {
            props.history.push(redirect);
        }
    }, [props.history, redirect, userInfo]);

    return (
        <div>
            <form className='form' onSubmit={submitHandler}>
                <div>
                    <h1>Register</h1>
                </div>
                {loading && <LoadingBox></LoadingBox>}
                {error && <ErrorMessage variant="danger">Invalid email or password</ErrorMessage>}
                <div>
                    <label htmlFor="name">Name</label>
                    <input 
                    type="text" 
                    id="name" 
                    placeholder="Enter your name" 
                    required onChange={e => setName(e.target.value)} 
                    ></input>                
                </div>
                <div>
                    <label htmlFor="email">Email address</label>
                    <input 
                    type="email" 
                    id="email" 
                    placeholder="email" 
                    required onChange={e => setEmail(e.target.value)} 
                    ></input>                
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input 
                    type="password" 
                    id="password" 
                    placeholder="password" 
                    required 
                    onChange={e => setPassword(e.target.value)} 
                    ></input>                
                </div>
                <div>
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input 
                    type="password" 
                    id="confirmPassword" 
                    placeholder="Confirm Password" 
                    required 
                    onChange={e => setConfirmPassword(e.target.value)} 
                    ></input>                
                </div>
                <div>
                    <label />
                    <button className="primary" type="submit">Register</button>
                </div>
                <div>
                    <label />
                    <div>
                        Have an account with us? { ' ' }
                        <Link to={`/signin?redirect=${redirect}`}>Sign In</Link>
                    </div>
                </div>
            </form>
            
        </div>
    )
}
