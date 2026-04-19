import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Motivation & Research',
      items: [
        'motivation-research/the-why',
        'motivation-research/the-gap',
        'motivation-research/the-stakeholders',
      ],
    },
    {
      type: 'category',
      label: 'User Requirements',
      items: [
        'user-requirements/user-journey-map',
        'user-requirements/requirements-list',
        'user-requirements/evidence-of-life',
      ],
    },
    {
      type: 'category',
      label: 'Ideation & Alternatives',
      items: [
        'ideation-alternatives/crazy-eights',
        'ideation-alternatives/design-alternatives',
        'ideation-alternatives/low-fi-prototype',
      ],
    },
    {
      type: 'category',
      label: 'Technical Implementation',
      items: [
        'technical-implementation/system-architecture',
        'technical-implementation/high-fi-prototype',
        'technical-implementation/individual-contributions',
      ],
    },
    {
      type: 'category',
      label: 'Evaluation & Reflection',
      items: [
        'evaluation-reflection/usability-testing',
        'evaluation-reflection/iterative-refinement',
        'evaluation-reflection/final-reflection',
        'evaluation-reflection/limitation-future-work',
      ],
    },
  ],
};

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */


export default sidebars;
