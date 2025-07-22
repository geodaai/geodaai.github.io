import type { ReactNode } from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import { useState } from 'react';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  github: string;
  image: string;
  description: ReactNode;
  learnMoreLink: string;
  learnMoreText: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'OpenAssistant',
    github: 'https://github.com/geodaai/openassistant',
    image: 'https://openassistant-doc.vercel.app/img/geoda-tool.png',
    description: (
      <>
        OpenAssistant is a javascript library for building AI assistant with
        powerful tools and interactive chat component.
      </>
    ),
    learnMoreLink: 'https://openassistant-doc.vercel.app',
    learnMoreText: 'Learn More about OpenAssistant',
  },
  {
    title: 'GeoDaLib',
    github: 'https://github.com/geodaai/geodalib',
    image: 'img/geoda-lib-thumbnail.png',
    description: (
      <>
        GeoDaLib is a modern Javascript library for spatial data analysis for
        the AI era.
      </>
    ),
    learnMoreLink: 'https://geodaai.github.io/geodalib/',
    learnMoreText: 'Learn More about GeoDaLib',
  },
];

function Feature({
  title,
  github,
  image,
  description,
  learnMoreLink,
  learnMoreText,
}: FeatureItem) {
  const [showModal, setShowModal] = useState(false);

  const handleImageClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setShowModal(false);
    }
  };

  return (
    <>
      <div className={clsx('col col--6')}>
        <div className="text--center padding-horiz--md">
          <div className={styles.titleContainer}>
            <Heading as="h3">{title}</Heading>
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.githubLink}
              aria-label={`View ${title} on GitHub`}
            >
              <svg
                className={styles.githubIcon}
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          </div>
        </div>
        <div className={clsx('text--center', styles.featureImage)}>
          <img
            src={image}
            className={styles.featureSvg}
            role="img"
            onClick={handleImageClick}
            alt={title || 'Feature image'}
          />
        </div>
        <div className="text--center padding-horiz--md">
          <p>{description}</p>
          <div className={styles.learnMore}>
            <a href={learnMoreLink}>{learnMoreText}</a>
          </div>
        </div>
      </div>

      {/* Modal */}
      <div
        className={`${styles.modalOverlay} ${showModal ? styles.show : ''}`}
        onClick={handleOverlayClick}
      >
        <div className={styles.modalContent}>
          <button
            className={styles.closeButton}
            onClick={handleCloseModal}
            aria-label="Close modal"
          >
            ×
          </button>
          <img
            src={image}
            className={styles.modalImage}
            alt={title || 'Feature image'}
          />
        </div>
      </div>
    </>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
