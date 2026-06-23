import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { SearchBar } from '../components/SearchBar';
import { CategoryCard } from '../components/CategoryCard';
import { EventCard } from '../components/EventCard';
import { HowItWorks } from '../components/HowItWorks';
import { OrganizerCTA } from '../components/OrganizerCTA';
import { TestimonialCard } from '../components/TestimonialCard';
import { Statistics } from '../components/Statistics';
import { Newsletter } from '../components/Newsletter';
import { Footer } from '../components/Footer';

import { mockEvents, mockCategories, mockTestimonials } from '../data/mockData';
import styles from './Home.module.css';

export const Home: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchParams, setSearchParams] = useState({ query: '', location: '', category: '' });

  const handleSearch = (query: string, location: string, category: string) => {
    setSearchParams({ query, location, category });
    setSelectedCategory(category || null);
    // Scroll down to events section
    const el = document.getElementById('events');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleCategoryClick = (categoryName: string) => {
    if (selectedCategory === categoryName) {
      setSelectedCategory(null);
      setSearchParams(prev => ({ ...prev, category: '' }));
    } else {
      setSelectedCategory(categoryName);
      setSearchParams(prev => ({ ...prev, category: categoryName }));
    }
  };

  const filteredEvents = mockEvents.filter((event) => {
    const activeCategoryFilter = selectedCategory || searchParams.category;
    if (activeCategoryFilter && event.category.toLowerCase() !== activeCategoryFilter.toLowerCase()) {
      return false;
    }
    if (searchParams.query) {
      const q = searchParams.query.toLowerCase();
      if (!event.title.toLowerCase().includes(q) && !event.description.toLowerCase().includes(q)) {
        return false;
      }
    }
    if (searchParams.location) {
      if (!event.location.toLowerCase().includes(searchParams.location.toLowerCase())) {
        return false;
      }
    }
    return true;
  });

  const isFiltered = !!(selectedCategory || searchParams.query || searchParams.location);

  return (
    <div className={styles.page}>
      <Navbar />

      <main className={styles.mainContent}>
        {/* ── Hero ── */}
        <Hero />

        {/* ── Search Bar ── */}
        <SearchBar onSearch={handleSearch} />

        {/* ── Browse by Category ── */}
        <section className="section" id="categories">
          <div className="container">
            <div className="section-header">
              <span className="badge-glow">Categories</span>
              <h2 className="section-title">Browse by Category</h2>
              <p className="section-subtitle">
                Pick your vibe — sports, music, fashion, comedy and more.
              </p>
            </div>

            <div className={styles.categoryGrid}>
              {mockCategories.map((category) => (
                <CategoryCard
                  key={category.id}
                  category={category}
                  isActive={selectedCategory === category.name}
                  onClick={() => handleCategoryClick(category.name)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ── Featured Events ── */}
        <section className="section section-bg-dark" id="events">
          <div className="container">
            <div className={styles.eventsHeader}>
              <div className={styles.eventsHeadingGroup}>
                <span className="badge-glow">Featured Events</span>
                <h2 className="section-title" style={{ textAlign: 'left' }}>
                  {isFiltered ? 'Filtered Results' : 'Hot in Nairobi 🔥'}
                </h2>
                <p className="section-subtitle" style={{ textAlign: 'left' }}>
                  {isFiltered
                    ? `${filteredEvents.length} event${filteredEvents.length !== 1 ? 's' : ''} match your search`
                    : 'Handpicked trending events this season. Book fast — spots fill up!'}
                </p>
              </div>

              {isFiltered && (
                <button
                  onClick={() => {
                    setSelectedCategory(null);
                    setSearchParams({ query: '', location: '', category: '' });
                  }}
                  className={styles.clearBtn}
                >
                  Clear Filters
                </button>
              )}
            </div>

            {filteredEvents.length > 0 ? (
              <div className={styles.eventsGrid}>
                {filteredEvents.map((event, index) => (
                  <EventCard
                    key={event.id}
                    event={event}
                    index={index}
                    onViewDetails={(evt) => alert(`🎫 Booking opens for: "${evt.title}"`)}
                  />
                ))}
              </div>
            ) : (
              <div className={styles.noResults}>
                <span className={styles.noResultsEmoji}>🎤</span>
                <p className={styles.noResultsText}>No events found for your current filters.</p>
                <button
                  onClick={() => {
                    setSelectedCategory(null);
                    setSearchParams({ query: '', location: '', category: '' });
                  }}
                  className="btn btn-primary"
                >
                  Show All Events
                </button>
              </div>
            )}
          </div>
        </section>

        {/* ── How It Works ── */}
        <HowItWorks />

        {/* ── Organizer CTA ── */}
        <OrganizerCTA />

        {/* ── Testimonials ── */}
        <section className="section section-bg-dark" id="testimonials">
          <div className="container">
            <div className="section-header">
              <span className="badge-glow">Reviews</span>
              <h2 className="section-title">What Nairobi Says 🗣️</h2>
              <p className="section-subtitle">
                Real stories from event goers, students, and organizers across Nairobi.
              </p>
            </div>

            <div className={styles.testimonialsGrid}>
              {mockTestimonials.map((testimonial) => (
                <TestimonialCard key={testimonial.id} testimonial={testimonial} />
              ))}
            </div>
          </div>
        </section>

        {/* ── Statistics ── */}
        <Statistics />

        {/* ── Newsletter ── */}
        <Newsletter />
      </main>

      <Footer />
    </div>
  );
};
