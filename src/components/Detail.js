
import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
export default function Detail() {
    let { blogId } = useParams();
    const [blog, setBlog] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/blogs/${blogId}`).then(res => res.json()).then(data => setBlog(data));

    }, []);
    
    return (
        <div className="row row-form-content">
            <div className="wrapper">
                <div className="main-content">

                    <section className="detail-content">

                        <article className="blog-header">
                            <h1 className="title">{blog.title}</h1>
                            <h2 className="subHeading">{blog.subTitle}</h2>
                        </article>
                        <article className="blog-author">
                            <div className="left-side">
                                <img src={`http://localhost:5000/uploads/${blog.image}`} alt="" />
                                <p>{blog.author}</p>
                                <span>{blog.createdAt}</span>
                                <span>{blog.readTime} {blog.readTime > 1 ? 'minutes' : 'minute'} read</span>
                            </div>
                            <div className="right-side">
                                <a className="bookmark" href=""><i className="fab fa-facebook-square"></i></a>
                                <a className="bookmark" href=""><i className="fab fa-twitter-square"></i></a>

                                <a className="bookmark" href=""><i className="fab fa-linkedin"></i></a>
                                <a className="bookmark" href=""><i className="far fa-bookmark"></i></a>

                            </div>
                        </article>
                        <article className="blog-body">
                            <img src={`http://localhost:5000/uploads/${blog.image}`} alt="" />
                            <p>{blog.description}</p>
                        </article>
                        <article className="blog-footer">

                        </article>
                    </section>
                </div>
            </div>
        </div>
    )
}
