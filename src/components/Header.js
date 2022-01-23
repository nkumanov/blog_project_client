import React from 'react'
import { useRef } from 'react'
import NavLink from './NavLink'
import { Routes, Route, Link } from "react-router-dom";
import Cookies from 'universal-cookie'
import { useNavigate, useLocation } from 'react-router-dom'

import SubHeader from './SubHeader';
import HorizontalCategories from './HorizontalCategories'

export default function Header() {

    const navigate = useNavigate();
    const cookie = new Cookies();
    const location = useLocation();
    
    const logout = () => {
        cookie.remove('userData');
        navigate('/');
    }
    const navItems = useRef();
    // const myFunction = () =>{
    //     navItems.current.style.display = navItems.current.style.display == 'none' ? 'block' : 'none'
    // }
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

                        </div> : <div ref={navItems} className="header-right">
                            <NavLink link='/about' title='Our Story' path="about" />
                            <NavLink link='/login' title='Sign In' path="login" />
                            <NavLink specialBtn='bl-button' link='/register' path="register" title='Get Started' />

                        </div>}
                        {/* <Link path='' to=''  className="icon" onClick={myFunction}>
                                <i className="fa fa-bars"></i>
                        </Link> */}

                    </div>

                </div>
            </div>
            {location.pathname == '/' ? <SubHeader logged={cookie.get('userData') ? true : false} /> : ''}
            {location.pathname == '/' ? <HorizontalCategories/> : ''}
        </>
    )
}
