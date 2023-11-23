import React, { useEffect, useState } from 'react'

const SearchTab = () => {

    const [products, setProducts] = useState([]);
    useEffect(() => {
        getProducts();
    }, []);
    // const getProducts = async () => {
    //     let result = await fetch('http://localhost:5000/products',{
    //         headers:{
    //             authorization:JSON.parse(localStorage.getItem('token'))
    //         }
    //     });
    //     result = await result.json();
    //     setProducts(result);
    // }
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
        <div>
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
        </div>
    )
}

export default SearchTab
