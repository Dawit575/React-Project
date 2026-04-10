import './pages.css';

const Gallery = () => {
  const images = [
    { id: 1, title: "Project Alpha", category: "Web App", icon: "🖥️" },
    { id: 2, title: "Project Beta", category: "Mobile App", icon: "📱" },
    { id: 3, title: "Project Gamma", category: "E-commerce", icon: "🛒" },
    { id: 4, title: "Project Delta", category: "Dashboard", icon: "📊" },
    { id: 5, title: "Project Epsilon", category: "CMS", icon: "📝" },
    { id: 6, title: "Project Zeta", category: "API", icon: "🔌" },
  ];

  return (
    <section id="gallery" className="page-section gallery-section">
      <div className="container">
        <h2 className="section-title">Our Gallery</h2>
        <div className="gallery-grid">
          {images.map((item) => (
            <div key={item.id} className="gallery-card">
              <div className="gallery-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.category}</p>
              <button className="gallery-btn">View Details</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;