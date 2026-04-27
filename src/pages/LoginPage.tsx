import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

export function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("demo@northstar.com");
  const [password, setPassword] = useState("northstar-demo");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    navigate("/explore");
  }

  return (
    <div className="login-page">
      <div className="login-hero">
        <p className="eyebrow">Steppe-Inspired Showcase</p>
        <h1>Northstar Planning Demo</h1>
        <p>
          Explore audience intelligence, shape a dual-KPI launch plan, and present a client-safe
          EV campaign story using fully fictional automotive data.
        </p>
        <div className="hero-stat-grid">
          <div>
            <strong>$6.0M</strong>
            <span>Total media budget</span>
          </div>
          <div>
            <strong>218M</strong>
            <span>Projected brand impressions</span>
          </div>
          <div>
            <strong>8,400</strong>
            <span>Projected test drive bookings</span>
          </div>
        </div>
      </div>
      <form className="login-card" onSubmit={handleSubmit}>
        <p className="eyebrow">Presentation Login</p>
        <h2>Enter Demo</h2>
        <p className="page-subtitle">
          Access the Northstar Eon launch workspace with a presentation-only sign-in.
        </p>
        <div className="login-hint">
          <span>Demo login is prefilled for presentation mode.</span>
        </div>
        <label>
          Email
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="demo@northstar.com"
          />
        </label>
        <label>
          Password
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Enter any password"
          />
        </label>
        <button className="primary-button" type="submit">
          Enter Demo
        </button>
      </form>
    </div>
  );
}
