import React, {useState} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';

import styles from './DevelopmentTimeline.module.css';

type TimelineWeek = {
  week: string;
  number: string;
  phase: string;
  title: string;
  summary: string;
  deliverables: string[];
  tags: string[];
};

const phaseLabels = ['Research', 'Design', 'Engineering', 'Evaluation', 'Delivery'];

const timelineWeeks: TimelineWeek[] = [
  {
    week: 'Week 1',
    number: '01',
    phase: 'Research',
    title: 'User Research & Discovery',
    summary:
      'We collected background research, competitor examples, and field evidence to understand the opportunity space for campus exploration.',
    deliverables: [
      'Literature and competitor research',
      'Gap analysis',
      'Evidence-of-life collection',
      'Initial interviews and questionnaire planning',
      'Persona preparation',
    ],
    tags: ['Research', 'Evidence', 'Personas'],
  },
  {
    week: 'Week 2',
    number: '02',
    phase: 'Research',
    title: 'User Requirements & Problem Definition',
    summary:
      'We translated research findings into concrete user needs, pain points, and core product requirements.',
    deliverables: [
      'Pain point identification',
      'User journey mapping',
      'Must-have requirements',
      'Information architecture',
      'Core task flow design',
    ],
    tags: ['Requirements', 'Journey Map', 'Strategy'],
  },
  {
    week: 'Week 3',
    number: '03',
    phase: 'Design',
    title: 'Playful Strategy & Low-Fi Ideation',
    summary:
      'We explored how playful interaction could turn campus navigation into a more engaging discovery experience.',
    deliverables: [
      'Playful strategy',
      'Crazy Eights sketches',
      'Low-fi mockups',
      'Design alternatives comparison',
      'Clue and reward logic',
    ],
    tags: ['Ideation', 'Gamification', 'Low-Fi'],
  },
  {
    week: 'Week 4',
    number: '04',
    phase: 'Design',
    title: 'UI/UX Design & Interactive Prototype',
    summary:
      'We developed the visual language, reusable components, and clickable prototype for early testing.',
    deliverables: [
      'Style guide',
      'Component design',
      'Interactive Figma prototype',
      'UI asset design',
      'Testing preparation',
    ],
    tags: ['UI/UX', 'Figma', 'Prototype'],
  },
  {
    week: 'Week 5',
    number: '05',
    phase: 'Engineering',
    title: 'Engineering Foundation',
    summary:
      'We built the technical foundation and connected the core map, unlock, and deployment logic.',
    deliverables: [
      'System architecture',
      'Responsive layout',
      'Map logic integration',
      'NFC-style URL trigger logic',
      'Deployment workflow',
    ],
    tags: ['Engineering', 'Map', 'Deployment'],
  },
  {
    week: 'Week 6',
    number: '06',
    phase: 'Engineering',
    title: 'AR, 3D & Location Content Integration',
    summary:
      'We integrated the immersive features and connected location-based stories, quizzes, and visual assets.',
    deliverables: [
      'AR and 3D integration',
      '3D asset preparation',
      'Location lore writing',
      'Quiz design',
      'UX microcopy and seed content',
    ],
    tags: ['AR', '3D', 'Content'],
  },
  {
    week: 'Week 7',
    number: '07',
    phase: 'Evaluation',
    title: 'Usability Testing & Iterative Refinement',
    summary:
      'We tested the alpha prototype with real users and used the results to improve clarity, guidance, and interaction feedback.',
    deliverables: [
      'Usability testing plan',
      'Real-user alpha testing',
      'Task success and error analysis',
      'Visitor-student comparison',
      'Iterative refinement',
    ],
    tags: ['Testing', 'Evaluation', 'Refinement'],
  },
  {
    week: 'Week 8',
    number: '08',
    phase: 'Delivery',
    title: 'Portfolio, Video & Final Delivery',
    summary:
      'We finalised the portfolio website, demonstration materials, and final delivery package.',
    deliverables: [
      'Portfolio documentation',
      'Video script and recording',
      'Demo editing',
      'Final QA',
      'Coursework submission preparation',
    ],
    tags: ['Portfolio', 'Video', 'Delivery'],
  },
];

export default function DevelopmentTimeline() {
  const [activeIndex, setActiveIndex] = useState(timelineWeeks.length - 1);
  const activeWeek = timelineWeeks[activeIndex];
  const progress = (activeIndex / (timelineWeeks.length - 1)) * 100;

  return (
    <section className={styles.timelineSection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <span className={styles.eyebrow}>Completed Roadmap</span>
          <Heading as="h2" className={styles.sectionTitle}>
            8-Week Development Timeline
          </Heading>
          <p className={styles.sectionSubtitle}>
            A structured roadmap showing how Campass moved from research insights to a tested
            interactive campus prototype.
          </p>
        </div>

        <div
          className={styles.roadmapPanel}
          style={{'--timeline-progress': `${progress}%`} as React.CSSProperties}
        >
          <div className={styles.phaseRail} aria-label="Project phases">
            {phaseLabels.map((phase) => (
              <span
                className={clsx(styles.phaseLabel, activeWeek.phase === phase && styles.phaseLabelActive)}
                key={phase}
              >
                {phase}
              </span>
            ))}
          </div>

          <div className={styles.roadmapTrack} aria-label="Development weeks">
            <div className={styles.trackLine}>
              <div className={styles.trackGlow} />
            </div>
            <div className={styles.nodeRow}>
              {timelineWeeks.map((item, index) => {
                const isActive = index === activeIndex;
                const isComplete = index <= activeIndex;
                return (
                  <button
                    className={clsx(
                      styles.timelineNode,
                      isComplete && styles.timelineNodeComplete,
                      isActive && styles.timelineNodeActive,
                    )}
                    key={item.week}
                    type="button"
                    aria-label={`View ${item.week}: ${item.title}`}
                    aria-current={isActive ? 'step' : undefined}
                    onClick={() => setActiveIndex(index)}
                    onFocus={() => setActiveIndex(index)}
                    onMouseEnter={() => setActiveIndex(index)}
                  >
                    <span className={styles.nodeNumber}>{item.number}</span>
                    <span className={styles.nodeWeek}>{item.week}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div className={styles.cardsGrid}>
          {timelineWeeks.map((item, index) => {
            const isActive = index === activeIndex;
            return (
              <article
                className={clsx(styles.timelineCard, isActive && styles.timelineCardActive)}
                key={item.week}
                tabIndex={0}
                aria-label={`${item.week}: ${item.title}`}
                onClick={() => setActiveIndex(index)}
                onFocus={() => setActiveIndex(index)}
                onMouseEnter={() => setActiveIndex(index)}
                style={{'--card-delay': `${index * 45}ms`} as React.CSSProperties}
              >
                <div className={styles.mobileMarker}>{item.number}</div>
                <div className={styles.cardChrome}>
                  <div className={styles.cardTopline}>
                    <span className={styles.weekPill}>{item.week}</span>
                    <span className={styles.phasePill}>{item.phase}</span>
                  </div>
                  <Heading as="h3" className={styles.cardTitle}>
                    {item.title}
                  </Heading>
                  <p className={styles.cardSummary}>{item.summary}</p>

                  <div className={styles.deliverablesBlock}>
                    <strong className={styles.deliverablesTitle}>Key deliverables</strong>
                    <ul className={styles.deliverablesList}>
                      {item.deliverables.map((deliverable, deliverableIndex) => (
                        <li
                          className={clsx(
                            deliverableIndex >= 3 && styles.deliverableOptional,
                            isActive && styles.deliverableVisible,
                          )}
                          key={deliverable}
                        >
                          {deliverable}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className={styles.tagRow}>
                    {item.tags.map((tag) => (
                      <span className={styles.tag} key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
