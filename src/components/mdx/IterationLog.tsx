import React from 'react';
import { Target, Bug, Lightbulb, ArrowDown } from 'lucide-react';
import './IterationLog.css';

export interface TrialProps {
  id: string;
  title: string;
  approach: string;
  pivot: string;
  image?: string;
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
