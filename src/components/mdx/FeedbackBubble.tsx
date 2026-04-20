import React from 'react';
import { User, Stethoscope } from 'lucide-react';
import './FeedbackBubble.css';

interface PostMortemItem {
  title: string;
  detail: string;
  icon: React.ElementType;
}

interface FeedbackBubbleProps {
  avatar?: React.ReactNode;
  userQuote: string;
  userName?: string;
  postMortemTitle?: string;
  postMortemItems: PostMortemItem[];
}

export const FeedbackBubble = ({
  avatar,
  userQuote,
  userName = 'User',
  postMortemTitle = 'The UX Post-Mortem',
  postMortemItems,
}: FeedbackBubbleProps) => {
  return (
    <div className="feedback-bubble-container">
      {/* Left/Top: User Feedback */}
      <div className="feedback-user-section">
        <div className="avatar-wrapper">
          {avatar ? avatar : <User size={24} />}
        </div>
        <div className="bubble-wrapper">
          <div className="bubble-content">
            <span className="quote-mark">“</span>
            <span>{userQuote}</span>
            <span className="quote-mark">”</span>
          </div>
          <div className="bubble-author">— {userName}</div>
        </div>
      </div>

      {/* Right/Bottom: The UX Post-Mortem */}
      <div className="feedback-diagnosis-section">
        <div className="diagnosis-header">
          <Stethoscope size={20} className="diagnosis-icon" />
          <h5>{postMortemTitle}</h5>
        </div>
        <div className="diagnosis-content">
          {postMortemItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="diagnosis-item">
                <div className="item-icon">
                  <Icon size={16} />
                </div>
                <div className="item-text">
                  <h6>{item.title}</h6>
                  <p>{item.detail}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
