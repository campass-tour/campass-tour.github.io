import React from 'react';
import clsx from 'clsx';
import useBaseUrl from '@docusaurus/useBaseUrl';
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
          Welcome to <span><span className="logo-cam">Cam</span><span className="logo-pass">pass</span></span>
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
            style={{ padding: '0.8rem 2rem', fontSize: '1.1rem', backgroundColor: 'var(--button-outline-bg)' }}>
            Try Prototype 📱
          </Link>
        </div>

        <img
          src={useBaseUrl('img/favicon.svg')}
          alt="icon"
          className={styles.Sticker}
        />
        
      </div>

    </header>
  );
}

// 亮点卡片

import { Fingerprint, Box, MessageCircle } from 'lucide-react';

function ExperienceHighlights() {
  const highlights = [
    {
      title: 'Tangible Magic',
      description: 'Physical touch unlocks the digital world.',
      icon: Fingerprint,
    },
    {
      title: 'Living Heritage',
      description: 'Bring static architecture to life.',
      icon: Box,
    },
    {
      title: 'Digital Legacy',
      description: 'Leave your mark in a specific time and space.',
      icon: MessageCircle,
    },
  ];

  return (
    <section style={{ padding: '4rem 0', backgroundColor: 'var(--ifm-background-color)' }}>
      <div className="container">
        <Heading as="h2" style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '2.5rem' }}>
          More Than Just a Map
        </Heading>
        <div className="row">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div className="col col--4" key={idx} style={{ padding: '1rem' }}>
                <div
                  style={{
                    padding: '2rem',
                    borderRadius: 'var(--radius-card, 16px)',
                    backgroundColor: 'var(--button-outline-bg, rgba(255,255,255,0.15))',
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)',
                    border: '1px solid var(--button-outline-bg, rgba(255,255,255,0.2))',
                    boxShadow: 'var(--shadow-card, 0 8px 24px rgba(0,0,0,0.05))',
                    height: '100%',
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.transform = 'translateY(-5px)')}
                  onMouseLeave={e => (e.currentTarget.style.transform = 'translateY(0)')}
                >
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.2rem' }}>
                    <Icon size={32} style={{ color: 'var(--ifm-color-primary)', marginRight: '0.75rem', flexShrink: 0 }} />
                    <Heading as="h3" style={{ fontSize: '1.5rem', margin: 0 }}>{item.title}</Heading>
                  </div>
                  <p style={{ color: 'var(--ifm-color-emphasis-700)', lineHeight: '1.6', margin: 0 }}>{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Campass: A gamified XJTLU campus tour experience.">
      <HomepageHeader />
      <main>
        <ExperienceHighlights />
      </main>
    </Layout>
  );
}