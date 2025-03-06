import React, { useEffect, useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as SiIcons from 'react-icons/si';
import skillsData from '../assets/data/skills';
import '../styles/pages/index.scss';

const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    setSkills(skillsData);
  }, []);

  return (
    <div className="skills">
      {skills.map((skill) => {
      
        const IconComponent = FaIcons[skill.icon] || SiIcons[skill.icon];

        return (
          <div key={skill.id} className="skill">
            <div className="skill__icon">{IconComponent && React.createElement(IconComponent)}</div>
            <p className="skill__label">{skill.title}</p>
            <div className="skill__rating">
              {[...Array(5)].map((_, i) => (
                <div key={i} className={`circle ${skill.rating > i ? 'circle--plain' : ''}`}></div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Skills;
