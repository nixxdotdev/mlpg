const LandingHero: React.FC = () => {
  return (
    <section className="landing-hero">
      <div className="orbit-container">
        <div className="orbit orbit-1">
          <div className="circle circle-primary" />
        </div>
        <div className="orbit orbit-2">
          <div className="circle circle-accent" />
        </div>
        <div className="orbit orbit-3">
          <div className="circle circle-soft" />
        </div>
      </div>

      <h1 className="hero-title">Lesson Plan Authoring Tool</h1>
      <p className="hero-subtitle">
        Generate, create, edit, and export professional lesson plans for free
        with AI.
      </p>
    </section>
  );
};

export default LandingHero;
