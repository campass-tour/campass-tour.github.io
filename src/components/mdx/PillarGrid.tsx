import React from 'react';
import type { CSSProperties } from 'react';
import { MapPinned, Sparkles, Users, ChevronRight } from 'lucide-react';
import './PillarGrid.css';

const pillars = [
  {
    title: 'NFC Check-ins',
    icon: <MapPinned size={24} />,
    desc: 'Turning physical touchpoints into rewarding interactions. Low-friction entry points for users to start their journey.',
    color: 'var(--ifm-color-primary)'
  },
  {
    title: 'AR Encounters',
    icon: <Sparkles size={24} />,
    desc: 'Layering digital wonder onto physical reality. Making campus landmarks memorable through interactive storytelling.',
    color: 'var(--color-solution-text)'
  },
  {
    title: 'Social Layer',
    icon: <Users size={24} />,
    desc: 'Fostering community through place-based content. Shared discoveries reduce the isolation of a new environment.',
    color: 'var(--color-winner)'
  }
];

export default function PillarGrid() {
  return (
    <div className="pillar-grid">
      {pillars.map((p, i) => (
        <div key={i} className="pillar-card" style={{ '--accent': p.color } as CSSProperties}>
          <div className="pillar-header">
            <div className="pillar-icon-box">{p.icon}</div>
            <h3>{p.title}</h3>
          </div>
          <p className="pillar-desc">{p.desc}</p>
          <div className="pillar-footer">
            <ChevronRight size={16} className="pillar-arrow" />
          </div>
        </div>
      ))}
    </div>
  );
}
