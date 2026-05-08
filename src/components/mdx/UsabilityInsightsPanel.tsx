import React, { useState } from 'react';
import { PlayRenderer, MapPin, Camera, Move3d, Users, Smartphone, Hand, ChevronRight } from 'lucide-react';
import './UsabilityInsightsPanel.css';

const insights = [
  {
    id: 't1',
    task: 'T1: Treasure Hunt',
    icon: <MapPin size={24} />,
    focus: 'User Role Divergence',
    problem: 'Visitors struggled to find target pins based on fuzzy clues, often closing drawers and guessing blindly (Error T1-1). The gap in spatial campus knowledge was severe.',
    solutionTitle: 'Role-Adaptive Questions',
    solutionIcon: <Users size={20} />,
    solutionDesc: (
      <>
        <p>Introduced branching clue logic. Visitors receive graded map pins and progressive hints.</p>
        <a href="/docs/evaluation-reflection/iterative-refinement#feedback-3---context-aware-gamification-the-adaptive-quiz-engine" className="refinement-link-btn">
          <span>View Refinement Detail</span>
          <ChevronRight size={14} />
        </a>
      </>
    )
  },
  {
    id: 't3',
    task: 'T3: AR Camera',
    icon: <Camera size={24} />,
    focus: 'Performance & Compatibility',
    problem: 'Severe latency during AR launch (T3-2) and failed 3D model loads on older devices (T3-1). The rendering pipeline overhead blocked the "magic" moment.',
    solutionTitle: '<model-viewer> & Pipeline Optimization',
    solutionIcon: <Smartphone size={20} />,
    solutionDesc: (
      <>
        <p>Migrated to WebXR-based &lt;model-viewer&gt; for native-level AR support.</p>
        <a href="/docs/evaluation-reflection/iterative-refinement#feedback-1---mobile-device-lag" className="refinement-link-btn">
          <span>View Refinement Detail</span>
          <ChevronRight size={14} />
        </a>
      </>
    )
  },
  {
    id: 't5',
    task: 'T5: 3D Dressing',
    icon: <Move3d size={24} />,
    focus: 'Gesture Conflicts',
    problem: 'Users frequently triggered model rotation when attempting to scroll the page (T5-2), coupled with rendering stutter when swapping accessories.',
    solutionTitle: 'Interaction Isolation & Rendering',
    solutionIcon: <Hand size={20} />,
    solutionDesc: (
      <>
        <p>Physically isolated the 3D interaction zone from the scrollable UI.</p>
        <a href="/docs/evaluation-reflection/iterative-refinement#feedback-2---3d-gesture-conflicts" className="refinement-link-btn">
          <span>View Refinement Detail</span>
          <ChevronRight size={14} />
        </a>
      </>
    )
  }
];

export default function UsabilityInsightsPanel() {
  const [activeId, setActiveId] = useState('t1');

  return (
    <div className="usability-insights-root">
      <div className="insights-tabs">
        {insights.map((item) => (
          <button
            key={item.id}
            className={`insight-tab-btn ${activeId === item.id ? 'active' : ''}`}
            onClick={() => setActiveId(item.id)}
          >
            {item.icon}
            <span>{item.task}</span>
          </button>
        ))}
      </div>

      <div className="insight-content-area">
        {insights.map((item) => (
          <div
            key={item.id}
            className={`insight-card ${activeId === item.id ? 'visible' : 'hidden'}`}
          >
            <div className="insight-card-header">
              <h3>{item.focus}</h3>
            </div>
            
            <div className="insight-grid">
              <div className="insight-problem-box">
                <div className="insight-box-label friction">Observed Friction</div>
                <p>{item.problem}</p>
              </div>
              
              <div className="insight-arrow">
                <ChevronRight size={32} color="var(--ifm-color-primary-light)" />
              </div>
              
              <div className="insight-solution-box">
                <div className="insight-box-label solution">Design Strategy</div>
                <div className="solution-title">
                  {item.solutionIcon}
                  <h4>{item.solutionTitle}</h4>
                </div>
                <div className="solution-desc-wrap">
                  {item.solutionDesc}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
