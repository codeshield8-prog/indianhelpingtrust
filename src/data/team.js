// ---------------------------------------------------------------------------
// Core Team page content.
// Names appear exactly as given — never prefixed with Er./Mr./Dr.
// Qualifications appear separately below each name.
// Editorial copy only — NO invented employers, departments, universities,
// projects, awards, numbers, or attributed quotes. Highlighted statements are
// website storytelling, not quotations from any individual.
// ---------------------------------------------------------------------------

import rauful from '../assets/team/rauful.png'
import imran from '../assets/team/imran.png'
import atauz from '../assets/team/atauz.png'
import dheer from '../assets/team/dheer.png'
import pyare from '../assets/team/pyare.jpg'

export const teamHero = {
  eyebrow: 'The Core Team',
  title: 'People Behind the Mission',
  altHeading: 'Different Paths. One Purpose.',
  text: 'Indian Helping Trust brings together people from different professional backgrounds who believe that their knowledge, experience and effort can be used to create meaningful change in society.',
}

export const beyondProfession = {
  eyebrow: 'Beyond a Profession',
  title: 'When skills meet responsibility',
  paras: [
    'A profession gives a person knowledge and skills. Social responsibility gives those skills a larger purpose.',
    'The members of Indian Helping Trust come from different professional backgrounds, yet they share an interest in using their abilities to contribute to people and communities.',
    'Through IHT, they can take part in initiatives, listen to community needs, support meaningful activities, and bring their professional perspective to social work.',
  ],
}

export const workingTogether = {
  eyebrow: 'Working Together',
  title: 'One common purpose',
  intro: 'The strength of the team comes from different perspectives and professional experiences.',
  points: [
    'Different people see problems differently.',
    'Different professional backgrounds bring different ways of thinking.',
    'Community work needs listening, planning, responsibility and consistent effort.',
    'When people with different skills work together, they can contribute in different ways.',
  ],
}

export const coreIntro = {
  eyebrow: 'Meet the Team',
  title: 'Different professions, one shared purpose',
  text: 'Serving people and contributing to a better society. Social work is not limited to one profession — a data scientist, a civil engineer, a software engineer, a professional from the government sector and a pharmaceutical professional can each contribute something meaningful.',
}

export const members = [
  {
    id: 'rauful-azam',
    name: 'Rauful Azam',
    role: 'State Head — Karnataka',
    profession: ['Data Scientist'],
    meta: 'With IHT since 2017 · Certified member, 2019',
    image: rauful,
    objectPos: 'object-[50%_32%]',
    accent: 'green',
    story: [
      'As a data scientist, Rauful Azam works with information, patterns and analytical thinking every day. He believes the same skills used to make sense of data can also help make sense of people and communities — how needs arise, where support is required, and how effort can be organised to make a difference.',
      'As State Head for Karnataka, he helps connect Indian Helping Trust’s work with communities in the region.',
    ],
    highlight: 'Professional knowledge becomes more meaningful when it can also contribute to society.',
  },
  {
    id: 'imran-hussain-sikdar',
    name: 'Imran Hussain Sikdar',
    role: 'Head — Guwahati',
    profession: ['Civil Engineer (M.Tech)'],
    meta: 'With IHT since 2017 · Certified member, 2019',
    image: imran,
    objectPos: 'object-[70%_45%]',
    accent: 'orange',
    story: [
      'Engineering is about understanding real problems, planning carefully and taking responsibility for building something that lasts. Imran Hussain Sikdar brings that same mindset to community work — where listening, planning and follow-through matter just as much as they do on site.',
      'As Head of the Guwahati region, he supports IHT’s presence and activities locally.',
    ],
  },
  {
    id: 'atauz-zaman-sikdar',
    name: 'Atauz Zaman Sikdar',
    role: 'State Head — Assam',
    profession: ['Government Sector'],
    meta: 'With IHT since 2017 · Certified member, 2019',
    image: atauz,
    objectPos: 'object-[58%_38%]',
    accent: 'blue',
    story: [
      'Working in the government sector brings an understanding of responsibility, public service and how systems connect with people. Atauz Zaman Sikdar draws on that experience to help link communities in Assam with meaningful social initiatives.',
      'As State Head for Assam, he coordinates IHT’s engagement in the state and helps carry its community-oriented mission forward.',
    ],
  },
  {
    id: 'dheer-singh',
    name: 'Dheer Singh',
    role: 'Director — Indian Helping Trust',
    profession: ['M.Pharm', 'Production Officer'],
    meta: 'With IHT since 2017 · Certified member, 2019',
    image: dheer,
    objectPos: 'object-[50%_22%]',
    accent: 'green',
    story: [
      'A background in pharmacy and production brings discipline, attention to quality and a structured way of working. As a Director of Indian Helping Trust, Dheer Singh helps bring that sense of responsibility and organisation to the way the team plans and carries out its work.',
      'He has been part of IHT’s core leadership through its journey.',
    ],
  },
  {
    id: 'pyare-siddiqui',
    name: 'Pyare Siddiqui (Shafiuzzama)',
    role: 'Co-Founder — Indian Helping Trust',
    profession: ['Software Engineer'],
    meta: 'Co-Founder · With IHT since 2017',
    image: pyare,
    objectPos: 'object-[66%_22%]',
    accent: 'orange',
    story: [
      'Technology can help an organisation communicate, stay organised and connect the people who want to help with the communities that need it. As a software engineer and Co-Founder, Pyare Siddiqui (Shafiuzzama) has contributed to Indian Helping Trust’s journey from its early days.',
      'As Co-Founder, he has helped shape the organisation’s foundations and continues to support the ways it reaches and works with communities.',
    ],
  },
]

export const professionsBand = {
  eyebrow: 'Different Professional Backgrounds. One Purpose.',
  title: 'Every skill can serve a purpose',
  items: ['Data Science', 'Civil Engineering', 'Government Sector', 'Pharmacy & Production', 'Software Engineering'],
  text: 'Five different professions, one shared belief — that knowledge and experience can be used not only at work, but also for people and communities.',
}

export const leadership = {
  eyebrow: 'Leadership That Listens',
  title: 'Good leadership begins with listening',
  text: 'A strong organisation needs leadership that listens. Drx Chand Siddiqui is described as someone who listens to people’s ideas and concerns, considers different perspectives, and encourages the team to work towards meaningful solutions.',
  idea: 'Good leadership begins with listening — understanding people, considering ideas, and creating space for meaningful action.',
  linkLabel: 'Meet Our Founder',
  linkTo: '/founder',
}

export const professionPurpose = {
  eyebrow: 'Your Profession Can Serve a Larger Purpose',
  title: 'Skills don’t have to stay at work',
  text: 'Professional skills do not have to remain limited to professional workplaces. Knowledge can be shared, experience can be used, ideas can be developed, communities can be supported, and young people can be encouraged. Perhaps you also have something you can contribute.',
}

export const whyPeople = {
  eyebrow: 'Why People Matter',
  title: 'Change is carried by people',
  text: 'Social change needs people who are willing to contribute consistently. Not everyone contributes in the same way — and the strength comes from bringing these different contributions together.',
  contributions: [
    'Professional knowledge',
    'Leadership',
    'Time',
    'Community coordination',
    'Technical skills',
    'Planning & execution',
  ],
}

export const youthOpportunity = {
  eyebrow: 'Youth & Opportunity',
  title: 'Creating pathways, together',
  text: 'India needs people willing to help young people, families facing difficulties, and communities that need support. Many young people have ability but may lack guidance, opportunity or the right support. Indian Helping Trust can be a platform through which people come together to contribute to social initiatives.',
  values: ['Support', 'Opportunity', 'Guidance', 'Education', 'Community participation', 'Empowerment'],
}

export const timeline = [
  { year: '2017', title: 'The journey begins', text: 'Indian Helping Trust begins its journey, and members of the early core team become associated with the organisation.' },
  { year: '2019', title: 'Documented association', text: 'Certified-member documentation for relevant IHT members, as part of the organisation’s journey.' },
  { year: 'Today', title: 'A continuing journey', text: 'Community service, professional contribution, volunteer engagement and social initiatives — carried forward, together.' },
]

export const teamCta = {
  title: 'Be part of meaningful change',
  text: 'Change does not always begin with a large organisation or a large resource. Sometimes it begins with a person willing to listen, contribute an idea, share a skill, or take one meaningful step.',
  links: [
    { label: 'Explore Our Programs', to: '/programs', style: 'secondary' },
    { label: 'Meet the Founder', to: '/about', style: 'ghost' },
    { label: 'Get Involved', to: '/get-involved', style: 'primary' },
  ],
}
