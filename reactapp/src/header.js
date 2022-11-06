import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
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
                            <Link className="nav-link active" to="/"> <i className='fa fa-home'></i> Home </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/cart"> <i className='fa fa-shopping-cart'></i> My Cart </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/login"> <i className='fa fa-lock'></i> Login </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Header;