import React, { useState } from 'react';

export const InteractiveCrazy8 = () => {
  const [activeTab, setActiveTab] = useState('Map');

  const tabs = [
    {
      id: 'Map',
      title: 'Map',
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="3 11 22 2 13 21 11 13 3 11"></polygon></svg>,
      rejectedIdx: 1,
      chosenIdx: 0,
      rejectedTitle: "Floating Popovers (Discarded)",
      chosenTitle: "Bottom Drawers (Selected)",
      rejectedReason: "Popovers on mobile caused touch-target errors and visual occlusion, heavily blocking the map area and disrupting the exploration flow.",
      chosenReason: "The Bottom Drawer approach provides excellent thumb-reachability and maintains screen clarity without interrupting the core map view."
    },
    {
      id: 'Wall',
      title: 'Wall',
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="3" x2="9" y2="21"></line></svg>,
      rejectedIdx: null,
      chosenIdx: null,
      rejectedTitle: '',
      chosenTitle: '',
      rejectedReason: '',
      chosenReason: ''
    },
    {
      id: 'Collection',
      title: 'Collection',
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>,
      rejectedIdx: null,
      chosenIdx: null,
      rejectedTitle: '',
      chosenTitle: '',
      rejectedReason: '',
      chosenReason: ''
    },
    {
      id: 'Profile',
      title: 'Profile',
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>,
      rejectedIdx: null,
      chosenIdx: null,
      rejectedTitle: '',
      chosenTitle: '',
      rejectedReason: '',
      chosenReason: ''
    }
  ];

  const activeContent = tabs.find(t => t.id === activeTab);

  const images = [
    '/images/crazy8/crazy8-1.jpg',
    '/images/crazy8/crazy8-2.png',
    '/images/crazy8/crazy8-3.png',
    '/images/crazy8/crazy8-4.png',
    '/images/crazy8/crazy8-5.png',
    '/images/crazy8/crazy8-6.png',
    '/images/crazy8/crazy8-7.png',
    '/images/crazy8/crazy8-8.png',
  ];
  // group images into vertical pairs for columns: [ [1,2], [3,4], [5,6], [7,8] ]
  const columns = [];
  for (let i = 0; i < images.length; i += 2) {
    columns.push(images.slice(i, i + 2));
  }

  return (
    <>
      <div className="crazy8-scroll-row" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(180px, 1fr))', gap: '1.2rem', marginTop: '1.5rem', marginBottom: '3rem' }}>
        {columns.map((pair, colIndex) => (
          <div key={colIndex} className="crazy8-scroll-col" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {pair.map((src, idx) => {
              const index = colIndex * 2 + idx;

              // Only highlight when the active tab defines chosen/rejected indices
              const isRejected = activeContent && activeContent.rejectedIdx === index;
              const isChosen = activeContent && activeContent.chosenIdx === index;
              const borderColor = isRejected ? '#ff4d4f' : isChosen ? '#00C4CC' : 'var(--button-outline-bg)';
              const shadow = isRejected ? '0 0 0 3px rgba(255, 77, 79, 0.12)' : isChosen ? '0 0 0 3px rgba(0, 196, 204, 0.12)' : '0 4px 8px rgba(0,0,0,0.04)';
              const opacity = (!isRejected && !isChosen && activeTab && activeContent && (activeContent.rejectedIdx == null && activeContent.chosenIdx == null)) ? 1 : (!isRejected && !isChosen && activeTab ? 0.6 : 1);

              return (
                <div key={index} style={{
                  borderRadius: '12px',
                  overflow: 'hidden',
                  boxShadow: shadow,
                  border: `2px solid ${borderColor}`,
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.28s ease',
                  opacity: opacity,
                  backgroundColor: 'var(--color-surface, #fff)'
                }}>
                  <img
                    src={src}
                    alt={`Crazy 8 Sketch ${index + 1}`}
                    style={{ width: '100%', height: 'auto', display: 'block', backgroundColor: 'rgba(0,0,0,0.02)' }}
                  />
                  <div style={{
                    padding: '0.6rem 0.75rem',
                    textAlign: 'center',
                    background: isRejected ? 'rgba(255, 77, 79, 0.06)' : isChosen ? 'rgba(0, 196, 204, 0.06)' : 'var(--button-outline-bg)',
                    color: isRejected ? '#cf1322' : isChosen ? '#008b91' : 'inherit',
                    fontSize: '0.9rem',
                    fontWeight: isRejected || isChosen ? '700' : '600'
                  }}>
                    Idea {index + 1}{isRejected ? ' — Discarded' : ''}{isChosen ? ' — Selected' : ''}
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>

      <div className="interactive-ujm-root" style={{ marginTop: '3rem' }}>
        <h2 style={{ marginBottom: '1.5rem' }}>Section 3: Deep Dive</h2>
        <p style={{ color: 'var(--color-text-main)', marginBottom: '2rem' }}>
          Select an interaction component below to see the rationale behind our design decisions. The corresponding sketches above will highlight our <strong>discarded</strong> and <strong>selected</strong> ideas.
        </p>

        <div className="interactive-ujm-stage-bar">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setActiveTab(t.id)}
              className={`interactive-ujm-stage-btn ${activeTab === t.id ? 'active' : ''}`}
            >
              {t.icon}
              {t.title}
            </button>
          ))}
        </div>

        <div className="interactive-ujm-content-grid" style={{ marginTop: '2rem' }}>
          {/* Left Card: Discarded Reason (Friction style) */}
          <div className="interactive-ujm-card interactive-ujm-card-friction">
            {activeContent.rejectedTitle ? (
              <div className="interactive-ujm-card-title interactive-ujm-card-title-friction">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
                <span>{activeContent.rejectedTitle}</span>
              </div>
            ) : null}
            {activeContent.rejectedReason ? (
              <p className="interactive-ujm-card-desc">
                {activeContent.rejectedReason}
              </p>
            ) : null}
            <div className="interactive-ujm-card-watermark interactive-ujm-card-watermark-friction">
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
            </div>
          </div>

          {/* Right Card: Selected Reason (Solution style) */}
          <div className="interactive-ujm-card interactive-ujm-card-solution">
            {activeContent.chosenTitle ? (
              <div className="interactive-ujm-card-title interactive-ujm-card-title-solution">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path></svg>
                <span>{activeContent.chosenTitle}</span>
              </div>
            ) : null}
            {activeContent.chosenReason ? (
              <p className="interactive-ujm-card-desc">
                {activeContent.chosenReason}
              </p>
            ) : null}
             <div className="interactive-ujm-card-watermark interactive-ujm-card-watermark-solution">
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path></svg>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

# Crazy 8s Ideation

## Section 1: The Challenge

At the early stages of the project, our core interaction dilemma was: **how to seamlessly connect 'minimalist map exploration' with 'deep social/collection features' in a limited space, without breaking the player's immersion?**

## Section 2: The Crazy 8s Process

To avoid falling into a fixed mindset of a single layout, we broke down the core flow and rapidly generated 8 different interaction prototypes through the **Crazy 8s methodology**. Then we discussed and decided the final rough layout.

<InteractiveCrazy8 />
