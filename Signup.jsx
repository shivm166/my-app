import { Link, useNavigate } from "react-router-dom";
import Header from "./Header";
import { useState } from "react";
import axios from "axios";
import "./Signup.css"; // Import your CSS file for styling
import { FaSpinner } from "react-icons/fa"; // Import a loading spinner icon

function Signup() {
  const navigate = useNavigate();

  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleApi = () => {
    // Check if password and confirmPassword match
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    const url = 'http://localhost:4000/signup';
    const data = { username, password };

    setLoading(true);
    setError('');

    axios.post(url, data)
      .then((res) => {
        if (res.data.message) {
          alert(res.data.message);
          navigate('/login'); // Redirect to login after successful signup
        }
      })
      .catch((err) => {
        setError('Server error. Please try again.'); // Provide a more informative error message
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="signup-container">
      <Header />
      <p>Welcome to the Signup page</p>
      <div className="input-group">
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setusername(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label>Confirm Password:</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>
      {error && <p className="error-message">{error}</p>}
      <button onClick={handleApi} disabled={loading}>
        {loading ? <FaSpinner className="spinner" /> : "SIGNUP"}
      </button>
      <div>
        Already have an account? <Link to="/login">Login</Link>
      </div>
      
    </div>
  );
}

export default Signup;
