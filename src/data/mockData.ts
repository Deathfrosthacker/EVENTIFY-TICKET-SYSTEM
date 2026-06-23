import type { Event, Category, Testimonial } from '../types';

export const mockCategories: Category[] = [
  {
    id: 'cat-1',
    name: 'Sports & Gaming',
    iconName: 'Gamepad2',
    eventCount: 42,
    slug: 'sports-gaming'
  },
  {
    id: 'cat-2',
    name: 'Music & Live Concerts',
    iconName: 'Music',
    eventCount: 120,
    slug: 'music'
  },
  {
    id: 'cat-3',
    name: 'Dance & After Party',
    iconName: 'Sparkles',
    eventCount: 68,
    slug: 'dance-party'
  },
  {
    id: 'cat-4',
    name: 'Fashion',
    iconName: 'Shirt',
    eventCount: 35,
    slug: 'fashion'
  },
  {
    id: 'cat-5',
    name: 'Comedy',
    iconName: 'Laugh',
    eventCount: 29,
    slug: 'comedy'
  },
  {
    id: 'cat-6',
    name: 'Food & Drinks',
    iconName: 'Utensils',
    eventCount: 54,
    slug: 'food-drinks'
  }
];

export const mockEvents: Event[] = [
  {
    id: 'evt-1',
    title: 'Nairobi Summer Fest',
    description: "Nairobi's biggest summer music event featuring the best of Afrobeats, Amapiano, and live band performances under the stars.",
    date: 'July 18, 2026',
    time: '14:00',
    location: 'Ngong Racecourse, Lang\'ata',
    price: 2500,
    category: 'Music & Live Concerts',
    imageUrl: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=800&q=80',
    organizer: 'Summer Fest Kenya',
    isFeatured: true
  },
  {
    id: 'evt-2',
    title: 'FC26 FIFA Tournament',
    description: 'Compete with Nairobi\'s top FIFA players for a grand prize pool. Experience a premium pro gaming setup, food, and massive screens.',
    date: 'July 25, 2026',
    time: '10:00',
    location: 'Triclub Arena, Westlands',
    price: 1000,
    category: 'Sports & Gaming',
    imageUrl: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80',
    organizer: 'Kenya Gaming Association',
    isFeatured: true
  },
  {
    id: 'evt-3',
    title: 'Nairobi Fashion Night',
    description: 'A stunning showcase of contemporary African fashion, runway designs, and local designer exhibitions featuring Kenya\'s top models.',
    date: 'August 08, 2026',
    time: '18:00',
    location: 'The Alchemist, Westlands',
    price: 2000,
    category: 'Fashion',
    imageUrl: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80',
    organizer: 'Vanguard Fashion House',
    isFeatured: true
  },
  {
    id: 'evt-4',
    title: 'Stand Up Fridays',
    description: 'Prepare for a night of rib-cracking comedy featuring Kenya\'s top stand-up comedians and exciting open mic talents.',
    date: 'August 14, 2026',
    time: '19:30',
    location: 'Carnivore Grounds, Lang\'ata',
    price: 800,
    category: 'Comedy',
    imageUrl: 'https://images.unsplash.com/photo-1585699324551-f6c309eed262?auto=format&fit=crop&w=800&q=80',
    organizer: 'Nairobi Comedy Club',
    isFeatured: true
  },
  {
    id: 'evt-5',
    title: 'Food & Vibes Festival',
    description: 'Sample diverse local and international culinary delights, craft drinks, and specialty grills with live DJ sets in a beautiful outdoor venue.',
    date: 'August 29, 2026',
    time: '12:00',
    location: 'Waterfront Mall, Karen',
    price: 1500,
    category: 'Food & Drinks',
    imageUrl: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80',
    organizer: 'Gourmet Vibes Group',
    isFeatured: true
  },
  {
    id: 'evt-6',
    title: 'Battle Zone Kenya Hiphop & After Party',
    description: 'The ultimate street cypher, epic hiphop dance battle, followed by an explosive after-party featuring Nairobi\'s top hiphop DJs.',
    date: 'September 12, 2026',
    time: '16:00',
    location: 'Siron Hotel, Rongai',
    price: 3000,
    category: 'Dance & After Party',
    imageUrl: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=800&q=80',
    organizer: 'Battle Zone Entertainment',
    isFeatured: true
  }
];

export const mockTestimonials: Testimonial[] = [
  {
    id: 'tst-1',
    name: 'Brian Omondi',
    role: 'University Student & Gamer',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80',
    quote: 'Eventify makes it super easy for me to find local FIFA tournaments and hiphop gigs. Booking is lightning fast via M-Pesa, and I never miss out on weekend vibes!',
    rating: 5
  },
  {
    id: 'tst-2',
    name: 'Amani Mwangi',
    role: 'Young Marketing Professional',
    avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80',
    quote: 'I love the new dark theme and glowing interface! It makes browsing upcoming fashion events and food festivals feel so exciting. The ticket checkout process is flawless.',
    rating: 4.9
  },
  {
    id: 'tst-3',
    name: 'David Kilonzo',
    role: 'Lead Coordinator',
    company: 'Nairobi Creative Group',
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80',
    quote: 'Hosting the Nairobi Summer Fest on Eventify was a game-changer. We sold out in record time, and the live ticket verification at Ngong Racecourse worked flawlessly.',
    rating: 5
  }
];

export const mockStats = [
  { id: 'stat-1', value: '500+', label: 'Active Users', description: 'Joining the network' },
  { id: 'stat-2', value: '100+', label: 'Events Hosted', description: 'Concerts, comedy, gaming & more' },
  { id: 'stat-3', value: '5000+', label: 'Tickets Sold', description: 'Fast digital M-Pesa bookings' },
  { id: 'stat-4', value: '10+', label: 'Locations', description: 'Covering key Nairobi estates' }
];
