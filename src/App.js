export default App;
import React, { useState, useEffect } from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
// not sure if import for Button and IconButton needed,because they are already part of Header
import { Button } from '@mui/material';
import IconButton from '@mui/material';
import Header from './components/Header';
import NewPost from "./components/newpost/NewPost";
import Home from './page/Home';
import Contact from "./pages/contact/Contact";
import PostDetails from "./pages/postdetails/PostDetails";


function App() {

  const [postMainData, setpostMainData] = useState([]);
  
  function getPosts() {
    // get Data back from data.json
    fetch('http://localhost:5000/data')
    // convert string response to JSON
    .then((response) => response.json())
    .then((json) => {
      // sort data by date
      json.data.sort(function(a,b){
        return new Date(b.visitingdate) - new Date(a.visitingdate);
      });
      setpostMainData(json.data);
    })
  }

  useEffect(() => {
    // load existing posts when page is first loaded
    getPosts();
  }, [])


  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home postMainData={postMainData} />} />
        <Route path="contact" element={<Contact />} />
        
    {/* Callback  / trigger function "getPosts" to reload all posts from data.json */}
        <Route path="newpost" element={<NewPost postCreated={getPosts}/>} />
        <Route path="post/:id" element={<PostDetails />} />
      </Routes>
    </div>
  );
}

export default App;

