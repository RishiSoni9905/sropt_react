import React from "react";

const ServicesSection = () => {
  return (
    <section id="services" className="services">
      <div className="container" data-aos="fade-up">
        <header className="section-header">
          <h2>Services</h2>
        </header>
        <div className="row gy-4">
          <div
            className="col-lg-4 col-md-6"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="service-box blue">
              <i className="ri-map-pin-line icon"></i>
              <h3>Route Optimization</h3>
              <p>
                Our intelligent system calculates the most efficient routes for
                drivers, saving time and fuel while ensuring student safety.
              </p>
              <a href="#" className="read-more">
                <span>Read More</span> <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>
          <div
            className="col-lg-4 col-md-6"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="service-box orange">
              <i className="ri-group-line icon"></i>
              <h3>Student Management</h3>
              <p>
                Track student attendance and manage their routes based on real-time presence.
                Drivers will only pick up students who are present.
              </p>
              <a href="#" className="read-more">
                <span>Read More</span> <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>
          <div
            className="col-lg-4 col-md-6"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="service-box green">
              <i className="ri-dashboard-line icon"></i>
              <h3>Driver Dashboard</h3>
              <p>
                Drivers can access a dashboard to view their assigned students, real-time routes, and
                traffic updates, ensuring smooth and timely pickups.
              </p>
              <a href="#" className="read-more">
                <span>Read More</span> <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>
          <div
            className="col-lg-4 col-md-6"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <div className="service-box red">
              <i className="ri-secure-payment-line icon"></i>
              <h3>Multi-School Support</h3>
              <p>
                Our platform supports multiple schools, allowing administrators to manage
                routes and students efficiently across different locations.
              </p>
              <a href="#" className="read-more">
                <span>Read More</span> <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>
          <div
            className="col-lg-4 col-md-6"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <div className="service-box purple">
              <i className="ri-notification-2-line icon"></i>
              <h3>Real-Time Notifications</h3>
              <p>
                Receive instant notifications on route changes, student absence, or any
                unexpected delays, ensuring everyone stays informed.
              </p>
              <a href="#" className="read-more">
                <span>Read More</span> <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>
          <div
            className="col-lg-4 col-md-6"
            data-aos="fade-up"
            data-aos-delay="700"
          >
            <div className="service-box pink">
              <i className="ri-tools-line icon"></i>
              <h3>Customizable Features</h3>
              <p>
                Tailor the platform to meet specific needs such as custom routes,
                student groupings, or driver-specific options.
              </p>
              <a href="#" className="read-more">
                <span>Read More</span> <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
