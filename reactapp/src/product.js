import React,{useState, useEffect} from 'react';
import Header from './header';
import Footer from "./footer";
const Home = () =>{
    const[productlist, updateProduct] = useState([]);
    const getProduct = () =>{
        fetch("http://localhost:1234/product")
        .then(response=>response.json())
        .then(productArray =>{
            if(productArray.length >0 ){
                updateProduct(productArray.reverse())
            }
        })
    }

    useEffect(()=>{
        getProduct(); 
    },[true]);

    let[message, updateMessage] = useState("");
    const addToCart = (productdetails) =>{
        var url = "http://localhost:1234/cart";
        var postOption = {
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(productdetails)
        } 
        fetch(url, postOption)
        .then(response=>response.json())
        .then(responseData=>{
            updateMessage(productdetails.name + " Added in Your Cart -:) ");
        })
    }

    return(
        <>
            <Header/>
            <div className='container mt-5 height600'>
                <div className='row'>
                    <div className='col-lg-12'>
                        <h1 className='text-center text-primary'> Shopping @ Home </h1>
                        <p className='text-center text-danger'>{message}</p>
                    </div>
                </div>
                <div className='row mt-3'>
                    {
                        productlist.map((productinfo, index)=>{
                            return( 
                            <div className='col-lg-3' key={index}>
                                <div className='bg-white p-4 rounded'>
                                    <h5>{productinfo.name}</h5>
                                    <img src={productinfo.photo} height="190" width="100%"/>
                                    <p>{productinfo.details}</p>
                                    <p className='text-center'> Rs.{productinfo.price}/-</p>
                                    <div className='text-center'>
                                        <button className='btn btn-danger btn-sm'
                                        onClick={addToCart.bind(this,productinfo)}>Buy Now</button>
                                    </div>
                                </div>
                            </div>
                            )
                        })
                    }
                </div>
            </div>
            <Footer/>
        </>
    )
}
export default Home;