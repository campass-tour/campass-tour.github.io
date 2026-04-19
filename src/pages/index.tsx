import React from 'react';
import clsx from 'clsx';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import { Box, Compass, Fingerprint, MessageCircle, Play } from 'lucide-react';

import styles from './index.module.css';

function HomepageHeader() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className={clsx('hero__title', styles.heroTitle)}>
          Welcome to{' '}
          <span>
            <span className="logo-cam">Cam</span>
            <span className="logo-pass">pass</span>
          </span>
        </Heading>

        <p className={clsx('hero__subtitle', styles.heroSubtitle)}>
          Your Interactive Guide to the XJTLU Campus
        </p>

        <div className={styles.buttons}>
          <Link
            className={clsx('button button--secondary button--lg', styles.ctaButton)}
            to="/docs/motivation-research/the-why"
          >
            <Compass size={18} aria-hidden="true" focusable="false" />
            <span>Explore Our Portfolio</span>
          </Link>
          <Link
            className={clsx(
              'button button--outline button--secondary button--lg',
              styles.ctaButton,
              styles.ctaButtonOutline,
            )}
            to="/docs/technical-implementation/high-fi-prototype"
          >
            <Play size={18} aria-hidden="true" focusable="false" />
            <span>Try Prototype</span>
          </Link>
        </div>

        <img src={useBaseUrl('img/favicon.svg')} alt="icon" className={styles.Sticker} />
      </div>
    </header>
  );
}

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
    <section className={styles.highlightsSection}>
      <div className="container">
        <Heading as="h2" className={styles.highlightsTitle}>
          More Than Just a Map
        </Heading>
        <div className={clsx('row', styles.highlightsRow)}>
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div className={clsx('col col--4', styles.highlightsCol)} key={idx}>
                <div className={styles.highlightCard}>
                  <div className={styles.highlightHeader}>
                    <Icon
                      className={styles.highlightIcon}
                      size={32}
                      aria-hidden="true"
                      focusable="false"
                    />
                    <Heading as="h3" className={styles.highlightTitle}>
                      {item.title}
                    </Heading>
                  </div>
                  <p className={styles.highlightDesc}>{item.description}</p>
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
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={`${siteConfig.title}`} description="Campass: A gamified XJTLU campus tour experience.">
      <HomepageHeader />
      <main>
        <ExperienceHighlights />
      </main>
    </Layout>
  );
}
