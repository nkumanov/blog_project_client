import React from 'react'
import Cookies from 'universal-cookie';
import { Routes, Route, Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
export default function Blog(props) {
    const cookie = new Cookies()
    const navigate = useNavigate();
    const removeBookmark = () => {
        if(cookie.get('userData')){
            fetch(`http://localhost:5000/user/bookmark/${props.id}`, {
                method: 'DELETE',
                headers: { "Content-Type": "application/json", 'X-Authorization': cookie.get('userData') },
                
            })
            
            
        }else{
            navigate('/login');
            return;
        }
        
    }
    return (
        <section className="content">

            <div className="blog-content">
                <div className="author">
                    <img src={`http://localhost:5000/uploads/${props.authorImage}`} alt="" srcSet="" />

                    <span>{props.author}</span>


                </div>
                <div className="info">
                    <span className="example"><Link to={'/blog/' + props.id}></Link></span>
                    <h2>{props.title}</h2>
                    <p>{props.subTitle}</p>
                </div>
                <div className="blog-addons">
                    <div className="blog-info">
                        <span>{props.createdAt}</span>
                        <span>{props.readTime} {Number(props.readTime) > 1 ? 'minutes' : 'minute'} read</span>
                        <span><Link to={`/blogs/category/${props.category}`}>{props.category}</Link></span>
                    </div>
                    <button className="bookmark" title='remove from bookmarks' onClick={removeBookmark} ><i className="fas fa-trash-alt"></i></button>
                    
                </div>
            </div>
            <div className="blog-image">
                <span className="example"><a href="/"></a></span>
                <img src={`http://localhost:5000/uploads/${props.blogImage}`} alt="" srcSet="" />
            </div>
        </section>

    )
}
