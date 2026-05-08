import React, { useState } from 'react';
import { Lightbulb, Layers, ListTodo, Code2, ArrowRight } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: 'Ideation & Refinement',
    icon: Lightbulb,
    color: '#f59e0b',
    description: 'We started with a high-level design concept and consulted our AI Agent. The agent helped us brainstorm, patch logical gaps, and clarify ambiguous requirements into actionable goals.',
    tags: ['Brainstorming', 'Requirement Clarification', 'Agent Collaboration']
  },
  {
    id: 2,
    title: 'Architecture & Tech Stack',
    icon: Layers,
    color: '#3b82f6',
    description: 'Based on the refined requirements, we negotiated the optimal system architecture and selected a modern technology stack capable of supporting our features robustly.',
    tags: ['System Design', 'Tech Stack Selection', 'Feasibility Check']
  },
  {
    id: 3,
    title: 'Agile Task Planning',
    icon: ListTodo,
    color: '#10b981',
    description: 'We broke the project down into a comprehensive checklist. We mapped out Product Backlog Items (PBIs) and divided them into fine-grained, independently verifiable tasks. We execute and verify these strictly one task at a time.',
    tags: ['PBIs', 'Micro-tasks', 'Step-by-step Verification']
  },
  {
    id: 4,
    title: 'Vibe Coding & Skill Abstraction',
    icon: Code2,
    color: '#8b5cf6',
    description: 'During implementation, we maintain a tight feedback loop. Whenever we encounter repetitive logic or specific coding patterns, we extract them into a dedicated `skills` folder. This empowers the agent with domain-specific knowledge for future tasks.',
    tags: ['Prompt Engineering', 'Custom Skills', 'Iterative Execution']
  }
];

export const VibeCodingTimeline = () => {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <div style={{ margin: '2rem 0', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      {/* Interactive Step Navigation */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        marginBottom: '2rem',
        overflowX: 'auto',
        paddingBottom: '1rem'
      }}>
        {steps.map((step, index) => {
          const isActive = activeStep === step.id;
          const Icon = step.icon;
          return (
            <React.Fragment key={step.id}>
              <div 
                onClick={() => setActiveStep(step.id)}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '0.75rem',
                  cursor: 'pointer',
                  opacity: isActive ? 1 : 0.5,
                  transition: 'all 0.3s ease',
                  flex: 1,
                  minWidth: '100px'
                }}
              >
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  background: isActive ? step.color : 'transparent',
                  border: `2px solid ${step.color}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: isActive ? 'white' : step.color,
                  transition: 'all 0.3s ease',
                  boxShadow: isActive ? `0 0 20px ${step.color}40` : 'none'
                }}>
                  <Icon size={24} />
                </div>
                <span style={{ 
                  fontWeight: isActive ? '700' : '500', 
                  fontSize: '0.85rem', 
                  textAlign: 'center',
                  color: isActive ? 'var(--ifm-font-color-base)' : 'inherit'
                }}>
                  {step.title}
                </span>
              </div>
              {index < steps.length - 1 && (
                <div style={{ 
                  flex: 1, 
                  height: '2px', 
                  background: 'var(--ifm-color-emphasis-300)',
                  margin: '0 1rem',
                  marginTop: '-30px',
                  opacity: 0.5
                }} />
              )}
            </React.Fragment>
          );
        })}
      </div>

      {/* Active Step Content */}
      <div style={{
        background: 'var(--button-outline-bg, rgba(0,0,0,0.03))',
        borderRadius: '16px',
        padding: '2rem',
        border: '1px solid var(--ifm-color-emphasis-200)',
        minHeight: '220px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }}>
        {steps.map((step) => (
          <div 
            key={step.id} 
            style={{ 
              display: activeStep === step.id ? 'block' : 'none',
              animation: 'fadeIn 0.4s ease-in-out'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <span style={{ 
                background: `${step.color}20`, 
                color: step.color,
                padding: '0.25rem 0.75rem',
                borderRadius: '999px',
                fontWeight: 'bold',
                fontSize: '0.875rem'
              }}>
                Step {step.id}
              </span>
              <h3 style={{ margin: 0, fontSize: '1.5rem', color: 'var(--ifm-heading-color)' }}>
                {step.title}
              </h3>
            </div>
            
            <p style={{ fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '1.5rem', color: 'var(--ifm-font-color-base)' }}>
              {step.description}
            </p>

            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {step.tags.map(tag => (
                <span 
                  key={tag}
                  style={{
                    background: 'var(--ifm-color-emphasis-100)',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '8px',
                    fontSize: '0.85rem',
                    color: 'var(--ifm-color-emphasis-700)'
                  }}
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};
