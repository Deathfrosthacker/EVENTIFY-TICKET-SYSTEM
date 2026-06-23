import React, { useState, useEffect } from 'react';
import { mockStats } from '../data/mockData';
import styles from './Statistics.module.css';

const AnimateCounter: React.FC<{ target: number; suffix: string }> = ({ target, suffix }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp: number | null = null;
    const duration = 1500; // 1.5s
    
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    
    window.requestAnimationFrame(step);
  }, [target]);

  return <span>{count.toLocaleString()}{suffix}</span>;
};

export const Statistics: React.FC = () => {
  const parseValue = (valStr: string) => {
    const num = parseInt(valStr.replace(/[^\d]/g, ''), 10);
    const suffix = valStr.replace(/[\d,]/g, '');
    return { target: isNaN(num) ? 0 : num, suffix };
  };

  return (
    <section className="section section-bg-dark">
      {/* Background gradients */}
      <div className={styles.glowBlob1}></div>
      <div className={styles.glowBlob2}></div>

      <div className={`${styles.container} container`}>
        <div className={styles.grid}>
          {mockStats.map((stat) => {
            const { target, suffix } = parseValue(stat.value);
            return (
              <div key={stat.id} className={styles.statCard}>
                <span className={styles.value}>
                  <AnimateCounter target={target} suffix={suffix} />
                </span>
                <h3 className={styles.label}>{stat.label}</h3>
                <p className={styles.description}>{stat.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
