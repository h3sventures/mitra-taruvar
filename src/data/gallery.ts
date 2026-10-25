import { communityPhoto } from './images';

export type Memory = { id: string; title: string; category: string; date: string; image: string; description: string };
export const memories: Memory[] = [
  { id: 'committee-meetup-priority-1', title: 'A community gathering in the park', category: 'Core Committee', date: 'Community memory', image: communityPhoto('committee-priority-1'), description: 'Mitra Taruvar members gathering together outdoors.' },
  { id: 'committee-meetup-priority-2', title: 'Together in the park', category: 'Core Committee', date: 'Community memory', image: communityPhoto('committee-priority-2'), description: 'Mitra Taruvar members sharing a day together in the park.' },
  { id: 'one', title: 'Together under open skies', category: 'Family gatherings', date: 'Community memory', image: communityPhoto('gathering-hero'), description: 'Mitra Taruvar families coming together for an outdoor gathering.' },
  { id: 'anniversary-greeting', title: 'A milestone shared with friends', category: 'Celebrations', date: 'October 16, 2022', image: communityPhoto('anniversary-greeting'), description: 'Friends sharing congratulations at a member’s anniversary celebration.' },
  { id: 'two', title: 'Women growing together', category: 'Community activities', date: 'Community memory', image: communityPhoto('women-community'), description: 'Women from the community sharing time and conversation.' },
  { id: 'three', title: 'A circle of conversation', category: 'Community activities', date: 'Community memory', image: communityPhoto('community-circle'), description: 'Members gathering outdoors to talk and connect.' },
  { id: 'four', title: 'A moment together', category: 'Family gatherings', date: 'Community memory', image: communityPhoto('shared-meal'), description: 'Families spending time together at an outdoor gathering.' },
  { id: 'health-camp-checkup', title: 'A morning focused on wellbeing', category: 'Health & wellness', date: 'October 24, 2026', image: communityPhoto('health-camp-checkup'), description: 'A visitor having a blood pressure check at the community health camp.' },
  { id: 'health-camp-another-checkup', title: 'Care for every neighbour', category: 'Health & wellness', date: 'October 24, 2026', image: communityPhoto('health-camp-another-checkup'), description: 'Another community member receiving a check-up at the health camp.' },
  { id: 'health-camp-volunteers', title: 'A pause between check-ups', category: 'Health & wellness', date: 'October 24, 2026', image: communityPhoto('health-camp-volunteers'), description: 'Mitra Taruvar volunteers take a moment together during the health camp.' },
  { id: 'anniversary-gathering', title: 'An evening among friends', category: 'Celebrations', date: 'October 16, 2022', image: communityPhoto('anniversary-gathering'), description: 'Friends gather to celebrate a member’s anniversary.' },
  { id: 'anniversary-cake', title: 'A sweet moment together', category: 'Celebrations', date: 'October 16, 2022', image: communityPhoto('anniversary-cake'), description: 'Families and friends share cake during an anniversary celebration.' },
  { id: 'five', title: 'A day in the park', category: 'Group visits', date: 'Community memory', image: communityPhoto('outdoor-gathering'), description: 'A day outdoors with friends and families.' },
  { id: 'six', title: 'A community that shows up', category: 'Community activities', date: 'Community memory', image: communityPhoto('chapter-gathering'), description: 'Community members taking part in a shared gathering.' },
  { id: 'committee-gathering-2014', title: 'An early community gathering', category: 'Core Committee', date: 'November 9, 2014', image: communityPhoto('committee-gathering-2014'), description: 'Mitra Taruvar members sharing an outdoor meal during an early gathering.' },
  { id: 'committee-park-2014', title: 'Friendship in the park', category: 'Core Committee', date: 'November 9, 2014', image: communityPhoto('committee-park-gathering-2014'), description: 'Friends and members gathered outdoors in the early years of Mitra Taruvar.' },
];
