import * as React from 'react';
import Map,{Marker,Popup} from 'react-map-gl';
import {Room,Star} from "@material-ui/icons";
import { useEffect,useState } from 'react';
import "./app.css";
import axios from "axios";
import {format} from "timeago.js";
import Register from "./components/Register";
import Login from "./components/Login";
import 'mapbox-gl/dist/mapbox-gl.css';


function App() {

  const myStorage = window.localStorage;
  const [currentUser,setCurrentUser] = useState(localStorage.getItem("user"));
  const [showRegister,setShowRegister] = useState(false);
  const [showLogin,setShowLogin] = useState(false);
  const [pins,setPins] = useState([]);
  const [currentPlaceId,setCurrentPlaceId] = useState(null);
  const [newPlace,setNewPlace]= useState(null);
  const [title,setTitle] = useState(null);
  const [desc,setDesc] = useState(null);
  const [rating,setRating] = useState(0);
  const [viewport,setViewport] = useState(
    
    {

     
      latitude: 21.7679,
      longitude: 78.8718,
      zoom: 4

    }
  );
  


    const  initialViewState={ 
    latitude: 21.7679,
    longitude: 78.8718,
    zoom: 4
};

useEffect(()=>{ 

const getPins = async ()=>{

  try{

    const res = await axios.get("https://travel-map-ch6g.onrender.com/api/pins");
    setPins(res.data);
  }catch(err)
    {
      console.log(err);
    }

};

getPins();

},[]);

const handleMarkerClick = (id,lat,lng) =>  {

  setCurrentPlaceId(id);
  setViewport({...viewport, latitude:lat, longitude:lng});

}

const handleAddClick = (e) =>
{

  const {lng,lat} = e.lngLat;

 setNewPlace({
  lat,
  lng,
 }
 );
 
};

const handleSubmit = async (e) =>
{
  e.preventDefault();
  const newPin = {

    username:currentUser,
    title,
    desc,
    rating,
    lat:newPlace.lat,
    lng:newPlace.lng,

  }

  try{

    const res = await axios.post("https://travel-map-ch6g.onrender.com/api/pins",newPin);
    setPins([...pins,res.data]);
    setNewPlace(null);

  }
  catch(err){
    console.log(err)

  }
};

const handleLogout = () => {
  myStorage.removeItem("user");
  setCurrentUser(null);
}



  return (
    <div className="App">
    <Map 
     //{...viewport}
    initialViewState={initialViewState}
      style={{width: "100vw", height: "100vh"}}
      mapStyle="mapbox://styles/rishu08/clftwgw9d001r01mvgabp0990"
      mapboxAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
      onViewportChange={(nextViewport) => setViewport (nextViewport)}
      onDblClick={handleAddClick}
      transitionDuration="1000"


    >
    {pins.map(p=>(



  <>   <Marker 
       longitude={p.lng} 
       latitude={p.lat} 
       offsetLeft={-20}
       offsetTop={-10}
         >
         <div>
        <Room style={{fontSize:initialViewState.zoom*7,color:p.username ===currentUser ?"green ":"red", 
        cursor: "pointer" }} 
        onClick={() => handleMarkerClick(p._id,p.lat,p.lng)}
        />
       </div>
         </Marker>
         {p._id === currentPlaceId && 
        <Popup 
         longitude={p.lng} 
         latitude={p.lat}
         closeButton={true}
         closeOnClick={false}
         anchor="left"
         onClose={() =>setCurrentPlaceId(null) } 
         >

         <div className="Card">
          <label>Place</label>
          <h4 className="place">{p.title}</h4>
          <label>Review</label>
          <p className="desc">{p.desc}</p> 
          <label>Rating</label>
          <div>
          {Array(p.rating).fill(<Star className="star"/>)}
          </div>
          <label>Information</label>
          <p className="username">Created by <b>{p.username}</b></p>
          <span className="date">{format(p.createdAt)} </span>
        </div>
      </Popup>  

         }
         


 </>
))}
  
{     

  newPlace && ( 
    <Popup 
         longitude={newPlace.lng} 
         latitude={newPlace.lat}
         closeButton={true}
         closeOnClick={false}
         anchor="left"
         onClose={() =>setNewPlace(null) } 
         >
         <div>
          <form  onSubmit={handleSubmit}>
            <label>Title</label>
            <input placeholder="Enter a title" onChange={(e) =>setTitle((e.target.value))}/>
            <label>Review</label>
            <textarea placeholder="say us something about this place." onChange={(e) =>setDesc((e.target.value))}/>
            <label>Rating</label>
            <select onChange={(e) =>setRating((e.target.value))}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            <button className="submitButton" type="submit">Add Pin</button>
          </form>
         </div>
      </Popup>

      )}
     {currentUser ? ( <button className="button logout" onClick={handleLogout}>Log out</button>) 
        : (<div className="buttons">
        <button className="button login" onClick={() => setShowLogin(true)} >Login</button>
        <button className="button register" onClick={() => setShowRegister(true)}>Register</button>
        </div>)}

        {showRegister && <Register setShowRegister={setShowRegister}/>}
        {showLogin && <Login setShowLogin={setShowLogin} myStorage={myStorage} setCurrentUser={setCurrentUser} />}

      </Map>
    </div>

  )

}


export default App;
