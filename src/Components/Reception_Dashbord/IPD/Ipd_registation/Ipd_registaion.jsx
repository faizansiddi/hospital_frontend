import React from 'react'
import Slider from '../../../Slider/Slider'
import Navbar from '../../Navbar'

const Ipd_registaion = () => {
  return (
    <div>
    <div className="layout-wrapper layout-content-navbar">
      <div className="layout-container">
        {/* <!-- Menu --> */}

        {/* <aside id="layout-menu" className="layout-menu menu-vertical menu bg-menu-theme">
          <div className="menu-inner-shadow"></div>

          <ul className="menu-inner py-1">
        
            <li className="menu-item active open">
              <a href="javascript:void(0);" className="menu-link">
                <i className="menu-icon tf-icons bx bx-home-circle"></i>
                <div data-i18n="Dashboards">Dashboards</div>
              </a>
            </li>
            <li className="menu-item">
              <a href="javascript:void(0);" className="menu-link menu-toggle">
                <i className="menu-icon tf-icons bx bx-dock-top"></i>
                <div data-i18n="Account Settings">Transaction</div>
              </a>
              <ul className="menu-sub">
                <li className="menu-item">
				  <a href="javascript:void(0);" className="menu-link menu-toggle">
					<i className="menu-icon tf-icons bx bx-dock-top"></i>
					<div data-i18n="Account Settings">OPD</div>
				  </a>
				  <ul className="menu-sub">
					<li className="menu-item">
					  <a href="opd-registration.html" className="menu-link">
						<div data-i18n="Account">Registration</div>
					  </a>
					</li>
					<li className="menu-item">
					  <a href="opd-details.html" className="menu-link">
						<div data-i18n="Notifications">Details</div>
					  </a>
					</li>
				  </ul>
				</li>
				<li className="menu-item">
				  <a href="javascript:void(0);" className="menu-link menu-toggle">
					<i className="menu-icon tf-icons bx bx-dock-top"></i>
					<div data-i18n="Account Settings">IPD</div>
				  </a>
				  <ul className="menu-sub">
					<li className="menu-item">
					  <a href="ipd-registration.html" className="menu-link">
						<div data-i18n="Account">Registration</div>
					  </a>
					</li>
					<li className="menu-item">
					  <a href="ipd-details.html" className="menu-link">
						<div data-i18n="Notifications">Details</div>
					  </a>
					</li>
				  </ul>
				</li>
				<li className="menu-item">
				  <a href="reception-enquiry.html" className="menu-link">
                    <div data-i18n="Account">Reception Enquiry</div>
                  </a>
				</li>
              </ul>
            </li>
			<li className="menu-item">
              <a href="javascript:void(0);" className="menu-link menu-toggle">
                <i className="menu-icon tf-icons bx bx-dock-top"></i>
                <div data-i18n="Account Settings">Report</div>
              </a>
              <ul className="menu-sub">
                <li className="menu-item">
                  <a href="daily-collection.html" className="menu-link">
                    <div data-i18n="Account">Daily Collection</div>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </aside> */}
        <Slider/>
        {/* <!-- / Menu --> */}

        {/* <!-- Layout container --> */}
        <div className="layout-page">
          {/* <!-- Navbar --> */}

       
          <Navbar/>
          {/* <!-- / Navbar --> */}
		  {/* <!-- Content wrapper --> */}
          <div className="content-wrapper">
            <div className="container-xxl flex-grow-1 container-p-y">
              <div className="card">
			   <h5 className="card-header">Patient Details</h5>
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
                          <button type="submit" className="btn btn-primary me-2">Admission</button>
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

export default Ipd_registaion
