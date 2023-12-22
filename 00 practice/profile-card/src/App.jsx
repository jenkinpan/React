import PropTypes from "prop-types";
import "./App.css";

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
      <Skill name="JavaScript" level="💪" color="#123456" />
      <Skill name="Python" level="👶" color="orangered" />
      <Skill name="HTML+CSS" level="💪" color="yellow" />
      <Skill name="React" level="💪" color="orangered" />
      <Skill name="Vue" level="👶" color="lightblue" />
    </ul>
  );
}

Skill.propTypes = {
  name: PropTypes.string.isRequired,
  level: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

function Skill(props) {
  return (
    <li className="skill" style={{ backgroundColor: props.color }}>
      {props.name}
      <span>{props.level}</span>
    </li>
  );
}

export default App;
