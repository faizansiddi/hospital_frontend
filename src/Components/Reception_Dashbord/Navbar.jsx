import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [products, setProducts] = useState([]);
  const auth = localStorage.getItem('user');
  const navigate = useNavigate();
  const logout = () => {

    localStorage.clear();
    navigate('/')
  }
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
  const searchHandle = async (event) => {
    let key = event.target.value;
    if (key) {
      let result = await fetch(`http://localhost:5000/search/${key}`);
      result = await result.json()
      if (result) {
        setProducts(result)
      }
    } else {
      getProducts();
    }

  }
  return (
    <>
      <nav
        className="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme"

      >
        <div className="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none">

        </div>

        <div className="navbar-nav-right d-flex align-items-center" id="navbar-collapse">

          <div className="navbar-nav align-items-center">
            <div className="nav-item d-flex align-items-center">
              <i className="bx bx-search fs-4 lh-0"></i>
              <input
                type="text"
                className="form-control border-0 shadow-none ps-1 ps-sm-2"
                placeholder="Search..."
                aria-label="Search..." onChange={searchHandle} />
            </div>
          </div>


          <ul className="navbar-nav flex-row align-items-center ms-auto">
            <li className="nav-item navbar-dropdown dropdown-user dropdown">
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
                        <span className="fw-medium d-block">  ({JSON.parse(auth).name})</span>

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
                    <span onClick={logout} className="align-middle">Log Out </span>
                  </a>
                </li>
              </ul>
            </li>

          </ul>
        </div>
      </nav>



    </>
  )
}

export default Navbar
