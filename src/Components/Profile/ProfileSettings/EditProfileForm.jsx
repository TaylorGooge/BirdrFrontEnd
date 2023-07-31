import React, {useState} from "react";
import { useAuth0 } from "@auth0/auth0-react";
import axios from 'axios';
const EditProfileForm = (props) => {
  const { user, isAuthenticated, isLoading } = useAuth0();
   const [firstName, setFirstName] = useState(user.given_name);
  const [lastName, setLastName] = useState(user.family_name);
  const saveChanges = async () => {
    console.log(user.sub)
    const url = `https://redacted/api/v2/${user.sub}`;
    const headers = {
      authorization: 'Bearer redacted',
      'cache-control': 'no-cache',
      'content-type': 'application/json',
    };
     const data = {
      given_name: firstName,
      family_name: lastName,
    };
    await axios.put(url, data, { headers: headers }).then((response) => {
      console.log(response);
      // handle response here
    });
  }
  const handleChangeLastName = (event) => {
    if (event.target.value.length === 0) {
      setLastName(user.family_name);
      
    } else{
      setLastName(event.target.value);
    }
  }
    const handleChangeFirstName = (event) => {
      if (event.target.value.length === 0) {
        setFirstName(user.given_name);
        
      } else{
        setFirstName(event.target.value);
      };
    
  }
  return (
    <form autoComplete="false">
      <div className="row align-items-center">
        <div className="col-md-12">
          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label" htmlFor="profile_name">
                First Name
              </label>
              <input
                className="form-control"
                id="profile_name"
                type="text"
                value={firstName}
                onChange={handleChangeFirstName}
              />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label" htmlFor="profile_email">
                Last Name
              </label>
              <input
                className="form-control"
                id="profile_name_last"
                type="text"
                value={lastName}
                onChange={handleChangeLastName}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="text-end">
        <button
          type="button"
          className="btn btn-primary"
          id="profileSaveBtn"
          onClick={saveChanges}
        >
          Save changes
        </button>
      </div>
    </form>
  );
};
export default EditProfileForm;