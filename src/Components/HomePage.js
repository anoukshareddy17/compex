import React from 'react';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay">
          <h1>Empower Change, Support Our Mission</h1>
          <p>Together, we can make a difference in countless lives.</p>
          <div className="hero-buttons">
            <button className="donate-btn">Donate Now</button>
            <button className="join-btn">Join Us</button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <h2>About Us</h2>
        <p>We are a dedicated NGO committed to uplifting communities and empowering individuals through impactful campaigns and volunteer-driven initiatives. Our mission is to create sustainable change by addressing pressing social issues and fostering a spirit of compassion and collaboration.</p>
        <p>With the support of our volunteers and donors, we strive to reach the most vulnerable and provide them with the resources, education, and opportunities they need to thrive. Join us in our journey to build a brighter, more equitable future for all.</p>
      </section>

      {/* Stats Cards Section */}
      <section className="stats-section">
        <div className="stat-card">
          <h3>Total Raised</h3>
          <p>$120,000</p>
        </div>
        <div className="stat-card">
          <h3>Volunteers Joined</h3>
          <p>350+</p>
        </div>
        <div className="stat-card">
          <h3>Campaigns Active</h3>
          <p>8</p>
        </div>
      </section>

      {/* Campaign Highlights Section */}
      <section className="campaigns-section">
        <h2>Campaign Highlights</h2>
        <div className="campaign-cards">
          <div className="campaign-card">
            <img src="https://via.placeholder.com/300x180" alt="Campaign 1" />
            <h4>Clean Water Initiative</h4>
            <p>Bringing safe and clean drinking water to remote villages.</p>
            <button>Learn More</button>
          </div>
          <div className="campaign-card">
            <img src="https://via.placeholder.com/300x180" alt="Campaign 2" />
            <h4>Education for All</h4>
            <p>Providing educational resources to underprivileged children.</p>
            <button>Learn More</button>
          </div>
          <div className="campaign-card">
            <img src="https://via.placeholder.com/300x180" alt="Campaign 3" />
            <h4>Healthcare Access</h4>
            <p>Ensuring basic healthcare facilities in rural areas.</p>
            <button>Learn More</button>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <h2>Ready to Make a Difference?</h2>
        <p>Become a volunteer or support our campaigns with your donation today!</p>
        <div className="cta-buttons">
          <button className="donate-btn">Donate</button>
          <button className="join-btn">Volunteer</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-links">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Campaigns</a>
          <a href="#">Contact</a>
        </div>
        <div className="footer-contact">
          <p>Email: info@ngo.org</p>
          <p>Phone: +1 234 567 890</p>
        </div>
        <div className="footer-social">
          <a href="#" aria-label="Facebook"><span role="img" aria-label="Facebook">📘</span></a>
          <a href="#" aria-label="Twitter"><span role="img" aria-label="Twitter">🐦</span></a>
          <a href="#" aria-label="Instagram"><span role="img" aria-label="Instagram">📸</span></a>
        </div>
      </footer>
    </div>
  );
};

export default HomePage; 