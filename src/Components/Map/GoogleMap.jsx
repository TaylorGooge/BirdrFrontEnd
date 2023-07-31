import React, { useEffect, useState, useRef } from 'react';
import {Loader} from '@googlemaps/js-api-loader';
 

const GoogleMap = (props) => {
  let [map, setMap] = useState(null);
  let [lastLoc, setLastLoc] = useState(null);
  let [showCenter, setShowCenter] = useState(true);
  let [windowOpen, setWindowOpen] = useState(false);
  let [locationButton, setLocationButton] = useState(false);
  const markersRef = useRef([]);

  useEffect(() => {
    const initMap = () => {   
      const loader = new Loader({
        apiKey: 'AIzaSyC9nbhtbGeolVY2g-PckOOSnfe3Fabea0w',
        version: 'weekly',
        channel: '2',
      });
      loader.load().then(async () => {
        const { Map } = await google.maps.importLibrary("maps");
        setMap(map = new Map(document.getElementById("map"), {
          center: { lat: -34.397, lng: 150.644 },
          zoom: 8,}));
        if (props.geoJson) {updateGeoJson()}
        setMap(map.data.setStyle({strokeColor: 'blue'}));
        setMap(map.addListener('dragend', ()=>{setShowCenter(false)}));
        setInterval(locate, 10000);
        locate();
        //setPanToLocation();
        setInfoWindows();
      });
    };
    initMap();
  }, []);

   useEffect(() => {
    updateGeoJson();
  }, [props.geoJson]);
  
  const updateGeoJson = () => {
    if (map) {
       setMap( map.data.addGeoJson(props.geoJson));
    }
  };

  const locate = () => {
    if (navigator.geolocation){
      navigator.geolocation.getCurrentPosition(function (position) {
            let currLoc = new google.maps.LatLng(position.coords.latitude, position.coords.longitude)
            addMarker(currLoc);
            if (!windowOpen && showCenter){
                setMap(map.setCenter(currLoc));
            } 
           setLastLoc(currLoc);
        });
    }
  };
  const deleteMarkers = () => {
    markersRef.current.forEach((marker) => {
      marker.setMap(null);
    });
    markersRef.current = []
  }
  const addMarker = (loc) => {
    deleteMarkers();
    let im = 'img/mapMarker.png';
    const marker = new google.maps.Marker({
        position: loc,
        map: map,
        icon: im
      
    });
    markersRef.current.push(marker);
  }
  const setInfoWindows =() =>{
    let window = new google.maps.InfoWindow();
    setMap(map.data.addListener('click', (e) => {
      const feature = e.feature;
      if (feature.getProperty('birdImg') !== null && feature.getProperty('birdCall') !== null ){
        let html = `<div className="card" style="width: 18rem;">
        <ul className="list-group list-group-flush">
            <li className="list-group-item"> <bold>Species: </bold>${feature.getProperty('englishName')}</li>
            <li className="list-group-item"> <bold>Photo: </bold>${feature.getProperty('birdImg')}</li>
            <li className="list-group-item"> <bold>Call: </bold>${feature.getProperty('birdCall')}</li>
            <li className="list-group-item"><bold>Date: </bold>${feature.getProperty('date').slice(0,10)}</li>
            <li className="list-group-item"><bold>Logged By: </bold>${feature.getProperty('userName')}</li>
        </ul>
        </div>`
        window.setContent(html);
      }else { 
        let html = `<div className="card" style="width: 18rem;">
          <ul className="list-group list-group-flush">
              <li className="list-group-item"> <bold>Species: </bold>${feature.getProperty('englishName')}</li>
              <li className="list-group-item"><bold>Date: </bold>${feature.getProperty('date').slice(0,10)}</li>
              <li className="list-group-item"><bold>Logged By: </bold>${feature.getProperty('userID')}</li>
          </ul>
          </div>`
        window.setContent(html);
        
      }
      setWindowOpen(true)
      window.setPosition(e.latLng)
      window.setOptions({pixelOffset: new google.maps.Size(0, -34)})
      window.open(map);
      window.addListener('closeclick', ()=>{
        setWindowOpen(false);
      });
    
    }))
  }
  const setPanToLocation = () => {
    const locationButton = document.createElement('button');
    locationButton.textContent = 'Pan to Current Location';
    locationButton.classNameList.add('custom-map-control-button');
    setLocationButton(locationButton);
    locationButton.addEventListener('click', () => {
      setShowCenter(true);
      locate();
    });
    map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);
  }

  return (
      <div id="map" style={{ height: '500px' }} className="d-flex justify-content-center">
      </div>
  );
};
export default GoogleMap;