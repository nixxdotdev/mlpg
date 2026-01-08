import logo from "../assets/img/lpat_logo.png";
import loginIllustration from "../assets/img/image.png"; // placeholder image
import { useState } from "react";

const LoginPage: React.FC = () => {
  const [isRegister, setIsRegister] = useState(false);

  const toggleForm = () => setIsRegister((prev) => !prev);

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

            <form className="d-flex flex-column gap-3">
              {isRegister && (
                <input
                  type="text"
                  placeholder="Full Name"
                  className="form-input p-3 rounded border"
                  required
                />
              )}
              <input
                type="email"
                placeholder="Email"
                className="form-input p-3 rounded border"
                required
              />
              <input
                type="password"
                placeholder="Password"
                className="form-input p-3 rounded border"
                required
              />

              {isRegister && (
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="form-input p-3 rounded border"
                  required
                />
              )}

              <button
                type="submit"
                className={`button ${
                  isRegister ? "button-primary" : "button-primary"
                }`}
              >
                {isRegister ? "Register" : "Login"}
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
