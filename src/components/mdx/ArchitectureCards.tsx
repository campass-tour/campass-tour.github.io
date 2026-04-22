import React from 'react';
import { HardDrive, RotateCcw, Blocks } from 'lucide-react';
import './ArchitectureCards.css';

export default function ArchitectureCards() {
  const cards = [
    {
      title: 'Stateless to Stateful',
      icon: <RotateCcw size={24} />,
      how: 'Through LocalStorage to store Collections (captured birds) and Unlocks (visited landmarks).',
      benefit: 'Ensures user progress persists across reloads without waiting for database queries, enabling "instant feedback".'
    },
    {
      title: 'Data Management Layer',
      icon: <HardDrive size={24} />,
      how: 'Uses static JSON files (CLUES.JSON) to preload landmark information.',
      benefit: 'Drastically reduces Largest Contentful Paint (LCP) with all queries acting as memory-level O(1) operations.'
    },
    {
      title: 'Modular Hook Architecture',
      icon: <Blocks size={24} />,
      how: 'Core logic is fully encapsulated within custom React Hooks.',
      benefit: 'When migrating to a Next.js full-stack setup, UI code remains intact; only the data-fetching hooks need to change.'
    }
  ];

  return (
    <div className="arch-cards-container">
      {cards.map((card, idx) => (
        <div key={idx} className="arch-card">
          <div className="arch-card-header">
            <div className="arch-card-icon">{card.icon}</div>
            <h3 className="arch-card-title">{card.title}</h3>
          </div>
          <div className="arch-card-body">
            <p><strong>How:</strong> {card.how}</p>
            <p><strong>Benefit:</strong> {card.benefit}</p>
          </div>
        </div>
      ))}
    </div>
  );
}