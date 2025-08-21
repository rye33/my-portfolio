import data from "../../data/index.json";

export default function MySkills() {
  return (
    <section className="skills--section" id="MySkills">
      <h1>
        My <span>Skills</span>
      </h1>

      <div className="skills--section--container">
        {data?.skills?.map((item, index) => (
          <div keys={index} className="skills--section--card">
            <div className="skills--section--img">
              <img src={item.src} alt="Product Chain" />
            </div>
            <div className="skills--section--card--content">
              <h2 className="skills--section--title">{item.title}</h2>
              <p className="skills--section--description--">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
