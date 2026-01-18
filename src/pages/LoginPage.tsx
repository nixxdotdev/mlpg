import logo from "../assets/img/lpat_logo.png";
import loginIllustration from "../assets/img/image.png"; // placeholder image
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage: React.FC = () => {
  const [isRegister, setIsRegister] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  // Form state
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const toggleForm = () => {
    setIsRegister((prev) => !prev);
    setError("");
    setSuccess("");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    // Validation
    if (!formData.email || !formData.password) {
      setError("Email and password are required");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    try {
      setLoading(true);
      const response = await fetch(
        "https://mlpg.onrender.com/api/v1/user/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fullName: formData.fullName,
            email: formData.email,
            password: formData.password,
            confirmPassword: formData.confirmPassword,
          }),
        },
      );

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || "Registration failed");
        return;
      }

      setSuccess("Registration successful! Redirecting to login...");
      setFormData({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });

      // Switch to login form after 2 seconds
      setTimeout(() => {
        setIsRegister(false);
        setSuccess("");
      }, 2000);
    } catch (err) {
      setError("An error occurred. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    // Validation
    if (!formData.email || !formData.password) {
      setError("Email and password are required");
      return;
    }

    try {
      setLoading(true);
      const response = await fetch(
        "https://mlpg.onrender.com/api/v1/user/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: formData.email,
            password: formData.password,
          }),
        },
      );

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || "Login failed");
        return;
      }

      setSuccess("Login successful! Redirecting...");
      // Store user info in localStorage
      localStorage.setItem("user", JSON.stringify(data.user));
      localStorage.setItem("isLoggedIn", "true");

      // Redirect to main page after 2 seconds
      setTimeout(() => {
        navigate("/tools");
      }, 2000);
    } catch (err) {
      setError("An error occurred. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = isRegister ? handleRegister : handleLogin;

  return (
    <>
      <header className="header-shadow">
        <nav className="d-flex justify-content-between align-items-center px-4 py-4">
          <h1 className="fs-1 m-0 d-flex align-items-center gap-4">
            <img
              src={logo}
              alt="Lesson Plan Authoring Tool Logo"
              style={{ height: "70px" }}
            />
            Lesson Plan Authoring Tool
          </h1>

          <div className="nav-wrapper px-4">
            <ul className="nav-list d-flex gap-4">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Feedback</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <main className="main-container d-flex align-items-center justify-content-center min-vh-100">
        <div
          className="auth-wrapper d-flex shadow-md rounded justify-content-space-evenly"
          style={{ maxWidth: "1000px", width: "90%", height: "70%" }}
        >
          {/* Left Side - Form */}
          <div className="auth-form flex-1 p-5">
            <h2 className="mb-4">{isRegister ? "Register" : "Login"}</h2>

            {error && (
              <div
                className="alert alert-danger p-3 rounded mb-3"
                style={{ backgroundColor: "#f8d7da", color: "#721c24" }}
              >
                {error}
              </div>
            )}

            {success && (
              <div
                className="alert alert-success p-3 rounded mb-3"
                style={{ backgroundColor: "#d4edda", color: "#155724" }}
              >
                {success}
              </div>
            )}

            <form className="d-flex flex-column gap-3" onSubmit={handleSubmit}>
              {isRegister && (
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  className="form-input p-3 rounded border"
                  value={formData.fullName}
                  onChange={handleInputChange}
                />
              )}
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="form-input p-3 rounded border"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="form-input p-3 rounded border"
                value={formData.password}
                onChange={handleInputChange}
                required
              />

              {isRegister && (
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  className="form-input p-3 rounded border"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  required
                />
              )}

              <button
                type="submit"
                className={`button ${
                  isRegister ? "button-primary" : "button-primary"
                }`}
                disabled={loading}
              >
                {loading ? "Processing..." : isRegister ? "Register" : "Login"}
              </button>
            </form>

            <p className="mt-3">
              {isRegister
                ? "Already have an account?"
                : "Don't have an account?"}{" "}
              <span
                className="text-primary cursor-pointer"
                onClick={toggleForm}
              >
                {isRegister ? "Login" : "Register"}
              </span>
            </p>
          </div>

          {/* Right Side - Illustration */}
          <div
            className="auth-illustration flex-1 d-none d-md-flex"
            style={{
              backgroundImage: `url(${loginIllustration})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderTopRightRadius: "10px",
              borderBottomRightRadius: "10px",
              width: "40%",
            }}
          />
        </div>
      </main>
    </>
  );
};

export default LoginPage;
