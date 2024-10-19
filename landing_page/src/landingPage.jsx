import React from "react";
import "./landingPage.css";
import Header from "./component/header1/Navbar";
const LandingPage = () => {
  return (
    <div className="landingPage">
      <Header />
      <section className="heroSection">
        <div className="hero-content">
          <h1>
            Empowering Businesses with <br></br>AI-Driven Financial Insights{" "}
            <br></br>for Strategic Growth
          </h1>
          <p>
            Manage Your Business’s Financial Health with AI, All in One Place.
          </p>
          <button className="start-now-btn">Start now</button>
        </div>
        
        <div className="hero-illustration">
          <img src="Group 1532.png" alt="" />
        </div>
      </section>
      <section className="services">
        <div className="tex">
          <p>Our services</p>
          <h2>Powerful Features for Seamless Financial Management</h2>
        </div>
        <div className="container">
          <div className="card">
            <img src="landing_page/src/assets/Add_apps_perspective_matte.png" alt="" />
            <h2>Real-Time Dashboard</h2>
            <p>Track your finances instantly with live data updates and customizable views.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
