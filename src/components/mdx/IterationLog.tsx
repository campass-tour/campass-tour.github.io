import React from 'react';
import { Target, Bug, Lightbulb, ArrowDown } from 'lucide-react';
import './IterationLog.css';


export interface TrialProps {
  id: string;
  title: string;
  approach: string;
  pivot: string;
  image?: string;
  github?: {
    url: string;
    label?: string;
  };
}

export const IterationLog = ({ trials }: { trials: TrialProps[] }) => {
  return (
    <div className="iteration-log-container">
      {trials.map((trial, index) => (
        <div key={trial.id} className="iteration-log-step">
          <div className="trial-card">
            <div className="trial-header">
              <span className="trial-badge">{trial.id}</span>
              <h4 className="trial-title">{trial.title}</h4>
            </div>
            
            <div className="trial-body">
              <div className="trial-segment approach">
                <div className="segment-icon-wrap"><Target size={18} /></div>
                <div className="segment-content">
                  <span className="segment-label">Approach</span>
                  <p>{trial.approach}</p>
                </div>
              </div>
              
              {trial.image && (
                <div className="trial-image">
                  <img src={trial.image} alt={`${trial.title} Error`} loading="lazy" />
                </div>
              )}
              {trial.github && (
                <div className="trial-github-link" style={{ marginTop: 8 }}>
                  <a
                    href={trial.github.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}
                    aria-label={trial.github.label || 'GitHub branch'}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ verticalAlign: 'middle' }} aria-hidden="true">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 4 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 8 21.13V25" />
                    </svg>
                    <span style={{ fontSize: 14, fontWeight: 500 }}>GitHub{trial.github.label ? `: ${trial.github.label}` : ''}</span>
                  </a>
                  <div style={{ fontSize: 13, color: 'var(--color-text-secondary, #888)', marginTop: 2 }}>
                    This version is for backend compression. You can clone the branch and run it locally.
                  </div>
                </div>
              )}

              <div className="trial-segment pivot">
                <div className="segment-icon-wrap"><Bug size={18} /></div>
                <div className="segment-content">
                  <span className="segment-label">Pivot</span>
                  <p>{trial.pivot}</p>
                </div>
              </div>
            </div>
          </div>
          
          {index < trials.length - 1 && (
            <div className="iteration-connector">
              <ArrowDown className="connector-icon" size={24} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
