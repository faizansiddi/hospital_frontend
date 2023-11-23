import React, { useEffect, useState } from 'react'
import Slider from '../../../Slider/Slider'
import Navbar from '../../Navbar'
import { Link } from 'react-router-dom';
import { Menu, MenuItem, Sidebar } from 'react-pro-sidebar';


const Opd_details = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);
  const getProducts = async () => {
    let result = await fetch('http://localhost:5000/products', {
      headers: {
        authorization: JSON.parse(localStorage.getItem('token'))
      }
    });
    result = await result.json();
    setProducts(result);
  }
  const deleteProduct = async (id) => {
    console.warn(id)
    let result = await fetch(`http://localhost:5000/product/${id}`, {
      method: "Delete"
    });
    result = await result.json();
    if (result) {
      getProducts();
    }
  }
  const searchHandle = async (event)=>{
    let key = event.target.value;
    if(key){
        let result = await fetch(`http://localhost:5000/search/${key}`);
        result = await result.json()
        if(result){
            setProducts(result)
        }
    }else{
        getProducts();
    }

  }

  return (
    <div>
      <div className="layout-wrapper layout-content-navbar">
        <div className="layout-container">
          <Slider />
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
                      aria-label="Search..."
                       />
                  </div>
                </div>
                <ul className="navbar-nav flex-row align-items-center ms-auto">
              
                </ul>
              </div>
            </nav> */}
            <Navbar />
            <div className="content-wrapper">
              <div className="container-xxl flex-grow-1 container-p-y">
                <div className="card">
                  <h5 className="card-header">OPD Details</h5>
                  <div className="table-responsive text-nowrap">
                    <table className="table table-striped">
                      <thead>
                        <tr>
                          <th>Uh id</th>
                          <th>Name</th>
                          <th>Father</th>
                          <th>Mobile</th>
                          <th>Address</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody className="table-border-bottom-0">


                        {
                          products.length > 0 ? products.map((item, index) =>
                            <tr key={item._id}>
                              <td>{item.adhar}</td>
                              <td>{item.firstname}</td>
                              <td>{item.fatherName}</td>
                              <td>{item.mobile}</td>
                              <td>{item.address}</td>
                              <td>

                                <button onClick={() => deleteProduct(item._id)}>Delete</button>
                                <Link to={"/update/" + item._id} >Update </Link>
                              </td>

                            </tr>
                          )
                            : <h1>No Result Found</h1>
                        }
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <div className="content-backdrop fade"></div>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}

export default Opd_details
