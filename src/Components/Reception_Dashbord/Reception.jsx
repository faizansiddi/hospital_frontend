import React from 'react'
import "../Reception_Dashbord/Reception.css"
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar'
import { Link } from 'react-router-dom'
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import HomeIcon from '@mui/icons-material/Home';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import Slider from '../Slider/Slider';
import Navbar from './Navbar';
const Reception = () => {
  return (
    <>

      <div className="layout_wrapper layout_content_navbar">
        <div className="layout-container">
          <Slider/>
          {/* <Sidebar  >
            <Menu className='huu' >
           
              <MenuItem    >
                <HomeIcon className='dashbord_icon' />  DashBoard </MenuItem>
              <SubMenu icon={<CreditCardIcon className='dashbord_icon' />} label="Transaction" >
                <SubMenu icon={<CreditCardIcon className='dashbord_icon' />} label="OPD">
                  <MenuItem className='' component={<Link to="/opt_registation" />}> Registation </MenuItem>
                  <MenuItem className='' component={<Link to="/opd_details" />}>Details </MenuItem>
                  </SubMenu>

                <SubMenu icon={<CreditCardIcon className='dashbord_icon' />} label="IPD">
                  <MenuItem>
                    <HomeIcon className='dashbord_icon' component={<Link to="/opd_details" />} /> Registation </MenuItem>
                  <MenuItem> Details </MenuItem>
                </SubMenu>
                <MenuItem> Reception Enquire </MenuItem>
              </SubMenu>
              <SubMenu icon={<CreditCardIcon className='dashbord_icon' />} label="Report">

                <MenuItem> Daily Collection </MenuItem>
              </SubMenu>

            </Menu>
          </Sidebar> */}
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
                <a className="menu-link menu-toggle">
                  <i className="menu-icon tf-icons bx bx-dock-top"></i>
                  <div data-i18n="Account Settings" >Transaction</div>
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
          <div className="layout-page">


            {/* <nav
              className="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme"
              id="layout-navbar">
              <div className="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none">
                <a className="nav-item nav-link px-0 me-xl-4" href="javascript:void(0)">
                  <i className="bx bx-menu bx-sm"></i>
                </a>
              </div>

              <div className="navbar-nav-right d-flex align-items-center" id="navbar-collapse">

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


                <ul className="navbar-nav flex-row align-items-center ms-auto">



               
                

                </ul>
              </div>
            </nav> */}

<Navbar/>
            <div className="content-wrapper">


              <div className="container-xxl flex-grow-1 container-p-y">

                <div className="row">

                  <div className="col-md-6 col-lg-4 col-xl-4 order-0 mb-4">
                    <div className="card h-100">
                      <div className="card-header d-flex align-items-center justify-content-between pb-0">
                        <div className="card-title mb-0">
                          <h5 className="m-0 me-2">Today Patients</h5>
                        </div>
                      </div>
                      <div className="card-body">
                        <div className="d-flex justify-content-between align-items-center mb-3">
                          <div className="d-flex flex-column align-items-center gap-1">
                            <h2 className="mb-2">8,258</h2>
                            <span>Total</span>
                          </div>
                          <div id="orderStatisticsChart"></div>
                        </div>
                        <ul className="p-0 m-0">
                          <li className="d-flex mb-4 pb-1">
                            <div className="avatar flex-shrink-0 me-3">
                              <span className="avatar-initial rounded bg-label-primary"
                              ><i className="bx bx-mobile-alt"></i
                              ></span>
                            </div>
                            <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                              <div className="me-2">
                                <h6 className="mb-0">New OPD</h6>
                                <small className="text-muted">Mobile, Earbuds, TV</small>
                              </div>
                              <div className="user-progress">
                                <small className="fw-medium">82.5k</small>
                              </div>
                            </div>
                          </li>
                          <li className="d-flex mb-4 pb-1">
                            <div className="avatar flex-shrink-0 me-3">
                              <span className="avatar-initial rounded bg-label-success"><i className="bx bx-closet"></i></span>
                            </div>
                            <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                              <div className="me-2">
                                <h6 className="mb-0">Old OPD</h6>
                                <small className="text-muted">T-shirt, Jeans, Shoes</small>
                              </div>
                              <div className="user-progress">
                                <small className="fw-medium">23.8k</small>
                              </div>
                            </div>
                          </li>
                          <li className="d-flex mb-4 pb-1">
                            <div className="avatar flex-shrink-0 me-3">
                              <span className="avatar-initial rounded bg-label-info"><i className="bx bx-home-alt"></i></span>
                            </div>
                            <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                              <div className="me-2">
                                <h6 className="mb-0">IPD</h6>
                                <small className="text-muted">Fine Art, Dining</small>
                              </div>
                              <div className="user-progress">
                                <small className="fw-medium">849k</small>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6 col-lg-4 order-1 mb-4">
                    <div className="card h-100">
                      <div className="card-header">
                      </div>
                      <div className="card-body px-0">
                        <div className="tab-content p-0">
                          <div className="tab-pane fade show active" id="navs-tabs-line-card-income" role="tabpanel">
                            <div className="d-flex p-4 pt-3">
                              <div className="avatar flex-shrink-0 me-3">
                                <img src="../assets/img/icons/unicons/wallet.png" alt="User" />
                              </div>
                              <div>
                                <small className="text-muted d-block">Total Balance</small>
                                <div className="d-flex align-items-center">
                                  <h6 className="mb-0 me-1">459.10</h6>
                                  <small className="text-success fw-medium">
                                    <i className="bx bx-chevron-up"></i>
                                    42.9%
                                  </small>
                                </div>
                              </div>
                            </div>
                            <div id="incomeChart"></div>
                            <div className="d-flex justify-content-center pt-4 gap-2">
                              <div className="flex-shrink-0">
                                <div id="expensesOfWeek"></div>
                              </div>
                              <div>
                                <p className="mb-n1 mt-1">Income Today</p>
                                <small className="text-muted">3900</small>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6 col-lg-4 order-2 mb-4">
                    <div className="card h-100">
                      <div className="card-header d-flex align-items-center justify-content-between">
                        <h5 className="card-title m-0 me-2">Transactions</h5>
                      </div>
                      <div className="card-body">
                        <ul className="p-0 m-0">
                          <li className="d-flex mb-4 pb-1">
                            <div className="avatar flex-shrink-0 me-3">
                              <img src="../assets/img/icons/unicons/paypal.png" alt="User" className="rounded" />
                            </div>
                            <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                              <div className="me-2">
                                <small className="text-muted d-block mb-1">Cash</small>
                                <h6 className="mb-0">Income</h6>
                              </div>
                              <div className="user-progress d-flex align-items-center gap-1">
                                <h6 className="mb-0">82.6</h6>
                              </div>
                            </div>
                          </li>
                          <li className="d-flex mb-4 pb-1">
                            <div className="avatar flex-shrink-0 me-3">
                              <img src="../assets/img/icons/unicons/wallet.png" alt="User" className="rounded" />
                            </div>
                            <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                              <div className="me-2">
                                <small className="text-muted d-block mb-1">Credit</small>
                                <h6 className="mb-0">Income</h6>
                              </div>
                              <div className="user-progress d-flex align-items-center gap-1">
                                <h6 className="mb-0">270.69</h6>
                              </div>
                            </div>
                          </li>
                          <li className="d-flex mb-4 pb-1">
                            <div className="avatar flex-shrink-0 me-3">
                              <img src="../assets/img/icons/unicons/chart.png" alt="User" className="rounded" />
                            </div>
                            <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                              <div className="me-2">
                                <small className="text-muted d-block mb-1">UPI</small>
                                <h6 className="mb-0">Income</h6>
                              </div>
                              <div className="user-progress d-flex align-items-center gap-1">
                                <h6 className="mb-0">637.91</h6>
                              </div>
                            </div>
                          </li>
                          <li className="d-flex mb-4 pb-1">
                            <div className="avatar flex-shrink-0 me-3">
                              <img src="../assets/img/icons/unicons/cc-success.png" alt="User" className="rounded" />
                            </div>
                            <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                              <div className="me-2">
                                <small className="text-muted d-block mb-1">Credit Card</small>
                                <h6 className="mb-0">Income</h6>
                              </div>
                              <div className="user-progress d-flex align-items-center gap-1">
                                <h6 className="mb-0">838.71</h6>
                              </div>
                            </div>
                          </li>
                          <li className="d-flex mb-4 pb-1">
                            <div className="avatar flex-shrink-0 me-3">
                              <img src="../assets/img/icons/unicons/wallet.png" alt="User" className="rounded" />
                            </div>
                            <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                              <div className="me-2">
                                <small className="text-muted d-block mb-1">Debit Card</small>
                                <h6 className="mb-0">Income</h6>
                              </div>
                              <div className="user-progress d-flex align-items-center gap-1">
                                <h6 className="mb-0">203.33</h6>
                              </div>
                            </div>
                          </li>
                          <li className="d-flex">
                            <div className="avatar flex-shrink-0 me-3">
                              <img src="../assets/img/icons/unicons/cc-warning.png" alt="User" className="rounded" />
                            </div>
                            <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                              <div className="me-2">
                                <small className="text-muted d-block mb-1">Cash</small>
                                <h6 className="mb-0">Refund</h6>
                              </div>
                              <div className="user-progress d-flex align-items-center gap-1">
                                <h6 className="mb-0">92.45</h6>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                </div>
              </div>




              <div className="content-backdrop fade">

              </div>
            </div>

          </div>

        </div>


        {/* <div className="layout-overlay layout-menu-toggle">

        </div> */}
      </div>
    </>
  )
}

export default Reception
