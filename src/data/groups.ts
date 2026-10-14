import { communityPhoto } from './images';
import type { MediaAsset } from './events';

export type CommunityGroup = { title: string; description: string; mark: string; image: string; media?: MediaAsset };

export const groups: CommunityGroup[] = [
  { title: 'Taruvar Chapters', image: communityPhoto('gathering-banner'), description: 'Local circles that bring members together and make community life feel close to home.', mark: '01' },
  { title: 'Women’s Group', image: communityPhoto('women-community'), description: 'A space for women to connect, lead activities, share skills and shape community life.', mark: '02' },
  { title: 'Yuva Mitra', image: communityPhoto('chapter-gathering'), description: 'A circle for young people to learn, bring fresh ideas and take part in community activities.', mark: '03' },
  { title: 'Volunteers', image: communityPhoto('community-group'), description: 'Members who offer their time and practical help to bring gatherings and community initiatives to life.', mark: '04' },
  { title: 'Marg Darshak', image: communityPhoto('community-circle'), description: 'A circle honouring elders and the experience they bring, with a focus on ageing with dignity and connection.', mark: '05' },
];
