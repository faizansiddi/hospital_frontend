import React from 'react'
import Slider from '../../Slider/Slider'
import Navbar from '../Navbar'

const Recption_enquire = () => {
  return (
    <div>
       <div class="layout-wrapper layout-content-navbar">
      <div class="layout-container">
       {/* <!-- Menu --> */}
<Slider/>
       
        {/* <!-- / Menu --> */}

        {/* <!-- Layout container --> */}
        <div class="layout-page">
          {/* <!-- Navbar --> */}

       
          <Navbar/>
          {/* <!-- / Navbar --> */}
		  {/* <!-- Content wrapper --> */}
          <div class="content-wrapper">
            <div class="container-xxl flex-grow-1 container-p-y">
              <div class="card">
			   <h5 class="card-header">Reception Enquiry</h5>
				<div class="table-responsive text-nowrap">
                  <table class="table table-striped">
                    <thead>
                      <tr>
						<th>Uhid</th>
						<th>Name</th>
                        <th>Father</th>
                        <th>Mobile</th>
                        <th>Address</th>
                      </tr>
                    </thead>
                    <tbody class="table-border-bottom-0">
                      <tr>
						<td>
                          <i class="fab fa-angular fa-lg text-danger me-3"></i>
                          <span class="fw-medium">2104</span>
                        </td>
						<td>
                          <i class="fab fa-angular fa-lg text-danger me-3"></i>
                          <span class="fw-medium">Angular Project</span>
                        </td>
						
                        <td>Albert Cook</td>
                        <td>9874563215</td>
                        <td>Panipat</td>
                      </tr>
					 </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div class="content-backdrop fade"></div>
          </div>
          {/* <!-- Content wrapper --> */}
        </div>
        {/* <!-- / Layout page --> */}
      </div>

      {/* <!-- Overlay --> */}
      <div class="layout-overlay layout-menu-toggle"></div>
    </div>
    </div>
  )
}

export default Recption_enquire
