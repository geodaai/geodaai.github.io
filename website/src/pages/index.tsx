import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

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
        src="https://spatial.uchicago.edu/sites/default/files/styles/featured_content_column_image/public/2023-06/geoda_logo_0.png"
        alt="GeoDA Logo"
        className={styles.logoRight}
      />
    </div>
  );
}

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className={clsx('container', styles.container)}>
        <Logo />
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className={clsx('hero__subtitle', styles.subtitle)}>
          {siteConfig.tagline}
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
}

function ExampleCard({ title, description, link, imageSrc, imageAlt }: ExampleCardProps) {
  return (
    <div className={styles.exampleCard}>
      <img 
        src={imageSrc} 
        alt={imageAlt} 
        className={styles.cardImage}
      />
      <div className={styles.cardContent}>
        <Link className={styles.cardButton} to={link}>
          {title}
        </Link>
      </div>
    </div>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title="GeoDa OpenJS Project" description="GeoDa OpenJS Project">
      <HomepageHeader />
      <main>
        <div className={styles.sectionHeading}>
          <h2>Projects</h2>
          <h4>The GeoDa OpenJS projects</h4>
        </div>
        <HomepageFeatures />
        <div className={styles.sectionHeading}>
          <h2>Examples</h2>
          <h4>The projects use GeoDa OpenJS libraries</h4>
        </div>
        <div className={styles.exampleCardsContainer}>
          <ExampleCard
            title="Kepler.gl AI Assistant"
            description="This is an example of a project"
            link="https://github.com/keplergl/kepler.gl/discussions/2843#discussioncomment-13326013"
            imageSrc="https://github.com/user-attachments/assets/dc18c468-4a75-41ea-b724-ffac0d4f82ac"
            imageAlt="Kepler.gl AI Assistant"
          />
          <ExampleCard
            title="SqlRooms AI Assistant"
            description="This is an example of a project"
            link="https://sqlrooms.org"
            imageSrc="https://sqlrooms.org/assets/collage.DKGrBvB9.webp"
            imageAlt="SqlRooms AI Assistant"
          />
          <ExampleCard
            title="GeoDa.AI"
            description="This is an example of a project"
            link="https://geoda.ai"
            imageSrc="/img/geoda-ai.png"
            imageAlt="GeoDa.AI prototype"
          />
        </div>
      </main>
    </Layout>
  );
}
