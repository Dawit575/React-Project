import './About.css';

const About = () => {
  return (
    <section id="about" className="page-section about-section">
      <div className="container">
        <h2 className="section-title">About Us</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              We are a passionate team of developers dedicated to creating exceptional web experiences. 
              With years of experience in React development, we help businesses transform their ideas into reality.
            </p>
            <div className="features">
              <div className="feature">
                <div className="feature-icon">🚀</div>
                <h3>Fast Performance</h3>
                <p>Optimized React components for blazing fast load times</p>
              </div>
              <div className="feature">
                <div className="feature-icon">🎨</div>
                <h3>Modern Design</h3>
                <p>Beautiful, responsive designs that work on all devices</p>
              </div>
              <div className="feature">
                <div className="feature-icon">💡</div>
                <h3>Innovative Solutions</h3>
                <p>Cutting-edge technology for your business needs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;