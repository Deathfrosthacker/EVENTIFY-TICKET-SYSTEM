import React from 'react';
import { Calendar, Heart } from 'lucide-react';
import styles from './Footer.module.css';

/* ── Custom Social SVG Icons ── */
const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2"
    fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const XIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" {...props}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const TikTokIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" {...props}>
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.74a4.85 4.85 0 0 1-1.01-.05z" />
  </svg>
);

const LinkedInIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2"
    fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.topAccentLine}></div>

      <div className={`${styles.container} container`}>
        <div className={styles.topRow}>
          {/* Brand Column */}
          <div className={styles.brandCol}>
            <a href="#" className={styles.logo}>
              <Calendar className={styles.logoIcon} size={26} />
              <span className={styles.logoText}>
                <span className={styles.logoBlue}>Event</span>
                <span className={styles.logoOrange}>ify</span>
              </span>
            </a>
            <p className={styles.brandDescription}>
              Nairobi's premier ticketing platform. Discover concerts, gaming tournaments,
              fashion shows, and unforgettable nightlife — all in one place.
            </p>
            <div className={styles.socials}>
              <a href="#" className={styles.socialLink} aria-label="Instagram"><InstagramIcon /></a>
              <a href="#" className={styles.socialLink} aria-label="X (Twitter)"><XIcon /></a>
              <a href="#" className={styles.socialLink} aria-label="TikTok"><TikTokIcon /></a>
              <a href="#" className={styles.socialLink} aria-label="LinkedIn"><LinkedInIcon /></a>
            </div>
          </div>

          {/* Platform Links */}
          <div className={styles.linksCol}>
            <h4 className={styles.colTitle}>Platform</h4>
            <ul className={styles.linksList}>
              <li><a href="#">Home</a></li>
              <li><a href="#events">Events</a></li>
              <li><a href="#categories">Categories</a></li>
            </ul>
          </div>

          {/* Company Links */}
          <div className={styles.linksCol}>
            <h4 className={styles.colTitle}>Company</h4>
            <ul className={styles.linksList}>
              <li><a href="#about">About</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Careers</a></li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className={styles.linksCol}>
            <h4 className={styles.colTitle}>Legal</h4>
            <ul className={styles.linksList}>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Row */}
        <div className={styles.bottomRow}>
          <p className={styles.copyright}>© 2026 Eventify. All rights reserved.</p>
          <p className={styles.credit}>
            Made with <Heart size={12} className={styles.heartIcon} fill="currentColor" /> in Nairobi, Kenya
          </p>
        </div>
      </div>
    </footer>
  );
};
