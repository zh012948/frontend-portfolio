import React from 'react';
import '../styles/SkillCard.css';

const SkillCard = React.memo(function SkillCard({ leftIcon, role, skills = [], columns = 3 }) {
  return (
    <div className="skill-card-container">
      {/* Header */}
      <div className="top">
        <div className="skill-icon-background">
          <img src={leftIcon} alt="category icon" />
        </div>
        <p className="title">{role}</p>
      </div>

      {/* Skills Grid */}
      <div
        className="bottom"
        style={{
          gridTemplateColumns: `repeat(${columns}, 1fr)`
        }}
      >
        {skills.map((skill, index) => (
          <div className="skill-box" key={index}>
            <img
              src={skill.icon}
              className={`box-img ${skill.id === 'next' ? 'next-icon' : ''}`}
              alt={skill.text}
            />
            <p className="box-title">{skill.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
});

export default SkillCard;
