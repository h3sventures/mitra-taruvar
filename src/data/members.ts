export type MemberProfile = {
  id: string;
  name: string;
  title: string[];
  profession: string;
  about?: string;
  idea?: string;
  photo?: string;
};

export type VolunteerProfile = {
  id: string;
  name: string;
  photo?: string;
};

// Replace demo details with current profiles approved for public display.
export const members: MemberProfile[] = [{
  id: 'core-1',
  name: 'Jane Doe',
  title: ['Core Member'],
  profession: 'Profession to be added',
  about: 'Add a short introduction about this core member and their contributions.',
  photo: 'jane-doe.svg',
}, {
  id: 'core-2',
  name: 'John Smith',
  title: ['Core Member'],
  profession: 'Profession to be added',
  about: 'Add a short introduction about this core member and their contributions.',
  photo: 'john-smith.jpg',
}, {
  id: 'founder-1',
  name: 'Founder Name',
  title: ['Founder'],
  profession: 'Profession to be added',
  idea: 'Add a short description of the founder\'s idea and vision.',
  photo: 'founder-name.jpg',
}, {
  id: 'founder-2',
  name: 'Another Founder',
  title: ['Founder'],
  profession: 'Profession to be added',
  idea: 'Add a short description of the founder\'s idea and vision.',
  photo: 'another-founder.jpg',
}, {
  id: 'founder-3',
  name: 'Yet Another Founder',
  title: ['Founder'],
  profession: 'Profession to be added',
  idea: 'Add a short description of the founder\'s idea and vision.',
  photo: 'yet-another-founder.jpg',
}];

export const volunteers: VolunteerProfile[] = [{
  id: '1',
  name: 'Volunteer Name',
  photo: 'volunteer-name.jpg',
}, {
  id: '2',
  name: 'Another Volunteer',
  photo: 'another-volunteer.jpg',
}, {
  id: '3',
  name: 'Yet Another Volunteer',
  photo: 'yet-another-volunteer.jpg',
}, {
  id: '4',
  name: 'One More Volunteer',
  photo: 'one-more-volunteer.jpg',
}, {
  id: '5',
  name: 'Final Volunteer',
  photo: 'final-volunteer.jpg',
}];
