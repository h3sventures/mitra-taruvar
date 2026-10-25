import { communityPhoto } from './images';

export type EventCategory = 'Community' | 'Health' | 'Festival' | 'Outing' | 'Family' | 'Social';
export type MediaAsset = { type: 'image' | 'video' | 'embed'; src: string; alt?: string; poster?: string };
export type EventItem = { id: string; title: string; date: string; location: string; category: EventCategory; description: string; image: string; media?: MediaAsset };

// Sample listings: replace with confirmed Mitra Taruvar announcements before publishing.
export const events: EventItem[] = [
  { id: 'family-day', title: 'A day to be together', date: '2026-11-15', location: 'Community venue · To be confirmed', category: 'Family', description: 'An easygoing day for families to reconnect, share a meal and make a few new memories.', image: communityPhoto('committee-meetup-2025-visit'), media: { type: 'image', src: communityPhoto('committee-meetup-2025-visit'), alt: 'Mitra Taruvar members spending time together' } },
  { id: 'wellness', title: 'Wellness & awareness morning', date: '2026-12-06', location: 'Local community hall · To be confirmed', category: 'Health', description: 'A welcoming space for practical health conversations and looking out for one another.', image: communityPhoto('health-camp-volunteers'), media: { type: 'image', src: communityPhoto('health-camp-volunteers'), alt: 'Mitra Taruvar volunteers sharing a moment during a health camp' } },
  { id: 'festive', title: 'Celebrating our traditions', date: '2026-12-20', location: 'Community venue · To be confirmed', category: 'Festival', description: 'Music, food and the traditions that bring our many families together.', image: communityPhoto('anniversary-gathering'), media: { type: 'image', src: communityPhoto('anniversary-gathering'), alt: 'Mitra Taruvar families gathered for a celebration' } },
];

export const communityVideos = [
  { id: 'community-video-1', src: 'https://www.youtube.com/embed/_13nYLkAbuc' },
  { id: 'community-video-2', src: 'https://www.youtube.com/embed/vMa2LsHM-mk' },
  { id: 'community-video-3', src: 'https://www.youtube.com/embed/uyz8stvG0SA' },
];
