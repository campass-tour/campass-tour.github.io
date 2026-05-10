import { CheckCircle2, ChevronRight, Compass, ExternalLink, Link2, ListChecks, SlidersHorizontal } from 'lucide-react';

# Low-Fi Prototype

This clickable Figma prototype was used to test the core exploration flow at an early stage. It connected the **map**, **check-in**, **collection**, and **message wall** screens, helping the team validate whether the interaction logic was understandable before moving to the high-fidelity prototype.

## Low-Fi Prototype & Interaction Flow

<div className="lowfi-layout">
  <div className="lowfi-top">
    <h3 className="lowfi-section-title">Screen Preview</h3>
    <div className="lowfi-screen-grid">
      <figure className="lowfi-screen-card">
        <img src="/images/lowfi/explore.png" alt="Low-fi map page showing available campus locations" />
        <figcaption>
          <strong>Map Page</strong>
          <span>Show available campus locations.</span>
        </figcaption>
      </figure>

      <figure className="lowfi-screen-card">
        <img src="/images/lowfi/wall.png" alt="Low-fi message wall concept for social interaction" />
        <figcaption>
          <strong>Message Wall</strong>
          <span>Support social interaction.</span>
        </figcaption>
      </figure>

      <figure className="lowfi-screen-card">
        <img src="/images/lowfi/collection.png" alt="Low-fi collection style page showing unlocked campus spirits" />
        <figcaption>
          <strong>Collection Page</strong>
          <span>Show unlocked campus spirits.</span>
        </figcaption>
      </figure>

      <figure className="lowfi-screen-card">
        <img src="/images/lowfi/profile.png" alt="Low-fi profile page showing user identity and echoes overview" />
        <figcaption>
          <strong>Profile</strong>
          <span>Show user identity and echoes overview.</span>
        </figcaption>
      </figure>

      
    </div>
  </div>

  <div className="lowfi-info-grid">
    <div className="lowfi-info-card" style={{ '--accent': 'var(--ifm-color-primary)' }}>
      <div className="lowfi-info-header">
        <div className="lowfi-info-icon-box"><Link2 size={20} /></div>
        <h3>Prototype Link</h3>
      </div>
      <div className="lowfi-info-body">
        <a
          className="lowfi-prototype-link"
          href="https://www.figma.com/proto/VIDqKKcrev9dEdHSt3Vmct/Low-fi?node-id=4-3&starting-point-node-id=4%3A3"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open Clickable Figma Prototype <ExternalLink size={16} />
        </a>
        <p className="lowfi-note">Best viewed in a desktop browser or via the Figma mobile app.</p>
      </div>
      <div className="lowfi-info-footer">
        <ChevronRight size={16} className="lowfi-info-arrow" />
      </div>
    </div>

    <div className="lowfi-info-card" style={{ '--accent': 'var(--color-solution-text)' }}>
      <div className="lowfi-info-header">
        <div className="lowfi-info-icon-box"><Compass size={20} /></div>
        <h3>Purpose</h3>
      </div>
      <div className="lowfi-info-body">
        <p>To quickly test the core interaction flow before developing the high-fidelity prototype.</p>
      </div>
      <div className="lowfi-info-footer">
        <ChevronRight size={16} className="lowfi-info-arrow" />
      </div>
    </div>

    <div className="lowfi-info-card" style={{ '--accent': 'var(--ifm-color-primary)' }}>
      <div className="lowfi-info-header">
        <div className="lowfi-info-icon-box"><ListChecks size={20} /></div>
        <h3>Main Tested Flow</h3>
      </div>
      <div className="lowfi-info-body">
        <ol className="lowfi-flow-list">
          <li><CheckCircle2 size={15} /> Open campus map</li>
          <li><CheckCircle2 size={15} /> Select a location</li>
          <li><CheckCircle2 size={15} /> Unlock clue</li>
          <li><CheckCircle2 size={15} /> Complete check-in</li>
          <li><CheckCircle2 size={15} /> AR interaction</li>
          <li><CheckCircle2 size={15} /> Open collection or View message wall</li>
        </ol>
      </div>
      <div className="lowfi-info-footer">
        <ChevronRight size={16} className="lowfi-info-arrow" />
      </div>
    </div>

    <div className="lowfi-info-card" style={{ '--accent': 'var(--color-winner)' }}>
      <div className="lowfi-info-header">
        <div className="lowfi-info-icon-box"><SlidersHorizontal size={20} /></div>
        <h3>Design Focus</h3>
      </div>
      <div className="lowfi-info-body">
        <ul className="lowfi-focus-list">
          <li>Clear navigation between pages.</li>
          <li>Simple and understandable check-in interaction.</li>
          <li>Early validation of playful exploration flow.</li>
        </ul>
      </div>
      <div className="lowfi-info-footer">
        <ChevronRight size={16} className="lowfi-info-arrow" />
      </div>
    </div>
  </div>
</div>

<style>{`
  .lowfi-layout {
    display: grid;
    gap: 1rem;
    margin: 1.4rem 0 2.2rem;
  }

  .lowfi-section-title {
    margin: 0 0 0.75rem;
    font-size: 1rem;
    color: var(--ifm-color-primary);
  }

  .lowfi-screen-grid {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 0.85rem;
    align-items: start;
  }

  .lowfi-screen-card {
    width: 100%;
    max-width: clamp(180px, 24vw, 250px);
    justify-self: center;
    margin: 0;
    border: 1px solid var(--button-outline-bg);
    border-radius: var(--radius-card);
    background: var(--color-surface);
    overflow: hidden;
    box-shadow: var(--shadow-card);
    transition: transform 0.28s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.28s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.28s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .lowfi-screen-card:hover {
    transform: translateY(-6px);
    box-shadow: var(--shadow-card-hover);
    border-color: rgba(var(--ifm-color-primary-rgb), 0.35);
  }

  .lowfi-screen-card img {
    width: 100%;
    aspect-ratio: 9 / 19.5;
    height: auto;
    object-fit: contain;
    background: var(--button-outline-bg);
    display: block;
  }

  .lowfi-screen-card figcaption {
    padding: 0.7rem 0.8rem 0.85rem;
    display: grid;
    gap: 0.28rem;
  }

  .lowfi-screen-card strong {
    font-size: 0.9rem;
    color: var(--ifm-color-emphasis-900);
  }

  .lowfi-screen-card span {
    font-size: 0.82rem;
    line-height: 1.45;
    color: var(--color-text-secondary);
  }

  .lowfi-info-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1rem;
  }

  .lowfi-info-card {
    background: var(--color-surface);
    border: 1px solid var(--button-outline-bg);
    border-radius: var(--radius-card);
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: var(--shadow-card);
    position: relative;
    overflow: hidden;
  }

  .lowfi-info-card:hover {
    transform: translateY(-8px);
    box-shadow: var(--shadow-card-hover);
    border-color: var(--accent);
  }

  .lowfi-info-header {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 1rem;
  }

  .lowfi-info-icon-box {
    background: var(--button-outline-bg);
    color: var(--accent);
    padding: 10px;
    border-radius: 12px;
    display: flex;
    transition: all 0.3s ease;
  }

  .lowfi-info-card:hover .lowfi-info-icon-box {
    background: var(--accent);
    color: #fff;
  }

  .lowfi-info-header h3 {
    margin: 0;
    font-size: 1.1rem;
    color: var(--ifm-color-primary);
  }

  .lowfi-info-body {
    display: flex;
    flex-direction: column;
    gap: 0.85rem;
    flex-grow: 1;
  }

  .lowfi-info-card p {
    margin: 0;
    font-size: 0.9rem;
    line-height: 1.6;
    color: var(--color-text-secondary);
  }

  .lowfi-info-footer {
    margin-top: 1rem;
    display: flex;
    justify-content: flex-end;
  }

  .lowfi-info-arrow {
    color: var(--accent);
    opacity: 0;
    transform: translateX(-10px);
    transition: all 0.3s ease;
  }

  .lowfi-info-card:hover .lowfi-info-arrow {
    opacity: 1;
    transform: translateX(0);
  }

  .lowfi-prototype-link {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    align-self: flex-start;
    padding: 0.85rem 1.2rem;
    border-radius: 14px;
    background: linear-gradient(135deg, #24135f 0%, #4338ca 100%);
    box-shadow: 0 10px 24px -8px rgba(36, 19, 95, 0.55);
    text-decoration: none;
    font-weight: 700;
    color: #fff;
    font-size: 0.98rem;
    transition: transform 0.28s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.28s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .lowfi-prototype-link:hover {
    transform: translateY(-3px);
    box-shadow: 0 16px 28px -10px rgba(36, 19, 95, 0.62);
    color: #fff;
  }

  .lowfi-prototype-link:focus-visible {
    outline: 2px solid rgba(67, 56, 202, 0.45);
    outline-offset: 2px;
  }

  .lowfi-note {
    font-size: 0.85rem !important;
    color: var(--color-text-secondary) !important;
  }

  .lowfi-flow-list,
  .lowfi-focus-list {
    margin: 0;
    padding-left: 1.1rem;
    display: grid;
    gap: 0.5rem;
    color: var(--color-text-secondary);
    font-size: 0.9rem;
    line-height: 1.6;
  }

  .lowfi-flow-list li {
    list-style: none;
    margin-left: -1.1rem;
    display: inline-flex;
    gap: 0.42rem;
    align-items: center;
  }

  .lowfi-flow-list li svg {
    color: var(--ifm-color-primary);
    flex-shrink: 0;
  }

  @media (max-width: 1200px) {
    .lowfi-screen-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  @media (max-width: 700px) {
    .lowfi-screen-grid {
      grid-template-columns: 1fr;
    }

    .lowfi-screen-card {
      max-width: min(280px, 100%);
    }

    .lowfi-info-grid {
      grid-template-columns: 1fr;
    }
  }
`}</style>
