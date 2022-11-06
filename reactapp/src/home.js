import React from "react";
import PublicHeader from "./header";

const Myhome = () => {
  return (
    <>
      <PublicHeader />
      <section className="bg-light p-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 mb-5">
              <div className="bg-white rounded p-3">
                <h4>Apple Red</h4>
                <img src="1.jpg" className="img-fluid" />
                <p> Good Product</p>
                <p>Rs.123</p>
                <div className="text-center">
                  <button className="btn btn-danger btn-sm">
                    <i className="fa fa-shopping-cart "></i> Add To Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Myhome;
