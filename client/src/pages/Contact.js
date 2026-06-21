export default function Contact() {
  return (
    <div className="contact-details">
      <h2 className="page-title">Get in Touch</h2>
      <p className="page-subtitle">I'm always open to discussing new projects, creative ideas, or partnerships.</p>
      
      <div className="card" style={{ maxWidth: '500px', margin: '0 auto' }}>
        <div className="contact-info-box" style={{ margin: 0, padding: '1rem' }}>
          <p style={{ textTransform: 'uppercase', fontSize: '0.75rem', color: 'var(--text-secondary)', letterSpacing: '2px', marginBottom: '0.75rem' }}>Direct Email</p>
          <a href="mailto:mahalakshmikarri922@gmail.com" className="contact-email">
            mahalakshmikarri922@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
}

