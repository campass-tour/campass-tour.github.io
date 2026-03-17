import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';


import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title" style={{ fontSize: '4rem' }}>
          Welcome to <span>Cam<span style={{ color: '#FFD700' }}>pass</span></span>
        </Heading>
        
        <p className="hero__subtitle" style={{ fontSize: '1.5rem', marginTop: '1rem' }}>
          Your Interactive Guide to the XJTLU Campus
        </p>

        <div className={styles.buttons} style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/motivation-research/the-why"
            style={{ padding: '0.8rem 2rem', fontSize: '1.1rem' }}>
            Explore Our Portfolio 🚀
          </Link>
          <Link
            className="button button--outline button--secondary button--lg"
            to="/docs/technical-implementation/high-fi-prototype"
            style={{ padding: '0.8rem 2rem', fontSize: '1.1rem', backgroundColor: 'rgba(255,255,255,0.1)' }}>
            Try Prototype 📱
          </Link>
        </div>

        <img 
          src="/img/library-sticker.png" 
          alt="XJTLU Library" 
          className={styles.librarySticker} 
        />
        
      </div>

    </header>
  );
}

// 亮点卡片
function ExperienceHighlights() {
  const highlights =[
    {
      title: '🔍 Tangible Exploration',
      description: 'Discover hidden gems and iconic buildings around the XJTLU campus. Every corner holds a new surprise waiting to be unlocked.',
    },
    {
      title: '✨ Playful Journey',
      description: 'Turn a boring campus tour into a gamified treasure hunt. Collect exclusive 3D campus sprites and bring them to life with AR.',
    },
    {
      title: '💬 Community Connection',
      description: 'Leave your mark in digital time capsules. Share tips, post AR photos, and connect with past and future explorers at specific campus spots.',
    }
  ];

  return (
    <section style={{ padding: '4rem 0', backgroundColor: 'var(--ifm-background-color)' }}>
      <div className="container">
        <Heading as="h2" style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '2.5rem' }}>
          More Than Just a Map
        </Heading>
        <div className="row">
          {highlights.map((item, idx) => (
            <div className="col col--4" key={idx} style={{ padding: '1rem' }}>
              <div style={{
                padding: '2rem',
                borderRadius: '16px',
                backgroundColor: 'var(--ifm-background-surface-color)',
                boxShadow: '0 8px 24px rgba(0,0,0,0.05)',
                height: '100%',
                transition: 'transform 0.3s ease',
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <Heading as="h3" style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{item.title}</Heading>
                <p style={{ color: 'var(--ifm-color-emphasis-700)', lineHeight: '1.6' }}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Process Portfolio | ${siteConfig.title}`}
      description="Campass: A gamified XJTLU campus tour experience.">
      <HomepageHeader />
      <main>
        <ExperienceHighlights />
      </main>
    </Layout>
  );
}