import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import './detailpage.css';

const DetailPage = () => {

    const { id } = useParams();
    const [detailPage, setDetailPage] = useState({});

    const navigate = useNavigate();

    function handleClick() {
        navigate("/");
    }
    useEffect(() => {
        fetch(`http://localhost:5000/destination/${id}`)
            .then((response) => response.json())
            .then((json) => setDetailPage(json.data))
    }, [id])

    return (
        <div className="wrapper">
            <div style={{ backgroundImage: `url(${detailPage.imgdetailpage})` }} className="detailHeader">
                <h1>{detailPage.title}</h1>
            </div>
            <div className="detailMain wrapped">
                <div className="detailButton" onClick={handleClick}>
                    <div className="btn-one">
                        <span>Go back to homepage</span>
                    </div>
                </div>
                <h2>{detailPage.location} <span className="date">({detailPage.visitingdate})</span></h2>
                <img src={detailPage.favoriteplace} alt={detailPage.location} />
                <p>{detailPage.description}</p>
                
                <div className="detailAuthorInfo">
                    <img src={detailPage.authorimg} alt={detailPage.authorname} />
                    <span>{detailPage.authorname}</span>
                    <h3>more info about the author:</h3>
                    <div>{detailPage.authorresume}</div>
                </div>
            </div>

        </div>
    )
}


export default DetailPage; 