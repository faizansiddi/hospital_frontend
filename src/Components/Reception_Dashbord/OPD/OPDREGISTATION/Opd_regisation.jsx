import React, { useState } from 'react'
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar'
import { Link, useNavigate } from 'react-router-dom'
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import HomeIcon from '@mui/icons-material/Home';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import Slider from '../../../Slider/Slider';
import Navbar from '../../Navbar';
import Dropdown from '../../Dropdown';
// import SearchTab from '../../SearchTab';
const Opd_regisation = () => {
    const navigate = useNavigate()
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [gender, setGender] = useState('')
    const [dob, setDob] = useState('');
    const [age, setAge] = useState('');
    const [month, setMonth] = useState('');
    const [days, setDays] = useState('');
    const [fatherName, setFatherName] = useState('');
    const [titlemr, setTitleMr] = useState('');
    const [address, setAddress] = useState('');
    const [mobile, setMobile] = useState('');
    const [adhar, setAdhar] = useState('');
    const [fees, setFees] = useState('');
    const [religion, setReligion] = useState('');
    const [bloodgroup, setBloodGroup] = useState('');
    const [verticals, setVerticals] = useState('');
    const [fathertitle, setFatherTitle] = useState('');
    const [refby, setRefBy] = useState('');
    const [sponser, setSponser] = useState('');
    const [country, setCountry] = useState('');
    const [countryState, setCountryState] = useState('');
    const [city, setCity] = useState('');
    const [feesdiscount, setFeesDiscount] = useState('');
    const [totals, setTotals] = useState('');
    const [error, setError] = useState(false);
    const [patientType, setPatientType] = useState('');
    const [consultant, setConsultant] = useState('');
    const [department, setDepartment] = useState('');
    const [specility, setSpecility] = useState('');
    const [receiptmode, setReceiptMode] = useState('');
    // const [department, setDepartment] = useState('');


    const opd_registation = async (e) => {
        // e.prevesntdefault('')
        if (!titlemr || !firstname || !lastname || !gender
            || !dob
            || !age || !month
            || !days || !religion || !bloodgroup || !fathertitle || !fatherName || !verticals || !refby || !sponser
            || !country || !countryState || !city || !address || !mobile || !adhar
            || !patientType || !consultant || !department || !specility || !fees || !feesdiscount || !totals || !receiptmode


        ) {
            setError(true);
            return false
        }

        const userId = JSON.parse(localStorage.getItem('user'))._id;
        let result = await fetch("http://localhost:5000/add-product", {
            method: "post",
            body: JSON.stringify({
                titlemr, firstname, lastname, gender,
                dob,
                age, month
                , days, religion, bloodgroup, fathertitle, fatherName, verticals, refby, sponser
                , country, countryState, city, address, mobile, adhar
                , patientType, consultant, department, specility, fees, feesdiscount, totals, receiptmode,
                userId
            }),
            headers: {
                "Content-type": "application/json"
            }
        });
        result = await result.json();
        navigate("/opd_details")
        console.log("reult", result);
        console.log(dob, age, month, days);
    }

    return (
        <>
            <div>
                <div>
                    <div className="layout-wrapper layout-content-navbar">
                        <div className="layout-container">
                            <Slider />

                            <div className="layout-page">
                                {/* <nav
                                    className="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme"  >
                                    <div className="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none">

                                    </div> */}

                                    {/* <div className="navbar-nav-right d-flex align-items-center" id="navbar-collapse"> */}

                                        {/* <div className="navbar-nav align-items-center">
                                            <div className="nav-item d-flex align-items-center">
                                                <i className="bx bx-search fs-4 lh-0"></i>
                                                <input
                                                    type="text"
                                                    className="form-control border-0 shadow-none ps-1 ps-sm-2"
                                                    placeholder="Search..."
                                                    aria-label="Search..." />
                                            </div>
                                        </div> */}


                                        {/* <ul className="navbar-nav flex-row align-items-center ms-auto"> */}
                                            <Navbar />
                                        {/* </ul> */}
                                    {/* </div> */}
                                {/* </nav> */}
                                <div className="content-wrapper">
                                    <div className="container-xxl flex-grow-1 container-p-y">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="card mb-4">
                                                    <h5 className="card-header">Personal Details</h5>
                                                    <div className="card-body">
                                                    </div>
                                                    <hr className="my-0" />
                                                    <div className="card-body">
                                                        <div >
                                                            <div className="row">
                                                                <div className="mb-3 col-md-2">
                                                                    <label for="title" className="form-label">Title</label>
                                                                    <input
                                                                        className="form-control"
                                                                        type="text"
                                                                        name="patientfirstName"
                                                                        value={titlemr} onChange={(e) => { setTitleMr(e.target.value) }}
                                                                        placeholder='First specific here..'
                                                                        autofocus />



                                                                </div>
                                                                <div className="mb-3 col-md-4">
                                                                    <label for="patientfirstName" className="form-label">First Name</label>
                                                                    <input
                                                                        className="form-control"
                                                                        type="text"
                                                                        name="patientfirstName"
                                                                        value={firstname} onChange={(e) => { setFirstName(e.target.value) }}
                                                                        placeholder='First name here..'
                                                                        autofocus />
                                                                    {error && !firstname && <span className='invalid-input'>Enter valid name</span>}
                                                                </div>
                                                                <div className="mb-3 col-md-4">
                                                                    <label for="patientlastName" className="form-label">Last Name</label>
                                                                    <input className="form-control" type="text" name="patientlastName"
                                                                        placeholder='Last name here..'

                                                                        value={lastname} onChange={(e) => { setLastName(e.target.value) }}
                                                                    />
                                                                </div>
                                                                <div className="mb-3 col-md-2">
                                                                    <label for="gender" className="form-label">Gender</label>

                                                                    <input
                                                                        className="form-control"
                                                                        type="text"
                                                                        name="patientfirstName"
                                                                        value={gender} onChange={(e) => { setGender(e.target.value) }}
                                                                        placeholder='Date Of Birth'
                                                                        autofocus />
                                                                </div>
                                                                <div className="mb-3 col-md-2">
                                                                    <label for="dob" className="form-label">Date of Birth</label>
                                                                    <input className="form-control" type="date" name="dob"

                                                                        value={dob} onChange={(e) => { setDob(e.target.value) }} />
                                                                </div>
                                                                <div className="mb-3 col-md-2">
                                                                    <label for="ageinYear" className="form-label">Age in Year</label>
                                                                    <input className="form-control" type="number" name="ageinYear"

                                                                        value={age} onChange={(e) => { setAge(e.target.value) }} />
                                                                </div>
                                                                <div className="mb-3 col-md-2">
                                                                    <label for="ageinMonth" className="form-label">Age in Month</label>
                                                                    <input className="form-control" type="number" name="ageinMonth"

                                                                        value={month} onChange={(e) => { setMonth(e.target.value) }} />
                                                                </div>
                                                                <div className="mb-3 col-md-2">
                                                                    <label for="ageinDay" className="form-label">Age in Days</label>
                                                                    <input className="form-control" type="number" name="ageinDay"

                                                                        value={days} onChange={(e) => { setDays(e.target.value) }} />
                                                                </div>
                                                                <div className="mb-3 col-md-2">
                                                                    <label for="religion" className="form-label">Religion</label>


                                                                    <input
                                                                        className="form-control"
                                                                        type="text"
                                                                        name="patientfirstName"
                                                                        value={religion} onChange={(e) => { setReligion(e.target.value) }}
                                                                        placeholder='First name here..'
                                                                        autofocus />
                                                                </div>
                                                                <div className="mb-3 col-md-2">
                                                                    <label for="bloodGroup" className="form-label">Blood Group</label>


                                                                    <input
                                                                        className="form-control"
                                                                        type="text"
                                                                        name="patientfirstName"
                                                                        value={bloodgroup} onChange={(e) => { setBloodGroup(e.target.value) }}
                                                                        placeholder='First name here..'
                                                                        autofocus />
                                                                </div>
                                                                <div className="mb-3 col-md-2">
                                                                    <label for="fatherTitle" className="form-label">Title</label>

                                                                    <input
                                                                        className="form-control"
                                                                        type="text"
                                                                        name="patientfirstName"
                                                                        value={fathertitle} onChange={(e) => { setFatherTitle(e.target.value) }}
                                                                        placeholder='First name here..'
                                                                        autofocus />
                                                                </div>
                                                                <div className="mb-3 col-md-4">
                                                                    <label for="fatherName" className="form-label">Father Name</label>
                                                                    <input
                                                                        className="form-control"
                                                                        type="text"

                                                                        name="fatherName"
                                                                        placeholder='father name '

                                                                        value={fatherName} onChange={(e) => { setFatherName(e.target.value) }}
                                                                        autofocus />
                                                                </div>
                                                                <div className="mb-3 col-md-2">
                                                                    <label for="verticals" className="form-label">Verticals</label>

                                                                    <input
                                                                        className="form-control"
                                                                        type="text"
                                                                        name="patientfirstName"
                                                                        value={verticals} onChange={(e) => { setVerticals(e.target.value) }}
                                                                        placeholder='First name here..'
                                                                        autofocus />
                                                                </div>
                                                                <div className="mb-3 col-md-2">
                                                                    <label for="refBy" className="form-label">Ref. By</label>

                                                                    <input
                                                                        className="form-control"
                                                                        type="text"
                                                                        name="patientfirstName"
                                                                        value={refby} onChange={(e) => { setRefBy(e.target.value) }}
                                                                        placeholder='First name here..'
                                                                        autofocus />
                                                                </div>
                                                                <div className="mb-3 col-md-2">
                                                                    <label for="sponsor" className="form-label">Sponsor</label>

                                                                    <input
                                                                        className="form-control"
                                                                        type="text"
                                                                        name="patientfirstName"
                                                                        value={sponser} onChange={(e) => { setSponser(e.target.value) }}
                                                                        placeholder='First name here..'
                                                                        autofocus />
                                                                </div>
                                                                <div className=" mb-4">
                                                                    <h5 className="card-header">Address Details</h5>
                                                                    <div className="card-body">
                                                                    </div>
                                                                    <hr className="my-0" />
                                                                    <div className="card-body">
                                                                        <div className="row">
                                                                            <div className="mb-3 col-md-2">
                                                                                <label for="country" className="form-label">Country</label>

                                                                                <input
                                                                                    className="form-control"
                                                                                    type="text"
                                                                                    name="patientfirstName"
                                                                                    value={country} onChange={(e) => { setCountry(e.target.value) }}
                                                                                    placeholder='First name here..'
                                                                                    autofocus />
                                                                            </div>
                                                                            <div className="mb-3 col-md-2">
                                                                                <label for="state" className="form-label">Statet</label>

                                                                                <input
                                                                                    className="form-control"
                                                                                    type="text"
                                                                                    name="patientfirstName"
                                                                                    value={countryState} onChange={(e) => { setCountryState(e.target.value) }}
                                                                                    placeholder='First name here..'
                                                                                    autofocus />
                                                                            </div>
                                                                            <div className="mb-3 col-md-2">
                                                                                <label for="city" className="form-label">City</label>

                                                                                <input
                                                                                    className="form-control"
                                                                                    type="text"
                                                                                    name="patientfirstName"
                                                                                    value={city} onChange={(e) => { setCity(e.target.value) }}
                                                                                    placeholder='First name here..'
                                                                                    autofocus />
                                                                            </div>
                                                                            <div className="mb-3 col-md-2">
                                                                                <label for="address" className="form-label">Address</label>
                                                                                <input className="form-control" type="text" name="address"

                                                                                    value={address} onChange={(e) => { setAddress(e.target.value) }}
                                                                                />
                                                                            </div>
                                                                            <div className="mb-3 col-md-2">
                                                                                <label for="mobile" className="form-label">Mobile No</label>
                                                                                <input className="form-control" type="Number" name="mobile"

                                                                                    value={mobile} onChange={(e) => { setMobile(e.target.value) }}
                                                                                />
                                                                            </div>
                                                                            <div className="mb-3 col-md-2">
                                                                                <label for="aadhar" className="form-label">Aadhar No</label>
                                                                                <input className="form-control" type="Number" name="aadhar"

                                                                                    value={adhar} onChange={(e) => { setAdhar(e.target.value) }}
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className=" mb-4">
                                                                    <h5 className="card-header">Doctor Details</h5>
                                                                    <div className="card-body">
                                                                    </div>
                                                                    <hr className="my-0" />
                                                                    <div className="card-body">
                                                                        <div className="row">
                                                                            <div className="mb-3 col-md-2">
                                                                                <label for="patientType" className="form-label">Patient Type</label>

                                                                                <input
                                                                                    className="form-control"
                                                                                    type="text"
                                                                                    name="patienttype"
                                                                                    value={patientType} onChange={(e) => { setPatientType(e.target.value) }}
                                                                                    placeholder='First name here..'
                                                                                    autofocus />
                                                                            </div>
                                                                            <div className="mb-3 col-md-3">
                                                                                <label for="consultant" className="form-label">Consultant</label>

                                                                                <input
                                                                                    className="form-control"
                                                                                    type="text"
                                                                                    name="patientfirstName"
                                                                                    value={consultant} onChange={(e) => { setConsultant(e.target.value) }}
                                                                                    placeholder='First name here..'
                                                                                    autofocus />
                                                                            </div>
                                                                            <div className="mb-3 col-md-3">
                                                                            <label for="consultant" className="form-label">DEPARTMENT</label>d
                                                                                <input
                                                                                    className="form-control"
                                                                                    type="text"
                                                                                    name="patientfirstName"
                                                                                    value={department} onChange={(e) => { setDepartment(e.target.value) }}
                                                                                    placeholder='First name here..'
                                                                                    autofocus />
                                                                            </div>
                                                                            <div className="mb-3 col-md-3">
                                                                                <label for="specility" className="form-label">SPECILITY <input
                                                                                    className="form-control"
                                                                                    type="text"
                                                                                    name="patientfirstName"
                                                                                    value={specility} onChange={(e) => { setSpecility(e.target.value) }}
                                                                                    placeholder='First name here..'
                                                                                    autofocus /></label>

                                                                            </div>
                                                                            <div className="mb-3 col-md-2">
                                                                                <label for="fees" className="form-label">Fees</label>
                                                                                <input className="form-control" type="number" name="fees" value={fees} onChange={(e) => { setFees(e.target.value) }} />
                                                                            </div>
                                                                            <div className="mb-3 col-md-2">
                                                                                <label for="discount" className="form-label">Discount</label>
                                                                                <input className="form-control" type="Number" name="discount" value={feesdiscount} onChange={(e) => { setFeesDiscount(e.target.value) }} />
                                                                            </div>
                                                                            <div className="mb-3 col-md-2">
                                                                                <label for="total" className="form-label">Total</label>
                                                                                <input className="form-control" type="Number" name="total" value={totals} onChange={(e) => { setTotals(e.target.value) }} />
                                                                            </div>
                                                                            <div className="mb-3 col-md-3">
                                                                                <label for="receiptMode" className="form-label">Receipt Mode</label>

                                                                                <input
                                                                                    className="form-control"
                                                                                    type="text"
                                                                                    name="patientfirstName"
                                                                                    value={receiptmode} onChange={(e) => { setReceiptMode(e.target.value) }}
                                                                                    placeholder='First name here..'
                                                                                    autofocus />
                                                                            </div>

                                                                        </div>
                                                                    </div>
                                                                </div>

                                                            </div>

                                                        </div>
                                                        <div className="mt-4">
                                                            <button className="btn btn-primary me-2" onClick={opd_registation}>OPD Registration</button>
                                                        </div>

                                                    </div>

                                                </div>




                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="content-backdrop fade"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Opd_regisation
