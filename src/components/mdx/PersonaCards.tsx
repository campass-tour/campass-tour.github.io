import React from 'react';
import { Camera, Map, Award, BookOpen, History, Compass } from 'lucide-react';
import './PersonaCards.css';

const personas = [
  {
    role: "Visitors",
    subtitle: "External Stakeholders",
    focus: "Campus culture, history & landmark storytelling",
    icon: History,
    accent: "#3b82f6", // Blue
    details: ["Hidden Stories", "Architectural Style", "Photo Spots"]
  },
  {
    role: "Freshmen",
    subtitle: "The Novices",
    focus: "Survival Hacks & navigating academic facilities",
    icon: Compass,
    accent: "#10b981", // Green
    details: ["Quickest Routes", "Facility Access", "Study Zones"]
  },
  {
    role: "Seniors",
    subtitle: "The Experts",
    focus: "Hidden architectural details & design mastery",
    icon: Award,
    accent: "#f59e0b", // Amber
    details: ["Design Rationale", "Easter Eggs", "Expert Knowledge"]
  }
];

export const PersonaCards = () => {
  return (
    <div className="persona-cards-container">
      {personas.map((p, idx) => {
        const Icon = p.icon;
        return (
          <div key={idx} className="persona-card" style={{ '--accent-color': p.accent } as React.CSSProperties}>
            <div className="persona-card-header">
              <div className="persona-icon-wrapper">
                <Icon size={24} />
              </div>
              <div className="persona-title-group">
                <h4>{p.role}</h4>
                <span>{p.subtitle}</span>
              </div>
            </div>
            <p className="persona-focus">{p.focus}</p>
            <div className="persona-details">
              {p.details.map((detail, dIdx) => (
                <span key={dIdx} className="persona-tag">{detail}</span>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};
