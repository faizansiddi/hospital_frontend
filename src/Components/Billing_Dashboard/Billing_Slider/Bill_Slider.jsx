import React from 'react'
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar'
import { Link } from 'react-router-dom'
import "../Billing_Slider/Bill_Skider.css"
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import HomeIcon from '@mui/icons-material/Home';
import CreditCardIcon from '@mui/icons-material/CreditCard';
const Bill_Slider = () => {
  return (
    <div>
      <Sidebar className='slider_css' >
                <Menu className='huu' >
                    {/* <AccessAlarmIcon className='dashbord_icon' />   */}
                    <MenuItem component={<Link to="/billing-dashboard" />}   >
                        <HomeIcon  className='dashbord_icon' />  DashBoard </MenuItem>
                    <SubMenu icon={<CreditCardIcon className='dashbord_icon' />} label="Transaction" >
                        <SubMenu icon={<CreditCardIcon className='dashbord_icon' />} label="OPD">
                            <MenuItem className='' component={<Link to="/opd_billing" />}> OPD Billing  </MenuItem>
                            <MenuItem className='' component={<Link to="/opd_billing_details" />}>OPD Details </MenuItem>
                        </SubMenu>

                        <SubMenu icon={<CreditCardIcon className='dashbord_icon' />} label="IPD">
                        <MenuItem className='' component={<Link to="/Ipd_billing" />}> IPD Billing  </MenuItem>
                        <MenuItem className='' component={<Link to="/Ipd_billing_detail" />}>IPD  Details </MenuItem>
                        </SubMenu>
                        {/* <MenuItem component={<Link to="/billing-reception-enquiry" />} > Reception Enquire </MenuItem> */}
                    </SubMenu>
                    <SubMenu icon={<CreditCardIcon className='dashbord_icon' />} label="Report">

                        <MenuItem component={<Link to="/billing-daily-collection" />} > Daily Collection </MenuItem>
                    </SubMenu>

                </Menu>
            </Sidebar>
    </div>
  )
}

export default Bill_Slider
