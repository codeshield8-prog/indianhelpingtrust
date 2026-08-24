// ---------------------------------------------------------------------------
// Central content for the Indian Helping Trust site.
// All copy here is PLACEHOLDER — written to match a charity/NGO brand.
// Replace freely; components read everything from this file.
// ---------------------------------------------------------------------------

export const org = {
  name: 'Indian Helping Trust',
  short: 'IHT',
  tagline: 'Action towards empowerment',
  email: 'info@indianhelpingtrust.org',
  phone: '+91-8109553486',
  address: 'E-65, Inder Enclave Phase 2, Kirari Suleman Nagar, Delhi - 110086',
  reg: 'Registered Trust | Registration No. 7370/2017',
  socials: [
    { label: 'Facebook', href: 'https://www.facebook.com/adminiht', icon: 'facebook' },
    { label: 'Instagram', href: 'https://www.instagram.com/indianhelpingtrust', icon: 'instagram' },
    { label: 'X (Twitter)', href: 'https://x.com/IndianHelping', icon: 'x' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/company/indianhelpingtrust/', icon: 'linkedin' },
    { label: 'YouTube', href: 'https://youtube.com/@indianhelpingtrust', icon: 'youtube' },
  ],
}

export const nav = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Programs', to: '/programs' },
  { label: 'Core Team', to: '/core-team' },
  { label: 'Get Involved', to: '/get-involved' },
  { label: 'Contact', to: '/contact' },
]

export const hero = {
  eyebrow: 'Non-profit · Serving communities since 2018',
  title: 'Empowering lives, one helping hand at a time',
  text: 'Indian Helping Trust works alongside underserved communities across India — bringing education, healthcare, nutrition and dignity to the people who need it most.',
  primaryCta: { label: 'Donate Now', to: '/get-involved' },
  secondaryCta: { label: 'Our Programs', to: '/programs' },
}

// Hero carousel — uses the REAL uploaded IHT photos placed in src/assets/hero/.
// Home.jsx auto-loads every file named hero/slide-*.{jpg,jpeg,png,webp} in order.
// Alt text below is matched to the slides by order (slide-1 → first entry, etc.).
export const heroSlideAlts = [
  'International volunteers with Indian Helping Trust holding an IHT banner',
  'An Indian Helping Trust volunteer serving a meal to children',
  'The Indian Helping Trust volunteer team',
]

export const stats = [
  { value: '25,000+', label: 'Lives touched' },
  { value: '40+', label: 'Villages reached' },
  { value: '1,200+', label: 'Volunteers' },
  { value: '15+', label: 'Active programs' },
]

export const focusAreas = [
  {
    icon: 'book',
    color: 'green',
    title: 'Education',
    text: 'Free learning centres, scholarships and school supplies so every child can stay in school and dream bigger.',
  },
  {
    icon: 'heart',
    color: 'orange',
    title: 'Healthcare',
    text: 'Mobile medical camps, checkups and awareness drives that bring basic healthcare to remote communities.',
  },
  {
    icon: 'women',
    color: 'blue',
    title: 'Women Empowerment',
    text: 'Skill training, micro-enterprise support and self-help groups that help women earn and lead with confidence.',
  },
  {
    icon: 'meal',
    color: 'green',
    title: 'Food & Nutrition',
    text: 'Daily meal drives and nutrition kits that fight hunger and keep families healthy through hard times.',
  },
  {
    icon: 'home',
    color: 'orange',
    title: 'Community Welfare',
    text: 'Clean water, sanitation and disaster-relief efforts that rebuild and strengthen entire neighbourhoods.',
  },
  {
    icon: 'hands',
    color: 'blue',
    title: 'Volunteering',
    text: 'A growing network of volunteers giving their time and skills to create change on the ground.',
  },
]

export const programs = [
  {
    title: 'Shiksha — Learning for Every Child',
    tag: 'Education',
    color: 'green',
    text: 'After-school learning centres and scholarships that keep first-generation learners in school and thriving.',
    points: ['12 learning centres', '900+ children enrolled', 'Books, uniforms & mentoring'],
  },
  {
    title: 'Arogya — Health on Wheels',
    tag: 'Healthcare',
    color: 'orange',
    text: 'Mobile clinics and free medical camps delivering checkups, medicines and awareness to remote villages.',
    points: ['Monthly medical camps', 'Free basic medicines', 'Maternal & child health'],
  },
  {
    title: 'Shakti — Women Rising',
    tag: 'Empowerment',
    color: 'blue',
    text: 'Vocational training and self-help groups that give women the skills and capital to build livelihoods.',
    points: ['Tailoring & craft training', 'Micro-finance support', '300+ women trained'],
  },
  {
    title: 'Anna — No One Sleeps Hungry',
    tag: 'Nutrition',
    color: 'green',
    text: 'Community kitchens and ration drives providing nutritious meals to families and children in need.',
    points: ['Daily meal service', 'Nutrition kits', 'Disaster-time relief'],
  },
]

export const steps = [
  { n: '01', title: 'You Give', text: 'Your donation — big or small — goes directly toward programs on the ground.' },
  { n: '02', title: 'We Act', text: 'Our teams and volunteers turn your support into meals, classes and care.' },
  { n: '03', title: 'Lives Change', text: 'Communities gain the tools to stand on their own and lift the next generation.' },
]

export const testimonials = [
  {
    quote:
      'The learning centre changed everything for my daughter. She is the first in our family to read and write — and now she wants to be a teacher.',
    name: 'Sunita Devi',
    role: 'Parent, Vikhroli',
  },
  {
    quote:
      'The medical camp caught my mother’s illness early. We could never have afforded the tests on our own. I am grateful every day.',
    name: 'Rajesh Kumar',
    role: 'Beneficiary, Thane',
  },
  {
    quote:
      'Volunteering with IHT is the most meaningful thing I do. You see the impact of your time immediately, in real faces and real families.',
    name: 'Ayesha Sheikh',
    role: 'Volunteer since 2021',
  },
]

export const donationTiers = [
  { amount: '₹500', title: 'Feed a Family', text: 'Provides nutritious meals to a family for a week.' },
  { amount: '₹1,500', title: 'Educate a Child', text: 'Covers a month of learning, books and supplies for one child.' },
  { amount: '₹5,000', title: 'Health for a Village', text: 'Helps fund a mobile medical camp for a remote community.' },
]

export const involveWays = [
  {
    icon: 'heart',
    title: 'Donate',
    text: 'Fund meals, classrooms and medical camps. Every rupee is put to work on the ground.',
  },
  {
    icon: 'hands',
    title: 'Volunteer',
    text: 'Give your time and skills — teaching, organising camps, or spreading the word.',
  },
  {
    icon: 'women',
    title: 'Partner',
    text: 'Corporates and institutions can partner with us through CSR and long-term collaborations.',
  },
]

// "Moments of Impact" homepage gallery — real IHT photographs.
// Home.jsx auto-loads src/assets/moments/*.{jpg,png}; this maps each file
// (by its name stem) to a label. Labels are factual/category-level only.
// `span` = bento sizing; `accent` = eyebrow colour; `href` links a tile.
export const moments = {
  'm1-founder': {
    accent: 'orange',
    category: 'Leadership',
    title: 'Drx Chand Siddiqui',
    sub: 'Founder & Chairman',
    href: '/about',
    span: 'col-span-2 row-span-2',
  },
  'm2-internship': {
    accent: 'green',
    category: 'International Internship',
    title: 'International engagement with IHT',
    span: 'col-span-2 row-span-2',
  },
  'm3-outreach': {
    accent: 'orange',
    category: 'Community Outreach',
    title: 'On the ground with communities',
    span: 'col-span-2 row-span-1',
  },
  'm4-cleanliness': {
    accent: 'green',
    category: 'Community Service',
    title: 'Cleanliness drive',
    span: 'col-span-1 row-span-1',
  },
  'm5-volunteers': {
    accent: 'blue',
    category: 'Volunteer Engagement',
    title: 'Our volunteer team',
    span: 'col-span-1 row-span-1',
  },
}

export const founder = {
  eyebrow: 'Leadership',
  role: 'Founder & Chairman',
  name: 'Drx Chand Siddiqui',
  roleFull: 'Founder & Chairman, Indian Helping Trust',
  intro: [
    'Drx Chand Siddiqui is the Founder & Chairman of Indian Helping Trust (IHT), a non-profit organisation committed to creating a more empowered, inclusive and compassionate society.',
    'With a vision of contributing to the betterment of society, Drx Chand Siddiqui initiated Indian Helping Trust in 2017 with a small group of trustees in Muzaffarpur. What began as an initiative to serve communities in need has grown into an organisation working across different parts of India.',
    'Under his leadership, Indian Helping Trust focuses on addressing some of the fundamental challenges faced by underserved communities. Its initiatives include education and support for underprivileged children, healthcare services, disaster response, livelihood support, women empowerment and community engagement.',
  ],
  vision:
    'Drx Chand Siddiqui believes that meaningful social change begins when individuals come together with a shared sense of responsibility. His vision is to encourage people to participate in building a stronger and more equitable society, where every individual has the opportunity to live with dignity and hope.',
  quote: 'The happiest people I know are those who lose themselves in the service of others.',
  journeyLead:
    'From its early beginnings, Indian Helping Trust has aimed to transform compassion into meaningful action. Through its programmes and volunteers, IHT works to reach communities that need support and create opportunities that can contribute to long-term social development.',
  journeyClose: {
    pre: 'Drx Chand Siddiqui’s leadership continues to guide the organisation towards its core objective: ',
    strong: 'serving people, empowering communities and contributing to a better future for the nation.',
  },
  signature: {
    name: 'Drx Chand Siddiqui',
    role: 'Founder & Chairman',
    org: 'Indian Helping Trust',
  },
}

export const about = {
  mission:
    'To empower underserved communities across India through education, healthcare, livelihood opportunities and compassionate support — creating pathways to dignity, self-reliance and a better future for every individual.',
  vision:
    'To build an inclusive and empowered India where every child has access to education, every family can access essential healthcare, every individual has the opportunity to earn with dignity, and every community has the strength to shape a better future.',
  story: [
    'Indian Helping Trust began in 2018 with a simple belief: that small, consistent acts of help can transform lives. What started as a handful of volunteers distributing meals in Mumbai has grown into a movement spanning dozens of villages.',
    'Today we run programs across education, healthcare, women’s empowerment and community welfare — always working *with* communities rather than *for* them. Our three-hands logo says it best: change happens when we hold each other up.',
  ],
  values: [
    { title: 'Compassion', text: 'We lead with empathy and treat every person with dignity.' },
    { title: 'Transparency', text: 'We account for every rupee and share our impact openly.' },
    { title: 'Sustainability', text: 'We build lasting change, not short-term fixes.' },
    { title: 'Community First', text: 'The people we serve guide the work we do.' },
  ],
}
