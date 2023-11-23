import React from 'react'
import Bill_Slider from '../Billing_Slider/Bill_Slider'

const Billing_report = () => {
    return (
        <div>
            <div className="layout-wrapper layout-content-navbar">
                <div className="layout-container">
                    {/* <!-- Menu --> */}
                    <Bill_Slider />

                    {/* <!-- / Menu --> */}

                    {/* <!-- Layout container --> */}
                    <div className="layout-page">
                        {/* <!-- Navbar --> */}

                        <nav
                            className="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme"
                            id="layout-navbar">
                            <div className="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none">
                                <a className="nav-item nav-link px-0 me-xl-4" href="javascript:void(0)">
                                    <i className="bx bx-menu bx-sm"></i>
                                </a>
                            </div>

                            <div className="navbar-nav-right d-flex align-items-center" id="navbar-collapse">
                                {/* <!-- Search --> */}
                                <div className="navbar-nav align-items-center">
                                    <div className="nav-item d-flex align-items-center">
                                        <i className="bx bx-search fs-4 lh-0"></i>
                                        <input
                                            type="text"
                                            className="form-control border-0 shadow-none ps-1 ps-sm-2"
                                            placeholder="Search..."
                                            aria-label="Search..." />
                                    </div>
                                </div>
                                {/* <!-- /Search --> */}

                                <ul className="navbar-nav flex-row align-items-center ms-auto">


                                    {/* <!-- User --> */}
                                    {/* <li className="nav-item navbar-dropdown dropdown-user dropdown">
                                        <a className="nav-link dropdown-toggle hide-arrow" href="javascript:void(0);" data-bs-toggle="dropdown">
                                            <div className="avatar avatar-online">
                                                <img src="../assets/img/avatars/1.png" alt className="w-px-40 h-auto rounded-circle" />
                                            </div>
                                        </a>
                                        <ul className="dropdown-menu dropdown-menu-end">
                                            <li>
                                                <a className="dropdown-item" href="#">
                                                    <div className="d-flex">
                                                        <div className="flex-shrink-0 me-3">
                                                            <div className="avatar avatar-online">
                                                                <img src="../assets/img/avatars/1.png" alt className="w-px-40 h-auto rounded-circle" />
                                                            </div>
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <span className="fw-medium d-block">John Doe</span>
                                                            <small className="text-muted">Admin</small>
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <div className="dropdown-divider"></div>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="javascript:void(0);">
                                                    <i className="bx bx-power-off me-2"></i>
                                                    <span className="align-middle">Log Out</span>
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

export default Billing_report
