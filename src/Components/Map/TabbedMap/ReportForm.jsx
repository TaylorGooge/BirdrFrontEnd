import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReportBird from '../ReportBird';

export default function ReportForm() {
   let [speciesList, setSpeciesList] = useState(null);
    let [showModal, setShowModal] = useState(false);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const speciesResponse = await axios.get('https://birdr.taylorgooge.repl.co/birdCodes');
          setSpeciesList(speciesResponse.data);
        } catch (error) {
          console.log(error);
        }
      };
      fetchData();
    }, []);
  const handleTooltip = () => {
    // handle tooltip logic
  };
 const handleButtonClick = () => {
    setShowModal(!showModal);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <>
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
          >
            <option value="0">Select</option>
             {speciesList && speciesList.map((data) => (
              <option key={data.birdID} value={data.birdID}>
                {data.englishName}
              </option>
            ))}
          </select>
        </div>
        <div className="col">
          <button id="submitBird" className="btn btn-primary">
            Submit
          </button>
        </div>
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
    </>
  );
}