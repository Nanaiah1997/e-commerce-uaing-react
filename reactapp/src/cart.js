import React, { useState, useEffect } from 'react';
import Header from './header';
import Footer from "./footer";
const Cart = () => {

    let[cartlist, updateCart] = useState([]);
    const getCartItem = () =>{
        fetch("http://localhost:1234/cart")
        .then(response=>response.json())
        .then(cartArray =>{
            if(cartArray.length >0){
                updateCart(cartArray.reverse());
            }
        })
    }

    useEffect(()=>{
        getCartItem();
    },[true]);

    let[message, updateMessage] = useState("");
    const deleteItem = (id, name) =>{
        var url = "http://localhost:1234/cart/"+id;
        var postOption = {
            method:'DELETE',
            headers:{'Content-Type':'application/json'}
        }
        fetch(url, postOption)
        .then(response=>response.json())
        .then(responseData=>{
            updateMessage(name + " Deleted From Your Cart !");
            getCartItem();// call back to reload the list
        })
    }

    let[fullname, pickName] = useState("");
    let[mobileno, pickMobile] = useState("");
    let[emailid, pickEmail] = useState("");
    let[address, pickAddress] = useState("");
   
    const placeOrder = () =>{
        var orderData = {
            "customername":fullname,
            "mobile":mobileno,
            "email":emailid,
            "address":address,
            "itemlist":cartlist  // cart list is array of all item that in cart
        };
        var url = "http://localhost:1234/order";
        var postOption = {
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(orderData)
        }
        fetch(url, postOption)
        .then(response=>response.json())
        .then(responseData=>{
            updateMessage("Hi, "+ fullname + " Your Order Received Successfully !");
        })
    }


    return (
        <>
            <Header />
            <div className='container mt-5 height600'>
                <div className='row'>
                    <div className='col-lg-12'>
                        <h1 className='text-center'> {cartlist.length} in My Cart </h1>
                        <p className='text-center text-danger'> {message} </p>
                    </div>
                </div>
                <div className='row mt-3'>
                    <div className='col-lg-4'>
                        <div className='card'>
                            <div className='card-header bg-danger text-white'>
                                Enter Customer Details
                            </div>
                            <div className='card-body'>
                                <div className='mb-3'>
                                    <label>Full Name</label>
                                    <input type="text" className='form-control' 
                                    onChange={obj=>pickName(obj.target.value)}/>
                                </div>
                                <div className='mb-3'>
                                    <label>Mobile No</label>
                                    <input type="number" className='form-control' 
                                    onChange={obj=>pickMobile(obj.target.value)}/>
                                </div>
                                <div className='mb-3'>
                                    <label>e-Mail Id</label>
                                    <input type="email" className='form-control' 
                                    onChange={obj=>pickEmail(obj.target.value)}/>
                                </div>
                                <div className='mb-3'>
                                    <label>Delivery Address</label>
                                    <textarea className='form-control'
                                    onChange={obj=>pickAddress(obj.target.value)}></textarea>
                                </div>
                            </div>
                            <div className='card-footer text-center'>
                                <button className='btn btn-primary btn-lg'
                                onClick={placeOrder}>Place Order</button>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-8'>
                        <table className='table table-striped shadow'>
                            <thead>
                                <tr className='bg-light text-primary'>
                                    <th>Sl No</th>
                                    <th>Item Name</th>
                                    <th>Price</th>
                                    <th>Photo</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    cartlist.map((item, index)=>{
                                        return(
                                            <tr key={index}>
                                                <td> {item.id} </td>
                                                <td> {item.name} </td>
                                                <td> {item.price} </td>
                                                <td> <img src={item.photo} height="60" width="80"/> </td>
                                                <td>
                                                    <button className='btn btn-danger btn-sm'
                                                    onClick={deleteItem.bind(this,item.id, item.name)}>
                                                        <i className='fa fa-trash'></i>
                                                    </button>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
export default Cart;