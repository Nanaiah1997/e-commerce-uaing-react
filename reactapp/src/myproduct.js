import React, { useState, useEffect } from "react";
import AdminHeader from "./adminheader";

const Myproduct = () => {
    let [productlist, updateProduct] = useState([]);
    const getProduct = () => {
        fetch("http://localhost:1234/product")
            .then(response => response.json())
            .then(productArray => {
                if (productArray.length > 0) {
                    updateProduct(productArray);
                }
            })
    }

    useEffect(() => {
        getProduct();
    }, [1]);

    let[pname,pickName] = useState("");
    let[pprice,pickPrice] = useState("");
    let[pdetails,pickDetails] = useState("");
    let[pphoto,pickPhoto] = useState(""); 

    const save = () =>{
        var pdata = {
            "name":pname, 
            "price":pprice, 
            "photo":pphoto, 
            "details": pdetails
        };

        var url = "http://localhost:1234/product";
        var postOption = {
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(pdata)
        }
        fetch(url, postOption)
        .then(response=>response.json())
        .then(responseData=>{
            getProduct();
            pickName("");
            pickPrice("");
            pickDetails("");
            pickPhoto("");
        })
    }

    let[message, updateMessage] = useState("");
    const deleteItem = (id, name) =>{
        var url = "http://localhost:1234/product/"+id;
        var postOption = {
            method:'DELETE',
            headers:{'Content-Type':'application/json'}
        }
        fetch(url, postOption)
        .then(response=>response.json())
        .then(responseData=>{
            updateMessage(name + " Deleted From Your Cart !");
            getProduct();// call back to reload the list
        })
    }
    return (
        <>
            <AdminHeader />
            <div className="container mt-5">
                <div className="row">
                    <div className="col-lg-3">
                        <h3 className="text-center"> New Product </h3>
                        
                        <div className="mb-3">
                            <label>Product Name</label>
                            <input 
                            type="text" className="form-control"
                            onChange={obj=>pickName(obj.target.value)}
                            value={pname}
                            />
                        </div>

                        <div className="mb-3">
                            <label>Product Price</label>
                            <input 
                            type="text" className="form-control"
                            onChange={obj=>pickPrice(obj.target.value)}
                            value={pprice}
                            />
                        </div>

                        <div className="mb-3">
                            <label>Product Photo URL</label>
                            <input 
                            type="text" className="form-control"
                            onChange={obj=>pickPhoto(obj.target.value)}
                            value={pphoto}
                            />
                        </div>

                        <div className="mb-3">
                            <label>Product details</label>
                            <input 
                            type="text" className="form-control"
                            onChange={obj=>pickDetails(obj.target.value)}
                            value={pdetails}
                            />
                        </div>
                        <div className="text-center">
                            <button onClick={save} className="btn btn-primary"> Save Product</button>
                        </div>
                    </div>
                    <div className="col-lg-9">
                        <h1 className="text-center"> {productlist.length} : Manage Product </h1>
                        <p className='text-center text-danger'> {message} </p>
                        <table className="table table-bordered mt-5">
                            <thead>
                                <tr className="bg-light text-primary">
                                    <th>Product Id</th>
                                    <th>Product Name</th>
                                    <th>Price / Unit </th>
                                    <th>Details</th>
                                    <th>Photo</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    productlist.map((item, index2) => {
                                        return (
                                            <tr key={index2}>
                                                <td> {item.id} </td>
                                                <td> {item.name} </td>
                                                <td> {item.price} </td>
                                                <td> {item.details} </td>
                                                <td> <img src={item.photo} height="60" width="60" /> </td>
                                                <td> 
                                                <button className='btn btn-danger btn-sm'
                                                    onClick={deleteItem.bind(this,item.id, item.name)}>
                                                        <i className='fa fa-trash me-1'></i>
                                                        Delete 
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
        </>
    )
}

export default Myproduct;