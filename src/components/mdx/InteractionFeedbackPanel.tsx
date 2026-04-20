import React from 'react';
import { Smartphone, Target, Hand } from 'lucide-react';
import { FeedbackBubble } from './FeedbackBubble';
import { RefinementSlider } from './RefinementSlider';

const diagnosisItems = [
  {
    title: 'Interaction Conflicts',
    detail: 'Overlapping touch target zones for 3D model rotation (horizontal/vertical) and page scrolling (vertical), leading to frequent accidental inputs.',
    icon: Hand,
  },
  {
    title: 'Thumb-Zone Principle Violation',
    detail: 'Frequent "Equip/Buy" actions were placed in hard-to-reach areas of individual cards, making one-handed operation on mobile devices difficult.',
    icon: Target,
  },
];

export const InteractionFeedbackPanel = () => {
  return (
    <div className="perf-post-mortem-wrapper">
      <FeedbackBubble 
        avatar={<Smartphone size={24} />}
        userQuote="Every time I try to scroll down to see more clothes, I accidentally spin the 3D avatar wildly instead. The page just won't scroll, so frustrating!"
        userName="Usability Tester (Mobile)"
        postMortemTitle="The UX Post-Mortem"
        postMortemItems={diagnosisItems}
      />

      <RefinementSlider 
        title="Solving Interaction Conflicts: Zone Separation & Action Bar"
        beforeImg="/images/feedback/feedback1-before.webp"
        afterImg="/images/feedback/feedback1-after.webp"
        implementationDetails={
          <>
            <p><strong>Interactive Zone Separation:</strong> We disabled full-page vertical scrolling. The top 3D canvas is designated exclusively for gesture-based rotation, while the bottom accessory list utilizes isolated local scrolling (<code>overflow-y: auto</code>).</p>
            <p><strong>Fixed Action Bar:</strong> High-frequency actions like 'Equip' and 'Buy' were extracted from individual item cards and centralized into a floating Fixed Action Bar at the bottom screen edge (the optimal Thumb-Zone for mobile users).</p>
          </>
        }
      />
    </div>
  );
};
