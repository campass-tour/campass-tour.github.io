import { MousePointer2 } from 'lucide-react';

# Low-Fi Prototype

## 1. Interactive Wireframes

We utilized Figma to map out the micro-interactions and spatial logic of the application.

<div style={{ textAlign: 'center', margin: '2rem 0' }}>
  <a
    href="https://www.figma.com/proto/VIDqKKcrev9dEdHSt3Vmct/Low-fi?node-id=87-737&t=9wLAeo1FvcPHR6NU-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=4%3A3"
    target="_blank"
    style={{
      background: '#24135F',
      color: 'white',
      padding: '1rem 2.5rem',
      borderRadius: '12px',
      textDecoration: 'none',
      fontWeight: 'bold',
      display: 'inline-flex',
      alignItems: 'flex-start',
      gap: '10px',
      transition: 'transform 0.2s',
      boxShadow: '0 4px 14px rgba(36, 19, 95, 0.3)',
      paddingTop: '1.15rem',
      paddingBottom: '0.85rem'
    }}
    onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
    onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
  >
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', transform: 'translateY(2px)' }}>
      <MousePointer2 size={20} />
      Launch Interactive Prototype ->
    </span>
  </a>
</div>
