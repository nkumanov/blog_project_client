import React from 'react';
import BookmarkBlog from './BookmarkBlog';
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react';
import Cookies from 'universal-cookie';
export default function Bookmarks() {
    const [blogs, setBlogs] = useState([]);
    const [change, setChange] = useState();
    const cookie = new Cookies();
    let navigate = useNavigate();
    useEffect(() => {
        if (cookie.get('userData') == undefined) {
            navigate('/login');
            return null;
        }
    }, []);
    useEffect(async () => {
        try {
            let response = await fetch('http://localhost:5000/user/bookmarked', {
                method: 'GET',
                headers: { "Content-Type": "application/json", 'X-Authorization': cookie.get('userData') },
            });
            let data = await response.json();
            if (response.status >= 200 && response.status < 300) {
                setBlogs(data);
            }
        } catch (error) {
            console.log(error);
        }


    }, [change]);

    const deletedBlog = () => {
        setChange(oldState => !oldState);
    }

    return (

        <div className="row row-main-content">
            <div className="wrapper">
                <div className="main-content">
                    <div className="left-main-content">

                        {blogs.length > 0 ? blogs.map(element => <BookmarkBlog key={element._id} setChanger={deletedBlog} authorImage={element.image} blogImage={element.image} id={element._id} readTime={element.readTime} title={element.title} subTitle={element.subTitle} category={element.category} createdAt={element.createdAt} author={element.author} />) : <h1>No blogs to show</h1>}
                    </div>
                </div>
            </div>
        </div>
    )
}
