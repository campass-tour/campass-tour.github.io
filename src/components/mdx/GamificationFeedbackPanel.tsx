import React from 'react';
import { Users, Brain, Crosshair, Settings } from 'lucide-react';
import { FeedbackBubble } from './FeedbackBubble';
import { PersonaCards } from './PersonaCards';

const diagnosisItems = [
  {
    title: 'Cognitive Mismatch',
    detail: 'A "one-size-fits-all" question bank alienated visitors with technical questions and bored seniors with trivial orientation tasks, disrupting the "Flow" state.',
    icon: Brain,
  },
  {
    title: 'Lack of Personalization',
    detail: 'The game felt generic and frustrating, failing to meet the distinct informational needs and cognitive goals of diverse stakeholders (Visitors vs. Students).',
    icon: Crosshair,
  },
];

export const GamificationFeedbackPanel = () => {
  return (
    <div className="perf-post-mortem-wrapper">
      <FeedbackBubble 
        avatar={<Users size={24} />}
        userQuote="The questions were weird. Like, I don't care which classroom is on Floor 4, I just want to know about the campus history! Meanwhile, my senior friend was yawning because she already knew everything."
        userName="Usability Tester (Visitor & Senior Pair)"
        postMortemTitle="The Gamification Post-Mortem"
        postMortemItems={diagnosisItems}
      />

      <div className="persona-refinement-section">
        <h5 style={{ marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Settings size={20} />
          Architecture of Personalization: Adaptive Quiz Engine
        </h5>
        
        <PersonaCards />

        <div className="rs-implementation-box" style={{ marginTop: '24px' }}>
          <div className="rs-implementation-body">
            <p><strong>Persona-Driven Content:</strong> We implemented an Adaptive Quiz Engine that customizes the narrative: <strong>Visitors</strong> focus on culture/history, <strong>Freshmen</strong> on "Survival Hacks" and navigation, and <strong>Seniors</strong> on hidden architectural details for a sense of mastery.</p>
            <p><strong>HCI Rationale (Cognitive Fit):</strong> By applying <i>Cognitive Fit</i>, information matches the user's existing knowledge and immediate needs. This Context-Aware interaction shifts the app from a generic directory to a personalized guide, enhancing <strong>Inclusivity</strong> and long-term engagement.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
