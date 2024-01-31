import { Link, useNavigate } from "react-router-dom";
import Header from "./Header";
import { useState, useEffect } from "react";
import axios from "axios";
import "./Login.css"; // Import your CSS file for styling
import { FaSpinner } from "react-icons/fa"; // Import a loading spinner icon

function Login() {
  const navigate = useNavigate();

  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/");
    }
  }, [navigate]);

  const handleApi = () => {
    const url = "http://localhost:4000/login";
    const data = { username, password };

    setLoading(true);
    setError("");

    axios
      .post(url, data)
      .then((res) => {
        if (res.data.message) {
          alert(res.data.message);
          if (res.data.token) {
            localStorage.setItem("token", res.data.token);
            navigate("/");
          }
        }
      })
      .catch((err) => {
        setError("Error occurred during login");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="login-container">
      <Header />
      <p>Welcome to the Login page</p>
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
      <button onClick={handleApi} disabled={loading}>
        {loading ? <FaSpinner className="spinner" /> : "Login"}
      </button>
      {error && <p className="error-message">{error}</p>}
      <div>
        Don't have an account? <Link to="/signup">Signup</Link>
      </div>
    </div>
  );
}

export default Login;
