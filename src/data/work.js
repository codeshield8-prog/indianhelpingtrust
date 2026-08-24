// ---------------------------------------------------------------------------
// "Our Work" content — organised by the real IHT Event Img folder structure.
// Each story maps to a location folder in src/assets/work/<key>/ and shows
// ALL of that location's photographs. Captions/descriptions are factual and
// location-verified. NO invented statistics, dates, counts or claims of scale.
// ---------------------------------------------------------------------------

export const workIntro = {
  eyebrow: 'Our Work',
  title: 'Turning compassion into action',
  text: 'Indian Helping Trust works with communities across different regions of India, responding to local needs through education, humanitarian support, cleanliness drives, elderly care, social awareness, youth engagement and volunteer-led initiatives.',
}

// Only sectors the archive actually evidences.
export const workSectors = [
  { label: 'Humanitarian Relief', icon: 'heart', accent: 'orange' },
  { label: 'Swachh Bharat & Cleanliness', icon: 'home', accent: 'green' },
  { label: 'Education & Children', icon: 'book', accent: 'blue' },
  { label: 'Elderly Care', icon: 'hands', accent: 'orange' },
  { label: 'Youth & Sports', icon: 'women', accent: 'green' },
  { label: 'Social Awareness', icon: 'meal', accent: 'blue' },
  { label: 'Volunteer Engagement', icon: 'hands', accent: 'green' },
  { label: 'International Engagement', icon: 'women', accent: 'blue' },
]

// Per-location visual stories. `key` = folder in src/assets/work/.
export const workStories = [
  {
    key: 'assam',
    name: 'Assam',
    sector: 'Humanitarian Relief',
    accent: 'orange',
    title: 'Relief & ration support in Assam',
    text: 'IHT volunteers reached families in Assam with essential rations and supplies — distributing with care and following safety precautions on the ground.',
  },
  {
    key: 'bihar',
    name: 'Bihar',
    sector: 'Relief & Swachh Bharat',
    accent: 'green',
    title: 'Relief and cleanliness drives in Bihar',
    text: 'In Bihar, IHT carried out relief distribution for families and joined Swachh Bharat cleanliness drives — including a drive marking Gandhi Jayanti — alongside local communities.',
  },
  {
    key: 'baruraj',
    name: 'Baruraj, Muzaffarpur',
    sector: 'Social Awareness',
    accent: 'blue',
    title: 'Community awareness at Baruraj',
    text: 'At Baruraj in Muzaffarpur, volunteers led community awareness rallies and street-level outreach, encouraging local people to take part.',
  },
  {
    key: 'delhi',
    name: 'Delhi',
    sector: 'Swachh Bharat & Cleanliness',
    accent: 'green',
    title: 'Swachh Bharat cleanliness drives in Delhi',
    text: 'In Delhi, IHT volunteers took part in Swachh Bharat cleanliness drives — clearing public spaces together with a shared sense of responsibility.',
  },
  {
    key: 'bangalore',
    name: 'Bangalore',
    sector: 'Education & Community Service',
    accent: 'blue',
    title: 'Education, meals & community service in Bangalore',
    text: 'In Bangalore, IHT distributed school kits to children, served meals, ran cleanliness drives and brought volunteers together for community activities.',
  },
  {
    key: 'mysuru',
    name: 'Mysuru',
    sector: 'Youth & Sports',
    accent: 'green',
    title: 'Youth & sports in Mysuru',
    text: 'In Mysuru, IHT engaged young people through sport and fitness — including a dedicated IHT Mysuru cricket team.',
  },
  {
    key: 'bhopal',
    name: 'Bhopal',
    sector: 'Elderly Care & Awareness',
    accent: 'orange',
    title: 'Elderly care & awareness in Bhopal',
    text: 'In Bhopal, volunteers spent time with residents at an elderly home and ran a “Say No to Plastic” awareness initiative for a cleaner environment.',
  },
  {
    key: 'gujarat',
    name: 'Gujarat',
    sector: 'Humanitarian Relief',
    accent: 'orange',
    title: 'Relief support in Gujarat',
    text: 'In Gujarat, IHT volunteers supported relief distribution, working on the ground while following safety precautions.',
  },
  {
    key: 'kerala',
    name: 'Kerala',
    sector: 'Volunteer & Community Engagement',
    accent: 'green',
    title: 'Community engagement in Kerala',
    text: 'In Kerala, IHT volunteers and youth took part in community engagement and awareness activities.',
  },
]

export const internationalStory = {
  key: 'foreign',
  eyebrow: 'International Internship',
  title: 'International engagement with IHT',
  text: 'Indian Helping Trust has welcomed volunteers from abroad who joined its community initiatives as part of an internship engagement — working alongside local teams on the ground.',
}

export const volunteersBand = {
  eyebrow: 'Powered by People',
  title: 'Volunteers who make it happen',
  text: 'IHT’s work is carried forward by volunteers who give their time and effort to community initiatives across regions.',
  locationKeys: ['bangalore', 'kerala', 'mysuru', 'delhi'],
}
