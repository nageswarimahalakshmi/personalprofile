import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="hero">
      <h1>Hi, I'm <span>Mahalakshmi</span> 👋</h1>
      <p>
        I am a passionate Full Stack Developer building robust, interactive web applications and APIs. 
        Explore my work or reach out for collaborations.
      </p>
      <Link to="/projects">
        <button className="btn">View My Projects</button>
      </Link>
    </div>
  );
}

