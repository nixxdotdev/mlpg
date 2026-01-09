import React, { useState } from "react";
import logo from "../assets/img/lpat_logo.png";
import genIcon from "../assets/img/generator_icon.png";
import dlIcon from "../assets/img/download_icon.png";
import editIcon from "../assets/img/edit_icon.png";
import layIcon from "../assets/img/layout_icon.png";
import searchIcon from "../assets/img/search_icon.png";

const MainPage: React.FC = () => {
  const [activeTool, setActiveTool] = useState<
    "generator" | "edit" | "layout" | null
  >(null);

  const handleToolClick = (tool: typeof activeTool) => {
    // Toggle if same tool is clicked
    setActiveTool((prev) => (prev === tool ? null : tool));
  };

  const showDrawer = activeTool === "edit" || activeTool === "layout";

  const [showGenerator, setShowGenerator] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [showDownload, setShowDownload] = useState(false);
  const [fileName, setFileName] = useState("");

  const handleGenerate = () => {
    setIsGenerating(true);

    // simulate async generation
    setTimeout(() => {
      setIsGenerating(false);
      setShowGenerator(false);
    }, 2000);
  };

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
          <aside className="tool-aside">
            <h1 className="aside-title">Menu</h1>
            <ul className="aside-menu">
              <li>
                <a
                  onClick={() => {
                    handleToolClick(null);
                    setShowGenerator(true);
                  }}
                >
                  <img
                    src={genIcon}
                    alt="Activity Generator Logo"
                    className="img-fluid"
                    style={{ height: "auto", width: "70px" }}
                  />
                  DLP Generator
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    handleToolClick("edit");
                    setShowGenerator(false);
                  }}
                >
                  <img
                    src={editIcon}
                    alt="Edit Logo"
                    className="img-fluid"
                    style={{ height: "auto", width: "70px" }}
                  />
                  Edit
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    handleToolClick("layout");
                    setShowGenerator(false);
                  }}
                >
                  <img
                    src={layIcon}
                    alt="Layout Logo"
                    className="img-fluid"
                    style={{ height: "auto", width: "70px" }}
                  />
                  Layout
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    handleToolClick(null);
                    setShowGenerator(false);
                    setShowDownload(true);
                  }}
                >
                  <img
                    src={dlIcon}
                    alt="Download Logo"
                    className="img-fluid"
                    style={{ height: "auto", width: "70px" }}
                  />
                  Download
                </a>
              </li>
            </ul>
          </aside>
          {/* Collapsible Drawer */}
          {showDrawer && (
            <section className="tool-drawer">
              {activeTool === "edit" && (
                <div className="edit-tools">
                  {/* Font Section */}
                  <div className="tool-section">
                    <h3 className="tool-section-title">Font</h3>
                    <div className="tool-controls">
                      <label>
                        Font Family:
                        <select>
                          <option>Poppins</option>
                          <option>Arial</option>
                          <option>Times New Roman</option>
                        </select>
                      </label>

                      <label>
                        Font Size:
                        <input
                          type="number"
                          min="8"
                          max="72"
                          defaultValue={14}
                        />{" "}
                        px
                      </label>

                      <div className="font-style-buttons">
                        <button>
                          <b>B</b>
                        </button>
                        <button>
                          <i>I</i>
                        </button>
                        <button>
                          <u>U</u>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Paragraph Section */}
                  <div className="tool-section">
                    <h3 className="tool-section-title">Paragraph</h3>
                    <div className="tool-controls">
                      <label>
                        Alignment:
                        <select>
                          <option>Left</option>
                          <option>Center</option>
                          <option>Right</option>
                          <option>Justify</option>
                        </select>
                      </label>

                      <label>
                        Line Height:
                        <input
                          type="number"
                          min="1"
                          max="3"
                          step="0.1"
                          defaultValue={1.5}
                        />
                      </label>

                      <label>
                        Spacing:
                        <input
                          type="number"
                          min="0"
                          max="50"
                          defaultValue={10}
                        />{" "}
                        px
                      </label>
                    </div>
                  </div>

                  {/* Illustrations Section */}
                  <div className="tool-section">
                    <h3 className="tool-section-title">Illustrations</h3>
                    <div className="tool-controls">
                      <button>Add Image</button>
                      <button>Add Icon</button>
                      <button>Add Diagram</button>
                    </div>
                  </div>
                </div>
              )}
              {activeTool === "layout" && (
                <div className="layout-tools">
                  {/* Page Setup Section */}
                  <div className="tool-section">
                    <h3 className="tool-section-title">Page Setup</h3>
                    <div className="tool-controls">
                      <label>
                        Paper Size:
                        <select>
                          <option>A4</option>
                          <option>Letter</option>
                          <option>Legal</option>
                        </select>
                      </label>

                      <label>
                        Orientation:
                        <select>
                          <option>Portrait</option>
                          <option>Landscape</option>
                        </select>
                      </label>

                      <label>
                        Margins:
                        <select>
                          <option>Normal</option>
                          <option>Narrow</option>
                          <option>Wide</option>
                        </select>
                      </label>
                    </div>
                  </div>

                  {/* Paragraph Section */}
                  <div className="tool-section">
                    <h3 className="tool-section-title">Paragraph</h3>
                    <div className="tool-controls">
                      <label>
                        Alignment:
                        <select>
                          <option>Left</option>
                          <option>Center</option>
                          <option>Right</option>
                          <option>Justify</option>
                        </select>
                      </label>

                      <label>
                        Line Spacing:
                        <input
                          type="number"
                          min="1"
                          max="3"
                          step="0.1"
                          defaultValue={1.5}
                        />
                      </label>

                      <label>
                        Indentation:
                        <input
                          type="number"
                          min="0"
                          max="50"
                          defaultValue={0}
                        />{" "}
                        px
                      </label>
                    </div>
                  </div>

                  {/* Arrange Section */}
                  <div className="tool-section">
                    <h3 className="tool-section-title">Arrange</h3>
                    <div className="tool-controls">
                      <button>Bring Forward</button>
                      <button>Send Backward</button>
                      <button>Align Left</button>
                      <button>Align Center</button>
                      <button>Align Right</button>
                    </div>
                  </div>
                </div>
              )}
            </section>
          )}

          <section className="tool-main">
            <div className="tool-main-inner">
              {showGenerator && (
                <>
                  {/* Background blocker */}
                  <div
                    className="generator-backdrop"
                    onClick={() => setShowGenerator(false)}
                  />

                  {/* Floating generator */}
                  <div className="generator-overlay">
                    <div className="generator-card">
                      {/* Close button */}
                      <button
                        className="generator-close"
                        onClick={() => setShowGenerator(false)}
                        aria-label="Close"
                      >
                        ×
                      </button>

                      {/* Input */}
                      <div className="generator-input">
                        <img
                          src={searchIcon}
                          alt="Search"
                          className="generator-icon"
                        />
                        <input
                          type="text"
                          placeholder="Content Standards"
                          disabled={isGenerating}
                        />
                      </div>

                      {/* Input */}
                      <div className="generator-input">
                        <img
                          src={searchIcon}
                          alt="Search"
                          className="generator-icon"
                        />
                        <input
                          type="text"
                          placeholder="Performance Standards"
                          disabled={isGenerating}
                        />
                      </div>

                      {/* Input */}
                      <div className="generator-input">
                        <img
                          src={searchIcon}
                          alt="Search"
                          className="generator-icon"
                        />
                        <input
                          type="text"
                          placeholder="Competency / Objectives"
                          disabled={isGenerating}
                        />
                      </div>

                      {/* Action button */}
                      <button
                        className="button button-primary generator-btn"
                        onClick={handleGenerate}
                        disabled={isGenerating}
                      >
                        {isGenerating
                          ? "Generating..."
                          : "Generate Detailed Lesson Plan"}
                      </button>
                    </div>
                  </div>
                </>
              )}
              {showDownload && (
                <>
                  {/* Backdrop */}
                  <div
                    className="download-backdrop"
                    onClick={() => setShowDownload(false)}
                  />

                  {/* Modal Container */}
                  <div className="download-modal">
                    <button
                      className="modal-close"
                      onClick={() => setShowDownload(false)}
                      aria-label="Close"
                    >
                      ×
                    </button>

                    {/* Title */}
                    <h2 className="modal-title">File Name</h2>

                    {/* Input */}
                    <input
                      type="text"
                      value={fileName}
                      onChange={(e) => setFileName(e.target.value)}
                      placeholder="Enter file name..."
                    />

                    {/* Buttons */}
                    <div className="modal-buttons">
                      <button className="button button-primary">
                        Download Word (.docx)
                      </button>
                      <button className="button button-primary">
                        Download PDF
                      </button>
                    </div>
                  </div>
                </>
              )}

              <div className="paper-container">
                <div className="paper-page">
                  <header className="paper-header d-flex flex-row justify-content-between">
                    <h3>
                      <strong>Learning Area:</strong> Mathematics
                    </h3>
                    <h3>
                      <strong>Grade Level:</strong> ONE
                    </h3>
                  </header>

                  <p contentEditable="true" className="editor-area">
                    Need Assistance? Click DLP Generator and our AI will help
                    you
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default MainPage;
