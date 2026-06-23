import React from 'react';
import { Sparkles, Ticket, TrendingUp, ShieldCheck } from 'lucide-react';
import styles from './OrganizerCTA.module.css';

export const OrganizerCTA: React.FC = () => {
  return (
    <section className={styles.section} id="organizer-cta">
      <div className={styles.glowBlob}></div>

      <div className={`${styles.container} container`}>
        <div className={styles.card}>
          <div className={styles.content}>
            <div className={styles.badge}>
              <Sparkles size={16} />
              <span>Organizer Dashboard</span>
            </div>

            <h2 className={styles.title}>Ready to Host Your Next Event?</h2>

            <p className={styles.text}>
              Create events, sell tickets, track attendees and grow your audience with Eventify.
              Our powerful tools give you full control over your ticketing experience.
            </p>

            <div className={styles.features}>
              <div className={styles.featureItem}>
                <TrendingUp size={18} className={styles.featureIcon} />
                <span>Real-time Sales Insights</span>
              </div>
              <div className={styles.featureItem}>
                <Ticket size={18} className={styles.featureIcon} />
                <span>Flexible Ticket Tiers</span>
              </div>
              <div className={styles.featureItem}>
                <ShieldCheck size={18} className={styles.featureIcon} />
                <span>Secure Entry Scanning</span>
              </div>
            </div>

            <button className="btn btn-accent" style={{ marginTop: '8px' }}>
              Start Organizing
            </button>
          </div>

          <div className={styles.visualSide}>
            <div className={styles.dashboardMock}>
              <div className={styles.mockHeader}>
                <div className={styles.mockDot} style={{ background: '#EF4444' }}></div>
                <div className={styles.mockDot} style={{ background: '#F59E0B' }}></div>
                <div className={styles.mockDot} style={{ background: '#10B981' }}></div>
                <span className={styles.mockTitle}>eventify.co.ke/dashboard</span>
              </div>

              <div className={styles.mockContent}>
                <p className={styles.mockLabel}>Total Ticket Sales</p>
                <div className={styles.mockSalesRow}>
                  <span className={styles.mockSalesValue}>KES 184,500</span>
                  <span className={styles.mockGrowth}>↑ 24% this week</span>
                </div>
                <div className={styles.mockChart}>
                  {[40, 65, 55, 85, 95].map((h, i) => (
                    <div key={i} className={styles.chartBar} style={{ height: `${h}%` }}></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
