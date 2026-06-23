import React, { useState } from 'react';
import { Search, MapPin, Grid } from 'lucide-react';
import styles from './SearchBar.module.css';

interface SearchBarProps {
  onSearch?: (searchQuery: string, location: string, category: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [location, setLocation] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(searchQuery, location, category);
    }
  };

  return (
    <div className={`${styles.searchWrapper} container`}>
      <form onSubmit={handleSubmit} className={styles.searchForm}>
        <div className={styles.inputGroup}>
          <Search className={styles.icon} size={20} />
          <div className={styles.inputField}>
            <label htmlFor="searchQuery">Search Event</label>
            <input 
              type="text" 
              id="searchQuery" 
              placeholder="What experience are you looking for?"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className={styles.divider}></div>

        <div className={styles.inputGroup}>
          <MapPin className={styles.icon} size={20} />
          <div className={styles.inputField}>
            <label htmlFor="location">Location</label>
            <select 
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            >
              <option value="">Anywhere in Nairobi</option>
              <option value="Westlands">Westlands</option>
              <option value="Lang'ata">Lang'ata</option>
              <option value="Rongai">Rongai</option>
              <option value="Karen">Karen</option>
              <option value="Roysambu">Roysambu</option>
              <option value="Thika">Thika</option>
              <option value="Ruiru">Ruiru</option>
              <option value="Ruaka">Ruaka</option>
              <option value="Umoja">Umoja</option>
            </select>
          </div>
        </div>

        <div className={styles.divider}></div>

        <div className={styles.inputGroup}>
          <Grid className={styles.icon} size={20} />
          <div className={styles.inputField}>
            <label htmlFor="category">Category</label>
            <select 
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">All Categories</option>
              <option value="Sports & Gaming">Sports & Gaming</option>
              <option value="Education">Education</option>
              <option value="Music & Live Concerts">Music & Live Concerts</option>
              <option value="Dance & After Party">Dance & After Party</option>
              <option value="Fashion">Fashion</option>
              <option value="Comedy">Comedy</option>
              <option value="Film">Film</option>
              <option value="Theatre and Performing Arts">Theatre & Performing Arts</option>
              <option value="Food & Drinks">Food & Drinks</option>
            </select>
          </div>
        </div>

        <button type="submit" className={styles.submitBtn} aria-label="Search events">
          <Search size={20} />
          <span>Search</span>
        </button>
      </form>
    </div>
  );
};
