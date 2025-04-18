import { useState } from "react";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setMessage('');

    try {
      const res = await fetch("https://password-reset-flow-xyvz.onrender.com/api/users/login", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage(data.message || "Login successful");
        setEmail('');
        setPassword('');
      } else {
        setError(data.error || "Invalid email or password");
      }
    } catch (err) {
      setError("Login failed, please try again later.");
    }
  };

  return (
    <div className="bg-primary-subtle p-4 rounded">
      <form onSubmit={handleSubmit}>
        <h2 className="mb-4 text-primary text-center">Login</h2>

        {message && <div className="alert alert-success">{message}</div>}
        {error && <div className="alert alert-danger">{error}</div>}

        <div className="mb-3">
          <label className="form-label fw-bold">Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label fw-bold">Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn btn-success mt-2">Log in</button>
        <div className="text-center mt-2">
           <Link to="/password-reset" className="text-decoration-none text-primary">
               Forgot Password?
           </Link>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
