import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import './Newpost.css';

const CreatePost = ({postCreated}) => {
    const [title, setTitle] = useState('');
    const [location, setLocation] = useState('');
    const [visitingDate, setvisitingDate] = useState('');
    const [locationImg, setLocationImg] = useState('');
    const [authorName, setAuthorName] = useState('');
    const [authorImg, setAuthorImg] = useState('');
    const [authorResume, setAuthorResume] = useState('');
    const [description, setDescription] = useState('');
    const [favoritePlaceImg, setFavoritePlaceImg] = useState('');
    const [detailPageImg, setDetailPageImg] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        // form submit was clicked
        event.preventDefault();

        // construct data 
        const data = {
            title: title,
            location: location, 
            visitingdate: visitingDate, 
            img: locationImg, 
            authorname: authorName, 
            authorimg: authorImg,
            authorresume: authorResume , 
            description: description, 
            favoriteplace: favoritePlaceImg, 
            imgdetailpage: detailPageImg
        };
        // send data to backend (mongoDB)
        fetch('http://localhost:5000/data', {
          method: 'POST', 
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data), // convert json to string
        })
        .then(response => response.json())
        .then( () => {
            // send was sucessfull, tell parent element to do sth
            postCreated();
            // go to main page
            navigate("/");
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }    

    return (
        <div className="wrapper">
        <div className="createDestination wrapped">
            <h2>Add New Posts:</h2>
            <form onSubmit={handleSubmit}>
            <label>Your title:
                <input
                    type='text'
                    placeholder='Enter your title'
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                /><br/></label>
                <label>Your location (city and country):
                <input
                    type='text'
                    placeholder='Enter your city and country'
                    required
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                /><br/></label>
                <label>Date of your journey:
                <input
                    type='date'
                    placeholder='Enter the date of your journey start'
                    required
                    value={visitingDate}
                    onChange={(e) => setvisitingDate(e.target.value)}
                /><br/></label>
                <label>URL of an image of your destination:
                <input
                    type="url"
                    name="url"
                    placeholder="https://example.com"
                    pattern="https://.*" size="30"
                    required
                    value={locationImg}
                    onChange={(e) => setLocationImg(e.target.value)}
                /><br/></label>
                <label>Name of author:
                <input
                    className=''
                    type='text'
                    placeholder='Enter authors name'
                    required
                    value={authorName}
                    onChange={(e) => setAuthorName(e.target.value)}
                /><br/></label>
                <label>URL of an image of yourself:
                <input
                    className=''
                    type='url'
                    placeholder='https://example.com'
                    required
                    value={authorImg}
                    onChange={(e) => setAuthorImg(e.target.value)}
                /><br/></label>
                <label>Tell us something about the author:
                <textarea
                    rows="3"
                    cols= "60"
                    required
                    value={authorResume}
                    onChange={(e) => setAuthorResume(e.target.value)}>
                </textarea><br/></label>
                <label>Enter description of your journey:
                <textarea
                    rows="5"
                    cols= "60"
                    required
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}>
                </textarea><br/></label>
                <label>URL of an image of your favorite place:
                <input
                    className=''
                    type='url'
                    placeholder='https://example.com'
                    required
                    value={favoritePlaceImg}
                    onChange={(e) => setFavoritePlaceImg(e.target.value)}
                /><br/></label>
                <label>URL of an image to be displayed on the detail page:
                <input
                    className=''
                    type='url'
                    placeholder='https://example.com'
                    required
                    value={detailPageImg}
                    onChange={(e) => setDetailPageImg(e.target.value)}
                /><br/></label>
                <button className="btn-one" type='submit'><span>Click here to submit!</span></button>
            </form>
        </div>
        </div>
    )
}

export default CreatePost;