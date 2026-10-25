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

// Public directory fields only; contact details and birth dates are omitted.
export const members: MemberProfile[] = [
  { id: 'member-01', name: "Pradip Kumar Singh", title: ["Founder", "Core Member"], profession: "Service" },
  { id: 'member-02', name: "Ashwani Kumar Singh", title: ["Founder"], profession: "Service" },
  { id: 'member-03', name: "Brij Bhushan Singh", title: ["Founder"], profession: "Service", photo: 'brij-bhushan-singh.jpg' },
  { id: 'member-04', name: "Chandan Kumar Singh", title: ["Founder", "Core Member"], profession: "Service", photo: 'chandan-kumar-singh.jpg' },
  { id: 'member-05', name: "Jitendra", title: ["Founder"], profession: "Service" },
  { id: 'member-06', name: "Abhay Kumar Singh", title: ["Founder"], profession: "Business" },
  { id: 'member-07', name: "Sandip Kumar Singh", title: ["Founder", "Core Member"], profession: "Service" },
  { id: 'member-08', name: "Shiv Ram Pathak", title: ["Founder"], profession: "Service" },
  { id: 'member-09', name: "Anand Kumar Pathak", title: ["Founder", "Core Member"], profession: "Service", photo: 'anand-kumar-pathak.jpg' },
  { id: 'member-10', name: "Sonu Kumar", title: ["Founder", "Core Member"], profession: "Service", photo: 'sonu-kumar.jpg' },
  { id: 'member-11', name: "Vivek Kumar Singh", title: ["Founder"], profession: "Service" },
  { id: 'member-12', name: "Budhimati Jha", title: ["Founder"], profession: "Advocate" },
  { id: 'member-13', name: "Satish Kumar Singh", title: ["Core Member"], profession: "IT professional", photo: 'satish-kumar-singh.jpg' },
];

export const volunteers: VolunteerProfile[] = [
  { id: 'volunteer-01', name: "Uday Pal" },
  { id: 'volunteer-02', name: "Prem Kumar" },
  { id: 'volunteer-03', name: "Ravi N. Patel" },
  { id: 'volunteer-04', name: "Pooja Mehra" },
  { id: 'volunteer-05', name: "Ranjit Singh" },
  { id: 'volunteer-06', name: "Rajesh Kumar" },
  { id: 'volunteer-07', name: "Sunil Kumar Pathak" },
  { id: 'volunteer-08', name: "Arvind Kumar Pankaj" },
  { id: 'volunteer-09', name: "Kamlesh Kumar" },
  { id: 'volunteer-10', name: "Niraj Kumar" },
  { id: 'volunteer-11', name: "Minu Singh" },
  { id: 'volunteer-12', name: "Bhagirath Singh" },
  { id: 'volunteer-13', name: "Sanjay Paswan" },
  { id: 'volunteer-14', name: "Praveen Kumar Mishra" },
  { id: 'volunteer-15', name: "Sudhir Singh" },
  { id: 'volunteer-16', name: "Nitesh Chandra Mishra" },
  { id: 'volunteer-17', name: "Neha Dwivedi" },
  { id: 'volunteer-18', name: "Dr. Sudha Sharma" },
  { id: 'volunteer-19', name: "Raushan Kumar Thakur" },
  { id: 'volunteer-20', name: "Keshav Kumar Mishra" },
  { id: 'volunteer-21', name: "Jai Shankar Mishra" },
  { id: 'volunteer-22', name: "Sanjeev Kumar Tiwari" },
  { id: 'volunteer-23', name: "Neetu Singh" },
  { id: 'volunteer-24', name: "Rahul Singh" },
  { id: 'volunteer-25', name: "Manoj Kumar Singh" },
  { id: 'volunteer-26', name: "Indu Prakash Singh" },
  { id: 'volunteer-27', name: "Vijay Kumar Singh" },
  { id: 'volunteer-28', name: "Manish Singh" },
];
