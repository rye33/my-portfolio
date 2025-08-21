export default function AboutMe() {
  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <img src="./img/about-me.png" alt="About" />
      </div>
      <div className="about--section--content">
        <h1>
          About <span>Me</span>
        </h1>
        <br />
        <h2>
          I'm <span>IT Specialists</span>
        </h2>
        <p>
          Passionate IT professional with 5+ years of experience in IT field as
          Information Systems Specialist and Data Integrity Officer. Skilled in
          Oracle Business Intelligence Publisher, now known as Oracle Analytics
          Publisher and ARINC airport systems and technologies, with a focus on
          seamless user experiences.
        </p>
        <a>
          <button className="btn btn-primary">Read more</button>
        </a>
      </div>
    </section>
  );
}
