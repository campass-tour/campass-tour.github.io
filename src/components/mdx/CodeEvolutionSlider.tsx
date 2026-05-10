import React, { useState } from 'react';
import styles from './CodeEvolutionSlider.module.css';

export const CodeEvolutionSlider = () => {
  const [sliderValue, setSliderValue] = useState(50);

  const initialCode = `
<div className="flex bg-[#281559] rounded-[16px] p-[20px]">
  <span className="text-white text-[14px]">
    Checking in...
  </span>
</div>
`;

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderValue(Number(e.target.value));
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.sliderContainer}>
        
        {/* Base Layer: Refined Standard (Full Width) */}
        <div className={`${styles.codePanel} ${styles.panelRefined}`}>
          <div className={styles.panelHeaderRefined}>Refined Standard</div>
          <div className={styles.codeBlockWrapper}>
            <pre className={styles.codeBlock}>
              <code>
                {`<InteractiveCard className="checkin-container">\n  <span className="status-text">\n    <MapPin /> Checking in...\n  </span>\n</InteractiveCard>\n\n/* In CSS:\n.checkin-container {\n  display: flex;\n  `}
                <span 
                  className={styles.highlightVar} 
                  title="Action: Force AI to retrieve custom.css variable table"
                >
                  background-color: var(--color-primary);
                </span>
                {`\n  `}
                <span 
                  className={styles.highlightVar} 
                  title="Action: Force AI to retrieve custom.css variable table"
                >
                  border-radius: var(--radius-card);
                </span>
                {`\n  padding: 20px;\n}\n*/`}
              </code>
            </pre>
          </div>
        </div>

        {/* Overlay Layer: Initial Vibe (Clipped overlay) */}
        <div 
          className={`${styles.codePanel} ${styles.panelInitial}`} 
          style={{ clipPath: `polygon(0 0, ${sliderValue}% 0, ${sliderValue}% 100%, 0 100%)` }}
        >
          <div className={styles.panelHeader}>Initial Vibe (AI Output)</div>
          <div className={styles.codeBlockWrapper}>
            <pre className={styles.codeBlock}>
              <code>{initialCode.trim()}</code>
            </pre>
          </div>
        </div>

        <input 
          type="range" 
          min="0" 
          max="100" 
          value={sliderValue} 
          onChange={handleSliderChange} 
          className={styles.sliderRange} 
        />
        
        <div className={styles.sliderHandle} style={{ left: `${sliderValue}%` }}>
          <div className={styles.sliderButton}>&lt;&gt;</div>
        </div>
      </div>
    </div>
  );
};
