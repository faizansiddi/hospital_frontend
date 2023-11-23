import React from 'react'
import Slider from '../../Slider/Slider'
import Navbar from '../Navbar'

const Daily_collection = () => {
  return (
    <div>
     <div className="layout-wrapper layout-content-navbar">
      <div className="layout-container">
        {/* <!-- Menu --> */}
<Slider/>
      

        {/* <!-- Layout container -->  */}
        <div className="layout-page">
          {/* <!-- Navbar --> */}

        
          <Navbar/>
          {/* <!-- / Navbar -->
		  <!-- Content wrapper --> */}
          <div className="content-wrapper">
            {/* <!-- Content --> */}

            <div className="container-xxl flex-grow-1 container-p-y">

              <div className="row">
                <div className="col-md-12">
				  {/* <!-- Address Details  --> */}
				  <div className="card mb-4">
                    <hr className="my-0" />
					<h5 className="card-header">Collection Summary</h5>
                    <div className="card-body">
                        <div className="row">
                          <div className="mb-3 col-md-2">
                            <label for="fromDate" className="form-label">From Date</label>
                            <input className="form-control" type="date" name="fromDate" id="fromDate" value="" />
                          </div>
						  <div className="mb-3 col-md-2">
                            <label for="toDate" className="form-label">To Date</label>
                            <input className="form-control" type="date" name="toDate" id="toDate" value="" />
                          </div>
						  <div className="mb-3 col-md-3">
                            <label for="user" className="form-label">User</label>
                            <select id="user" className="select2 form-select">
                              <option value="1">Admin</option>
							  <option value="2">Deepak</option>
							  <option value="3">Rahul</option>
                            </select>
                          </div>
						  <div className="mb-3 col-md-3">
                            <label for="user" className="form-label">Reprot Type</label>
                            <select id="user" className="select2 form-select">
                              <option value="1">Collection Summary</option>
							  <option value="2">Bill Wise Collection</option>
							  <option value="3">User Wise Collection</option>
                            </select>
                          </div>
                        </div>
						<div className="mt-4">
						    <button type="submit" className="btn btn-primary me-2">PDF</button>
							<button type="submit" className="btn btn-primary me-2">Excel</button>
						</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
           <div className="content-backdrop fade"></div>
          </div>
          
          
        </div>
        {/* <!-- / Layout page --> */}
      </div>

      {/* <!-- Overlay --> */}
      <div className="layout-overlay layout-menu-toggle"></div>
    </div>
    </div>
  )
}

export default Daily_collection
