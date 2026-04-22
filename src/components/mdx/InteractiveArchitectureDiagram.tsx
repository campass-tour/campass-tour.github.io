import React, { useState } from 'react';
import { Database, Activity, MousePointerClick } from 'lucide-react';
import './InteractiveArchitectureDiagram.css';

export default function InteractiveArchitectureDiagram() {
  const [activeSpot, setActiveSpot] = useState<string | null>(null);

  const hotspots = [
    {
      id: 'localstorage',
      icon: <Database size={20} />,
      label: 'LocalStorage',
      desc: 'Client-Side Persistence: Utilizing the Browser LocalStorage API to simulate a stateful experience without backend overhead.',
      top: '70%', 
      left: '90%', 
    },
    {
      id: 'hooks',
      icon: <Activity size={20} />,
      label: 'Application Hooks',
      desc: 'Decoupled Logic: Separation of UI components and application hooks ensures the system is ready for the Next.js migration.',
      top: '45%',
      left: '58%', 
    }
  ];

  return (
    <div className="arch-diagram-wrapper">
      <div className="arch-diagram-container">
        <img 
          src="/images/architecture/architecture.png" 
          alt="System Architecture" 
          className="arch-diagram-img" 
        />
        {hotspots.map(spot => (
          <div 
            key={spot.id}
            className={`hotspot ${activeSpot === spot.id ? 'active' : ''}`}
            style={{ top: spot.top, left: spot.left }}
            onMouseEnter={() => setActiveSpot(spot.id)}
            onMouseLeave={() => setActiveSpot(null)}
          >
            <div className="hotspot-pulse"></div>
            <div className="hotspot-dot">{spot.icon}</div>
          </div>
        ))}
      </div>
      
      <div className="hotspot-info-panel">
        {activeSpot ? (
          (() => {
            const spot = hotspots.find(h => h.id === activeSpot);
            return (
              <div className="hotspot-info-content anim-fade-in">
                <h4>{spot?.label}</h4>
                <p>{spot?.desc}</p>
              </div>
            );
          })()
        ) : (
          <div className="hotspot-info-placeholder">
            <MousePointerClick size={24} className="hotspot-placeholder-icon" />
            <p>Hover over the pulsing hotspots on the architecture diagram to reveal technical details.</p>
          </div>
        )}
      </div>
    </div>
  );
}