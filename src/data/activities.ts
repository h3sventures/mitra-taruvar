import { communityImage, communityPhoto } from './images';
import type { MediaAsset } from './events';

export type CommunityActivity = { icon: string; title: string; description: string; image: string; media?: MediaAsset };

export const activities: CommunityActivity[] = [
  { icon: '✳', title: 'Community & friendship', image: communityPhoto('holi-milan-community'), description: 'Bring people together across backgrounds through shared gatherings, games and everyday kindness.' },
  { icon: '♡', title: 'Health & wellness', image: communityPhoto('health-camp-checkup'), media: { type: 'embed', src: 'https://www.youtube.com/embed/_13nYLkAbuc', alt: 'Mitra Taruvar health and wellness community video' }, description: 'Encourage health awareness, good hygiene and practical care for families and neighbours.' },
  { icon: '❋', title: 'Culture & celebration', image: communityPhoto('anniversary-gathering'), description: 'Share festivals, folk arts and traditions while making room for every family’s culture.' },
  { icon: '↗', title: 'Social responsibility', image: communityPhoto('community-circle'), description: 'Offer thoughtful, practical support to people facing difficult moments.' },
  { icon: '⌂', title: 'Education & awareness', image: communityImage('community'), description: 'Create opportunities for learning, training and knowledge that people can use.' },
  { icon: '❧', title: 'Environment', image: communityImage('outdoors'), description: 'Make local care for the environment tangible through conservation and water awareness.' },
  { icon: '◉', title: 'Women & youth', image: communityImage('gathering'), description: 'Open paths for women’s participation, shared skills and young people’s ideas.' },
  { icon: '↟', title: 'Civic awareness', image: communityImage('community'), description: 'Help people understand their rights, responsibilities and ways to take part in community life.' },
];

export const workAreas = [
  { icon: '✳', title: 'Community & Culture', description: 'Festivals, games and folk arts that build connection while making space for the many traditions in our community.' },
  { icon: '♡', title: 'Health & Wellness', description: 'Health awareness, better hygiene and sanitation, and encouragement of blood and organ donation.' },
  { icon: '⌂', title: 'Education & Youth', description: 'Learning, awareness and training, with opportunities for young people to participate and build skills.' },
  { icon: '↗', title: 'Social Responsibility', description: 'Practical help for neighbours in need and community welfare shaped by care and dignity.' },
  { icon: '❧', title: 'Environment', description: 'Environmental awareness, rainwater harvesting, recycling and thoughtful care for local resources.' },
  { icon: '◉', title: 'Civic Awareness', description: 'Understanding constitutional rights and responsibilities, democratic participation, and legal and consumer awareness.' },
  { icon: '↟', title: 'Family & Friendship', description: 'Family gatherings, celebrations, group outings and visits that help friendships grow.' },
  { icon: '❋', title: 'Women & Youth', description: 'Women-led participation, shared skills and youth ideas that strengthen community life.' },
];

// Community totals shown in the home snapshot.
export const communityStats = [
  { value: '12+', label: 'years of togetherness' },
  { value: '40+', label: 'families in our community' },
  { value: '40+', label: 'shared gatherings' },
];
