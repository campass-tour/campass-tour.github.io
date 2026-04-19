import { MapPinned, Users, Sparkles, Target } from 'lucide-react';

# 1. The Why

## 1.1 Core Motivation

Our team chose the **Social and Active** track because we observed a recurring issue for new students: campus exploration is often confusing, passive, and emotionally disconnected.

Traditional navigation tools are functionally useful, but they mainly support wayfinding. They rarely help students reduce isolation, build familiarity, or form a sense of belonging during their first weeks on campus.

<div style={{
  margin: '1.5rem 0 2rem',
  padding: '1.2rem 1.3rem',
  borderRadius: 'var(--radius-card, 16px)',
  border: '1px solid var(--button-outline-bg)',
  background: 'linear-gradient(135deg, rgba(33, 150, 243, 0.08), rgba(0, 196, 204, 0.08))'
}}>
  <p style={{ margin: 0, fontWeight: 700, color: 'var(--ifm-color-primary)' }}>
    Key insight: Orientation without engagement does not create connection.
  </p>
</div>

## 1.2 Design Direction

To address this gap, we reframed exploration as a **playful social journey**, not just a navigation task.

<div style={{
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
  gap: '1rem',
  marginTop: '1rem'
}}>
  <div style={{ background: 'var(--button-outline-bg)', padding: '1rem', borderRadius: '14px', border: '1px solid var(--button-outline-bg)' }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.45rem' }}>
      <MapPinned size={18} color="var(--ifm-color-primary)" />
      <strong>NFC Check-ins</strong>
    </div>
    <p style={{ margin: 0, opacity: 0.9 }}>Turn physical campus touchpoints into lightweight, rewarding interactions.</p>
  </div>

  <div style={{ background: 'var(--button-outline-bg)', padding: '1rem', borderRadius: '14px', border: '1px solid var(--button-outline-bg)' }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.45rem' }}>
      <Sparkles size={18} color="var(--ifm-color-primary)" />
      <strong>AR Encounters</strong>
    </div>
    <p style={{ margin: 0, opacity: 0.9 }}>Add playful moments that make places memorable rather than purely functional.</p>
  </div>

  <div style={{ background: 'var(--button-outline-bg)', padding: '1rem', borderRadius: '14px', border: '1px solid var(--button-outline-bg)' }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.45rem' }}>
      <Users size={18} color="var(--ifm-color-primary)" />
      <strong>Social Layer</strong>
    </div>
    <p style={{ margin: 0, opacity: 0.9 }}>Enable students to share discoveries and build community through place-based content.</p>
  </div>
</div>

## 1.3 Experience Shift

In our proposed model, users are not just "finding locations"; they are **collecting experiences**.

- They interact with virtual companions in context.
- They leave and discover community-generated content.
- They build personal memories tied to specific campus places.

## 1.4 Expected Outcome

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
    <Target size={18} />
  </div>
  <p style={{ margin: 0, lineHeight: 1.65 }}>
    This direction improves navigation efficiency while also supporting <strong>belonging</strong>, <strong>participation</strong>, and stronger first impressions of campus life.
  </p>
</div>
