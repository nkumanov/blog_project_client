
import './App.css';
import { Routes, Route, Link } from "react-router-dom";

import Header from './components/Header';
import SubHeader from './components/SubHeader';
import MainContent from './components/MainContent';
import About from './components/About';
import Register from './components/Register'
import Login from './components/Login'
import CategoryBlogs from './components/CategoryBlogs'

import Detail from './components/Detail'
import CreateBlog from './components/CreateBlog';
import Bookmarks from './components/Bookmarks';
function App() {


  return (
    <>
      <Header />
      
      <Routes>
        <Route path='/' element={<MainContent />} />
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<Login />} />
        
        <Route path='/register' element={<Register />} />
        <Route path='/blog/:blogId' element={<Detail />} />
        <Route path='/blogs/category/:category' element={<CategoryBlogs />} />
        <Route path='blog/create' element={<CreateBlog />} />
        <Route path='*' element={<h1>Not Found 404</h1>} />



      </Routes>

    </>
  );
}

export default App;
