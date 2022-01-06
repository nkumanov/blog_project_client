import React from 'react'
import {Route, useNavigate} from 'react-router-dom'
import { useState, useEffect } from 'react'
import Cookies from 'universal-cookie';
export default function CreateBlog() {

    
    let [title, setTitle] = useState('');
    let [subTitle, setSubTitle] = useState('');
    let [category, setCategory] = useState('');
    let [description, setDescription] = useState('');
    let [image, setImage] = useState('')
    let navigate = useNavigate();
    const cookie = new Cookies();
    
    useEffect(() => {
        if(cookie.get('userData') == undefined){
            navigate('/login');
            return null;
        }
    }, [])
    let titleHandler = (event) => {
        setTitle(event.target.value);
    }
    let subTitleHandler = (event) => {
        setSubTitle(event.target.value);
    }
    let descriptionHandler = (event) => {
        setDescription(event.target.value);
    }
    let categoryHandler = (event) => {
        setCategory(event.target.value);
    }
    let fileSelectedHandler = event => {
        const value = event.target.value.split('\\').pop();
        
        setImage(value);
    }
     const handleSubmit = async (event) => {
        event.preventDefault();
        
        
        const blog = {
            title: title,
            subTitle: subTitle,
            category: category,
            image: image,
            description: description,
        }
        
        try {
            const result = await fetch('http://localhost:5000/blogs', {
                method: 'POST',
                headers: {"Content-Type": "application/json", 'X-Authorization': cookie.get('userData')},
                body: JSON.stringify(blog)
            })
            
            
            if(result.ok){
                
                return navigate('/');
            }
        } catch (error) {
            console.log(error);
        }
        
    }
    return (
        <section className="edit-form">
            <h2>Create new blog post</h2>

            <form onSubmit={handleSubmit}>

                <div className="form-element">
                    <p>Title: </p>
                    <label htmlFor="title"><input type="text" id="title" name="title" onChange={titleHandler} placeholder="Title" /></label>

                </div>
                <div className="form-element">
                    <p>Sub-Title: </p>
                    <label htmlFor="subTitle"><input type="text" id="subTitle" name="subTitle" onChange={subTitleHandler} placeholder="Sub-Title" /></label>

                </div>
                <div className="form-element">
                    <p>Category: </p>
                    <label htmlFor="category"><select onChange={categoryHandler} name="category" id="category">
                        <option value="science">Science</option>
                        <option value="programming">Programming</option>
                        <option value="life-Style">Life Style</option>
                        <option value="cars">Cars</option>
                        <option value="productivity">Productivity</option>
                        <option value="relationships">Relationships</option>
                        <option value="politics">Politics</option>
                    </select></label>

                </div>
                <div className="form-element">
                    <p>Description: </p>
                    <label htmlFor="description"><textarea onChange={descriptionHandler} name="description" id="description" cols="40" rows="20"
                        placeholder="Put your description here"></textarea></label>

                </div>
                <div className="form-element">
                    <p>Image: </p>
                    <label htmlFor="imageUrl"><input onChange={fileSelectedHandler} type="file" id="image" name="image" placeholder="image" /></label>

                </div>
                <div className="form-element">
                    <button type="submit">Submit</button>
                </div>
            </form>
        </section>
    )
}
