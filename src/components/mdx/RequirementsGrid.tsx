import React from 'react';
import { Target, CheckCircle2, Star, Share2, MessageSquare, Hand } from 'lucide-react';
import './RequirementsGrid.css';

const requirements = [
  {
    id: 'R1',
    title: 'NFC Tangible Check-in',
    icon: <Hand className="req-icon" size={32} />,
    goal: 'DG1: Turn campus movement into active exploration.',
    description: 'Transform passive walking into an active treasure hunt. Users physically tap tags to unlock spot-specific stories and digital collectibles.',
    acceptance: 'Clear progress tracking of collected vs. remaining items; zero latency in tag detection.',
    tag: 'EXPLORATION',
    theme: 'primary'
  },
  {
    id: 'R2',
    title: 'AR Companion Photo Op',
    icon: <Share2 className="req-icon" size={32} />,
    goal: 'DG2: Create memorable and shareable campus moments.',
    description: 'Create expressive personal memories. Users can summon 3D mascots in real campus settings for creative photography and social sharing.',
    acceptance: 'Users can complete the AR capture flow in under 15 seconds without performance lag.',
    tag: 'EXPRESSION',
    theme: 'accent'
  },
  {
    id: 'R3',
    title: 'Gamified Stamp Collection',
    icon: <Star className="req-icon" size={32} />,
    goal: 'DG3: Sustain motivation through visible progression.',
    description: 'Foster long-term engagement through progression. A digital passport that visualizes collection milestones and encourages total campus mastery.',
    acceptance: 'Visual feedback for achievement tiers and unlock animations for missing collection slots.',
    tag: 'GAMIFICATION',
    theme: 'success'
  },
  {
    id: 'R4',
    title: 'Location Message Wall',
    icon: <MessageSquare className="req-icon" size={32} />,
    goal: 'DG4: Connect individual exploration to community presence.',
    description: 'Build community continuity. A geo-locked social space where users leave notes and tips, making each landmark feel alive with contributions.',
    acceptance: 'Successful posting of media/text with automatic location binding after check-in.',
    tag: 'SOCIAL',
    theme: 'primary'
  }
];

export default function RequirementsGrid() {
  return (
    <div className="requirements-grid-root">
      {requirements.map((req, index) => (
        <div key={index} className={`requirement-card theme-${req.theme}`}>
          <div className="req-header">
            <div className="req-icon-sphere">
              {req.icon}
            </div>
            <div className="req-pill-stack">
              <span className="req-id-pill">{req.id}</span>
              <span className="req-tag-pill">{req.tag}</span>
            </div>
          </div>
          
          <div className="req-body">
            <h3>{req.title}</h3>
            <p className="req-goal">{req.goal}</p>
            <p className="req-desc">{req.description}</p>
          </div>
          
          <div className="req-footer">
            <div className="acceptance-label">
              <CheckCircle2 size={16} />
              <span>Acceptance Signal</span>
            </div>
            <p className="req-acceptance">{req.acceptance}</p>
          </div>
          
          <div className="card-glimmer"></div>
        </div>
      ))}
    </div>
  );
}
