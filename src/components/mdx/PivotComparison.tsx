import React from 'react';
import './PivotComparison.css';

export default function PivotComparison() {
  return (
    <div className="pivot-container">
      <div className="pivot-column">
        <h4 className="pivot-title">Static Prototype</h4>
        <div className="pivot-image-wrapper">
          <img src="/images/architecture/architecture.png" alt="Current Architecture" />
        </div>
      </div>
      <div className="pivot-arrow">
        &rarr;
      </div>
      <div className="pivot-column">
        <h4 className="pivot-title">Next.js Fullstack</h4>
        <div className="pivot-image-wrapper future-arch">
          <div className="future-placeholder">
            <span>App Router &amp; Server Actions</span>
            <span>PostgreSQL &amp; Redis</span>
            <span>Real-time Websockets</span>
          </div>
        </div>
      </div>
    </div>
  );
}