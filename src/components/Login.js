import React from 'react';

import { useState, useEffect } from 'react';
import Cookies from 'universal-cookie';
import { useNavigate } from 'react-router-dom';
export default function Login() {


    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const handleForm = async (event) => {
        event.preventDefault();
        if (username.length < 4 || password.length < 4) {
            setError('Wrong Username or Password!');
            return;
        };
        

        const user = { email: username, password: password };
        let token = '';
        const cookies = new Cookies();
        try {
            let response = await fetch('http://localhost:5000/auth/login', {
                method: 'POST',
                body: JSON.stringify(user),
                headers: { 'Content-Type': 'application/json' }
            })
            if (response.status >= 200 && response.status < 300) {
                
                token = await response.json();
                
                cookies.set('userData', token.token);
                navigate('/');
            } else {
                setError('Wrong Username or Password!');
            }



        } catch (err) {
            console.log(err);
        }


    }

    return (
        <div className="row row-form-content">
            <div className="wrapper">
                <div className="main-content">

                    <section className="credential-form">
                        <h2>Login</h2>

                        <form onSubmit={handleForm}>
                            <div className="form-element">
                                <p>Username: </p>
                                <label htmlFor="username"><i className="fas fa-user"></i><input type="text" onChange={(e) => setUsername(e.target.value)} id="username" name="username"
                                    placeholder="Username" /></label>

                            </div>
                            <div className="form-element">
                                <p>Password: </p>
                                <label htmlFor="password"><i className="fas fa-lock"></i><input type="password" onChange={(e) => setPassword(e.target.value)} id="password" name="password"
                                    placeholder="Password" /></label>

                            </div>
                            <div className="form-element">
                                <p className="error-area" style={{'display': `${error.length > 0 ? 'block' : 'none'}`}}>{error}</p>
                                <button type="submit">Login</button>
                            </div>
                        </form>
                    </section>
                </div>
            </div>
        </div>
    )
}
