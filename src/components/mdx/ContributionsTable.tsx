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
    1: ['Literature & Competitor Research'],
    2: ['User Journey Mapping', 'Pain Point Identification','Playful Strategy' ],
    3: ['Style Guide', 'Crazy 8s (map page)', 'UI Assets'],
    4: ['System Architecture','Map & Logic Integration', 'AR & 3D Integration', 'NFC & Search Logic', 'DevOps & Deployment'],
    5: ['3D Custom Asset Design (CB, one-stop)', 'Landmark Lore (CB, one-stop)', 'Quiz & Challenges (CB, one-stop)','Social Seeding(CB, one-stop)','UX Writing'],
    6: ['Usability Testing Plan','Iterative Refinement', 'Portfolio Website']
  },
  'Ling Xu': {
    1: ['Literature & Competitor Research', 'Questionnaire Design & User Survey', 'User Interview Recording & Insight Collection'],
    2: ['Design Solution Development', 'Playful Strategy'],
    3: ['Crazy 8s (collection page)', 'Interactive Prototyping (Figma)', 'UI Assets', '2D Icon Clue Design'],
    4: ['AR & 3D Integration', 'DevOps & Deployment'],
    5: ['3D Custom Asset Design (SB, EB)', 'Landmark Lore (SB, EB)', 'Quiz & Challenges (SB, EB)', 'Social Seeding (SB, EB)', 'UX Writing'],
    6: ['Iterative Refinement', 'Portfolio Website', 'Video Voiceover Production']
  },
  'Keyao Li': {
    1: ['Literature & Competitor Research','The Gap Analysis','Evidence of Life Collection','Persona Design'],
    2: ['Playful Strategy','Pain Point Identification'],
    3: ['Crazy 8s (profile page)','Component Design (Figma)','Interactive Prototyping (Figma)','UI Assets'],
    4: ['Map & Logic Integration','DevOps & Deployment'],
    5: ['3D Custom Asset Design(FB, GYM)','Landmark Lore(FB, GYM)','Quiz Design(FB, GYM)','Social Seeding(FB, GYM)','UX Writing'],
    6: ['Video Production','Usability Testing','Portfolio Website']
  },
  'Xucheng Xue': {
    1: { score: 2, tasks: ['Literature & Competitor Research', 'User Survey'] },
    2: { score: 2, tasks: ['Playful Strategy', 'Testing Task Design'] },
    3: { score: 3, tasks: ['Crazy 8s (wall page)', 'UI Assets', 'Clue Design'] },
    4: { score: 2, tasks: ['AR & 3D Integration', 'DevOps & Deployment'] },
    5: { score: 5, tasks: ['3D Custom Asset Design(HS, BS)', 'Landmark Lore(HS, BS)', 'Quiz Design(HS, BS)', 'Social Seeding(HS, BS)', 'UX Writing'] },
    6: { score: 2, tasks: ['Evaluation & Impact Section', 'Portfolio Website'] }
  }
};

export default function ContributionsTable() {
  const [activeCell, setActiveCell] = useState<{stage: number, person: string} | null>(null);

  const getHeatmapClass = (count: number) => {
    if (count === 0) return 'ct-circle count-0';
    if (count === 1) return 'ct-circle count-1';
    if (count === 2) return 'ct-circle count-2';
    if (count === 3) return 'ct-circle count-3';
    if (count === 4) return 'ct-circle count-4';
    if (count >= 5) return 'ct-circle count-5';
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
                const entry = (CONTRIBUTIONS[person as keyof typeof CONTRIBUTIONS] as Record<number, string[] | { score: number; tasks: string[] }>)[stage.id] || [];
                const tasks = Array.isArray(entry) ? entry : entry.tasks;
                const contributionCount = Array.isArray(entry) ? entry.length : entry.score;
                const isActive = activeCell?.stage === stage.id && activeCell?.person === person;
                const isLowerHalf = stage.id > STAGES.length / 2;
                
                return (
                  <td 
                    key={`${stage.id}-${person}`}
                    className={`ct-cell-task ${contributionCount > 0 ? 'ct-has-tasks' : ''} ${isActive ? 'ct-active' : ''}`}
                    onMouseEnter={() => contributionCount > 0 && setActiveCell({ stage: stage.id, person })}
                    onMouseLeave={() => setActiveCell(null)}
                  >
                    <div className="ct-cell-content">
                      <div className={getHeatmapClass(contributionCount)}>
                        {contributionCount > 0 && <span className="ct-circle-text">{contributionCount}</span>}
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
