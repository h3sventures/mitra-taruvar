import { communityPhoto } from './images';

export type Memory = { id: string; title: string; category: string; date: string; image: string; description: string };
export const memories: Memory[] = [
  { id: 'one', title: 'Together under open skies', category: 'Family gatherings', date: 'Community memory', image: communityPhoto('gathering-hero'), description: 'Mitra Taruvar families coming together for an outdoor gathering.' },
  { id: 'two', title: 'Women growing together', category: 'Community activities', date: 'Community memory', image: communityPhoto('women-community'), description: 'Women from the community sharing time and conversation.' },
  { id: 'three', title: 'A circle of conversation', category: 'Community activities', date: 'Community memory', image: communityPhoto('community-circle'), description: 'Members gathering outdoors to talk and connect.' },
  { id: 'four', title: 'A moment together', category: 'Family gatherings', date: 'Community memory', image: communityPhoto('shared-meal'), description: 'Families spending time together at an outdoor gathering.' },
  { id: 'five', title: 'A day in the park', category: 'Group visits', date: 'Community memory', image: communityPhoto('outdoor-gathering'), description: 'A day outdoors with friends and families.' },
  { id: 'six', title: 'A community that shows up', category: 'Community activities', date: 'Community memory', image: communityPhoto('chapter-gathering'), description: 'Community members taking part in a shared gathering.' },
];
