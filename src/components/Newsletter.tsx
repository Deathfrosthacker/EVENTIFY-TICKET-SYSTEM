import React, { useState } from 'react';
import { Send, CheckCircle, Mail } from 'lucide-react';
import styles from './Newsletter.module.css';

export const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setError('Please enter your email address.');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    setError('');
    setIsSubmitted(true);
    setEmail('');
  };

  return (
    <section className={styles.section}>
      {/* Decorative glow blobs */}
      <div className={styles.glowBlob1}></div>
      <div className={styles.glowBlob2}></div>

      <div className={`${styles.inner} container`}>
        <div className={styles.card}>
          <div className={styles.iconBadge}>
            <Mail size={24} />
          </div>

          <h2 className={styles.title}>Stay in the Loop</h2>
          <p className={styles.description}>
            Be the first to know about upcoming events, exclusive pre-sales, and weekend vibes in Nairobi.
          </p>

          {isSubmitted ? (
            <div className={styles.successMessage}>
              <CheckCircle className={styles.successIcon} size={24} />
              <div>
                <h4 className={styles.successTitle}>You're in! 🎉</h4>
                <p className={styles.successText}>We'll notify you about the hottest upcoming events.</p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className={styles.form} noValidate>
              <div className={styles.inputWrapper}>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className={`${styles.input} ${error ? styles.inputError : ''}`}
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (error) setError('');
                  }}
                  aria-label="Email address"
                />
                {error && <span className={styles.errorText}>{error}</span>}
              </div>
              <button type="submit" className={`${styles.submitBtn} btn btn-accent`}>
                <span>Subscribe</span>
                <Send size={16} />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
