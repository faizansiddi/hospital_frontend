import React from 'react'
import Slider from '../../../Slider/Slider'
import { useNavigate } from 'react-router-dom';
import Navbar from '../../Navbar';

const Ipd_details = () => {
  // const auth = localStorage.getItem('user');
  // const navigate = useNavigate();
  // const logout = () => {
  //     localStorage.clear();
  //     navigate('/')
  // }
  return (
    <div>
      <div className="layout-wrapper layout-content-navbar">
        <div className="layout-container">
          {/* <!-- Menu --> */}
          <Slider />


          {/* <!-- Layout container --> */}
          <div className="layout-page">
            <Navbar />

            {/* <!-- Content wrapper --> */}
            <div className="content-wrapper">
              <div className="container-xxl flex-grow-1 container-p-y">
                <div className="card">
                  <h5 className="card-header">IPD Details</h5>
                  <div className="table-responsive text-nowrap">
                    <table className="table table-striped">
                      <thead>
                        <tr>
                          <th>Uhid</th>
                          <th>Name</th>
                          <th>Father</th>
                          <th>Mobile</th>
                          <th>Address</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody className="table-border-bottom-0">
                        <tr>
                          <td>
                            <i className="fab fa-angular fa-lg text-danger me-3"></i>
                            <span className="fw-medium">2104</span>
                          </td>
                          <td>
                            <i className="fab fa-angular fa-lg text-danger me-3"></i>
                            <span className="fw-medium">Angular Project</span>
                          </td>

                          <td>Albert Cook</td>
                          <td>9874563215</td>
                          <td>Panipat</td>
                          <td>
                            <button type="submit" className="btn btn-primary me-2">Edit</button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <div className="content-backdrop fade"></div>
            </div>
            {/* <!-- Content wrapper --> */}
          </div>
          {/* <!-- / Layout page --> */}
        </div>

        {/* <!-- Overlay --> */}
        <div className="layout-overlay layout-menu-toggle"></div>
      </div>
    </div>
  )
}

export default Ipd_details
