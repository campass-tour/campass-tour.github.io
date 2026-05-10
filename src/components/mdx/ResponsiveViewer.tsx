import React, { useState } from 'react';
import { Monitor, Smartphone, Tablet } from 'lucide-react';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function ResponsiveViewer() {
  const [device, setDevice] = useState<'laptop' | 'tablet' | 'phone'>('laptop');

  const devices = [
    { id: 'laptop', icon: Monitor, label: 'Desktop' },
    { id: 'tablet', icon: Tablet, label: 'Tablet' },
    { id: 'phone', icon: Smartphone, label: 'Mobile' },
  ] as const;

  return (
    <div style={{
      background: 'var(--ifm-background-surface-color)',
      borderRadius: 'var(--ifm-global-radius)',
      padding: '2rem',
      border: '1px solid var(--ifm-color-emphasis-200)',
      textAlign: 'center',
      margin: '2.5rem 0',
      boxShadow: 'var(--ifm-global-shadow-lw)',
      transition: 'all 0.3s ease'
    }}>
      <h3 style={{ marginBottom: '1rem', color: 'var(--ifm-color-primary)' }}>Responsive Frontend Architecture</h3>
      <p style={{ color: 'var(--ifm-font-color-base)', opacity: 0.8, marginBottom: '2rem' }}>
        Adapts seamlessly to any screen size, ensuring a consistent and optimal campus tour experience on all devices.
      </p>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
        {devices.map((d) => {
          const Icon = d.icon;
          const isActive = device === d.id;
          return (
            <button
              key={d.id}
              onClick={() => setDevice(d.id)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.8rem 1.5rem',
                borderRadius: 'var(--ifm-global-radius)',
                border: isActive ? '2px solid var(--ifm-color-primary)' : '2px solid var(--ifm-color-emphasis-200)',
                background: isActive ? 'var(--ifm-color-primary)' : 'transparent',
                color: isActive ? '#ffffff' : 'var(--ifm-font-color-base)',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                fontWeight: isActive ? 'bold' : 'normal',
                boxShadow: isActive ? 'var(--ifm-global-shadow-md)' : 'none'
              }}
            >
              <Icon size={18} />
              <span>{d.label}</span>
            </button>
          );
        })}
      </div>

      <div style={{
        position: 'relative',
        maxWidth: device === 'laptop' ? '800px' : device === 'tablet' ? '500px' : '300px',
        margin: '0 auto',
        transition: 'all 0.5s ease',
        borderRadius: 'var(--ifm-global-radius)',
        overflow: 'hidden',
        boxShadow: 'var(--ifm-global-shadow-tl)',
        border: '4px solid var(--ifm-color-emphasis-200)',
        backgroundColor: 'var(--ifm-color-background)'
      }}>
        <img 
          src={useBaseUrl(`/images/responsive/${device}.png`)} 
          alt={`${device} preview`}
          style={{ width: '100%', display: 'block', transition: 'all 0.3s ease' }} 
        />
      </div>
    </div>
  );
}