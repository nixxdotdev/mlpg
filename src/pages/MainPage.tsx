import React from "react";
import logo from "../assets/img/lpat_logo.png";
const MainPage: React.FC = () => {
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
            <ul className="nav-list">
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

      <main className="main-container">
        <div className="tool-content">
          <aside>This section is side tool</aside>
          <section>This section is main content</section>
        </div>
      </main>
    </>
  );
};

export default MainPage;
