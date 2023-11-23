import React from 'react'
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar'
import { Link } from 'react-router-dom'
import "../Slider/Slidder.css"
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import HomeIcon from '@mui/icons-material/Home';
import CreditCardIcon from '@mui/icons-material/CreditCard';
const Slider = () => {
    return (
        <div>
            <Sidebar className='slider_css' >
                <Menu className='huu' >
                    {/* <AccessAlarmIcon className='dashbord_icon' />   */}
                    <MenuItem component={<Link to="/reception-dashboard" />}   >
                        <HomeIcon  className='dashbord_icon' />  DashBoard </MenuItem>
                    <SubMenu icon={<CreditCardIcon className='dashbord_icon' />} label="Transaction" >
                        <SubMenu icon={<CreditCardIcon className='dashbord_icon' />} label="OPD">
                            <MenuItem className='' component={<Link to="/opt_registation" />}> Registation </MenuItem>
                            <MenuItem className='' component={<Link to="/opd_details" />}>Details </MenuItem>
                        </SubMenu>

                        <SubMenu icon={<CreditCardIcon className='dashbord_icon' />} label="IPD">
                        <MenuItem className='' component={<Link to="/Ipd_registation" />}> Registation </MenuItem>
                        <MenuItem className='' component={<Link to="/Ipd_details" />}> Details </MenuItem>
                        </SubMenu>
                        <MenuItem component={<Link to="/reception-enquiry" />} > Reception Enquire </MenuItem>
                    </SubMenu>
                    <SubMenu icon={<CreditCardIcon className='dashbord_icon' />} label="Report">

                        <MenuItem component={<Link to="/daily-collection" />} > Daily Collection </MenuItem>
                    </SubMenu>

                </Menu>
            </Sidebar>
        </div>
    )
}

export default Slider
