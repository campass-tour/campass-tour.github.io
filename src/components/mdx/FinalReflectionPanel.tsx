import React from 'react';
import {
  BadgeCheck,
  Bot,
  BrainCircuit,
  Code2,
  Image,
  MapPin,
  MessageSquareWarning,
  ShieldCheck,
  Sparkles,
  Users,
  ExternalLink,
} from 'lucide-react';
import './FinalReflectionPanel.css';

const socialItems = [
  {
    icon: Users,
    title: 'Belonging',
    text: 'Shared discoveries and place-based posts help students see campus as a living community rather than a static map.',
  },
  {
    icon: MapPin,
    title: 'Local Knowledge',
    text: 'Informal tips, stories, and hidden details make campus knowledge easier to pass between cohorts.',
  },
  {
    icon: Sparkles,
    title: 'Motivation',
    text: 'Gamified progress gives users a reason to revisit spaces and notice details they may otherwise ignore.',
  },
];

const ethicalItems = [
  'Collect only the data needed for the experience.',
  'Explain clearly what is stored and why.',
  'Keep public posting optional rather than mandatory.',
  'Provide moderation for community-generated content.',
  'Offer non-AR and accessible alternatives for key interactions.',
];

const aiItems = [
  {
    icon: BrainCircuit,
    tool: 'Hunyuan3D',
    use: 'AR model generation',
    boundary: 'Used for generating and supporting the 3D mascot/AR asset workflow. Final assets still required human selection, integration, and testing in the prototype.',
  },
  {
    icon: Code2,
    tool: 'VS Code + Copilot',
    use: 'Code implementation',
    boundary: 'Used for debugging, component edits, and documentation. Adhered to "Vibe Coding" workflow with manual verification of every component. Detailed logs available in AI Log.',
    link: '/docs/technical-implementation/vibe-coding-process#ai-log'
  },
  {
    icon: Bot,
    tool: 'Gemini',
    use: 'General ideation and writing',
    boundary: 'Used for brainstorming, wording refinement, and structuring explanations. Final claims were grounded in our project decisions and prototype evidence.',
  },
  {
    icon: Image,
    tool: 'DALL-E / Stock',
    use: 'Visual & Icon generation',
    boundary: 'Used for visual generation support where initial assets were needed. Generated visuals were treated as design materials rather than factual evidence.',
  },
];

export const FinalReflectionPanel = () => {
  return (
    <section className="final-reflection">
      <div className="final-reflection-hero">
        <div className="final-reflection-kicker">
          <BadgeCheck size={18} />
          Final Reflection
        </div>
        <h1>Designing a campus companion with social responsibility</h1>
        <p>
          Campass began as a playful response to a practical problem: students often experience campus as disconnected
          buildings, routes, and tasks. By combining a simplified map, NFC check-ins, AR mascot encounters, a message
          wall, and a collection loop, the design reframes orientation as an active social journey.
        </p>
      </div>

      <div className="final-reflection-section">
        <div className="final-reflection-heading">
          <Users size={22} />
          <h2>1. Social Implications</h2>
        </div>
        <p>
          The strongest social value of Campass is its potential to turn campus exploration into a shared experience.
          Location-based posts and collectible achievements can make unfamiliar spaces feel warmer and more approachable,
          especially for newcomers who may otherwise experience orientation as stressful or isolating.
        </p>
        <div className="final-reflection-card-grid">
          {socialItems.map((item) => {
            const Icon = item.icon;
            return (
              <article className="final-reflection-card" key={item.title}>
                <div className="final-reflection-icon">
                  <Icon size={22} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            );
          })}
        </div>
        <div className="final-reflection-risk">
          <MessageSquareWarning size={22} />
          <p>
            A public message wall can become noisy, exclusionary, or harmful if it lacks moderation. Gamification may
            also pressure users to visit every location or compare progress with others. Campass should therefore keep
            social participation optional, lightweight, and respectful of different comfort levels.
          </p>
        </div>
      </div>

      <div className="final-reflection-section">
        <div className="final-reflection-heading">
          <ShieldCheck size={22} />
          <h2>2. Ethical Considerations</h2>
        </div>
        <p>
          Because Campass is built around location-based interaction, privacy is the most important ethical concern.
          NFC check-ins and AR encounters can create meaningful engagement, but they also imply that the system may know
          where a user has been and what they have unlocked.
        </p>
        <div className="final-reflection-ethics">
          {ethicalItems.map((item) => (
            <div className="final-reflection-ethic-item" key={item}>
              <BadgeCheck size={18} />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="final-reflection-section">
        <div className="final-reflection-heading">
          <BrainCircuit size={22} />
          <h2>3. Use of Generative AI</h2>
        </div>
        <p>
          Generative AI was used as a supporting tool, not as a replacement for design judgment, user research, or
          technical validation. Each tool had a clear role in the project workflow.
        </p>
        <div className="final-reflection-ai-grid">
          {aiItems.map((item) => {
            const Icon = item.icon;
            return (
              <article className="final-reflection-ai-card" key={item.tool}>
                <div className="final-reflection-ai-topline">
                  <div className="final-reflection-icon">
                    <Icon size={22} />
                  </div>
                  <div>
                    <h3>{item.tool}</h3>
                    <span>{item.use}</span>
                  </div>
                </div>
                <p>{item.boundary}</p>
                {item.link && (
                  <a href={item.link} className="final-reflection-ai-link">
                    <span>View our AI Logs</span>
                    <ExternalLink size={14} />
                  </a>
                )}
              </article>
            );
          })}
        </div>
        <p>
          The main limitation of using AI is that it can produce confident but generic statements. To avoid this, we
          grounded final decisions in the actual Campass concept: NFC-based check-ins, AR mascot summoning, the message
          wall, collection progress, and the performance constraints documented in our implementation.
        </p>
      </div>

      <div className="final-reflection-takeaway">
        <h2>4. Final Takeaway</h2>
        <p>
          The most valuable version of Campass is not the most feature-heavy one. It is the version that helps users feel
          oriented, curious, and connected while still respecting their privacy, attention, and autonomy.
        </p>
      </div>
    </section>
  );
};
