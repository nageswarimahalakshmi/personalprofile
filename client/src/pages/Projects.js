import { useEffect, useState } from "react";
import axios from "axios";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiURL = process.env.NODE_ENV === "production" ? "" : "http://localhost:5000";
    axios.get(`${apiURL}/api/projects`)
      .then(res => {
        setProjects(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error("API Error:", err);
        setError("Could not load projects. Please try again later.");
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h2 className="page-title">Featured Projects</h2>
      <p className="page-subtitle">A collection of custom applications, servers, and scripts I've built.</p>
      
      {loading && <p style={{ color: "var(--text-secondary)" }}>Loading projects...</p>}
      
      {error && (
        <div style={{ padding: '1rem', background: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.2)', borderRadius: '8px', color: '#ef4444', marginBottom: '2rem' }}>
          {error}
        </div>
      )}

      {!loading && !error && projects.length === 0 && (
        <p style={{ color: "var(--text-secondary)" }}>No projects found in the database. Run the seed script to add sample data!</p>
      )}

      <div className="projects-grid">
        {projects.map((p, i) => (
          <div key={i} className="card project-card">
            <h3>{p.title}</h3>
            <p>{p.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

