import { useEffect, useRef, useState } from "react";
import LandingHero from "../components/LandingHero";
import homeBg from "../assets/img/home_bg.png";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const navigate = useNavigate(); // get navigation function

  const handleGetStarted = () => {
    navigate("/login"); // change URL to /login
  };

  const welcomeRef = useRef<HTMLElement | null>(null);
  const [welcomeVisible, setWelcomeVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setWelcomeVisible(entry.isIntersecting);
      },
      { threshold: 0.4 },
    );

    if (welcomeRef.current) {
      observer.observe(welcomeRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Landing */}
      <section className="landing">
        <LandingHero />
        <p className="scroll-hint">Scroll down</p>
      </section>

      {/* Welcome */}
      <section
        ref={welcomeRef}
        className={`welcome ${welcomeVisible ? "visible" : ""}`}
        style={{ backgroundImage: `url(${homeBg})` }}
      >
        <div className="welcome-card">
          <h1 className="text-center fs-1">Welcome Teacher!</h1>
          <p className="fs-5">
            Design engaging, age-appropriate math lessons aligned with Grade 1
            learning competencies.
          </p>
          <button className="button button-primary" onClick={handleGetStarted}>
            Get Started
          </button>
        </div>
      </section>
    </>
  );
};

export default Home;
