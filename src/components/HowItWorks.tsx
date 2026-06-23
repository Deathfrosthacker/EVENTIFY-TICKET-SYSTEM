import React from 'react';
import { Search, Ticket, Sparkles } from 'lucide-react';
import styles from './HowItWorks.module.css';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: '01',
      icon: Search,
      title: 'Discover Events',
      description: 'Filter events by category, location, or name to find what excites you.'
    },
    {
      number: '02',
      icon: Ticket,
      title: 'Book Tickets',
      description: 'Choose your tickets, pay securely via M-Pesa or card, and checkout instantly.'
    },
    {
      number: '03',
      icon: Sparkles,
      title: 'Enjoy the Experience',
      description: 'Get your digital passes sent to your phone. Scan at the gate and experience the vibe.'
    }
  ];

  return (
    <section className="section section-bg-dark" id="about">
      {/* Background glow orb */}
      <div className={styles.glowBlob}></div>

      <div className="container">
        <div className="section-header">
          <span 
            className="btn btn-sm btn-secondary" 
            style={{ 
              pointerEvents: 'none', 
              width: 'fit-content', 
              margin: '0 auto', 
              color: 'var(--text-white)', 
              borderColor: 'rgba(255, 255, 255, 0.1)', 
              backgroundColor: 'rgba(255, 255, 255, 0.03)' 
            }}
          >
            Vibe Flow
          </span>
          <h2 className="section-title">How It Works</h2>
          <p className="section-subtitle">
            Get from finding experiences to scanning tickets in three fast steps.
          </p>
        </div>

        <div className={styles.stepsGrid}>
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={index} className={styles.stepCard}>
                <div className={styles.iconWrapperOuter}>
                  <div className={styles.stepNumber}>{step.number}</div>
                  <div className={styles.iconWrapperInner}>
                    <IconComponent size={28} className={styles.stepIcon} />
                  </div>
                </div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDescription}>{step.description}</p>
                
                {/* Connecting arrow/line for desktop layouts (except last item) */}
                {index < 2 && <div className={styles.connectorLine}></div>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
