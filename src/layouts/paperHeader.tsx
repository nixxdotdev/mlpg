import depedLogo from "../assets/img/deped-logo.png";

export const PaperHeader = () => (
  <header className="paper-header d-flex flex-column align-items-center mb-4">
    {/* Logo */}
    <img
      src={depedLogo}
      alt="Deped Logo"
      style={{ height: "80px", marginBottom: "8px" }}
    />

    {/* Titles */}
    <div className="text-center mb-2">
      <h5
        className="m-0"
        style={{ fontFamily: "'Old English Text MT', serif" }}
      >
        Republic of the Philippines
      </h5>
      <h2
        className="m-0"
        style={{ fontFamily: "'Old English Text MT', serif" }}
      >
        Department of Education
      </h2>
      <h6 className="m-0" style={{ fontFamily: "'Trajan Pro', serif" }}>
        MIMAROPA REGION
      </h6>
      <h6 className="m-0" style={{ fontFamily: "'Tahoma', serif" }}>
        SCHOOLS DIVISION OFFICE OF OCCIDENTAL MINDORO
      </h6>
      <h6 className="m-0" style={{ fontFamily: "'Trajan Pro', serif" }}>
        SAN JOSE PILOT SCHOOL
      </h6>
      <h6 className="m-0" style={{ fontFamily: "'Trajan Pro', serif" }}>
        San Jose, Occidental Mindoro
      </h6>
    </div>

    {/* Lesson Plan Title */}
    <h4 className="m-0 mb-3" style={{ fontFamily: "'Times New Roman', serif" }}>
      <strong>DETAILED LESSON PLAN</strong>
    </h4>
  </header>
);
