import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Circle,
  Lightbulb,
  Workflow,
  Target,
  PenTool,
  Code2,
  Film,
  TestTube,
  Rocket
} from 'lucide-react';
import './ContributionsTable.css';

const STAGES = [
  { id: 1, name: 'User Research', icon: <Lightbulb size={20} /> },
  { id: 2, name: 'Strategy & Logic', icon: <Workflow size={20} /> },
  { id: 3, name: 'UI/UX Design', icon: <PenTool size={20} /> },
  { id: 4, name: 'Development', icon: <Code2 size={20} /> },
  { id: 5, name: 'Content', icon: <Film size={20} /> },
  { id: 6, name: 'Evaluation & Delivery', icon: <Rocket size={20} /> },
];

const CONTRIBUTIONS = {
  'Qiran Xiao': {
    1: ['Literature Review', 'Competitor Research', 'Pain Point Identification'],
    2: ['User Journey Mapping'],
    3: ['Design System', 'Crazy 8s (map page)'],
    4: ['System Architecture','AR & 3D Integration', 'Core Logic Implementation', 'DevOps & Deployment'],
    5: ['3D Custom Asset Design (CB, one-stop)', 'Landmark Lore (CB, one-stop)', 'Quiz & Challenges (CB, one-stop)'],
    6: ['Feedback Iteration', 'Portfolio Website']
  },
  'A': {
    1: [], 2: [], 3: [], 4: [], 5: [], 6: []
  },
  'B': {
    1: [], 2: [], 3: [], 4: [], 5: [], 6: []
  },
  'C': {
    1: [], 2: [], 3: [], 4: [], 5: [], 6: []
  }
};

export default function ContributionsTable() {
  const [activeCell, setActiveCell] = useState<{stage: number, person: string} | null>(null);

  const getHeatmapClass = (count: number) => {
    if (count === 0) return 'ct-circle count-0';
    if (count === 1) return 'ct-circle count-1';
    if (count === 2) return 'ct-circle count-2';
    if (count >= 3) return 'ct-circle count-3';
    return 'ct-circle count-0';
  };

  return (
    <div className="contributions-table-wrapper">
      <table className="contributions-table">
        <thead>
          <tr>
            <th className="ct-header-stage">Stage</th>
            {Object.keys(CONTRIBUTIONS).map(person => (
              <th key={person} className="ct-header-person">{person}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {STAGES.map((stage) => (
            <tr key={stage.id} className="ct-row">
              <td className="ct-cell-stage">
                <div className="ct-stage-label">
                  {stage.icon}
                  <span>{stage.id}. {stage.name}</span>
                </div>
              </td>
              {Object.keys(CONTRIBUTIONS).map((person) => {
                const tasks = CONTRIBUTIONS[person as keyof typeof CONTRIBUTIONS][stage.id as keyof (typeof CONTRIBUTIONS)['Qiran Xiao']] || [];
                const isActive = activeCell?.stage === stage.id && activeCell?.person === person;
                const isLowerHalf = stage.id > STAGES.length / 2;
                
                return (
                  <td 
                    key={`${stage.id}-${person}`}
                    className={`ct-cell-task ${tasks.length > 0 ? 'ct-has-tasks' : ''} ${isActive ? 'ct-active' : ''}`}
                    onMouseEnter={() => tasks.length > 0 && setActiveCell({ stage: stage.id, person })}
                    onMouseLeave={() => setActiveCell(null)}
                  >
                    <div className="ct-cell-content">
                      <div className={getHeatmapClass(tasks.length)}>
                        {tasks.length > 0 && <span className="ct-circle-text">{tasks.length}</span>}
                      </div>
                    </div>
                    {isActive && tasks.length > 0 && (
                      <div className={`ct-tooltip ${isLowerHalf ? 'ct-tooltip-top' : 'ct-tooltip-bottom'}`}>
                        <div className="ct-tooltip-title">{person}'s Contributions</div>
                        <ul className="ct-tooltip-list">
                          {tasks.map((task, idx) => (
                            <li key={idx}><CheckCircle2 size={14} className="ct-tooltip-icon" />{task}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
