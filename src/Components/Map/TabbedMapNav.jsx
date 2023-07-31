import React, {useEffect, useState} from 'react';
import axios from 'axios';

import TabbedContent from './TabbedMap/TabbedContent';
import GoogleMap from './GoogleMap';

export default function TabbedMapNav() {
  let [geoJson, setGeoJson] = useState('');
  let [rawData, setrawData] = useState(null);
  
  let fetchData = async () =>{
    try {
        const response = await axios.get('https://birdr.taylorgooge.repl.co/birdSighting');
        setrawData(response.data);
        toGeoJson(response.data);
      } catch (error) {
        console.log(error)
      }
    }
  const toGeoJson = (data) => {
      const outGeoJson = {
        type: 'FeatureCollection',
        features: [],
      };
      for (let i=0; i < data.length; i++) {
        const coordA = parseFloat(data[i]['coordA']);
        const coordB = parseFloat(data[i]['coordB']);
        const tempObj = {};
        tempObj['properties'] = data[i];
        tempObj['type']= 'Feature';
        tempObj['geometry']= {'type': 'Point', 'coordinates': [coordA, coordB]};
        outGeoJson['features'].push(tempObj);
      }
      setGeoJson(outGeoJson);
    }
   useEffect(() => {
       fetchData();
   }, []);
  return (
    <main className='main-content' id="main-content" >
      <nav className="mb-4">
        <div className="nav nav-pills nav-fill rounded-2 px-2 py-1 bg-white shadow" role="tablist">
          <a className="nav-link active" data-bs-toggle="tab" href="#tab3-home" role="tab" aria-selected="true">Report</a>
          <a className="nav-link" data-bs-toggle="tab" href="#tab3-profile" role="tab" aria-selected="false">Search</a>
          <a className="nav-link" data-bs-toggle="tab" href="#tab3-contact" role="tab" aria-selected="false">Filter</a>
        </div>
      </nav>
      <TabbedContent />

      </main>
    

  );
}