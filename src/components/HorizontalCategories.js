import React from 'react'
import { Routes, Route, Link } from "react-router-dom";

export default function Categories() {


    return (

        <div className="row categories">
            <h3>DISCOVER MORE OF WHAT MATTERS TO YOU</h3>
            <div className="category-hz">
                <Link to="/blogs/category/science">Science</Link>
                <Link to="/blogs/category/programming">Programming</Link>
                <Link to="/blogs/category/life-style">Life Style</Link>
                <Link to="/blogs/category/cars">Cars</Link>
                <Link to="/blogs/category/productivity">Productivity</Link>
                <Link to="/blogs/category/relationships">Relationships</Link>
                <Link to="/blogs/category/politics">Politics</Link>
            </div>
        </div>



    )
}
