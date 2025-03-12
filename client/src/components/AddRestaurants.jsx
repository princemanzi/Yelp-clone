import React from "react";

const AddRestaurants = () => {
  return (
    <div className="container d-flex justify-content-center">
      <form className="w-100">
        <div className="row g-2 align-items-center">
          <div className="col-md-4">
            <input type="text" className="form-control" placeholder="Name" />
          </div>
          <div className="col-md-4">
            <input type="text" className="form-control" placeholder="Location" />
          </div>
          <div className="col-auto">
            <select className="form-select">
              <option disabled selected>Price range</option>
              <option value="1">$</option>
              <option value="2">$$</option>
              <option value="3">$$$</option>
              <option value="4">$$$$</option>
              <option value="5">$$$$$</option>
            </select>
          </div>
          <div className="col-auto">
            <button className="btn btn-primary">Add</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddRestaurants;
