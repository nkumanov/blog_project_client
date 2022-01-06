import React from 'react'
import NavLink from './NavLink'
import { Routes, Route, Link } from "react-router-dom";
import Cookies from 'universal-cookie'
import { useNavigate } from 'react-router-dom'
import SubHeader from './SubHeader';

export default function Header() {

    const navigate = useNavigate();
    const cookie = new Cookies();
    const logout = () => {
        cookie.remove('userData');
        navigate('/');
    }
    return (
        <>
        <div className="row row-header">
            <div className="wrapper">
                <div className="header">
                    <div className="logo">
                        <Link to='/'>Story Tale</Link>
                    </div>
                    {cookie.get('userData') ? <div className="header-right">
                        <NavLink link='/blog/create' title='Create blog' path="blog/create" />
                        <NavLink link='/bookmarks' title='My Bookmarks' path="bookmarks" />
                        
                        <div className={'nav-links'}>
                            <button onClick={logout}>Logout</button>
                        </div>

                    </div> : <div className="header-right">
                        <NavLink link='/about' title='Our Story' path="about" />
                        <NavLink link='/login' title='Sign In' path="login" />
                        <NavLink specialBtn='bl-button' link='/register' path="register" title='Get Started' />
                    </div>}


                </div>

            </div>
        </div>
        <SubHeader logged={cookie.get('userData') ? true : false } />
        </>
    )
}
