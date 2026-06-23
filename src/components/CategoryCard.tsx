import React from 'react';
import { Music, Sparkles, Shirt, Laugh, Utensils, Gamepad2 } from 'lucide-react';
import type { Category } from '../types';
import styles from './CategoryCard.module.css';

interface CategoryCardProps {
  category: Category;
  isActive?: boolean;
  onClick?: () => void;
}

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Gamepad2,
  Music,
  Sparkles,
  Shirt,
  Laugh,
  Utensils,
};

export const CategoryCard: React.FC<CategoryCardProps> = ({ category, isActive = false, onClick }) => {
  const IconComponent = iconMap[category.iconName] || Sparkles;

  const getCategoryTheme = () => {
    switch (category.name) {
      case 'Sports & Gaming':
        return styles.sportsGaming;
      case 'Music & Live Concerts':
        return styles.musicConcerts;
      case 'Dance & After Party':
        return styles.danceParty;
      case 'Fashion':
        return styles.fashion;
      case 'Comedy':
        return styles.comedy;
      case 'Food & Drinks':
        return styles.foodDrinks;
      default:
        return styles.default;
    }
  };

  return (
    <button 
      onClick={onClick} 
      className={`${styles.card} ${getCategoryTheme()} ${isActive ? styles.active : ''}`}
      aria-pressed={isActive}
    >
      <div className={styles.iconWrapper}>
        <IconComponent size={24} className={styles.icon} />
      </div>
      <div className={styles.info}>
        <h3 className={styles.name}>{category.name}</h3>
        <p className={styles.count}>{category.eventCount} Events</p>
      </div>
      <div className={styles.glowOverlay}></div>
    </button>
  );
};
