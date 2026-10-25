import { communityPhoto } from './images';

export type Memory = { id: string; title: string; category: string; date: string; image: string; description: string };
export const memories: Memory[] = [
  { id: 'one', title: 'Together under open skies', category: 'Family gatherings', date: 'Community memory', image: communityPhoto('gathering-hero'), description: 'Mitra Taruvar families coming together for an outdoor gathering.' },
  { id: 'health-camp-team', title: 'Care, close to home', category: 'Health & wellness', date: 'October 24, 2026', image: communityPhoto('health-camp-team'), description: 'Mitra Taruvar volunteers and health camp team members standing together after a day of community care.' },
  { id: 'anniversary-greeting', title: 'A milestone shared with friends', category: 'Celebrations', date: 'October 16, 2022', image: communityPhoto('anniversary-greeting'), description: 'Friends sharing congratulations at a member’s anniversary celebration.' },
  { id: 'two', title: 'Women growing together', category: 'Community activities', date: 'Community memory', image: communityPhoto('women-community'), description: 'Women from the community sharing time and conversation.' },
  { id: 'three', title: 'A circle of conversation', category: 'Community activities', date: 'Community memory', image: communityPhoto('community-circle'), description: 'Members gathering outdoors to talk and connect.' },
  { id: 'four', title: 'A moment together', category: 'Family gatherings', date: 'Community memory', image: communityPhoto('shared-meal'), description: 'Families spending time together at an outdoor gathering.' },
  { id: 'health-camp-checkup', title: 'A morning focused on wellbeing', category: 'Health & wellness', date: 'October 24, 2026', image: communityPhoto('health-camp-checkup'), description: 'A health professional meeting with a visitor at the community health camp.' },
  { id: 'health-camp-community', title: 'Neighbours looking out for neighbours', category: 'Health & wellness', date: 'October 24, 2026', image: communityPhoto('health-camp-community'), description: 'Community members and volunteers at the health camp.' },
  { id: 'health-camp-recognition', title: 'Appreciating a day of service', category: 'Health & wellness', date: 'October 24, 2026', image: communityPhoto('health-camp-recognition'), description: 'Volunteers and community members share a recognition moment at the health camp.' },
  { id: 'anniversary-gathering', title: 'An evening among friends', category: 'Celebrations', date: 'October 16, 2022', image: communityPhoto('anniversary-gathering'), description: 'Friends gather to celebrate a member’s anniversary.' },
  { id: 'anniversary-cake', title: 'A sweet moment together', category: 'Celebrations', date: 'October 16, 2022', image: communityPhoto('anniversary-cake'), description: 'Families and friends share cake during an anniversary celebration.' },
  { id: 'five', title: 'A day in the park', category: 'Group visits', date: 'Community memory', image: communityPhoto('outdoor-gathering'), description: 'A day outdoors with friends and families.' },
  { id: 'six', title: 'A community that shows up', category: 'Community activities', date: 'Community memory', image: communityPhoto('chapter-gathering'), description: 'Community members taking part in a shared gathering.' },
];
