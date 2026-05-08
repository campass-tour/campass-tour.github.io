import { MapPinned, Users, Sparkles, Target, ArrowRight, Lightbulb } from 'lucide-react';

# The Why

## 1. Core Motivation

Our team chose the **Social and Active** track because we observed a recurring issue: campus exploration is often functional but emotionally disconnected.

Traditional tools help you **find** a room, but they don't help you **feel** like you belong there.

{/* 核心洞察卡片 */}
<div style={{ 
  background: 'var(--button-outline-bg)', 
  padding: '1.5rem', 
  borderRadius: '20px', 
  display: 'flex', 
  gap: '1.2rem',
  alignItems: 'center',
  margin: '2rem 0',
  border: '1px solid rgba(var(--ifm-color-primary-rgb), 0.1)'
}}>
  <div style={{ background: 'var(--ifm-color-primary)', color: '#fff', padding: '0.6rem', borderRadius: '12px', display: 'flex' }}>
    <Lightbulb size={24} />
  </div>
  <p style={{ margin: 0, lineHeight: 1.6, fontSize: '1rem', fontWeight: '500' }}>
    <strong>Key Insight:</strong> Orientation without engagement does not create <strong>connection</strong>.
  </p>
</div>

import PillarGrid from '@site/src/components/mdx/PillarGrid';

## 2. Design Direction

To bridge this gap, we reframed exploration as a **playful social journey**. Our strategy focuses on three pillars:

<PillarGrid />

## 3. Experience Shift

We are moving away from passive information consumption towards active experience collection.

{/* 转换逻辑卡片 */}
<div style={{
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  background: 'var(--button-outline-bg)',
  padding: '1.5rem',
  borderRadius: '20px',
  border: '1px solid rgba(var(--ifm-color-primary-rgb), 0.1)',
  marginTop: '1.5rem'
}}>
  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
    <div style={{ flex: 1, padding: '0.75rem', background: 'rgba(var(--ifm-color-primary-rgb), 0.05)', borderRadius: '12px', textAlign: 'center', fontSize: '0.9rem', border: '1px solid rgba(var(--ifm-color-primary-rgb), 0.1)' }}>Utility-based Navigation</div>
    <ArrowRight size={20} style={{ color: 'var(--ifm-color-primary)' }} />
    <div style={{ flex: 1, padding: '0.75rem', background: 'var(--ifm-color-primary)', borderRadius: '12px', textAlign: 'center', fontSize: '0.9rem', color: '#fff', fontWeight: 600 }}>Memory-based Exploration</div>
  </div>
  <ul style={{ margin: '0.5rem 0 0 1.2rem', fontSize: '0.95rem', lineHeight: '1.8' }}>
    <li><strong>From finding locations</strong> to collecting contextual rewards.</li>
    <li><strong>From individual tasks</strong> to community-driven discovery.</li>
    <li><strong>From static maps</strong> to living campus companions.</li>
  </ul>
</div>

## 4. Expected Outcome

{/* 总结卡片：统一采用 Core Differentiation 的横向布局 */}
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
  <p style={{ margin: 0, lineHeight: 1.6, fontSize: '1rem' }}>
    <strong style={{ color: 'var(--ifm-color-primary)' }}>Strategic Vision:</strong> This direction ensures that the platform is not just a tool for the <strong>first day</strong>, but a bridge to <strong>long-term belonging</strong> in the XJTLU community.
  </p>
</div>