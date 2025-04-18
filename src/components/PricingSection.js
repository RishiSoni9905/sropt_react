import React from "react";
import pricingFree from "../Assets/Images/pricing-free.png"; 
import pricingStarter from "../Assets/Images/pricing-starter.png";
import pricingBusiness from "../Assets/Images/pricing-business.png";
import pricingUltimate from "../Assets/Images/pricing-ultimate.png";

const PricingSection = () => {
  return (
    <section id="pricing" className="pricing">
      <div className="container" data-aos="fade-up">
        <header className="section-header">
          <h2>Pricing</h2>
        </header>
        <div className="row gy-4" data-aos="fade-left">
          <div
            className="col-lg-3 col-md-6"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <div className="box">
              <h3 style={{ color: "#07d5c0" }}>Free Plan</h3>
              <div className="price">
                <sup>$</sup>0<span> / mo</span>
              </div>
              <img
                src={pricingFree}
                className="img-fluid"
                alt="Free Plan"
              />
              <ul>
                <li>Basic Route Optimization</li>
                <li>Up to 2 School Buses</li>
                <li>Real-Time Route Updates</li>
                <li className="na">Student Attendance Tracking</li>
                <li className="na">Multi-School Support</li>
              </ul>
              <a href="#" className="btn-buy">
                Get Started
              </a>
            </div>
          </div>
          <div
            className="col-lg-3 col-md-6"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <div className="box">
              <span className="featured">Featured</span>
              <h3 style={{ color: "#65c600" }}>Starter Plan</h3>
              <div className="price">
                <sup>$</sup>19<span> / mo</span>
              </div>
              <img
                src={pricingStarter}
                className="img-fluid"
                alt="Starter Plan"
              />
              <ul>
                <li>Advanced Route Optimization</li>
                <li>Up to 5 School Buses</li>
                <li>Real-Time Route Updates</li>
                <li>Student Attendance Tracking</li>
                <li className="na">Multi-School Support</li>
              </ul>
              <a href="#" className="btn-buy">
                Buy Now
              </a>
            </div>
          </div>
          <div
            className="col-lg-3 col-md-6"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <div className="box">
              <h3 style={{ color: "#ff901c" }}>Business Plan</h3>
              <div className="price">
                <sup>$</sup>29<span> / mo</span>
              </div>
              <img
                src={pricingBusiness}
                className="img-fluid"
                alt="Business Plan"
              />
              <ul>
                <li>Advanced Route Optimization</li>
                <li>Up to 10 School Buses</li>
                <li>Real-Time Route Updates</li>
                <li>Student Attendance Tracking</li>
                <li>Multi-School Support</li>
              </ul>
              <a href="#" className="btn-buy">
                Buy Now
              </a>
            </div>
          </div>
          <div
            className="col-lg-3 col-md-6"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            <div className="box">
              <h3 style={{ color: "#ff0071" }}>Ultimate Plan</h3>
              <div className="price">
                <sup>$</sup>49<span> / mo</span>
              </div>
              <img
                src={pricingUltimate}
                className="img-fluid"
                alt="Ultimate Plan"
              />
              <ul>
                <li>Full Route Optimization Suite</li>
                <li>Unlimited School Buses</li>
                <li>Real-Time Route Updates</li>
                <li>Student Attendance Tracking</li>
                <li>Multi-School Support</li>
              </ul>
              <a href="#" className="btn-buy">
                Buy Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
