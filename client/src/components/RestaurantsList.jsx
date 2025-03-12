import React from 'react';

function RestaurantsList() {
  return (
    <div className='list-group'>
      <table className='table table-hover table-dark'>
      <thead>
  <tr>
    <th scope="col" style={{ backgroundColor: "#00008B", color: "white" }}>Name</th>
    <th scope="col" style={{ backgroundColor: "#00008B", color: "white" }}>Location</th>
    <th scope="col" style={{ backgroundColor: "#00008B", color: "white" }}>Price Range</th>
    <th scope="col" style={{ backgroundColor: "#00008B", color: "white" }}>Rating</th>
    <th scope="col" style={{ backgroundColor: "#00008B", color: "white" }}>Edit</th>
    <th scope="col" style={{ backgroundColor: "#00008B", color: "white" }}>Delete</th>
  </tr>
</thead>

        <tbody>
          <tr>
            <td>McDonald's</td>
            <td>New York</td>
            <td>$$</td>
            <td>Ratings</td>
            <td>
              <button className='btn btn-warning'>Update</button>
            </td>
            <td>
              <button className='btn btn-danger'>Delete</button>
            </td>
          </tr>
          <tr>
            <td>McDonald's</td>
            <td>New York</td>
            <td>$$</td>
            <td>Ratings</td>
            <td>
              <button className='btn btn-warning'>Update</button>
            </td>
            <td>
              <button className='btn btn-danger'>Delete</button>
            </td>
          </tr>
          <tr>
            <td>McDonald's</td>
            <td>New York</td>
            <td>$$</td>
            <td>Ratings</td>
            <td>
              <button className='btn btn-warning'>Update</button>
            </td>
            <td>
              <button className='btn btn-danger'>Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default RestaurantsList;
