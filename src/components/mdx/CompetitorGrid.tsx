import React from 'react';
import './CompetitorGrid.css';

const competitors = [
  {
    name: 'Super Nintendo World',
    sub: 'Power-Up Band System',
    strengths: ['Seamless NFC interaction', 'Emotional IP resonance', 'Strong collection loops'],
    misses: ['Expensive hardware required', 'No real-world navigation', 'Closed ecosystem (no UGC)']
  },
  {
    name: 'Snapchat / Instagram',
    sub: 'Social AR & Lens Studio',
    strengths: ['Zero-friction viral sharing', 'Massive filter library', 'Best mobile AR usability'],
    misses: ['No geolocation/history ties', 'No long-term progression', 'Lacks utilitarian tools']
  },
  {
    name: 'Google Maps',
    sub: 'Location-based UGC',
    strengths: ['Massive authentic database', 'Reliable navigation', 'Mature incentive system'],
    misses: ['Overly commercial vibe', 'Lacks playfulness/presence', 'Missing "Insider" student vibe']
  },
  {
    name: 'Official Campus Apps',
    sub: 'Native University Apps',
    strengths: ['High authority/accuracy', 'Official service integration', 'Offline schedule caching'],
    misses: ['High friction (App download)', 'Purely utilitarian; no "Soul"', 'No sense of social belonging']
  }
];

export default function CompetitorGrid() {
  return (
    <div className="comp-grid">
      {competitors.map((c, i) => (
        <div key={i} className="comp-card">
          <div className="comp-header">
            <h4>{c.name}</h4>
            <span>{c.sub}</span>
          </div>
          <div className="comp-body">
            <div className="comp-section">
              <span className="section-label pos">Strengths</span>
              <ul>{c.strengths.map((s, j) => <li key={j}>{s}</li>)}</ul>
            </div>
            <div className="comp-section">
              <span className="section-label neg">Missed Opportunities</span>
              <ul>{c.misses.map((m, k) => <li key={k}>{m}</li>)}</ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
