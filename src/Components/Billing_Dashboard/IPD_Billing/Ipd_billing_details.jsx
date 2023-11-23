import React from 'react'
import Bill_Slider from '../Billing_Slider/Bill_Slider'

const Ipd_billing_details = () => {
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
                      <div class="dropdown-divider"></div>
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
            <div class="container-xxl flex-grow-1 container-p-y">
              <div class="card">
			   <h5 class="card-header">IPD Billing Details</h5>
				<div class="table-responsive text-nowrap">
                  <table class="table table-striped">
                    <thead>
                      <tr>
						<th>No.</th>
						<th>Bill No</th>
                        <th>Bill Date</th>
                        <th>Amount</th>
                        <th>Dis.</th>
                        <th>Net Amount</th>
						<th>*</th>
                      </tr>
                    </thead>
                    <tbody class="table-border-bottom-0">
                      <tr>
						<td>1</td>
						<td>OP/1/23</td>
                        <td>28/10/2023</td>
                        <td>500</td>
                        <td>25</td>
						<td>475</td>
                        <td>
                          <button type="submit" class="btn btn-primary me-2">+</button>
                        </td>
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

export default Ipd_billing_details
