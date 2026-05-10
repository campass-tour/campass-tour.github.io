import React from 'react';
import { CheckCircle2, ClipboardList, Compass, Layers, TestTube2 } from 'lucide-react';
import './AlignmentMatrix.css';

const rows = [
  {
    requirement: 'R1',
    need: 'Students and visitors need a tangible reason to move through campus instead of only reading static information.',
    goal: 'DG1: Turn campus movement into active exploration.',
    design: 'Stylized narrative map, clue-based route, physical NFC-style check-in.',
    feature: 'SF1: Treasure hunt map, clue drawer, NFC simulation, location unlock state.',
    prototype: 'High-fi React prototype: interactive pins, unlock modal, collection progress.',
    evaluation: 'T1 tested clue readability and pin discovery; T2 tested NFC unlock discoverability.',
  },
  {
    requirement: 'R2',
    need: 'Users need memorable moments that make campus exploration emotionally engaging and shareable.',
    goal: 'DG2: Create memorable and shareable campus moments.',
    design: 'AR companion appears after location unlock and connects the real place with a playful mascot.',
    feature: 'SF2: AR camera entry, 3D mascot model, photo-oriented interaction flow.',
    prototype: 'High-fi prototype: AR launch path and 3D mascot preview for unlocked places.',
    evaluation: 'T3 measured AR activation, compatibility, latency, and model loading success.',
  },
  {
    requirement: 'R3',
    need: 'Users need visible progression so the experience does not end after one successful check-in.',
    goal: 'DG3: Sustain motivation through visible progression.',
    design: 'Passport-style stamp collection with achievement tiers and post-collection rewards.',
    feature: 'SF3: Digital collection board, badge state, reward animations, avatar dressing.',
    prototype: 'High-fi prototype: collection gallery and 3D dressing room preview.',
    evaluation: 'T5 tested accessory selection, 3D manipulation, gesture conflicts, and render performance.',
  },
  {
    requirement: 'R4',
    need: 'Users need a way to connect their individual exploration with the wider campus community.',
    goal: 'DG4: Connect individual exploration to community presence.',
    design: 'Geo-locked message wall attached to unlocked landmarks with anti-spoiler constraints.',
    feature: 'SF4: Location-bound posting, wall feed, likes, Campass Credit reward loop.',
    prototype: 'High-fi prototype: message wall, location tag binding, social feedback loop.',
    evaluation: 'T4 tested post creation, automatic location binding, and blocked empty submissions.',
  },
];

const columns = [
  { key: 'need', label: 'User Need', icon: <ClipboardList size={18} /> },
  { key: 'goal', label: 'Design Goal', icon: <Compass size={18} /> },
  { key: 'design', label: 'Design Decision', icon: <Layers size={18} /> },
  { key: 'feature', label: 'System Feature', icon: <CheckCircle2 size={18} /> },
  { key: 'prototype', label: 'Prototype Evidence', icon: <Layers size={18} /> },
  { key: 'evaluation', label: 'Evaluation Evidence', icon: <TestTube2 size={18} /> },
] as const;

export default function AlignmentMatrix() {
  return (
    <div className="alignment-root">
      {rows.map((row) => (
        <section className="alignment-row" key={row.requirement}>
          <div className="alignment-row-id">{row.requirement}</div>
          <div className="alignment-cells">
            {columns.map((column) => (
              <article className="alignment-cell" key={column.key}>
                <div className="alignment-cell-label">
                  {column.icon}
                  <span>{column.label}</span>
                </div>
                <p>{row[column.key]}</p>
              </article>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
