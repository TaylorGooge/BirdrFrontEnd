import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function SearchForm() {
  let [speciesList, setSpeciesList] = useState(null);
  let [groupList, setGroupList] = useState(null);
  useEffect(() => {
  const fetchData = async () => {
    try {
      const speciesResponse = await axios.get('https://birdr.taylorgooge.repl.co/birdCodes');
      setSpeciesList(speciesResponse.data);
      const groupResponse = await axios.get('https://birdr.taylorgooge.repl.co/birdCategories');
      setGroupList(groupResponse.data);
    } catch (error) {
      console.log(error);
    }
  };
  fetchData();
}, []);
  const clearResults = () => {
    // clear results logic
  };
  return (
    <div>
      <div className="d-flex align-items-center mb-4">
        <h6 className="mb-0 me-3 me-md-4">Species</h6>
        <div className="border-bottom flex-grow-1"></div>
      </div>
      <div className="row">
        <div className="col">
          <select className="form-control dropdown-basic-single" type="select" id="speciesSearch" autoComplete="on" >
            <option value="0"> Select</option>
             {speciesList && speciesList.map((data) => (
              <option key={data.birdID} value={data.birdID}>
                {data.englishName}
              </option>
            ))}
          </select>
        </div>
        <div className="col">
          <button type="submit" id="search-submitBird" className="btn btn-primary"> Submit</button>
        </div>
      </div>
      <hr className="my-7" />
      <div className="d-flex align-items-center mb-4">
        <h6 className="mb-0 me-3 me-md-4">Search By Group</h6>
        <div className="border-bottom flex-grow-1"></div>
      </div>
      <div className="row">
        <div className="col">
          <select className="form-control search-select-basic-single" type="select" id="functionalGroup" >
            <option value="0"> Select</option>
            {groupList && groupList.map((data) => (
              <option key={data.id} value={data.id}>
                {data.name}
              </option>
            ))}
          </select>
        </div>
        <div className="col">
          <button type="submit" id="search-submitBird-1" className="btn btn-primary"> Submit</button>
        </div>
      </div>
      <hr className="my-7" />
      <a onClick={clearResults}>clear results</a>
    </div>
  );
}