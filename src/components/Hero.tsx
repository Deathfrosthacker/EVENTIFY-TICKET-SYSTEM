import React from 'react';
import { ArrowRight, Calendar, Sparkles, Trophy, Music } from 'lucide-react';
import styles from './Hero.module.css';

export const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      {/* Background neon glow blobs */}
      <div className={styles.glowBlob1}></div>
      <div className={styles.glowBlob2}></div>
      
      <div className={`${styles.container} container`}>
        <div className={styles.content}>
          <div className={`${styles.badge} animate-fade-in`}>
            <Sparkles size={16} className={styles.badgeIcon} />
            <span>Nairobi's Ticketing Platform</span>
          </div>
          
          <h1 className={`${styles.title} animate-fade-in-up`}>
            Discover <span className={styles.glowTextBlue}>Nairobi's</span> <br />
            <span className={styles.glowTextOrange}>Best</span> Experiences
          </h1>
          
          <p className={`${styles.description} animate-fade-in-up`}>
            Concerts, festivals, networking events, fashion shows, sports tournaments 
            and unforgettable nights all in one place.
          </p>
          
          <div className={styles.actions}>
            <a href="#events" className="btn btn-primary">
              Explore Events
              <ArrowRight size={18} />
            </a>
            <a href="#organizer-cta" className="btn btn-secondary">
              Become an Organizer
            </a>
          </div>
        </div>

        <div className={styles.visualWrapper}>
          <div className={styles.sceneContainer}>
            {/* Neon backlight glow behind cards */}
            <div className={styles.neonBacklight}></div>
            
            {/* Floating Card 1 - Nairobi Summer Fest */}
            <div className={`${styles.floatingCard} ${styles.card1} animate-float`}>
              <div className={styles.cardImageContainer}>
                <img 
                  src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=400&q=80" 
                  alt="Live Concert" 
                  className={styles.cardImg}
                />
                <span className={styles.tagMusic}><Music size={12} /> Music</span>
              </div>
              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>Nairobi Summer Fest</h3>
                <div className={styles.cardMeta}>
                  <Calendar size={12} />
                  <span>July 18, 2026</span>
                </div>
              </div>
            </div>

            {/* Floating Card 2 - FIFA Gaming */}
            <div className={`${styles.floatingCard} ${styles.card2} animate-float-reverse`}>
              <div className={styles.cardImageContainer}>
                <img 
                  src="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=400&q=80" 
                  alt="FIFA Tournament" 
                  className={styles.cardImg}
                />
                <span className={styles.tagGaming}><Trophy size={12} /> Gaming</span>
              </div>
              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>FC26 FIFA Tournament</h3>
                <div className={styles.cardMeta}>
                  <Calendar size={12} />
                  <span>KES 1,000</span>
                </div>
              </div>
            </div>
            
            {/* Floating Accent Orb */}
            <div className={styles.accentOrb}></div>
          </div>
        </div>
      </div>
    </section>
  );
};
