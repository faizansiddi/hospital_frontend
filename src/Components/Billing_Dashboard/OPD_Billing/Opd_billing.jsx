import React from 'react'
import Bill_Slider from '../Billing_Slider/Bill_Slider'

const Opd_billing = () => {
  return (
    <div>
      <div class="layout-wrapper layout-content-navbar">
      <div class="layout-container">
        {/* <!-- Menu --> */}
<Bill_Slider/>
        {/* <aside id="layout-menu" class="layout-menu menu-vertical menu bg-menu-theme">
          <div class="menu-inner-shadow"></div>

          <ul class="menu-inner py-1">
           
            <li class="menu-item active open">
              <a href="javascript:void(0);" class="menu-link">
                <i class="menu-icon tf-icons bx bx-home-circle"></i>
                <div data-i18n="Dashboards">Dashboards</div>
              </a>
            </li>
            <li class="menu-item">
              <a href="javascript:void(0);" class="menu-link menu-toggle">
                <i class="menu-icon tf-icons bx bx-dock-top"></i>
                <div data-i18n="Account Settings">Transaction</div>
              </a>
              <ul class="menu-sub">
                <li class="menu-item">
				  <a href="javascript:void(0);" class="menu-link menu-toggle">
					<i class="menu-icon tf-icons bx bx-dock-top"></i>
					<div data-i18n="Account Settings">OPD</div>
				  </a>
				  <ul class="menu-sub">
					<li class="menu-item">
					  <a href="opd-billing.html" class="menu-link">
						<div data-i18n="Account">OPD Billing</div>
					  </a>
					</li>
					<li class="menu-item">
					  <a href="opd-billing-details.html" class="menu-link">
						<div data-i18n="Notifications">OPD Details</div>
					  </a>
					</li>
				  </ul>
				</li>
				<li class="menu-item">
				  <a href="javascript:void(0);" class="menu-link menu-toggle">
					<i class="menu-icon tf-icons bx bx-dock-top"></i>
					<div data-i18n="Account Settings">IPD</div>
				  </a>
				  <ul class="menu-sub">
					<li class="menu-item">
					  <a href="ipd-billing.html" class="menu-link">
						<div data-i18n="Account">IPD Billing</div>
					  </a>
					</li>
					<li class="menu-item">
					  <a href="ipd-billing-details.html" class="menu-link">
						<div data-i18n="Notifications">IPD Details</div>
					  </a>
					</li>
				  </ul>
				</li>
              </ul>
            </li>
			<li class="menu-item">
              <a href="javascript:void(0);" class="menu-link menu-toggle">
                <i class="menu-icon tf-icons bx bx-dock-top"></i>
                <div data-i18n="Account Settings">Report</div>
              </a>
              <ul class="menu-sub">
                <li class="menu-item">
                  <a href="daily-collection.html" class="menu-link">
                    <div data-i18n="Account">Daily Collection</div>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </aside> */}
        {/* <!-- / Menu --> */}

        {/* <!-- Layout container --> */}
        <div class="layout-page">
          {/* <!-- Navbar --> */}

          <nav
            class="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme"
            id="layout-navbar">
            <div class="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none">
              <a class="nav-item nav-link px-0 me-xl-4" href="javascript:void(0)">
                <i class="bx bx-menu bx-sm"></i>
              </a>
            </div>

            <div class="navbar-nav-right d-flex align-items-center" id="navbar-collapse">
              {/* <!-- Search --> */}
              <div class="navbar-nav align-items-center">
                <div class="nav-item d-flex align-items-center">
                  <i class="bx bx-search fs-4 lh-0"></i>
                  <input
                    type="text"
                    class="form-control border-0 shadow-none ps-1 ps-sm-2"
                    placeholder="Search..."
                    aria-label="Search..." />
                </div>
              </div>
              {/* <!-- /Search --> */}

              <ul class="navbar-nav flex-row align-items-center ms-auto">
                

                {/* <!-- User --> */}
                {/* <li class="nav-item navbar-dropdown dropdown-user dropdown">
                  <a class="nav-link dropdown-toggle hide-arrow" href="javascript:void(0);" data-bs-toggle="dropdown">
                    <div class="avatar avatar-online">
                      <img src="../assets/img/avatars/1.png" alt class="w-px-40 h-auto rounded-circle" />
                    </div>
                  </a>
                  <ul class="dropdown-menu dropdown-menu-end">
                    <li>
                      <a class="dropdown-item" href="#">
                        <div class="d-flex">
                          <div class="flex-shrink-0 me-3">
                            <div class="avatar avatar-online">
                              <img src="../assets/img/avatars/1.png" alt class="w-px-40 h-auto rounded-circle" />
                            </div>
                          </div>
                          <div class="flex-grow-1">
                            <span class="fw-medium d-block">John Doe</span>
                            <small class="text-muted">Admin</small>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="javascript:void(0);">
                        <i class="bx bx-power-off me-2"></i>
                        <span class="align-middle">Log Out</span>
                      </a>
                    </li>
                  </ul>
                </li> */}
                {/* <!--/ User --> */}
              </ul>
            </div>
          </nav>

          {/* <!-- / Navbar --> */}

          {/* <!-- Content wrapper --> */}
          <div class="content-wrapper">
            {/* <!-- Content --> */}

            <div class="container-xxl flex-grow-1 container-p-y">

              <div class="row">
                <div class="col-md-12">
                  {/* <!-- patient Profile --> */}
                  <div class="card mb-4">
                    <h5 class="card-header">Patient Details</h5>
                    <div class="card-body">
                    </div>
                    <hr class="my-0" />
                    <div class="card-body">
                      <form id="formAccountSettings" method="POST" onsubmit="return false">
                        <div class="row">
						  <div class="mb-3 col-md-2">
                            <label for="uhidno" class="form-label">UhidNo</label>
                            <input class="form-control" type="text" name="uhidno" id="uhidno" value="12345" disabled/>
                          </div>
                          <div class="mb-3 col-md-4">
                            <label for="patientfastName" class="form-label">First Name</label>
                            <input class="form-control" type="text" name="patientfastName" id="patientfastName" value="Doe" />
                          </div>
						  <div class="mb-3 col-md-2">
                            <label for="verticals" class="form-label">Verticals</label>
                            <select id="verticals" class="select2 form-select">
                              <option value="1">General</option>
                              <option value="2">Staff</option>
                              <option value="3">Camp</option>
                            </select>
                          </div>
						  <div class="mb-3 col-md-2">
                            <label for="refBy" class="form-label">Ref. By</label>
                            <select id="refBy" class="select2 form-select">
                              <option value="1">Self</option>
                            </select>
                          </div>
						  <div class="mb-3 col-md-2">
                            <label for="sponsor" class="form-label">Sponsor</label>
                            <select id="sponsor" class="select2 form-select">
                              <option value="">Select</option>
                              <option value="1">General</option>
                              <option value="2">Star Health</option>
                              <option value="3">Niva Bupa</option>
                              <option value="4">Other</option>
                            </select>
                          </div>
						  <div class="mb-3 col-md-3">
                            <label for="consultant" class="form-label">Consultant</label>
                            <select id="consultant" class="select2 form-select">
                              <option value="1">Dr. Deepak Singh</option>
							  <option value="2">Dr. Ram Kumar</option>
                            </select>
                          </div>
						  <div class="mb-3 col-md-3">
                            <label for="department" class="form-label">Department</label>
                            <select id="department" class="select2 form-select">
                              <option value="1">General Medicine</option>
							  <option value="2">Ortho</option>
                            </select>
                          </div>
                        </div>
                        </form>
                    </div>
                  </div>
				  {/* <!-- Address Details  --> */}
				  <div class="card mb-4">
                    <h5 class="card-header">Billing Details</h5>
                    <div class="card-body">
                    </div>
                    <hr class="my-0" />
                    <div class="card-body">
                        <div class="row">
						  <div class="mb-3 col-md-1">
                            <label for="type" class="form-label">Type</label>
                            <input class="form-control" type="text" name="type" id="type" value="L" disabled/>
                          </div>
                          <div class="mb-3 col-md-2">
                            <label for="doctor" class="form-label">Doctor</label>
                            <input class="form-control" type="text" name="doctor" id="doctor" value="Doctor" disabled/>
                          </div>
						  <div class="mb-3 col-md-3">
                            <label for="serviceName" class="form-label">Service Name</label>
                            <input class="form-control" type="text" name="serviceName" id="serviceName" value="Service Name" />
                          </div>
						  <div class="mb-3 col-md-1">
                            <label for="qty" class="form-label">Qty</label>
                            <input class="form-control" type="text" name="qty" id="qty" value="" />
                          </div>
						  <div class="mb-3 col-md-1">
                            <label for="rate" class="form-label">Rate</label>
                            <input class="form-control" type="text" name="rate" id="rate" value="" disabled/>
                          </div>
						  <div class="mb-3 col-md-1">
                            <label for="amount" class="form-label">Amount</label>
                            <input class="form-control" type="text" name="amount" id="amount" value="" disabled/>
                          </div>
						  <div class="mb-3 col-md-1">
                            <label for="disamt" class="form-label">Dis.</label>
                            <input class="form-control" type="text" name="disamt" id="disamt" value="" />
                          </div>
						  <div class="mb-3 col-md-1">
                            <label for="netamt" class="form-label">Total</label>
                            <input class="form-control" type="text" name="netamt" id="netamt" value="" disabled/>
                          </div>
						  <div class="mb-3 col-md-1">
						  <label for="netamt" class="form-label">*</label>
                            <button type="submit" class="btn btn-primary me-2">+</button>
                          </div>
                        </div>
                    </div>
                  </div>
                 {/* <!-- Doctor Details  --> */}
				  <div class="card mb-4">
                    <h5 class="card-header">Payment Details</h5>
                    <div class="card-body">
                    </div>
                    <hr class="my-0" />
                    <form class="card-body">
                        <div class="row">
                          <div class="mb-3 col-md-2">
                            <label for="totalQty" class="form-label">Total Qty</label>
                            <input class="form-control" type="number" name="totalQty" id="totalQty" value="" disabled/>
                          </div>
						  <div class="mb-3 col-md-2">
                            <label for="totalAmount" class="form-label">Total Amount</label>
                            <input class="form-control" type="Number" name="totalAmount" id="totalAmount" value="" disabled/>
                          </div>
						  <div class="mb-3 col-md-2">
                            <label for="totalDiscount" class="form-label">Total Discount</label>
                            <input class="form-control" type="Number" name="totalDiscount" id="totalDiscount" value="" />
                          </div>
						  <div class="mb-3 col-md-2">
                            <label for="netAmount" class="form-label">Net Amount</label>
                            <input class="form-control" type="Number" name="netAmount" id="netAmount" value="" disabled/>
                          </div>
						  <div class="mb-3 col-md-2">
                            <label for="cashReceipt" class="form-label">Cash Receipt</label>
                            <input class="form-control" type="Number" name="cashReceipt" id="cashReceipt" value="" />
                          </div>
						  <div class="mb-3 col-md-2">
                            <label for="bankReceipt" class="form-label">Bank Receipt</label>
                            <input class="form-control" type="Number" name="bankReceipt" id="bankReceipt" value="" />
                          </div>
						  <div class="mb-3 col-md-2">
                            <label for="balanceAmount" class="form-label">Balance Amt</label>
                            <input class="form-control" type="Number" name="balanceAmount" id="balanceAmount" value="" disabled/>
                          </div>
						  <div class="mt-4">
                            <button type="submit" class="btn btn-primary me-2">OPD Billing</button>
                          </div>
                        </div>
                      </form>
                    </div>
                    {/* <!-- /Account --> */}
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- / Content --> */}

            
            <div class="content-backdrop fade"></div>
          </div>
          {/* <!-- Content wrapper --> */}
        </div>
        {/* <!-- / Layout page --> */}
      </div>
    </div>
  )
}

export default Opd_billing
