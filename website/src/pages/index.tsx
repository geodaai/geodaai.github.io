import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import { useState, useEffect } from 'react';

import styles from './index.module.css';

function Logo() {
  return (
    <div className={styles.customLogo}>
      <div className={styles.logoLeftContainer}>
        <img
          src="https://github.com/openjs-foundation/artwork/raw/main/openjs_foundation/openjs_foundation-logo-horizontal-color-dark_background.png"
          alt="OpenJS Foundation Logo"
          className={styles.logoLeft}
        />
      </div>
      <div className={styles.logoSeparator}></div>
      <img
        src="https://geoda.ai/img/geoda-ai-logo.png"
        alt="GeoDA Logo"
        className={styles.logoRight}
      />
    </div>
  );
}

function TypewriterText({ text, speed = 100 }: { text: string; speed?: number }) {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timer);
    } else if (currentIndex === text.length && text.length > 0) {
      // Mark typing as complete when we've typed all characters
      setIsTypingComplete(true);
    }
  }, [currentIndex, text, speed]);

  useEffect(() => {
    // Reset when text changes
    setDisplayText('');
    setCurrentIndex(0);
    setIsTypingComplete(false);
  }, [text]);

  return (
    <span className={styles.typewriterText}>
      {displayText}
      <span className={`${styles.cursor} ${isTypingComplete ? styles.cursorComplete : ''}`}>|</span>
    </span>
  );
}

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className={clsx('container', styles.container)}>
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className={clsx('hero__subtitle', styles.subtitle)}>
          <TypewriterText text={siteConfig.tagline} speed={80} />
        </p>
        {/* <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div> */}
      </div>
    </header>
  );
}

interface ExampleCardProps {
  title: string;
  description: string;
  link: string;
  imageSrc: string;
  imageAlt: string;
  githubLink?: string;
}

function ExampleCard({
  title,
  description,
  link,
  imageSrc,
  imageAlt,
  githubLink,
}: ExampleCardProps) {
  return (
    <div className={styles.exampleCard}>
      <img src={imageSrc} alt={imageAlt} className={styles.cardImage} />
      <div className={styles.cardContent}>
        <div className={styles.cardButtonContainer}>
          <Link className={styles.cardButton} to={link}>
            {title}
          </Link>
          {githubLink && (
            <Link href={githubLink} className={styles.githubLink} title="View on GitHub">
              <svg
                className={styles.githubIcon}
                viewBox="0 0 24 24"
                fill="currentColor"
                width="20"
                height="20"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title="GeoDa.AI Project" description="GeoDa.AI Project">
      <HomepageHeader />
      <main>
        <div className={styles.sectionHeading}>
          <h2>⚙️ Libraries</h2>
          <h4>The GeoDa.AI libraries</h4>
        </div>
        <HomepageFeatures />
        <div className={styles.sectionHeading}>
          <h2>🚀 Projects</h2>
          <h4>The projects that use GeoDa.AI libraries</h4>
        </div>
        <div className={styles.exampleCardsContainer}>
          <ExampleCard
            title="Kepler.gl AI Assistant"
            description="Kepler.gl is a powerful open source geospatial analysis tool for large-scale data sets."
            link="https://kepler.gl"
            imageSrc="https://github.com/user-attachments/assets/dc18c468-4a75-41ea-b724-ffac0d4f82ac"
            imageAlt="Kepler.gl AI Assistant"
            githubLink="https://github.com/keplergl/kepler.gl"
          />
          <ExampleCard
            title="SqlRooms AI Assistant"
            description="SqlRooms is for building data-centric apps with DuckDB"
            link="https://sqlrooms.org"
            imageSrc="https://sqlrooms.org/assets/collage.DKGrBvB9.webp"
            imageAlt="SqlRooms AI Assistant"
            githubLink="https://github.com/sqlrooms/sqlrooms"
          />
          <ExampleCard
            title="GeoDa.AI prototype"
            description="This is a prototype of the GeoDa.AI project"
            link="https://geoda.ai"
            imageSrc="/img/geoda-ai.png"
            imageAlt="GeoDa.AI prototype"
            githubLink="https://github.com/GeoDaCenter/nextgeoda"
          />
          <ExampleCard
            title="GeoDa Data AI"
            description="This is a prototype of the AI Assistant for GeoDa Data"
            link="https://geodacenter.github.io/data-and-lab/Chi-Carjackings/"
            imageSrc="/img/geoda-data-ai.png"
            imageAlt="GeoDa Data AI Assistant"
            githubLink="https://github.com/GeoDaCenter/data-and-lab"
          />
        </div>
      </main>
    </Layout>
  );
}
