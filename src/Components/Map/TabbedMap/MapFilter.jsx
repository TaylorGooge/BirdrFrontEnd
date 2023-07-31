import React, { useState } from 'react';
export default function MapFilter() {
  const [refinedResults, setRefinedResults] = useState('');
  const [searchVal, setSearchVal] = useState('');
  const [selectedValue, setSelectedValue] = useState('');

  const handleCheckboxChange = (event) => {
    setSelectedValue(event.target.value);
    showVal(event.target.value)
  };
  const showVal = (val) => {
    let funcMap = {
      '1': getDates,
      '2': getDates,
      '3': getSeason,
      '4': getDates,
      '5': 'todo'
    }
    let func = funcMap[val];
  };
  
  const clearRefinedResults = () => {
    setRefinedResults(null)
  }

  const getDate = () => {
    return new Date();
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
    clearRefinedResults();
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
    clearRefinedResults();
    const currDate = getDate();
    const seasonsMonths = getSeasonMonths(currDate);
    let seasonDateRange = getSeasonDateRange(currDate, seasonsMonths);
    if (seasonsMonths == 3) {
      seasonDateRange = winterSeasonHelper(currDate, seasonDateRange);
    }
    filter(seasonDateRange['start'].toISOString(), seasonDateRange['end'].toISOString());
    
    
  }
  const clearResults = () => {
    // handle clear results logic
  };

  const getFeatures = ()=>{
    return refinedResults.features;
  }

  const setFeatures = (feat) => {
    setRefinedResults(refinedResults.features = feat);
    //clear map
    //set map
  }

  const filter = (start, end ) => {
    const features = getFeatures();
    features.slice().reverse().forEach(function(element, index, object) {
      const date = element['properties'].date;
      if (!(date >= start && date <= end)) {
        features.splice(object.length - 1 - index, 1);
      }
  });
  setFeatures(features);
}
  return (
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
      {/* <a onClick={clearResults}>clear results</a> */}
    </div>
  );
}