import { MousePointer2, Layout, Layers, Zap } from 'lucide-react';

# Low-Fi Prototype

## 1. Interactive Wireframes

We utilized Figma to map out the micro-interactions and spatial logic of the application. This low-fidelity stage allowed us to iterate rapidly on user flows before moving into high-fidelity visual design.

<div style={{
  background: 'var(--button-outline-bg)',
  borderRadius: '24px',
  padding: '2rem',
  border: '2px dashed rgba(var(--ifm-color-primary-rgb), 0.2)',
  textAlign: 'center',
  margin: '2.5rem 0'
}}>
  <div style={{ 
    display: 'flex', 
    justifyContent: 'center', 
    gap: '2rem', 
    marginBottom: '2rem',
    flexWrap: 'wrap'
  }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#64748b', fontSize: '0.9rem' }}>
      <Layout size={16} /> <span>Core User Flows</span>
    </div>
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#64748b', fontSize: '0.9rem' }}>
      <Layers size={16} /> <span>Spatial Logic</span>
    </div>
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#64748b', fontSize: '0.9rem' }}>
      <Zap size={16} /> <span>Micro-interactions</span>
    </div>
  </div>

<h3 style={{ marginBottom: '1.5rem', fontSize: '1.25rem' }}>Experience the Skeleton of our Design</h3>

<a
href="https://www.figma.com/proto/VIDqKKcrev9dEdHSt3Vmct/Low-fi?node-id=4-3&starting-point-node-id=4%3A3"
target="_blank"
style={{
background: 'linear-gradient(135deg, #24135F 0%, #4338ca 100%)',
color: 'white',
padding: '1.2rem 2.8rem',
borderRadius: '16px',
textDecoration: 'none',
fontWeight: '700',
display: 'inline-flex',
alignItems: 'center',
gap: '12px',
transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
boxShadow: '0 10px 25px -5px rgba(36, 19, 95, 0.4)',
cursor: 'pointer',
border: 'none'
}}
onMouseOver={(e) => {
e.currentTarget.style.transform = 'translateY(-3px)';
e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(36, 19, 95, 0.4)';
}}
onMouseOut={(e) => {
e.currentTarget.style.transform = 'translateY(0)';
e.currentTarget.style.boxShadow = '0 10px 25px -5px rgba(36, 19, 95, 0.4)';
}}
>
    <MousePointer2 size={20} style={{ animation: 'pulse 2s infinite' }} />
    <span>Launch Interactive Prototype</span>
    <span style={{ opacity: 0.7, marginLeft: '4px' }}>→</span>
  </a>

  <p style={{ marginTop: '1.5rem', fontSize: '0.85rem', color: '#94a3b8' }}>
    Best viewed in a desktop browser or via the Figma mobile app.
  </p>
</div>

<style>{`
  @keyframes pulse {
    0% { transform: scale(1); opacity: 1; }
    50% { transform: scale(1.1); opacity: 0.8; }
    100% { transform: scale(1); opacity: 1; }
  }
`}</style>