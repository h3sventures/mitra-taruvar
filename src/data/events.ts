import { communityImage } from './images';

export type EventCategory = 'Community' | 'Health' | 'Festival' | 'Outing' | 'Family' | 'Social';
export type EventItem = { id: string; title: string; date: string; location: string; category: EventCategory; description: string; image: string };

// Sample listings: replace with confirmed Mitra Taruvar announcements before publishing.
export const events: EventItem[] = [
  { id: 'family-day', title: 'A day to be together', date: '2026-11-15', location: 'Community venue · To be confirmed', category: 'Family', description: 'An easygoing day for families to reconnect, share a meal and make a few new memories.', image: communityImage('gathering') },
  { id: 'wellness', title: 'Wellness & awareness morning', date: '2026-12-06', location: 'Local community hall · To be confirmed', category: 'Health', description: 'A welcoming space for practical health conversations and looking out for one another.', image: communityImage('wellness') },
  { id: 'festive', title: 'Celebrating our traditions', date: '2026-12-20', location: 'Community venue · To be confirmed', category: 'Festival', description: 'Music, food and the traditions that bring our many families together.', image: communityImage('festival') },
];
