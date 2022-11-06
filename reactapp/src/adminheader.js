import React from 'react';
import { Link } from 'react-router-dom';
const AdminHeader = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-3">
            <div className="container-fluid">
                <a className="navbar-brand" href="#"><i className='fa fa-shopping-bag fa-lg'></i> Shopping @ Home</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="mynavbar">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link active" to="/order"> 
                            <i className='fa fa-suitcase'></i> My Order </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/myproduct"> 
                            <i className='fa fa-shopping-cart'></i> Manage Products </Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="javaScript:void(0)" onClick={logOut}> 
                            Welcome Admin - <i className='fa fa-power-off text-danger'></i> Logout </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default AdminHeader;


const logOut = () => {
    localStorage.clear();// it will remove all contents from localstorage
    window.location.href= "http://localhost:3000/#/login"; // redirecting to login page
    window.location.reload();// after going to login page it reload the page
}