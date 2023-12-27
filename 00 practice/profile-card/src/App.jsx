import PropTypes from "prop-types";
import "./App.css";

const skills = [
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#123456",
  },
  {
    skill: "Python",
    level: "intermediate",
    color: "orangered",
  },
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "yellow",
  },
  {
    skill: "React",
    level: "advanced",
    color: "orange",
  },
  {
    skill: "Vue",
    level: "beginner",
    color: "lightblue",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img src="jenkin.jpg" alt="jenkin" className="avatar" />;
}

function Intro() {
  return (
    <div>
      <h1>Jenkin Pan</h1>
      <p>Web Developer</p>
    </div>
  );
}

function SkillList() {
  return (
    <ul className="skill-list">
      {skills.map((skill) => (
        <Skill
          key={skill.skill}
          name={skill.skill}
          level={skill.level}
          color={skill.color}
        />
      ))}
    </ul>
  );
}

Skill.propTypes = {
  name: PropTypes.string.isRequired,
  level: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

function Skill({ name, level, color }) {
  return (
    <li className="skill" style={{ backgroundColor: color }}>
      {name}
      <span>
        {level === "beginner" && "👶"}
        {level === "intermediate" && "🤓"}
        {level === "advanced" && "💪"}
      </span>
    </li>
  );
}

export default App;
