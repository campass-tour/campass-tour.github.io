import React from 'react';
import type { CSSProperties } from 'react';
import { Compass, GraduationCap, Camera, Search, Flame, BookOpen, ChevronRight } from 'lucide-react';
import './StakeholderPersonas.css';

const personas = [
  {
    type: 'The Explorer',
    quote: "How do I get to my next class?",
    icon: <Compass size={28} />,
    color: 'var(--ifm-color-primary)',
    bg: 'var(--ifm-color-primary-lightest)',
    friction: 'Spatial anxiety & orientation loss',
    focus: 'Functional Certainty',
    desc: 'New students or users unfamiliar with XJTLU. They need lightweight orientation and clear paths to reduce anxiety.',
    feature: 'WebXR Map & Clues'
  },
  {
    type: 'The Veteran',
    quote: "Is there anything new happening?",
    icon: <GraduationCap size={28} />,
    color: 'var(--color-solution-text)',
    bg: 'var(--bg-solution)',
    friction: 'Routine boredom & low re-engagement',
    focus: 'Novelty & Interaction',
    desc: 'Returning students who know the map. They seek social hidden gems, trivia, and reasons to rediscover familiar spaces.',
    feature: 'Trivia Tasks & Badges'
  },
  {
    type: 'The Guest',
    quote: "What makes XJTLU special?",
    icon: <Camera size={28} />,
    color: 'var(--color-winner)',
    bg: 'var(--color-winner-bg)',
    friction: 'Information overload & lack of context',
    focus: 'Curated Storytelling',
    desc: 'Visitors and parents. They need an accessible "highlight reel" of campus culture, history, and architectural identity.',
    feature: 'Cultural Heritage Tours'
  }
];

export default function StakeholderPersonas() {
  return (
    <div className="persona-grid">
      {personas.map((p, i) => (
        <div key={i} className="persona-card" style={{ '--persona-color': p.color, '--persona-bg': p.bg } as CSSProperties}>
          <div className="persona-header">
            <div className="persona-icon-box">
              {p.icon}
            </div>
            <div className="persona-title-group">
              <span className="persona-type">{p.type}</span>
              <h4 className="persona-quote">"{p.quote}"</h4>
            </div>
          </div>
          
          <div className="persona-body">
            <p className="persona-desc">{p.desc}</p>
            
            <div className="persona-meta">
              <div className="meta-item">
                <Search size={14} className="meta-icon" />
                <div className="meta-content">
                  <span className="meta-label">Pain Point</span>
                  <span className="meta-value">{p.friction}</span>
                </div>
              </div>
              <div className="meta-item">
                <Flame size={14} className="meta-icon" />
                <div className="meta-content">
                  <span className="meta-label">Focus</span>
                  <span className="meta-value">{p.focus}</span>
                </div>
              </div>
              <div className="meta-item">
                <BookOpen size={14} className="meta-icon" />
                <div className="meta-content">
                  <span className="meta-label">Key Feature</span>
                  <span className="meta-value">{p.feature}</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="persona-footer">
            <div className="persona-arrow">
              <ChevronRight size={20} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
