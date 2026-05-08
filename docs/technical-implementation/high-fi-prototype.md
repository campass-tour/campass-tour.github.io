import { MousePointer2, Layout, Layers, Zap } from 'lucide-react';

# High-Fi Prototype

We developed the high-fidelity prototypes to provide a fully interactive experience of the application. The prototype is deployed online for demonstration purposes. We are currently transitioning the frontend architecture from React to Next.js.

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
      <Layout size={16} /> <span>Fully Interactive</span>
    </div>
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#64748b', fontSize: '0.9rem' }}>
      <Layers size={16} /> <span>Visual Design Component</span>
    </div>
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#64748b', fontSize: '0.9rem' }}>
      <Zap size={16} /> <span>Rich Features</span>
    </div>
  </div>

  <h3 style={{ marginBottom: '1.5rem', fontSize: '1.25rem' }}>Experience the Application</h3>
  
  <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
    <a
      href="https://campass-tour.github.io/prototype/"
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
        boxShadow: '0 8px 30px rgba(36, 19, 95, 0.2)'
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.boxShadow = '0 12px 40px rgba(36, 19, 95, 0.3)';
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 8px 30px rgba(36, 19, 95, 0.2)';
      }}
    >
      <MousePointer2 size={20} />
      <span>React Frontend (Stable)</span>
    </a>

    <a
      href="https://campass-psi.vercel.app/"
      target="_blank"
      style={{
        background: 'rgba(36, 19, 95, 0.05)',
        color: '#24135F',
        border: '2px solid #24135F',
        padding: '1.2rem 2.8rem',
        borderRadius: '16px',
        textDecoration: 'none',
        fontWeight: '700',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '12px',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.background = 'rgba(36, 19, 95, 0.1)';
        e.currentTarget.style.transform = 'translateY(-4px)';
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.background = 'rgba(36, 19, 95, 0.05)';
        e.currentTarget.style.transform = 'translateY(0)';
      }}
    >
      <MousePointer2 size={20} />
      <span>Next.js Refactored (WIP)</span>
    </a>
  </div>
</div>