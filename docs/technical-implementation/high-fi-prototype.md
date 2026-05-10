import { MousePointer2, Layout, Layers, Zap } from 'lucide-react';
import ResponsiveViewer from '@site/src/components/mdx/ResponsiveViewer';

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
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#64748b', fontSize: '0.9rem' }}>
       <span>Github Open Source</span>
    </div>
  </div>

  <h3 style={{ marginBottom: '1.5rem', fontSize: '1.25rem' }}>Experience the Application</h3>
  
  <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
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

  <h3 style={{ marginBottom: '1.5rem', fontSize: '1.1rem', color: '#64748b' }}>Project Source Code</h3>

  <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
    <a
      href="https://github.com/campass-tour/prototype"
      target="_blank"
      style={{
        background: '#24292f',
        color: 'white',
        textDecoration: 'none',
        fontSize: '0.9rem',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        padding: '0.6rem 1.2rem',
        borderRadius: '8px',
        fontWeight: '600',
        transition: 'all 0.2s ease',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.background = '#1a1e22';
        e.currentTarget.style.transform = 'translateY(-2px)';
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.background = '#24292f';
        e.currentTarget.style.transform = 'translateY(0)';
      }}
    >
      <svg height="20" width="20" viewBox="0 0 16 16" fill="currentColor"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
      <span>GitHub - React Source</span>
    </a>
    <a
      href="https://github.com/campass-tour/campass"
      target="_blank"
      style={{
        background: '#24292f',
        color: 'white',
        textDecoration: 'none',
        fontSize: '0.9rem',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        padding: '0.6rem 1.2rem',
        borderRadius: '8px',
        fontWeight: '600',
        transition: 'all 0.2s ease',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.background = '#1a1e22';
        e.currentTarget.style.transform = 'translateY(-2px)';
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.background = '#24292f';
        e.currentTarget.style.transform = 'translateY(0)';
      }}
    >
      <svg height="20" width="20" viewBox="0 0 16 16" fill="currentColor"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
      <span>GitHub - Next.js Source</span>
    </a>
  </div>
</div>

<ResponsiveViewer />