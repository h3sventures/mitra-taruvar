import { communityImage } from './images';

export type Memory = { id: string; title: string; category: string; date: string; image: string; description: string };
export const memories: Memory[] = [
  { id: 'one', title: 'A place at every table', category: 'Family gatherings', date: 'Community memory', image: communityImage('gathering'), description: 'A welcoming table, with room for everyone.' },
  { id: 'two', title: 'Growing together', category: 'Community activities', date: 'Community memory', image: communityImage('community'), description: 'Small moments of connection help a community grow.' },
  { id: 'three', title: 'Care in every conversation', category: 'Health & wellness', date: 'Community memory', image: communityImage('wellness'), description: 'Sharing knowledge and making space to care.' },
  { id: 'four', title: 'Traditions, shared', category: 'Festivals', date: 'Community memory', image: communityImage('festival'), description: 'Celebrating the many cultures that make us who we are.' },
  { id: 'five', title: 'Out and about', category: 'Group visits', date: 'Community memory', image: communityImage('outdoors'), description: 'Discovering more of the world, together.' },
  { id: 'six', title: 'Hands that help', category: 'Social initiatives', date: 'Community memory', image: communityImage('community'), description: 'Showing up for our neighbours in practical ways.' },
];
