---
sidebar_position: 4
---

import UsabilityInsightsPanel from '@site/src/components/mdx/UsabilityInsightsPanel';

# Usability Testing

## Overview & Setup

To evaluate the alpha version of Campass, our team conducted a focused usability test with real users around the core campus exploration loop. The assessment included 10 participant records, exceeding the coursework requirement of testing with 3 real people: 4 external visitors and 6 existing students.

<div style={{
  background: 'var(--button-outline-bg)',
  border: '1px solid rgba(40, 21, 89, 0.1)',
  borderRadius: 'var(--radius-card, 16px)',
  padding: '1rem',
  margin: '1.5rem 0 2rem'
}}>
  <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '0.85rem'
  }}>
    <img
      src="/images/evaluation/usability-session-1.jpg"
      alt="Alpha usability testing session with a participant using Campass"
      style={{
        width: '100%',
        height: '320px',
        objectFit: 'cover',
        borderRadius: '14px',
        boxShadow: 'var(--shadow-card-hover, 0 8px 24px rgba(0,0,0,0.1))'
      }}
    />
    <img
      src="/images/evaluation/usability-session-2.jpg"
      alt="Alpha usability testing session with a participant using Campass"
      style={{
        width: '100%',
        height: '320px',
        objectFit: 'cover',
        borderRadius: '14px',
        boxShadow: 'var(--shadow-card-hover, 0 8px 24px rgba(0,0,0,0.1))'
      }}
    />
    <img
      src="/images/evaluation/usability-session-3.jpg"
      alt="Alpha usability testing session with a participant using Campass"
      style={{
        width: '100%',
        height: '320px',
        objectFit: 'cover',
        borderRadius: '14px',
        boxShadow: 'var(--shadow-card-hover, 0 8px 24px rgba(0,0,0,0.1))'
      }}
    />
  </div>
  <div style={{
    color: 'var(--color-text-secondary, #666)',
    fontSize: '0.9rem',
    marginTop: '0.75rem',
    textAlign: 'center'
  }}>
    Figure 1. Observed alpha usability testing sessions with real users.
  </div>
</div>

Our goal was to test whether the experience was intuitive beyond the UI mockups, especially identifying divergence between users with and without prior campus familiarity.

<div style={{
  background: 'var(--button-outline-bg)',
  border: '1px solid rgba(40, 21, 89, 0.1)',
  borderRadius: 'var(--radius-card, 16px)',
  padding: '1.25rem',
  margin: '2rem 0',
  textAlign: 'center'
}}>
  <img
    src="/images/evaluation/evaluation-dashboard.png"
    alt="Usability testing dashboard summarising success rate, error rate, task time, and visitor-student gap"
    style={{
      width: '100%',
      maxWidth: '820px',
      height: 'auto',
      display: 'block',
      margin: '0 auto',
      borderRadius: '14px',
      boxShadow: 'var(--shadow-card-hover, 0 8px 24px rgba(0,0,0,0.1))'
    }}
  />
  <div style={{
    color: 'var(--color-text-secondary, #666)',
    fontSize: '0.9rem',
    marginTop: '0.75rem'
  }}>
    Figure 1. Summary dashboard from our alpha usability testing.
  </div>
</div>

## Raw Data Details

To analyze user friction points, we designed 5 core tasks scaling from basic exploration to complex 3D interactions.

<style>{`
.raw-data-details {
  --ifm-table-background: rgba(255, 255, 255, 0.72);
  --ifm-table-border-color: rgba(92, 55, 180, 0.12);
  --ifm-table-head-background: #f0eafd;
  --ifm-table-stripe-background: rgba(255, 255, 255, 0.72);
  background: linear-gradient(180deg, rgba(111, 76, 255, 0.06), rgba(255, 255, 255, 0.96));
  border: 1px solid rgba(92, 55, 180, 0.18);
  border-radius: 16px;
  box-shadow: 0 14px 34px rgba(40, 21, 89, 0.06);
  margin: 1.5rem 0 2rem;
  overflow: hidden;
}

.raw-data-details[open] {
  box-shadow: 0 16px 38px rgba(40, 21, 89, 0.08);
}

.raw-data-details > summary {
  background: linear-gradient(135deg, #ffffff 0%, #f7f3ff 52%, #f0eafd 100%);
  border-bottom: 1px solid transparent;
  color: #24105f;
  cursor: pointer;
  padding: 1rem 1.15rem;
}

.raw-data-details[open] > summary {
  border-bottom-color: rgba(92, 55, 180, 0.12);
}

.raw-data-details > summary::marker {
  color: #6f4bd8;
}

.raw-data-details > summary:hover {
  background: linear-gradient(135deg, #ffffff 0%, #f5f0ff 48%, #ebe3fb 100%);
}

.raw-data-details > summary:focus-visible {
  outline: 2px solid rgba(111, 75, 216, 0.32);
  outline-offset: -3px;
}

.raw-data-details h3 {
  color: #24105f;
  margin: 1.2rem 1.15rem 0.75rem;
}

.raw-data-details table {
  border-color: rgba(92, 55, 180, 0.12);
  margin: 0.75rem 1.15rem 1.35rem;
  width: calc(100% - 2.3rem);
}

.raw-data-details thead tr,
.raw-data-details th {
  background: #f0eafd;
}

.raw-data-details th,
.raw-data-details td {
  border-color: rgba(92, 55, 180, 0.12);
  color: var(--ifm-color-emphasis-800);
}

.raw-data-details tbody tr,
.raw-data-details tbody tr:nth-child(even) {
  background: rgba(255, 255, 255, 0.72);
}

.raw-data-details tbody tr:hover {
  background: rgba(111, 76, 255, 0.055);
}
`}</style>

<details className="raw-data-details">
<summary><b>Click to view Raw Task Definitions & User Timings</b></summary>

### Defined Tasks

| Task ID | Task Name | Definition of Success | Definition of Error | Primary Focus |
| :--- | :--- | :--- | :--- | :--- |
| **T1** | Landmark Treasure Hunt & Clues | User clicks the target map pin based on a Level 1 fuzzy clue, and completes the question to unlock Level 2. | 1. Can't find pin (closed drawer, tapped randomly).<br/>2. Question failed (2 failed attempts or aborted).<br/>3. Confusion (still unsure where to go after unlocking Level 2, especially Visitors). | Map UI, Clue readability, Role perception, Logic loop. |
| **T2** | NFC Simulation Unlock | User triggers the 3D unlock modal via "Simulate Scan" and selects "Save to Gallery". | 1. Can't trigger (>30s to find button).<br/>2. Miss-click on wrong UI elements.<br/>3. Wrong selection (e.g. going to AR directly instead of Save). | Discoverability of NFC prompt, Flow fluency, Modal selection. |
| **T3** | AR Camera Activation | User successfully opens AR mode and sees the 3D mascot registered in real space. | 1. Device unsupported block.<br/>2. Extreme launch latency/lag.<br/>3. Model fails to load (camera only). | AR accessibility, Compatibility, Performance bottlenecks, 3D Load. |
| **T4** | Location-based UGC Post | User successfully publishes a message tagged with the currently unlocked location. | 1. Cannot select position or tries empty location tag.<br/>2. Publish fails (e.g. empty input).<br/>3. Flow interrupted (aborted for AR). | UGC flow, Location binding, Anti-spoiler limits. |
| **T5** | 3D Dressing & Preview | User enters "Fitting Room", changes mascot accessory, and rotates 3D model preview. | 1. Cannot change accessory (>45s).<br/>2. Gesture conflict (scrolling page mistakenly triggers 3D rotation >2 times).<br/>3. Distinct render lag/stutter on model swap.<br/>4. Asset load failed. | 3D Interaction Performance, Gesture Handling, UI Operability. |

### User Performance Matrix

| User ID | Role | T1 (Sec / Error) | T2 (Sec / Error) | T3 (Sec / Error) | T4 (Sec / Error) | T5 (Sec / Error) |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **U1** | Visitor | 50s / T1-1 | 15s / None | 12s / None | 30s / None | 80s / T5-2 |
| **U2** | Visitor | 65s / T1-2 | 18s / None | 5s / T3-1   | 25s / None | 90s / T5-2 |
| **U3** | Visitor | 48s / T1-2 | 10s / None | 30s / T3-2  | 20s / None | 75s / T5-3 |
| **U4** | Visitor | 55s / None | 20s / None | 18s / T3-3  | 32s / None | 100s / T5-2 |
| **U5** | Student | 20s / None | 8s / None  | 15s / None  | 20s / None | 30s / None |
| **U6** | Student | 25s / None | 10s / None | 27s / T3-2  | 22s / None | 40s / T5-3 |
| **U7** | Student | 30s / None | 12s / None | 18s / T3-3  | 25s / None | 35s / T5-3 |
| **U8** | Student | 22s / None | 9s / None  | 6s / T3-1   | 20s / None | 32s / None |
| **U9** | Student | 35s / T1-2 | 11s / None | 40s / T3-2  | 28s / None | 45s / T5-2 |
| **U10**| Student | 28s / None | 10s / None | 8s / None   | 25s / None | 40s / None |

</details>

## Critical Insights & Design Iterations

From the raw logs, we extracted three pivotal bottlenecks that heavily undermined the user experience, particularly affecting newcomers. Using these insights, we strategized targeted design and technical refactors:

<UsabilityInsightsPanel />

## Summary

The usability test directly shaped our critical refinements. By treating **Visitor support as a prerequisite** rather than an optional enhancement, resolving the 3D pipeline overhead, and isolating physical gestures inside the UI map, our subsequent iterations yielded a profoundly smoother digital-physical bridging experience.
