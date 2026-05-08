import React from 'react';
import { Smartphone, EyeOff, Key } from 'lucide-react';
import { FeedbackBubble } from './FeedbackBubble';
import { RefinementSlider } from './RefinementSlider';

const diagnosisItems = [
  {
    title: 'Immersion Breaking (Spoilers)',
    detail: 'Displaying all hidden locations in the filter dropdown prematurely revealed secrets, breaking the sense of exploration and surprise.',
    icon: EyeOff,
  },
  {
    title: 'Lack of Progression',
    detail: 'Users had full visibility of the locations list without needing to discover the physical NFC tags first.',
    icon: Key,
  },
];

export const WallFeedbackPanel = () => {
  return (
    <div className="perf-post-mortem-wrapper">
      <FeedbackBubble 
        avatar={<Smartphone size={24} />}
        userQuote="我才刚玩这个 App，结果点开留言墙的筛选菜单，一下子就把学校里所有隐藏打卡点的名字全看到了！有一种被剧透的扫兴感。"
        userName="Beta Tester (Exploration)"
        postMortemTitle="The UX Post-Mortem"
        postMortemItems={diagnosisItems}
      />

      <RefinementSlider 
        title="Solving Spoilers: Progressive Dynamic Filter"
        beforeImg="/images/feedback/wall-before.png"
        afterImg="/images/feedback/wall-after.png"
        implementationDetails={
          <>
            <p><strong>Progressive Dynamic Filter:</strong> We transitioned from a static list to a content-aware dynamic list. Unvisited locations on the message wall are masked as "Mysterious Location".</p>
            <p><strong>Unlock-Based Options:</strong> The filter dropdown now exclusively shows location options that the user has physically unlocked via NFC interactions, preserving the gamified exploration loop.</p>
          </>
        }
      />
    </div>
  );
};
