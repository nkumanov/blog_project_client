import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import writingImage from '../images/jumbo-1.jpg';

export default function SubHeader(props) {
    
    return (
        <div className="row">
            <div className="wrapper">
                <div className="jumbotron">
                    <div className="content-left">
                        <h1>
                            Story Tale is a place to write, read, and connect
                        </h1>
                        <p>It's easy and free to post your thinking on any topic and connect with millions of readers.</p>
                        <Link className="sec2-btn" to={props.logged ? '/blog/create' : '/login'} path="">Start Writing</Link>
                    </div>
                    <div className="content-right">
                        <div className="jumbo-img">
                            <img src={writingImage} alt="Writing image" srcSet="" />
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
        
    )
}
