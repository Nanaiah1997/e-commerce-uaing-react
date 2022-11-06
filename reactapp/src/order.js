import React,{useState, useEffect} from "react";
import AdminHeader from "./adminheader";

const Myorder = () =>{
    let[orderlist, updateOrder] = useState([]);
    const getOrder = () =>{
        fetch("http://localhost:1234/order")
        .then(response=>response.json())
        .then(orderArray=>{
            if(orderArray.length >0 ){
                updateOrder(orderArray);
            }
        })
    }

    useEffect(()=>{
        getOrder();
    },[true]);

    return(
        <>
            <AdminHeader/>
             <div className="container mt-3">
                <div className="row mb-5">
                    <div className="col-lg-12">
                        <h1 className="text-center"> {orderlist.length} : Order List </h1>
                    </div>
                </div>
                {
                    orderlist.map((order, index)=>{
                        return(
                            <div className="row mb-5 border-bottom bg-white rounded p-4" key={index}>
                                <div className="col-lg-4">
                                    <h3>Full Name : {order.customername} </h3>
                                    <p>Mobile No :  {order.mobile} </p>
                                    <p>e-Mail Id :   {order.email} </p>
                                    <p>Full Address :  {order.address} </p>
                                </div>
                                <div className="col-lg-8">
                                    <table className="table table-bordered">
                                        <thead>
                                            <tr className="bg-light text-primary">
                                                <th>Product Name</th>
                                                <th>Price / Unit </th>
                                                <th>Details</th>
                                                <th>Photo</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                order.itemlist.map((item, index2)=>{
                                                    return(
                                                        <tr key={index2}>
                                                            <td> {item.name} </td>
                                                            <td> {item.price} </td>
                                                            <td> {item.details} </td>
                                                            <td> <img src={item.photo} height="60" width="60"/> </td>
                                                        </tr>
                                                    )
                                                })
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        )
                    })
                }
            </div>   
        </>
    )
}

export default Myorder;