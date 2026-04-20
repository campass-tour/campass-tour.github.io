import { Compass, GraduationCap, Camera, Users } from 'lucide-react';

# 2. The Stakeholders

## 2.1 Persona Overview

Our design is centered around three core user personas shown in the onboarding flow: **The Explorer**, **The XJTLU Veteran**, and **The Guest**.

Rather than treating all campus visitors as one generic user group, we differentiated stakeholders by their familiarity with the environment, their motivations for exploring, and the kind of support they need from the system.

<div style={{
  background: 'linear-gradient(135deg, rgba(33, 150, 243, 0.08), rgba(255, 193, 7, 0.08))',
  border: '1px solid var(--button-outline-bg)',
  borderRadius: 'var(--radius-card, 16px)',
  padding: '1.2rem 1.3rem',
  margin: '1.5rem 0 2rem'
}}>
  <p style={{ margin: 0, fontWeight: 700, color: 'var(--ifm-color-primary)' }}>
    Key principle: one campus, but different users arrive with very different goals.
  </p>
</div>

## 2.2 The Three Stakeholders

<div style={{
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
  gap: '1rem',
  marginTop: '1rem'
}}>
  <div style={{ background: 'var(--button-outline-bg)', padding: '1rem', borderRadius: '14px', border: '1px solid var(--button-outline-bg)' }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.45rem' }}>
      <Compass size={18} color="var(--ifm-color-primary)" />
      <strong>The Explorer</strong>
    </div>
    <p style={{ margin: '0 0 0.65rem 0', opacity: 0.9 }}>
      This persona represents new students or users who are still unfamiliar with campus.
    </p>
    <p style={{ margin: 0, opacity: 0.9 }}>
      Their main need is practical support: clear orientation, lightweight guidance, and enough motivation to turn uncertainty into active exploration.
    </p>
  </div>

  <div style={{ background: 'var(--button-outline-bg)', padding: '1rem', borderRadius: '14px', border: '1px solid var(--button-outline-bg)' }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.45rem' }}>
      <GraduationCap size={18} color="var(--ifm-color-primary)" />
      <strong>The XJTLU Veteran</strong>
    </div>
    <p style={{ margin: '0 0 0.65rem 0', opacity: 0.9 }}>
      This persona represents returning students who already know the campus layout well.
    </p>
    <p style={{ margin: 0, opacity: 0.9 }}>
      Their value comes less from navigation and more from playful engagement, such as trivia, collection, social participation, and rediscovery of familiar places.
    </p>
  </div>

  <div style={{ background: 'var(--button-outline-bg)', padding: '1rem', borderRadius: '14px', border: '1px solid var(--button-outline-bg)' }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.45rem' }}>
      <Camera size={18} color="var(--ifm-color-primary)" />
      <strong>The Guest</strong>
    </div>
    <p style={{ margin: '0 0 0.65rem 0', opacity: 0.9 }}>
      This persona includes visitors, parents, and prospective students who experience campus from an outsider's perspective.
    </p>
    <p style={{ margin: 0, opacity: 0.9 }}>
      For them, the system should communicate campus atmosphere, educational identity, and key highlights in an accessible and welcoming way.
    </p>
  </div>
</div>

## 2.3 Why These Personas Matter

These three stakeholder groups shape different design priorities:

- **The Explorer** needs confidence, orientation, and low-friction discovery.
- **The XJTLU Veteran** needs novelty, interaction, and reasons to re-engage with the campus.
- **The Guest** needs context, impression, and a curated introduction to campus culture.

By recognizing these differences, we avoid designing a one-size-fits-all experience and instead build a system that responds to different levels of familiarity and motivation.

## 2.4 Design Implication

<div style={{
  background: 'var(--button-outline-bg)',
  padding: '1.4rem',
  borderRadius: 'var(--radius-card, 16px)',
  display: 'flex',
  gap: '0.8rem',
  alignItems: 'flex-start',
  marginTop: '1rem',
  boxShadow: 'inset 0 2px 8px rgba(0,0,0,0.02)'
}}>
  <div style={{
    background: 'var(--ifm-color-primary)',
    color: '#fff',
    padding: '0.45rem',
    borderRadius: '10px',
    display: 'flex'
  }}>
    <Users size={18} />
  </div>
  <p style={{ margin: 0, lineHeight: 1.65 }}>
    Designing for these stakeholders means the product must balance <strong>guidance</strong>, <strong>engagement</strong>, and <strong>campus storytelling</strong>, so that different users can all find value in the same platform.
  </p>
</div>
