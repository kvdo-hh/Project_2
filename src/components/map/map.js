import React, { useState, useEffect } from 'react'
import { GoogleMap, Marker, useJsApiLoader, InfoWindow } from '@react-google-maps/api';
import {Link} from "react-router-dom";
import './map.css';

//add personal google map api key - the following is mine
const googleApiKey = 'AIzaSyBhsOFYi791FH1YLTtrtJ27vWzb1vn5pwo';

const containerStyle = {
  width: '50%',
  display: 'flex',
  alignItems: 'stretch'
};

function Map({ blogListData }) {

  const [activeMarker, setActiveMarker] = useState(null);
  const [dataLatLon, setdataLatLon] = useState ([]);

  const handleActiveMarker = (marker) => {
    if (marker === activeMarker) {
      return;
    }
    setActiveMarker(marker);
  };

  useEffect(() => {
    const temp = blogListData;
    blogListData.forEach((cityInfo, index) => {
      
      fetch('https://maps.googleapis.com/maps/api/geocode/json?key=' + googleApiKey + '&address=' + cityInfo.location)
        .then((response) => response.json())
        .then((json) => { 
          const latLon = json.results[0].geometry.location;
          
          temp[index].latLon = latLon;
          if (temp.length === index+1) {
            setdataLatLon(temp);
          }
        })
        
    })
  }, [blogListData])

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: googleApiKey
  })

  return (isLoaded && dataLatLon.length > 0)  ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={dataLatLon[0].latLon}
      zoom={7}
    >
      {dataLatLon.map(({ _id, title, latLon, visitingdate, authorname, authorimg }) => (
        <Marker
          key={_id}
          position={latLon}
          onClick={() => handleActiveMarker(_id)}
        >
          {activeMarker === _id ? (
            <InfoWindow onCloseClick={() => setActiveMarker(null)}>
              <div className='mapInfoWindow'>
                <p className='title'>{title}</p>
                <p>{visitingdate}</p>
                <div className='mapAuthorItem'>
                  <img className='mapAuthorImg' src={authorimg} alt={authorname} />
                  <p>visited by {authorname}</p>
                </div>
                <Link className="btn-one" to={`/post/${_id}`} key={_id}><span>Click here for more Info!</span></Link>
              </div>
            </InfoWindow>
          ) : null}
        </Marker>
      ))}
    </GoogleMap>
  ) : <></>
}

export default React.memo(Map);