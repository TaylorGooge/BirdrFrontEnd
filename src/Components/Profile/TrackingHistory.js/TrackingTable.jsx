import React, {useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBan } from '@fortawesome/free-solid-svg-icons'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { makeApiCall } from '../../../../api';

const TrackingTable = ({ data }) => {
  const [showDeleteError, setShowDeleteError] = useState(false);
  const [showUpdateError, setShowUpdateError] = useState(false);
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US');
  };
  const handleUpdate = () =>{
  
  }
  const handleDelete = async (id) =>{
    const response = await makeApiCall(`/birdSighting/${id}`, "DELETE");
    if (response.status == 200) {
      setShowDeleteError(false);
      const updatedData = data.filter((item) => item.id !== id);
      setLoggedBird(updatedData);
    }
    else{
      setShowDeleteError(true);
    }
  }
  return (
    <table className="table table-striped table-responsive" id="profile-table">
      {showDeleteError && <div className="alert alert-danger">
        <strong>Error:</strong> Unable to delete tracking history.
      </div>}
      <thead>
        <tr>
          <th>id</th>
          <th>English Name</th>
          <th>Scientific Name</th>
          <th>Date</th>
          {/* <th>Update</th> */}
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.englishName}</td>
            <td>{item.scientificName}</td>
            <td>{formatDate(item.date)}</td>
            {/* <td>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => handleUpdate(item.id)}
                >
                  <FontAwesomeIcon icon={faPenToSquare} /> Update
                </button>
            </td> */}
            <td>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => handleDelete(item.id)}
                >
                  <FontAwesomeIcon icon={faBan} /> Delete
                </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default TrackingTable;