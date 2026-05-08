import React from 'react';
import { ExternalLink, Target, Info } from 'lucide-react';
import './ResearchTable.css';

const researchData = [
  {
    title: 'Gamification in LBS',
    source: 'ACM Digital Library',
    url: 'https://dl.acm.org/doi/abs/10.1145/1978942.1979295',
    contributions: ['Validated badge systems', 'Established reward loops', '"Treasure Hunt" mechanics'],
    gaps: ['Over-reliance on leaderboards', 'Novelty decay issues', 'Weak P2P social']
  },
  {
    title: 'Outdoor Interactive Education',
    source: 'MDPI Applied Sciences',
    url: 'https://www.mdpi.com/2076-3417/11/16/7515',
    contributions: ['Integrated AR with Geolocation', 'Casual user Web-AR optimization', 'Instant capture/sharing'],
    gaps: ['High asset load latency', 'No persistent site binding', 'High friction for passers-by']
  },
  {
    title: 'Performing the Digital Self',
    source: 'ACM CHI Conference',
    url: 'https://dl.acm.org/doi/fullHtml/10.1145/3364997',
    contributions: ['Location-based identity', 'Digital layers in physical space', 'Sense of community'],
    gaps: ['Urban vs micro-campus focus', 'Asynchronous interaction', 'Implementation was conceptual']
  },
  {
    title: 'Virtualizing Campus Tours',
    source: 'ResearchGate Study',
    url: 'https://www.researchgate.net/publication/346035044',
    contributions: ['Orientation pain points', 'Gamified navigation efficacy', 'User perception data'],
    gaps: ['Rigid linear narratives', 'Low post-onboarding stickiness', 'Ignored non-gamers']
  }
];

export default function ResearchTable() {
  return (
    <div className="research-table-wrapper">
      <div className="research-grid-header">
        <div className="header-cell">Research & Source</div>
        <div className="header-cell">Key Contributions</div>
        <div className="header-cell">Identified Gaps</div>
      </div>
      <div className="research-grid-body">
        {researchData.map((item, i) => (
          <div key={i} className="research-row">
            <div className="research-cell source-cell">
              <div className="cell-content">
                <strong>{item.title}</strong>
                <a href={item.url} target="_blank" className="source-link">
                  {item.source} <ExternalLink size={12} />
                </a>
              </div>
            </div>
            <div className="research-cell">
              <ul className="contribution-list">
                {item.contributions.map((c, j) => <li key={j}>{c}</li>)}
              </ul>
            </div>
            <div className="research-cell gap-cell">
              <ul className="gap-list">
                {item.gaps.map((g, k) => <li key={k}>{g}</li>)}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
