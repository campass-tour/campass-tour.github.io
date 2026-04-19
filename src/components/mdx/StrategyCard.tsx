import React from 'react';
import { Layers, Cuboid, Server, Zap } from 'lucide-react';
import clsx from 'clsx';
import './StrategyCard.css'; // Let's put specific CSS in its own file or use inline styles? I'll use a module or custom.css

export interface StrategyCardProps {
  icon: 'layers' | 'cuboid' | 'server' | 'zap';
  title: string;
  challenge?: string;
  strategy: string;
}

export const StrategyCard = ({ icon, title, challenge, strategy }: StrategyCardProps) => {
  const IconComponent = 
    icon === 'layers' ? Layers :
    icon === 'cuboid' ? Cuboid :
    icon === 'server' ? Server : Zap;

  return (
    <div className="strategy-card">
      <div className="strategy-card-header">
        <IconComponent className="strategy-card-icon" size={24} />
        <h3 className="strategy-card-title">{title}</h3>
      </div>
      <div className="strategy-card-body">
        {challenge && (
          <div className="strategy-section challenge">
            <span className="strategy-label">Challenge:</span>
            <p>{challenge}</p>
          </div>
        )}
        <div className="strategy-section strategy">
          <span className="strategy-label">Strategy:</span>
          <p>{strategy}</p>
        </div>
      </div>
    </div>
  );
};
