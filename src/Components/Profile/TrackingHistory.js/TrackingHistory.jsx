import React, {useState, useEffect} from "react";
import { useAuth0 } from "@auth0/auth0-react";
import ProfileBreadcrumb from "../ProfileBreadcrumb";
import ProfileMenu from "../ProfileMenu";
import { makeApiCall } from '../../../../api';
import TrackingTable from "./TrackingTable";
const TrackingHistory = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [loggedBird, setLoggedBird] = useState(null);
  const [showFetchError, setShowFetchError]= useState(false);
  const getBirdSightingById = async (id) => {
    try {
      const response =  await makeApiCall(`/birdSighting/user/${user.sub}`, "GET");
      if (response.status == 200) {
        setShowFetchError(false);
        setLoggedBird(response.data);
      }
      else {
        setShowFetchError(true);
      }
    } catch (error) {
      setShowFetchError(true);
    }
  };
  useEffect(() => {
    getBirdSightingById();
  }, []);
  return (
    isAuthenticated && (
      <main className="main-content" id="main-content">
        <section className="position-relative bg-white border-bottom">
        <div className="container position-relative py-9">
            <div className="row">
                <div className="col-md-6 mx-auto">
                    <ProfileBreadcrumb active={'profile'}/>
                </div>
            </div>

        </div>
    </section>
        <section className="position-relative">
          <div className="container position-relative">
            <div className="">
              <div className="position-relative pt-9 pb-9 pb-lg-11">
                <div className="row">
                  <div className="col-lg-3 mb-5 mb-lg-0">
                    <div className="mt-lg-n14 position-relative z-index-1">
                      <div className="card shadow p-3">
                        <div>
                          <div className="width-15x height-15x mb-5 rounded-circle shadow bg-no-repeat overflow-hidden bg-contain" style={{backgroundImage: `url(${user.picture}), url(https://birdr-app.s3.amazonaws.com/public/profileFallback.png)`}}></div>
                          <h4 className="mb-2">{user.name}</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-9">
                    <div className="d-flex flex-column">
                      <ProfileMenu active={'tracking'} />
                      <div className="h-100">
                        <h5 className="mb-4">Tracking History</h5>
                        {showFetchError && <div className="alert alert-danger">
                          <strong>Error:</strong> Unable to fetch tracking history.
                        </div>}
                        {loggedBird && <TrackingTable data={loggedBird} />}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    )
  );
};
export default TrackingHistory;