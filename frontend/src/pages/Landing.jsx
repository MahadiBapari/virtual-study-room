import { Link } from "react-router-dom";
import "../styles/Landing.css";

const LandingPage = () => {
  return (
    <div className="landing-container">
      <header className="header">
        <h1>Welcome to Virtual Study Room</h1>
        <p>Collaborate, learn, and grow together in real-time!</p>
      </header>

      <div className="button-container">
        <Link to="/login" className="btn btn-blue">Login</Link>
        <Link to="/register" className="btn btn-green">Register</Link>
      </div>

      <section className="features">
        <h2>Why Join Us?</h2>
        <div className="feature-cards">
          <div className="card">
            <h3>Real-time Collaboration</h3>
            <p>Join study rooms and interact with peers instantly.</p>
          </div>
          <div className="card">
            <h3>File Sharing</h3>
            <p>Easily share notes, documents, and resources.</p>
          </div>
          <div className="card">
            <h3>Interactive Whiteboard</h3>
            <p>Visualize ideas and collaborate with ease.</p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; 2025 Virtual Study Room. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
