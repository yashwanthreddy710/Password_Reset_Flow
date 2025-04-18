import { useState } from "react";
import { Link } from "react-router-dom"; 

const RegisterForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = { username, email, password };
    setError('');
    setMessage('');

    try {
      const res = await fetch("https://password-reset-flow-xyvz.onrender.com/api/users/register", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (res.ok) {
        const data = await res.json();
        setMessage(data.message || "Registration successful");
        setUsername('');
        setEmail('');
        setPassword('');
      } else {
        const errordata = await res.json();
        setError(errordata.message || "Registration failed. Try a different username or email.");
      }
    } catch (error) {
      setError("Unable to register");
    }
  };

  return (
    <div className="bg-primary-subtle p-4 rounded">
      <form onSubmit={handleSubmit}>
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="text-primary">Register</h2>
          <Link to="/login" className="btn btn-success">Log in</Link>
        </div>

        {message && <div className="alert alert-success">{message}</div>}
        {error && <div className="alert alert-danger">{error}</div>}

        <div className="mb-3">
          <label className="form-label fw-bold">Username</label>
          <input
            type="text"
            placeholder="Enter your Name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label fw-bold">Email</label>
          <input
            type="text"
            placeholder="Enter your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label fw-bold">Password</label>
          <input
            type="password"
            placeholder="Enter your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
            required
          />
        </div>

        <button type="submit" className="mb-3 mt-3 btn btn-success">Register</button>
      </form>
    </div>
  );
};

export default RegisterForm;