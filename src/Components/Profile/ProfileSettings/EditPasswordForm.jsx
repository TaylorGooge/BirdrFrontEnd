import React from "react";
const EditPasswordForm = (props) => {
  const saveChanges = (event) => {
    //todo
  }
  return (
    <form>
      <div className="row">
        <div className="col-md-4 mb-3">
          <label htmlFor="update_pass_current" className="form-label">
            Current password
          </label>
          <input
            id="update_pass_current"
            type="password"
            className="form-control"
          />
        </div>
        <div className="col-md-4 mb-3">
          <label htmlFor="update_pass_new" className="form-label">
            New password
          </label>
          <input
            type="password"
            className="form-control"
            id="update_pass_new"
          />
        </div>
        <div className="col-md-4 mb-3">
          <label htmlFor="update_pass_new_confirm" className="form-label">
            Confirm new password
          </label>
          <input
            type="password"
            className="form-control"
            id="update_pass_new_confirm"
          />
        </div>
      </div>
      <small className="help-text text-muted">
        Password must be at least 8 characters and contain symbols
      </small>
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
export default EditPasswordForm;