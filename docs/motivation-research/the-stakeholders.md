import { Lightbulb, Target } from 'lucide-react';
import StakeholderPersonas from '@site/src/components/mdx/StakeholderPersonas';

# The Stakeholders

## 1. Persona Segmentation

Our design is centered around three core user personas. By segmenting stakeholders by their familiarity and motivations, we move beyond generic navigation to address specific emotional and functional needs.

<StakeholderPersonas />

## 2. Key Insights & Strategy

{/* 核心原则卡片 */}
<div style={{ 
  background: 'var(--button-outline-bg)', 
  padding: '1.5rem', 
  borderRadius: '20px', 
  display: 'flex', 
  gap: '1.2rem',
  alignItems: 'center',
  margin: '1.5rem 0 2rem',
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

<div style={{ 
  background: 'var(--button-outline-bg)', 
  padding: '1.5rem', 
  borderRadius: '20px', 
  display: 'flex', 
  gap: '1.2rem',
  alignItems: 'center',
  marginTop: '2rem',
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