export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Developer. All rights reserved.</p>
        <p style={{ marginTop: '0.5rem', fontSize: '0.8rem', opacity: 0.7 }}>
          Built with React, Express, Node.js, and MongoDB
        </p>
      </div>
    </footer>
  );
}
