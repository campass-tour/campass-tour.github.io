import { Compass, GraduationCap, Camera, Users, Target, Lightbulb, Map } from 'lucide-react';

# The Stakeholders

## 1. Stakeholder Lens

Our design is centered around three core user personas: **The Explorer**, **The XJTLU Veteran**, and **The Guest**.

Rather than treating all campus visitors as a generic user group, we differentiate stakeholders by their familiarity, motivations, and the specific friction points they encounter.

{/* 核心原则卡片：更新为目标样式 */}
<div style={{ 
  background: 'var(--button-outline-bg)', 
  padding: '1.5rem', 
  borderRadius: '20px', 
  display: 'flex', 
  gap: '1.2rem',
  alignItems: 'center',
  margin: '1.5rem 0 2.5rem',
  border: '1px solid rgba(var(--ifm-color-primary-rgb), 0.1)'
}}>
  <div style={{ background: 'var(--ifm-color-primary)', color: '#fff', padding: '0.6rem', borderRadius: '12px', display: 'flex' }}>
    <Lightbulb size={24} />
  </div>
  <div style={{ flex: 1 }}>
    <p style={{ margin: 0, fontWeight: '700', color: 'var(--ifm-color-primary)', fontSize: '1.1rem' }}>
      Key Principle: One campus, multiple journeys.
    </p>
    <p style={{ margin: '0.2rem 0 0', fontSize: '0.95rem', opacity: 0.8 }}>
      We design for the "Level of Familiarity"—moving from functional support to emotional engagement.
    </p>
  </div>
</div>

## 2. Persona Segmentation

<div style={{
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
  gap: '1.5rem',
  marginTop: '1.5rem',
  marginBottom: '2.5rem'
}}>
  {/* The Explorer */}
  <div style={{ 
    background: 'var(--button-outline-bg)', 
    padding: '1.5rem', 
    borderRadius: '20px', 
    border: '1px solid rgba(var(--ifm-color-primary-rgb), 0.1)',
    position: 'relative',
    overflow: 'hidden'
  }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
      <div style={{ background: 'var(--ifm-color-primary)', padding: '8px', borderRadius: '10px', color: 'white', display: 'flex' }}>
        <Compass size={20} />
      </div>
      <strong style={{ fontSize: '1.15rem' }}>The Explorer</strong>
    </div>
    <p style={{ fontSize: '0.9rem', color: 'var(--ifm-color-primary)', fontWeight: '600', marginBottom: '0.5rem' }}>"How do I get to my next class?"</p>
    <p style={{ fontSize: '0.9rem', lineHeight: '1.6', margin: 0, color: 'var(--ifm-color-content)' }}>
      New students or users unfamiliar with XJTLU. They need **functional certainty**—lightweight orientation and clear paths to reduce anxiety.
    </p>
  </div>

{/* The XJTLU Veteran */}
  <div style={{ 
    background: 'var(--button-outline-bg)', 
    padding: '1.5rem', 
    borderRadius: '20px', 
    border: '1px solid rgba(var(--ifm-color-primary-rgb), 0.1)',
    position: 'relative',
    overflow: 'hidden'
  }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
      <div style={{ background: 'var(--ifm-color-primary)', padding: '8px', borderRadius: '10px', color: 'white', display: 'flex' }}>
        <GraduationCap size={20} />
      </div>
      <strong style={{ fontSize: '1.15rem' }}>The Veteran</strong>
    </div>
    <p style={{ fontSize: '0.9rem', color: 'var(--ifm-color-primary)', fontWeight: '600', marginBottom: '0.5rem' }}>"Is there anything new happening?"</p>
    <p style={{ fontSize: '0.9rem', lineHeight: '1.6', margin: 0, color: 'var(--ifm-color-content)' }}>
      Returning students who know the map. They seek **novelty and interaction**—trivia, social hidden gems, and reasons to rediscover spaces.
    </p>
  </div>

{/* The Guest */}
  <div style={{ 
    background: 'var(--button-outline-bg)', 
    padding: '1.5rem', 
    borderRadius: '20px', 
    border: '1px solid rgba(var(--ifm-color-primary-rgb), 0.1)',
    position: 'relative',
    overflow: 'hidden'
  }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
      <div style={{ background: 'var(--ifm-color-primary)', padding: '8px', borderRadius: '10px', color: 'white', display: 'flex' }}>
        <Camera size={20} />
      </div>
      <strong style={{ fontSize: '1.15rem' }}>The Guest</strong>
    </div>
    <p style={{ fontSize: '0.9rem', color: 'var(--ifm-color-primary)', fontWeight: '600', marginBottom: '0.5rem' }}>"What makes XJTLU special?"</p>
    <p style={{ fontSize: '0.9rem', lineHeight: '1.6', margin: 0, color: 'var(--ifm-color-content)' }}>
      Visitors and parents. They need **curated storytelling**—an accessible "highlight reel" of campus culture and identity.
    </p>
  </div>
</div>

## 3. Strategic Mapping

<div style={{
  overflowX: 'auto',
  marginTop: '1.5rem',
  marginBottom: '2.5rem'
}}>
  <table style={{
    width: '100%',
    borderCollapse: 'separate',
    borderSpacing: '0',
    borderRadius: '16px',
    overflow: 'hidden',
    border: '1px solid rgba(var(--ifm-color-primary-rgb), 0.1)',
    background: 'var(--button-outline-bg)'
  }}>
    <thead>
      <tr style={{ background: 'rgba(var(--ifm-color-primary-rgb), 0.05)' }}>
        <th style={{ padding: '1.2rem', textAlign: 'left', color: 'var(--ifm-color-primary)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>User Group</th>
        <th style={{ padding: '1.2rem', textAlign: 'left', color: 'var(--ifm-color-primary)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Pain Point</th>
        <th style={{ padding: '1.2rem', textAlign: 'left', color: 'var(--ifm-color-primary)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Design Focus</th>
        <th style={{ padding: '1.2rem', textAlign: 'left', color: 'var(--ifm-color-primary)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Key Feature</th>
      </tr>
    </thead>
    <tbody>
      <tr style={{ borderBottom: '1px solid rgba(var(--ifm-color-primary-rgb), 0.05)' }}>
        <td style={{ padding: '1.2rem', fontWeight: 700 }}>Explorer</td>
        <td style={{ padding: '1.2rem', opacity: 0.8 }}>Spatial anxiety & orientation loss</td>
        <td style={{ padding: '1.2rem' }}>
          <span style={{ background: 'var(--ifm-color-primary)', color: '#fff', padding: '4px 10px', borderRadius: '6px', fontSize: '0.85rem', fontWeight: 600 }}>Orientation</span>
        </td>
        <td style={{ padding: '1.2rem', fontWeight: 500 }}>AR Navigation & Live Map</td>
      </tr>
      <tr style={{ borderBottom: '1px solid rgba(var(--ifm-color-primary-rgb), 0.05)' }}>
        <td style={{ padding: '1.2rem', fontWeight: 700 }}>Veteran</td>
        <td style={{ padding: '1.2rem', opacity: 0.8 }}>Routine boredom & low re-engagement</td>
        <td style={{ padding: '1.2rem' }}>
          <span style={{ background: 'var(--ifm-color-primary)', color: '#fff', padding: '4px 10px', borderRadius: '6px', fontSize: '0.85rem', fontWeight: 600 }}>Engagement</span>
        </td>
        <td style={{ padding: '1.2rem', fontWeight: 500 }}>Trivia Tasks & Rare Badges</td>
      </tr>
      <tr>
        <td style={{ padding: '1.2rem', fontWeight: 700 }}>Guest</td>
        <td style={{ padding: '1.2rem', opacity: 0.8 }}>Information overload & lack of context</td>
        <td style={{ padding: '1.2rem' }}>
          <span style={{ background: 'var(--ifm-color-primary)', color: '#fff', padding: '4px 10px', borderRadius: '6px', fontSize: '0.85rem', fontWeight: 600 }}>Narrative</span>
        </td>
        <td style={{ padding: '1.2rem', fontWeight: 500 }}>Curated Heritage Tours</td>
      </tr>
    </tbody>
  </table>
</div>

## 4. Design Implication

<div style={{ 
  background: 'var(--button-outline-bg)', 
  padding: '1.5rem', 
  borderRadius: '20px', 
  display: 'flex', 
  gap: '1.2rem',
  alignItems: 'center',
  marginTop: '2.5rem',
  border: '1px solid rgba(var(--ifm-color-primary-rgb), 0.1)'
}}>
  <div style={{ background: 'var(--ifm-color-primary)', color: '#fff', padding: '0.6rem', borderRadius: '12px', display: 'flex' }}>
    <Target size={24} />
  </div>
  <div style={{ flex: 1, fontSize: '1rem', lineHeight: '1.6' }}>
    <strong style={{ color: 'var(--ifm-color-primary)', marginRight: '0.5rem' }}>Strategic Evolution:</strong>
    By segmenting stakeholders, the platform transforms from a static map into a <strong>dynamic campus companion</strong> that evolves alongside the user's journey.
  </div>
</div>