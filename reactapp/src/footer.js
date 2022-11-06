import React from 'react';
import { Link } from 'react-router-dom';
const Footer = () =>{
    return(
        <footer className='bg-primary text-white p-5 text-center mt-5'>
            <div className="container p-5">
                <div className='row'>
                    <div className='col-lg-4'>
                        <h5> About Us </h5>
                        <p>
                            sdf sdf sdf sdf sdfsdf sdf sdf sdfsdf sdf sdf sdfsd
                            sdf sdf sdf sdf sdfsdf sdf sdf sdfsdf sdf sdf sdfsd
                            sdf sdf sdf sdf sdfsdf sdf sdf sdfsdf sdf sdf sdfsd
                            sdf sdf sdf sdf sdfsdf sdf sdf sdfsdf sdf sdf sdfsd
                        </p>
                    </div>
                    <div className='col-lg-4'>
                        <h5> Quick Links </h5>
                        <p> <Link to="/" className="text-white">Shopping</Link></p>
                        <p> <Link to="/cart" className="text-white">My Cart</Link></p>
                        <p> <Link to="/login" className="text-white">Admin Login</Link></p>
                    </div>
                    <div className='col-lg-4'>
                        <h5> in Social Media </h5>
                        <p>
                            <i className='fa fa-facebook fa-2x m-2'></i>
                            <i className='fa fa-twitter fa-2x m-2'></i>
                            <i className='fa fa-linkedin fa-2x m-2'></i>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;