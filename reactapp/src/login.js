import React,{useState} from 'react';
import Header from './header';
import Footer from "./footer";
const Login = () =>{

    let[message, updateMessage]= useState("");
    let[email, pickEmail]= useState("");
    let[pass, pickPass]= useState("");

    const goLogin = () =>{
        if(email=="" || pass==""){
            updateMessage("Please Enter Email & Password")
        }else{
            updateMessage("Please wait.... Processing.....!");
            fetch("http://localhost:1234/account")
            .then(response=>response.json())
            .then(user=>{
                if(user[0].email==email && user[0].password==pass){
                    updateMessage("LogIn Success : Please wait Redirecting....");
                    localStorage.setItem("adminid", user[0].id);
                    localStorage.setItem("fullname", user[0].name);
                    window.location.href= "http://localhost:3000/#/"; // redirecting admin order list page
                    window.location.reload();//reload the page after redirecting

                }else{
                    updateMessage("Invalid.! : Please Check Your Email Or Password..! ");
                }
            }) 
        }
    }
    return(
        <>
            <Header/>
            <div className='container mt-5 height600'>
                <div className='row'>
                    <div className='col-lg-12'>
                        <h1 className='text-center'> Login </h1>
                        <p className='text-center text-danger'> {message}</p>
                    </div>
                </div>
                <div className='row mt-4'>
                    <div className='col-lg-4'></div>
                    <div className='col-lg-4'>
                        <div className='card'>
                            <div className='card-header bg-danger text-white'>
                                Enter Login Details
                            </div>
                            <div className='card-body'>
                                <div className='mb-3'>
                                    <label>e-Mail Id</label>
                                    <input type="text" className='form-control' 
                                    onChange={obj=>pickEmail(obj.target.value)}/>
                                </div>
                                <div className='mb-3'>
                                    <label>Password</label>
                                    <input type="password" className='form-control'
                                    onChange={obj=>pickPass(obj.target.value)}
                                    />
                                </div>
                            </div>
                            <div className='card-footer text-center'>
                                <button className='btn btn-primary' onClick={goLogin}>Login</button>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4'></div>
                </div>
            </div>
            <Footer/>
        </>
    )
}
export default Login;