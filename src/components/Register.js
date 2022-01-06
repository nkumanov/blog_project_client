
import React from 'react';
import { useForm } from 'react-hook-form';
import { useState, useEffect } from 'react';
import Cookies from 'universal-cookie';
import { useNavigate } from 'react-router-dom';
export default function Register() {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPass, setConfirmPassword] = useState('');
    const [error, setError] = useState([]);
    const navigate = useNavigate();
    const cookies = new Cookies();
    const handleSubmit = async (e) => {
        e.preventDefault();

        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g

        if(!email.toLowerCase().trim().match(pattern)){
            setError('Please enter valid email!');
            return;
        }
        
        if (username.length < 3) {
            if(error.indexOf('The username must be at least 3 characters long!') != -1){
                
            }else{
                setError('The username must be at least 3 characters long!');
                return;
            }
        }
        if (password != confirmPass) {
            if(error.indexOf('Passwords do not match!') != -1){

            }else{

                setError('Passwords do not match!');
                return;
            }

        }

        const user = { email: email, username: username, password: password };
        let token = '';
        
        try {
            if(error.length > 0){
                return;
            }
            let response = await fetch('http://localhost:5000/auth/register', {
                method: "POST",
                body: JSON.stringify(user),
                headers: { 'Content-Type': "application/json" }
            });
            if (response.status >= 200 && response.status < 300) {
                
                token = await response.json();

                cookies.set('userData', token.token);
                navigate('/');
            } else {

            }


        } catch (error) {
            console.log(error);
        }

    }
    return (
        <div className="row row-form-content">
            <div className="wrapper">
                <div className="main-content">

                    <section className="credential-form">
                        <h2>Register</h2>



                        <form onSubmit={handleSubmit}>

                            <div className="form-element">
                                <p>Email: </p>
                                <label htmlFor="email"><i className="fas fa-envelope"></i><input onChange={(e) => { setEmail(e.target.value) }} type="text" id="email" name="email"
                                    placeholder="Email" /></label>

                            </div>
                            <div className="form-element">
                                <p>Username: </p>
                                <label htmlFor="username"><i className="fas fa-user"></i><input onChange={(e) => { setUsername(e.target.value) }} type="text" id="username" name="username"
                                    placeholder="Username" /></label>

                            </div>
                            <div className="form-element">
                                <p>Password: </p>
                                <label htmlFor="password"><i className="fas fa-lock"></i><input onChange={(e) => setPassword(e.target.value)} type="password" id="password" name="password"
                                    placeholder="Password" /></label>

                            </div>
                            <div className="form-element">
                                <p>Confirm Password: </p>
                                <label htmlFor="rePass"><i className="fas fa-lock"></i><input onChange={(e) => setConfirmPassword(e.target.value)} type="password" id="rePass" name="rePass"
                                    placeholder="Confirm Password" /></label>

                            </div>
                            <div className="form-element">
                                <p className="error-area" style={{ 'display': `${error.length > 0 ? 'block' : 'none'}` }}>{error}</p>

                                <button type="submit">Register</button>
                            </div>
                        </form>
                    </section>
                </div>
            </div>
        </div>
    )
}
