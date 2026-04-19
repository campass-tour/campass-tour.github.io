import React from 'react';
import {
  AlertTriangle,
  Database,
  Gauge,
  Layers,
  LoaderCircle,
  TimerReset,
  Hourglass,
  ChevronRight,
  ArrowRight
} from 'lucide-react';
import './PerformanceFeedbackPanel.css';

const rootCauseItems = [
  {
    title: 'Compute overload',
    detail: 'CPU/Memory spikes caused by simultaneous 3D load & export on mount.',
    icon: Gauge,
  },
  {
    title: 'Memory leak',
    detail: 'Blob URLs lingering without revocation, increasing GC pressure.',
    icon: Database,
  },
  {
    title: 'Resource contention',
    detail: 'GLTFExporter blocking main thread, dropping UI frames during swipes.',
    icon: Layers,
  },
];

const solutionItems = [
  {
    id: 'A',
    title: 'Blob-first Cache',
    detail: 'Stored raw Blobs instead of strings. Added LRU cache (32 entries) with useEffect cleanup for URL revocation.',
    icon: Database,
  },
  {
    id: 'B',
    title: 'Concurrency Queue',
    detail: 'Implemented an async semaphore. Serialized heavy tasks to a fixed capacity of 1 for background processing.',
    icon: TimerReset,
  },
  {
    id: 'C',
    title: 'Progressive Activation',
    detail: 'Only mount active + neighbor slides. Heavy models deferred via requestIdleCallback with placeholders.',
    icon: LoaderCircle,
  },
  {
    id: 'D',
    title: 'Prop Consolidation',
    detail: 'Lifted configuration logic to modal root to prevent redundant localStorage reads in children.',
    icon: Layers,
  },
];

export const PerformanceFeedbackPanel = () => {
  return (
    <section className="perf-container">
      {/* Header Section */}
      <header className="perf-header">
        <div className="perf-header-icon">
          <AlertTriangle size={24} />
        </div>
        <div className="perf-header-content">
          <h4 className="perf-title">Collection Modal Performance</h4>
          <p className="perf-subtitle">
            Fixing the 5-10s freeze and browser crashes on mobile devices after unlocking multiple landmarks.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <div className="perf-content">
        
        {/* 1. Analysis Section */}
        <details className="perf-section" open>
          <summary className="perf-section-header">
            <span className="section-number">01</span>
            <span className="section-label">Root Cause Analysis</span>
            <ChevronRight className="chevron" size={18} />
          </summary>
          <div className="perf-analysis-grid">
            {rootCauseItems.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="analysis-item">
                  <div className="analysis-icon-row">
                    <Icon size={18} className="text-primary" />
                    <h6>{item.title}</h6>
                  </div>
                  <p>{item.detail}</p>
                </div>
              );
            })}
          </div>
        </details>

        {/* 2. Implementation Section */}
        <details className="perf-section" open>
          <summary className="perf-section-header">
            <span className="section-number">02</span>
            <span className="section-label">Engineering Solutions</span>
            <ChevronRight className="chevron" size={18} />
          </summary>
          <div className="perf-solutions-container">
            <div className="perf-summary-note">
              <strong>General Approach:</strong> Compressed assets + Lazy loading pipeline. Modals now render placeholders first, upgrading visual fidelity progressively.
            </div>
            <div className="solutions-grid">
              {solutionItems.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.id} className="solution-card">
                    <div className="card-top">
                      <span className="card-badge">{item.id}</span>
                      <Icon size={20} strokeWidth={1.5} />
                    </div>
                    <h5>{item.title}</h5>
                    <p>{item.detail}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </details>

        {/* 3. Status Section */}
        <div className="perf-status-footer">
          <div className="status-info">
            <Hourglass size={18} className="spinning-icon" />
            <span><strong>Status:</strong> Significant improvement, further mobile tuning in progress.</span>
          </div>
          <a href="/docs/evaluation-reflection/limitation-future-work#1-the-performance" className="status-link">
            Future Roadmap <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};