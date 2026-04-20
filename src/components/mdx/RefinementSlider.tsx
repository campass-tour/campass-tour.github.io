import React, { useState } from 'react';
import { Settings, Maximize, GripHorizontal } from 'lucide-react';
import './RefinementSlider.css';

interface RefinementSliderProps {
  title: string;
  beforeImg: string;
  afterImg: string;
  implementationTitle?: string;
  implementationDetails: React.ReactNode;
}

export const RefinementSlider = ({
  title,
  beforeImg,
  afterImg,
  implementationTitle = "Technical Implementation",
  implementationDetails
}: RefinementSliderProps) => {
  const [sliderPos, setSliderPos] = useState(50);

  return (
    <div className="refinement-slider-wrapper">
      <div className="rs-header">
        <h5>{title}</h5>
      </div>
      
      <div className="rs-slider-container">
        <div className="rs-image-layer rs-after-layer">
          <img src={afterImg} alt="After refinement" />
        </div>
        <div 
          className="rs-image-layer rs-before-layer" 
          style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
        >
          <img src={beforeImg} alt="Before refinement" />
        </div>
        
        <div className="rs-handle" style={{ left: `${sliderPos}%` }}>
          <div className="rs-handle-line"></div>
          <div className="rs-handle-button">
            <GripHorizontal size={16} />
          </div>
        </div>
        
        <input 
          type="range" 
          min="0" 
          max="100" 
          value={sliderPos} 
          onChange={(e) => setSliderPos(Number(e.target.value))}
          className="rs-range-input"
        />

        <div className="rs-labels">
          <span className="rs-label rs-label-before">Before</span>
          <span className="rs-label rs-label-after">After</span>
        </div>
      </div>

      <div className="rs-implementation-box">
        <div className="rs-implementation-header">
          <Settings size={18} />
          <h6>{implementationTitle}</h6>
        </div>
        <div className="rs-implementation-body">
          {implementationDetails}
        </div>
      </div>
    </div>
  );
};
