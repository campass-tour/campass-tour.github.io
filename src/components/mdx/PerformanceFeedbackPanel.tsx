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
  ArrowRight,
  Smartphone
} from 'lucide-react';
import './PerformanceFeedbackPanel.css';
import { FeedbackBubble } from './FeedbackBubble';

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
    <div className="perf-post-mortem-wrapper">
      {/* 1. User Feedback & Analysis Section using FeedbackBubble */}
      <FeedbackBubble 
        avatar={<Smartphone size={24} />}
        userQuote="Ahhh! It freezes for 5-10 seconds when I click the collection modal on my iPhone! Sometimes my browser just crashes entirely! 😫"
        userName="Usability Tester (Mobile)"
        postMortemTitle="Root Cause Analysis"
        postMortemItems={rootCauseItems}
      />

      {/* 2. Implementation Section (temporarily acting as RefinementSlider layout bottom) */}
      <section className="perf-container">
        <details className="perf-section" open>
          <summary className="perf-section-header">
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
      </section>
    </div>
  );
};