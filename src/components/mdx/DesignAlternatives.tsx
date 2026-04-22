import React, { useState } from 'react';
import clsx from 'clsx';
import { Compass, Info, CheckCircle, AlertTriangle } from 'lucide-react';
import './DesignAlternatives.css';

interface Metric {
  label: string;
  key: string;
  value: number; // 0 to 10
  icon: JSX.Element;
}

interface Option {
  id: string;
  title: string;
  visualSrc: string;
  description: string;
  dilemma: string;
  metrics?: Record<string, number>;
  verdict?: string;
  isWinner?: boolean;
  pros?: string;
  cons?: string;
}

interface DesignAlternativesProps {
  title: string;
  intro: string;
  metricsDef?: Array<{ label: string; def: string }>;
  options: Option[];
  hideRadar?: boolean;
}

export default function DesignAlternatives({ title, intro, options, metricsDef, hideRadar }: DesignAlternativesProps) {
  const [selectedId, setSelectedId] = useState<string>(options[0].id);

  const selectedOption = options.find((opt) => opt.id === selectedId) || options[0];

  const labels = ['Geo Accuracy', 'Immersion', 'Dev Eff', 'SNR'];

  return (
    <div className="design-alts-wrapper anim-fade-in">
      <div className="alt-header-container">
        <h2>
          <Compass size={28} className="alt-icon-primary" />
          {title}
        </h2>
        <p className="alt-intro-text">{intro}</p>
      </div>

      {/* Floating Cards / Tiles */}
      <div className="alt-cards-container">
        {options.map((opt) => (
          <div
            key={opt.id}
            className={clsx(
              'alt-card',
              selectedId === opt.id && 'selected',
              selectedId === opt.id && opt.isWinner && 'selected-winner'
            )}
            onClick={() => setSelectedId(opt.id)}
          >
            <img src={opt.visualSrc} alt={opt.title} className="alt-card-img" />
            <h3 className="alt-card-header">{opt.title}</h3>
            <p className="alt-card-desc">{opt.description}</p>
          </div>
        ))}
      </div>

      {/* Detail Panel */}
      <div className={clsx('alt-details-panel', hideRadar && 'alt-details-no-radar')}>
        <div className="alt-details-content">
          <div>
            <h3 className={clsx('alt-details-title', selectedOption.isWinner && 'winner')}>
              {selectedOption.title}
            </h3>
            
            <p><strong>The Dilemma:</strong> {selectedOption.dilemma}</p>

            <div className="alt-pros-cons-container">
              {selectedOption.pros && (
                <div className="alt-pro-item">
                  <CheckCircle size={20} className="alt-pro-icon" />
                  <div><strong>Pros:</strong> {selectedOption.pros}</div>
                </div>
              )}
              {selectedOption.cons && (
                <div className="alt-con-item">
                  <AlertTriangle size={20} className="alt-con-icon" />
                  <div><strong>Cons:</strong> {selectedOption.cons}</div>
                </div>
              )}
            </div>

            {selectedOption.verdict && (
              <div className="alt-verdict-box">
                <strong>Verdict:</strong> {selectedOption.verdict}
              </div>
            )}
          </div>
          
          {metricsDef && (
            <div className="alt-metrics-def-container">
              <details className="alt-metrics-details">
                <summary>
                  <Info size={16} /> Metrics Definition
                </summary>
                <ul>
                  {metricsDef.map((md) => (
                    <li key={md.label}><strong>{md.label}:</strong> {md.def}</li>
                  ))}
                </ul>
              </details>
            </div>
          )}
        </div>

        {!hideRadar && selectedOption.metrics && (
          <div className="radar-chart-container">
            <SimpleRadarChart
              values={[
                selectedOption.metrics.geo,
                selectedOption.metrics.imm,
                selectedOption.metrics.dev,
                selectedOption.metrics.snr,
              ]}
              labels={labels}
              isWinner={!!selectedOption.isWinner}
            />
          </div>
        )}
      </div>
    </div>
  );
}

// Custom simple radar chart built with SVG
function SimpleRadarChart({ values, labels, isWinner }: { values: number[]; labels: string[]; isWinner: boolean }) {
  const size = 300;
  const center = size / 2;
  const maxRadius = 100;
  const scale = maxRadius / 10;

  // Calculate points for the polygon (Top, Right, Bottom, Left)
  const getPoint = (val: number, index: number) => {
    const r = val * scale;
    if (index === 0) return `${center},${center - r}`;
    if (index === 1) return `${center + r},${center}`;
    if (index === 2) return `${center},${center + r}`;
    if (index === 3) return `${center - r},${center}`;
    return `${center},${center}`;
  };

  const polygonPoints = values.map((v, i) => getPoint(v, i)).join(' ');

  return (
    <svg width="100%" height={size} viewBox="0 0 300 300" style={{ maxWidth: '400px' }}>
      {/* Background grid (diamonds) */}
      {[2, 4, 6, 8, 10].map((tick) => {
        const r = tick * scale;
        const pts = `${center},${center - r} ${center + r},${center} ${center},${center + r} ${center - r},${center}`;
        return <polygon key={tick} points={pts} fill="none" stroke="var(--color-text-secondary)" strokeOpacity="0.2" />;
      })}

      {/* Axes */}
      <line x1={center} y1={center - maxRadius} x2={center} y2={center + maxRadius} stroke="var(--color-text-secondary)" strokeOpacity="0.3" strokeDasharray="3 3"/>
      <line x1={center - maxRadius} y1={center} x2={center + maxRadius} y2={center} stroke="var(--color-text-secondary)" strokeOpacity="0.3" strokeDasharray="3 3"/>

      {/* Axis labels */}
      <text x={center} y={center - maxRadius - 10} textAnchor="middle" fill="var(--color-text-secondary)" fontSize="12" fontWeight="600">{labels[0]}</text>
      <text x={center + maxRadius + 10} y={center + 4} textAnchor="start" fill="var(--color-text-secondary)" fontSize="12" fontWeight="600">{labels[1]}</text>
      <text x={center} y={center + maxRadius + 20} textAnchor="middle" fill="var(--color-text-secondary)" fontSize="12" fontWeight="600">{labels[2]}</text>
      <text x={center - maxRadius - 10} y={center + 4} textAnchor="end" fill="var(--color-text-secondary)" fontSize="12" fontWeight="600">{labels[3]}</text>

      {/* Data Polygon */}
      <polygon
        points={polygonPoints}
        fill={isWinner ? 'var(--color-winner-bg)' : 'var(--ifm-color-primary)'}
        fillOpacity={isWinner ? "1" : "0.4"}
        stroke={isWinner ? 'var(--color-winner)' : 'var(--ifm-color-primary)'}
        strokeWidth="3"
        className={isWinner ? 'pulse-cyan' : ''}
        style={{ transition: 'all 0.4s ease' }}
      />

      {/* Data Points */}
      {values.map((val, i) => {
        const pt = getPoint(val, i).split(',');
        return (
          <circle 
            key={i} 
            cx={pt[0]} 
            cy={pt[1]} 
            r={5} 
            fill="var(--color-surface)" 
            stroke={isWinner ? 'var(--color-winner)' : 'var(--ifm-color-primary)'} 
            strokeWidth="2" 
            style={{ transition: 'all 0.4s ease' }}
          />
        );
      })}
    </svg>
  );
}
