import logo from './logo.svg';
import './App.css';
import Login from './Components/Login/Login';
import { Route, Routes } from 'react-router-dom';
import Home from "./Components/Home/Home"
import Registation from "./Components/Registation/Registation"
import Reception from './Components/Reception_Dashbord/Reception';
import Billing from './Components/Billing_Dashboard/Billing';
import Doctor from './Components/Doctor_Dashboard/Doctor';
import Opd_regisation from './Components/Reception_Dashbord/OPD/OPDREGISTATION/Opd_regisation';
import Opd_details from './Components/Reception_Dashbord/OPD/Opd_Details/Opd_details';
import Ipd_registaion from './Components/Reception_Dashbord/IPD/Ipd_registation/Ipd_registaion';
import Recption_enquire from './Components/Reception_Dashbord/Reception_Enquire/Recption_enquire';
import Ipd_details from './Components/Reception_Dashbord/IPD/Ipd_details/Ipd_details';
import Daily_collection from './Components/Reception_Dashbord/Report/Daily_collection';
import Opd_billing from './Components/Billing_Dashboard/OPD_Billing/Opd_billing';
import IPD_billing from './Components/Billing_Dashboard/IPD_Billing/IPD_billing';
import Ipd_billing_details from './Components/Billing_Dashboard/IPD_Billing/Ipd_billing_details';
import Opd_billing_Detail from './Components/Billing_Dashboard/OPD_Billing/Opd_billing_Detail';
// import Billing_report from './Components/Billing_Dashboard/Report_Billing/Billing_report';
import Opd_update_registation from "../src/Components/Reception_Dashbord/OPD/Opd_Details/Opd_update_registation";
function App() {
  return (
  
    <Routes>
      
{/* <Route path='/' element={<Login/>}/>
<Route path='/registaion' element={<Registation/>}/> */}
<Route path='/' element={<Home/>}/>
<Route path='/opt_registation' element={<Opd_regisation/>}/>
<Route path='/opd_details' element={<Opd_details/>}/>
<Route path='/reception-dashboard' element={<Reception/>}/>
<Route path='/billing-dashboard' element={<Billing/>}/>
<Route path='/doctor-dashboard' element={<Doctor/>}/>
<Route path='/Ipd_registation' element={<Ipd_registaion/>}/>
<Route path='/Ipd_details' element={<Ipd_details/>}/>
<Route path='/daily-collection' element={<Daily_collection/>}/>
<Route path='/reception-enquiry' element={<Recption_enquire/>}/>
<Route path="/update/:id" element={<Opd_update_registation/>}/>
{/* billing Routes */}

<Route path='/billing-dashboard' element={<Billing/>}/>
<Route path='/opd_billing' element={<Opd_billing/>}/>
<Route path='/opd_billing_details' element={<Opd_billing_Detail/>}/>
<Route path='/Ipd_billing' element={<IPD_billing/>}/>
{/* <Route path='/Ipd_billing_detail' element={<Ipd_billing_details/>}/> */}
{/* <Route path='/billing-daily-collection' element={<Billing_report/>}/> */}
    </Routes>
    
  );
}

export default App;
