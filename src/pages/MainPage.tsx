import React, { useState } from "react";
import logo from "../assets/img/lpat_logo.png";
import genIcon from "../assets/img/generator_icon.png";
import dlIcon from "../assets/img/download_icon.png";
import editIcon from "../assets/img/edit_icon.png";
import searchIcon from "../assets/img/search_icon.png";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import TextAlign from "@tiptap/extension-text-align";
import ImageResize from "tiptap-extension-resize-image";
import { Table } from "@tiptap/extension-table";
import TableRow from "@tiptap/extension-table-row";
import TableCell from "@tiptap/extension-table-cell";
import TableHeader from "@tiptap/extension-table-header";
import { FontSize, TextStyle } from "@tiptap/extension-text-style";
import { FontFamily } from "../utils/FontFamily";
import InsertImage from "../utils/InsertImage";
import { parseLessonPlan, applyLessonPlan } from "../utils/lessonPlanParser";
import type { CSSProperties } from "react";
import { PaperHeader } from "../layouts/paperHeader";

const MainPage: React.FC = () => {
  const [activeTool, setActiveTool] = useState<
    "generator" | "edit" | "layout" | null
  >(null);

  const handleToolClick = (tool: typeof activeTool) => {
    // Toggle if same tool is clicked
    setActiveTool((prev) => (prev === tool ? null : tool));
  };

  const editor = useEditor({
    extensions: [
      StarterKit,
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      TextStyle,
      FontSize,
      FontFamily,
      ImageResize.configure({
        allowBase64: true,
      }),
      Table.configure({
        resizable: true, // optional
      }),
      TableRow,
      TableCell,
      TableHeader,
    ],
    content: `

      <table border="1" cellpadding="6" cellspacing="0" style="border-collapse:collapse; width:100%;">
      <tr>
          <th>Name of Teacher</th>
          <td></td>
          <th>Learning Area</th>
          <td>Mathematics</td>
        </tr>  
      <tr>
          <th>School</th>
          <td>San Jose Pilot School</td>
          <th>Grade Level</th>
          <td>One</td>
        </tr>
      </table>

      <br />

      <h3>I. CURRICULUM CONTENT, STANDARDS, AND LESSON COMPETENCIES</h3>
      <table border="1" cellpadding="6" cellspacing="0" style="border-collapse:collapse; width:100%;">
        <tr>
          <th style="width:30%;">A. Content Standards</th>
          <td></td>
        </tr>
        <tr>
          <th>B. Performance Standards</th>
          <td></td>
        </tr>
        <tr>
          <th>C. Learning Competencies</th>
          <td></td>
        </tr>
        <tr>
          <th>D. Learning Objectives</th>
          <td></td>
        </tr>
        <tr>
          <th>E. Integration</th>
          <td></td>
        </tr>        
      </table>

      <br />

      <h3>II. CONTENT</h3>
      <table border="1" cellpadding="6" cellspacing="0" style="border-collapse:collapse; width:100%;">
        <tr>
          <th style="width:30%;">Topic Content</th>
          <td></td>
        </tr>
      </table>

      <br />

      <h3>III. LEARNING RESOURCES</h3>
      <table border="1" cellpadding="6" cellspacing="0" style="border-collapse:collapse; width:100%;">
        <tr>
          <th style="width:25%;">A. References</th>
          <td></td>
        </tr>
        <tr>
          <th>B. Other Learning Resources</th>
          <td></td>
        </tr>
      </table>

      <br />

      <h3>IV. TEACHING AND LEARNING PROCEDURES</h3>
      <table border="1" cellpadding="6" cellspacing="0" style="border-collapse:collapse; width:100%;">
        <tr>
          <th style="width:25%;">A. Panimulang Gawain (Activating Prior Knowledge)</th>
          <td></td>
        </tr>
        <tr>
          <th style="width:25%;">B. Gawaing Paglalahad ng Layunin ng Aralin (Lesson Purpose/Intention)</th>
          <td></td>
        </tr>
        <tr>
          <th style="width:25%;">C. Gawaing Pag-unawa sa mga Susing- Salita/Parirala o Mahahalagang Konsepto sa Aralin (Lesson Language Practice)</th>
          <td></td>
        </tr>
      </table>

      <br />

      <h3>V. DURING/LESSON PROPER</h3>
      <table border="1" cellpadding="6" cellspacing="0" style="border-collapse:collapse; width:100%;">
        <tr>
          <th style="width:30%;">D. Pagbasa sa Mahahalagang Pag-unawa/Susing Ideya (Reading the Key Idea/Stem) </th>
          <td></td>
        </tr>
        <tr>
          <th style="width:30%;">E. Pagpapaunlad ng Kaalaman at Kasanayan sa Mahahalagang Pag-unawa/Susing Ideya (Developing Understanding of the Key Idea/Stem)</th>
          <td></td>
        </tr>
        <tr>
          <th style="width:30%;">F. Pagpapalalim ng Kaalaman at Kasanayan sa Mahahalagang Pag-unawa/Susing Ideya (Deepening Understanding of the Key Idea/Stem) </th>
          <td></td>
        </tr>
      </table>

      <br />
      
      <h3>VI. AFTER/POST-LESSON PROPER</h3>
      <table border="1" cellpadding="6" cellspacing="0" style="border-collapse:collapse; width:100%;">
         <tr>
          <th style="width:30%;">G. Paglalapat at Paglalahat (Making Generalizations and Abstractions) </th>
          <td></td>
        </tr>
        <tr>
          <th style="width:30%;">H. Pagtataya ng Natutuhan (Evaluating Learning) </th>
          <td></td>
        </tr>
        <tr>
          <th style="width:30%;">I. Mga Dagdag na Gawain para sa Paglalapat o para sa Remediation (Additional Activities for Application or Remediation (if applicable) </th>
          <td></td>
        </tr>
        <tr>
          <th style="width:30%;">J. Remarks</th>
          <td></td>
        </tr>
      </table>
    `,
  });

  const showDrawer = activeTool === "edit" || activeTool === "layout";

  const [showGenerator, setShowGenerator] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [showDownload, setShowDownload] = useState(false);
  const [fileName, setFileName] = useState("");
  const [aiText, setAiText] = useState("");
  const [paperSize] = useState("A4");
  const [orientation] = useState("Portrait");
  const [margins, setMargins] = useState("Normal");
  const [zoom, setZoom] = useState<number>(1);

  const handleGenerate = () => {
    setIsGenerating(true);

    // simulate async generation
    setTimeout(() => {
      setIsGenerating(false);
      setShowGenerator(false);
    }, 2000);
  };

  const insertParsedPlan = () => {
    const plan = parseLessonPlan(aiText || "");
    if (!plan) {
      window.alert(
        "Unable to parse lesson plan. Provide valid JSON or tagged text.",
      );
      return;
    }
    applyLessonPlan(editor, plan);
    setShowGenerator(false);
  };

  const getPaperStyle = (size: string, orient: string, margin: string) => {
    const sizes: Record<string, { width: string; height: string }> = {
      A4: { width: "210mm", height: "297mm" },
      Letter: { width: "216mm", height: "279mm" },
      Legal: { width: "216mm", height: "356mm" },
    };

    const marginsMap: Record<string, string> = {
      Normal: "15mm",
      Narrow: "10mm",
      Wide: "30mm",
    };

    const style: CSSProperties = {
      background: "#fff",
      boxShadow: "0 0 10px rgba(0,0,0,0.1)",
      margin: "auto",
      marginTop: "20px",
      display: "block",
      padding: marginsMap[margin],
      transform: `scale(${zoom})`,
      transformOrigin: "top center",
      color: "#000",
      caretColor: "#000",
    };

    // Orientation
    if (orient === "Portrait") {
      style.width = sizes[size].width;
      style.minHeight = sizes[size].height;
    } else {
      style.width = sizes[size].height;
      style.minHeight = sizes[size].width;
    }

    return style;
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
                        <select
                          defaultValue="Arial"
                          onChange={(e) =>
                            editor
                              ?.chain()
                              .focus()
                              .setFontFamily(e.target.value)
                              .run()
                          }
                        >
                          <option value="Arial">Arial</option>
                          <option value="Times New Roman">
                            Times New Roman
                          </option>
                          <option value="Georgia">Georgia</option>
                          <option value="Courier New">Courier New</option>
                          <option value="Inter">Inter</option>
                        </select>
                      </label>

                      <label className="d-flex direction-row">
                        Font Size:
                        <select
                          defaultValue={"14px"}
                          onChange={(e) =>
                            editor
                              ?.chain()
                              .focus()
                              .setFontSize(e.target.value)
                              .run()
                          }
                        >
                          <option value="12px">12px</option>
                          <option value="14px">14px</option>
                          <option value="16px">16px</option>
                          <option value="18px">18px</option>
                          <option value="24px">24px</option>
                        </select>
                      </label>

                      <div className="font-style-buttons">
                        <button
                          onClick={() =>
                            editor?.chain().focus().toggleBold().run()
                          }
                        >
                          <b>B</b>
                        </button>
                        <button
                          onClick={() =>
                            editor?.chain().focus().toggleItalic().run()
                          }
                        >
                          <i>I</i>
                        </button>
                        <button
                          onClick={() =>
                            editor?.chain().focus().toggleUnderline().run()
                          }
                        >
                          <u>U</u>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Paragraph Section */}
                  <div className="tool-section">
                    <h3 className="tool-section-title">Paragraph</h3>
                    <div className="tool-controls">
                      <label>Alignment:</label>
                      <button
                        onClick={() =>
                          editor?.chain().focus().setTextAlign("left").run()
                        }
                      >
                        Left
                      </button>
                      <button
                        onClick={() =>
                          editor?.chain().focus().setTextAlign("center").run()
                        }
                      >
                        Center
                      </button>
                      <button
                        onClick={() =>
                          editor?.chain().focus().setTextAlign("right").run()
                        }
                      >
                        Right
                      </button>
                      <button
                        onClick={() =>
                          editor?.chain().focus().setTextAlign("justify").run()
                        }
                      >
                        Justify
                      </button>
                    </div>
                  </div>

                  {/* Page Setup Section */}
                  <div className="tool-section">
                    <h3 className="tool-section-title">Page Setup</h3>
                    <div className="tool-controls">
                      <label>
                        Margins:
                        <select
                          value={margins}
                          onChange={(e) => setMargins(e.target.value)}
                        >
                          <option value="Normal">Normal</option>
                          <option value="Narrow">Narrow</option>
                          <option value="Wide">Wide</option>
                        </select>
                      </label>

                      <label>
                        Zoom:
                        <select
                          value={zoom}
                          onChange={(e) => setZoom(Number(e.target.value))}
                        >
                          <option value={0.5}>50%</option>
                          <option value={0.75}>75%</option>
                          <option value={1}>100%</option>
                          <option value={1.25}>125%</option>
                          <option value={1.5}>150%</option>
                          <option value={2}>200%</option>
                        </select>
                      </label>
                    </div>
                  </div>

                  {/* Illustrations Section */}
                  <div className="tool-section">
                    <h3 className="tool-section-title">Illustrations</h3>
                    <div className="tool-controls">
                      <InsertImage editor={editor} />
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

                      {/* AI Output / Paste Area */}
                      <div className="generator-input">
                        <textarea
                          placeholder="Paste AI output here (JSON or <tag>...</tag>)"
                          value={aiText}
                          onChange={(e) => setAiText(e.target.value)}
                          rows={6}
                          style={{ width: "100%" }}
                          disabled={isGenerating}
                        />
                      </div>

                      <div
                        style={{
                          display: "flex",
                          gap: "8px",
                          marginTop: "8px",
                        }}
                      >
                        <button
                          className="button button-primary generator-btn"
                          onClick={insertParsedPlan}
                          disabled={isGenerating}
                        >
                          Insert Parsed Lesson Plan
                        </button>
                      </div>

                      {/* Action button
                      <button
                        className="button button-primary generator-btn"
                        onClick={handleGenerate}
                        disabled={isGenerating}
                      >
                        {isGenerating
                          ? "Generating..."
                          : "Generate Detailed Lesson Plan"}
                      </button> */}
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
                <div
                  className="paper-page"
                  style={getPaperStyle(paperSize, orientation, margins)}
                >
                  {/* Header */}
                  <PaperHeader />
                  {/* Editor Content */}
                  <EditorContent editor={editor} />
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
