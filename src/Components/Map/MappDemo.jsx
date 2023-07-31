import React, {useEffect, useState} from 'react';
import axios from 'axios';
import GoogleMap from './GoogleMap';
import ReportBird from './ReportBird';
import { useAuth0 } from "@auth0/auth0-react";
import { makeApiCall } from '../../../api.js';


export default function MappDemo() {
  let [speciesList, setSpeciesList] = useState(null);
  let [showModal, setShowModal] = useState(false);
  let [groupList, setGroupList] = useState(null);
  const [selectedValue, setSelectedValue] = useState('');
  let [geoJson, setGeoJson] = useState('');
  let [rawData, setrawData] = useState(null);
  let [reportBird, setReportBird] = useState(null);
  let [searchSpecies, setSearchSpecies] = useState(null);
  let [searchGroup, setSearchGroup] = useState(null);
  let [showSuccess, setShowSuccess] = useState(null);
  let [showFailure, setShowFailure] = useState(null);
  let [showLocError, setShowLocError] = useState(null)
  let [showSearchFailure, setShowSearchFailure] = useState(null)
  let [showSearchError, setShowSearchError] = useState(null)
  let [showAllGeo, setShowAllGeo] = useState(null)
  
  useEffect(() => {
    let fetchGeo = async () =>{
      try {
          const response = await makeApiCall("/birdSighting", "GET");
          setrawData(response.data);
          toGeoJson(response.data, true);
        } catch (error) {
          console.log(error)
        }
    }
    const fetchData = async () => {
      try {
        const speciesList = await makeApiCall('/birdCodes', 'GET')
        setSpeciesList(speciesList.data);
        const groupList = await makeApiCall('/birdCategories', 'GET')
        setGroupList(groupList.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
    fetchGeo();
    }, []);
  
    const toGeoJson = (data, overWrite=false) => {
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
      if(overWrite){
        setShowAllGeo(outGeoJson)
      }
      
    }
    const clearResults = () => {
      setGeoJson(showAllGeo)
    }
    const handleCheckboxChange = (event) => {
      setSelectedValue(event.target.value);
      showVal(event.target.value)
    };
    const showVal = (val) => {
      
        if (val == 1){
          return getDates(val);
        }
        else if (val == 2){
          return getDates(val);
        }
        else if (val == 3){
          return getSeason(val);
        }
        else if (val == 4){
          return getDates(val);
        }
        else if (val == 5){
          return clearResults();
        }
      
    };
  
    const getDate = () => {
      return new Date();
    }

    const getLocation = () => {
        if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(foundLocation, noLocation, {timeout: 30000000000, enableHighAccuracy: false, maximumAge: 75000});
        } else {
        handleLocationError(false, infoWindow, map.getCenter());
        }
    }

    const noLocation = (error) => {
        setShowLocError(true)
    }

    const foundLocation = async (pos) => {
        try {
            setShowLocError(true)
            const response = await axios.post('https://birdr.taylorgooge.repl.co/birdSighting', {
            userID: user.sub,
            birdID: reportBird,
            coordA: pos.coords.longitude,
            coordB: pos.coords.latitude,
            date: new Date(),
            locality: null,
            country: null,
            state: null
            });
            if (response.status == 200){
            setShowSuccess(true);
            setShowFailure(false)
            
            }
        else {
            setShowFailure(true)
            setShowSuccess(false)
        }
        
        } catch (error) {
            console.log(error);
        }
    
    }
  
    const postBirdSighting = () => {
      if (reportBird == 0 || reportBird == null) {
        return
      }
      getLocation();
    }

    const getSeasonMonths = (date) => {
      const seasonsMonths= {
        0: 3,
        1: 3,
        2: 1,
        3: 1,
        4: 1,
        5: 0,
        6: 0,
        7: 0,
        8: 2,
        9: 2,
        10: 2,
        11: 3,
      };
      return seasonsMonths[date.getMonth()];
    }
  
    const getDates= (int) =>{
      const now = getDate().toISOString();
      const week = new Date(getDate().getFullYear(), getDate().getMonth(), getDate().getDate() -    int).toISOString();
      return filter(week, now);  
    }

    const getSeasonDateRange = (currDate, index) => {
      const seasonsDates = {
        3: { // winter  DEC - FEB
          'start': new Date( currDate.getFullYear(), 11, 1),
          'end': new Date( currDate.getFullYear(), 1, 28),
        },
        1: { // spring  MAR-MAY
          'start': new Date( currDate.getFullYear(), 2, 1),
          'end': new Date( currDate.getFullYear(), 4, 31),
        },
        0: { // summer  JUN-AUG
          'start': new Date( currDate.getFullYear(), 5, 1),
          'end': new Date( currDate.getFullYear(), 7, 31),
        },
        2: { // autmn  SEP-NOV
          'start': new Date( currDate.getFullYear(), 8, 1),
          'end': new Date( currDate.getFullYear(), 10, 30),
        },
      };
      return seasonsDates[index];
      
    }
  
    const winterSeasonHelper = (date, obj) => {
      if ((date.getMonth()) === 11) {
        obj['end'] = new Date( date.getFullYear()+1, 1, 28);
      } else {
        obj['start'] = new Date( date.getFullYear()-1, 11, 1);
      }
      
    }

    const getSeason = () => {
      const currDate = getDate();
      const seasonsMonths = getSeasonMonths(currDate);
      let seasonDateRange = getSeasonDateRange(currDate, seasonsMonths);
      if (seasonsMonths == 3) {
        seasonDateRange = winterSeasonHelper(currDate, seasonDateRange);
      }
      filter(seasonDateRange['start'].toISOString(), seasonDateRange['end'].toISOString());
      
      
    }

    const postSearchByBird = async () => {
        if (searchSpecies == 0 || searchSpecies== null) {
        return
        }
     try {
        setShowSearchFailure(false);
        setShowSearchError(false);
        const response = await makeApiCall(`/birdSighting/id/${searchSpecies}`, 'GET')
        if(response.status == 200){
         if (response.data.length > 0) {
            setrawData(response.data);
            toGeoJson(response.data);
         } else {
           setShowSearchFailure(true);
         }
         
         
       } else{
         setShowSearchError(true)
       }
      } catch (error) {
        setShowSearchError(true)
      }
    }
    const postSearchByGroup = async () => {
        if (searchGroup == 0 || searchGroup== null) {
        return
    }
        setShowSearchFailure(false);
        setShowSearchError(false);
     try {
        const response = await makeApiCall(`/birdSighting/group/${searchGroup}`, 'GET')
       if(response.status == 200){
         if (response.data.length > 0) {
            setrawData(response.data);
            toGeoJson(response.data);
         }
         else {
           setShowSearchFailure(true);
         }
         
       } else{
         setShowSearchError(true)
       }
      } catch (error) {
        setShowSearchError(true)
      }
    }
  

    const handleReportChange = (event) => {
        setReportBird(event.target.value);
    }
    const handleSpeciesSearchChange = (event) => {
        setSearchSpecies(event.target.value);
    }

    const handleGroupSearchChange = (event) => {
        setSearchGroup(event.target.value);
    }
  
    const filter = (start, end ) => {
      const features = rawData;
    
      features.slice().reverse().forEach(function(element, index, object) {
        const date = element.date;
        if (!(date >= start && date <= end)) {
          features.splice(object.length - 1 - index, 1);
        }
      });
      toGeoJson(features);
    }
    const handleTooltip = () => {
        // handle tooltip logic
    };
    const handleButtonClick = () => {
      setShowModal(!showModal);
    };
    const handleCloseModal = () => {
      setShowModal(false);
    };

   const { user, isAuthenticated, isLoading } = useAuth0();

  
  return(
  <main className='main-content' id="main-content">
    <nav className="mb-4">
      <div className="nav nav-pills nav-fill rounded-2 px-2 py-1 bg-white shadow" role="tablist">
        <a className="nav-link active" data-bs-toggle="tab" href="#tab3-home" role="tab" aria-selected="true">Report</a>
        <a className="nav-link" data-bs-toggle="tab" href="#tab3-profile" role="tab" aria-selected="false">Search</a>
        <a className="nav-link" data-bs-toggle="tab" href="#tab3-contact" role="tab" aria-selected="false">Filter</a>
      </div>
    </nav>
    <div className="tab-content">
      <div className="tab-pane fade show active" id="tab3-home" role="tabpanel">
        {/* <ReportForm /> */}
        <div className="d-flex align-items-center mb-4">
          <h6 className="mb-0 me-3 me-md-4">
            Report a Sighting{' '}
            <strong
              className="text-decoration-underline text-primary"
              data-bs-toggle="tooltip"
              data-bs-placement="bottom"
              title="Logging a bird adds a waypoint to the map so that birdwatchers can help each other find interesting birds."
              onMouseOver={handleTooltip}
              onMouseOut={handleTooltip}
            >
              ?
            </strong>
          </h6>
          <div className="border-bottom flex-grow-1"></div>
        </div>
        <div className="row mt-4">
          <div className="col">
            <select
              className="form-control bird-select-basic-single"
              type="select"
              id="birdName"
              autoComplete="on"
              aria-label="select"
              onChange={handleReportChange}
            >
              <option value="0">Select</option>
               {speciesList && speciesList.map((data) => (
                <option key={data.birdID} value={data.birdID}>
                  {data.englishName}
                </option>
              ))}
            </select>
            <div>{showSuccess && <div className="alert alert-sucess" role="alert">You've successfully logged a bird.</div>}{showFailure && <div className="alert alert-danger" role="alert">Something went wrong, try again later and contact us if the error persits.</div>}</div>
          </div>
          <div className="col">
            <button id="submitBird" onClick={postBirdSighting} className="btn btn-primary">
              Submit
            </button>
          </div>
          <div className="row mt-4">
              <div className="col">
                <button type="button" className="btn btn-primary" onClick={handleButtonClick}>
                    Is the bird you saw not listed?
                </button>
              </div>
          <div className="col"></div>
        </div>
        <hr className="my-7" />
      {showModal ? <ReportBird showModal={showModal} handleCloseModal={handleCloseModal}  /> : null}
        </div>
      </div>
      <div className="tab-pane fade" id="tab3-profile" role="tabpanel">
          <div>
      <div className="d-flex align-items-center mb-4">
        <h6 className="mb-0 me-3 me-md-4">Species</h6>
        <div className="border-bottom flex-grow-1"></div>
      </div>
      <div className="row">
        <div className="col">
          <select 
            className="form-control dropdown-basic-single" 
            type="select" 
            id="speciesSearch" 
            autoComplete="on"  
            onChange={handleSpeciesSearchChange}
          >
            <option value="0"> Select</option>
             {speciesList && speciesList.map((data) => (
              <option key={data.birdID} value={data.birdID} >
                {data.englishName}
              </option>
            ))}
          </select>
        </div>
        <div className="col">
          <button type="submit" id="search-submitBird" className="btn btn-primary" onClick={postSearchByBird}> Submit</button>
        </div>
      </div>
      <hr className="my-7" />
      <div className="d-flex align-items-center mb-4">
        <h6 className="mb-0 me-3 me-md-4">Search By Group</h6>
        <div className="border-bottom flex-grow-1"></div>
      </div>
      <div className="row">
        <div className="col">
          <select className="form-control search-select-basic-single" type="select" id="functionalGroup"  onChange={handleGroupSearchChange} >
            <option value="0"> Select</option>
            {groupList && groupList.map((data) => (
              <option key={data.id} value={data.id}>
                {data.name}
              </option>
            ))}
          </select>
        </div>
        <div className="col">
          <button type="submit" id="search-submitBird-1" className="btn btn-primary" onClick={postSearchByGroup}> Submit</button>
        </div>
          {showSearchError && <div className="alert alert-danger" role="alert">
          There was a problem completing your search. Try again later and contact us if the error persists.
      </div>}
          {showSearchFailure && 
          <div className="alert alert-warning" role="alert">
          Your search did not return any results.
      </div>}
      </div>
      <hr className="my-7" />
      <a onClick={clearResults}>clear results</a>
    </div> 
      </div>
      <div className="tab-pane fade container-fluid" id="tab3-contact" role="tabpanel">
        {/* <MapFilter /> */}
        <div className='row' id='slidecontainer'>
      <div className='justify-content-center align-items-center' id='radiocontainer'>
        <div className='form-check form-check-inline'>
          <input
            className='form-check-input sev_check'
            type='radio'
            name='radioGroup'
            id='inlineCheckbox1'
            value='1'
            checked={selectedValue === '1'}
            onChange={handleCheckboxChange}
          />
          <label className='form-check-label sev_check' htmlFor='inlineCheckbox1'>
            Week
          </label>
        </div>
        <div className='form-check form-check-inline'>
          <input
            className='form-check-input sev_check'
            type='radio'
            name='radioGroup'
            id='inlineCheckbox2'
            value='2'
            checked={selectedValue === '2'}
            onChange={handleCheckboxChange}
          />
          <label className='form-check-label' htmlFor='inlineCheckbox2'>
            Month
          </label>
        </div>
        <div className='form-check form-check-inline'>
          <input
            className='form-check-input sev_check'
            type='radio'
            name='radioGroup'
            id='inlineCheckbox3'
            value='3'
            checked={selectedValue === '3'}
            onChange={handleCheckboxChange}
          />
          <label className='form-check-label' htmlFor='inlineCheckbox3'>
            Season
          </label>
        </div>
        <div className='form-check form-check-inline'>
          <input
            className='form-check-input sev_check'
            type='radio'
            name='radioGroup'
            id='inlineCheckbox4'
            value='4'
            checked={selectedValue === '4'}
            onChange={handleCheckboxChange}
          />
          <label className='form-check-label' htmlFor='inlineCheckbox4'>
            Year
          </label>
        </div>
        <div className='form-check form-check-inline'>
          <input
            className='form-check-input sev_check'
            type='radio'
            name='radioGroup'
            id='inlineCheckbox5'
            value='5'
            checked={selectedValue === '5'}
            onChange={handleCheckboxChange}
          />
          <label className='form-check-label' htmlFor='inlineCheckbox5'>
            All Time
          </label>
        </div>
      </div>
      <a onClick={clearResults}>clear results</a>
    </div>
      </div>
    </div>
     {showLocError && <div className="alert alert-danger" role="alert">
          Unable to locate your location. Please allow location access and try again.
      </div>}
    <GoogleMap geoJson={geoJson} />
  </main>
    )
  

}