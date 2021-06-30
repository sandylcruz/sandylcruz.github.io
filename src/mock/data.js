import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Sandy Cruz | Developer', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Sandy Cruz.',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'I’m a full-stack Software Engineer based in San Francisco with experience in JavaScript, React, Redux, Ruby, Rails, Typescript, PostgreSQL, and AWS. ',
  paragraphTwo:
    'I’m an independent, self-starter who completed App Academy Open while working a full-time job. I am passionate about creative problem solving and strive for quality in my work.  I enjoy being given goals and finding ways to achieve them.',
  paragraphThree: ' ',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'broken_table.jpg',
    title: 'BrokenTable',
    info: 'BrokenTable is a restaurant reservation application built on React/Redux, Ruby on Rails, and a PostgreSQL database.',
    info2:
      'It features integrated Google Maps and TomTom API with geolocation based searching to display restaurants on map. BrokenTable manages scheduling and booking CRUD through custom transactional database operations using Active Record and PostgreSQL.',
    url: 'https://broken-table.herokuapp.com/',
    repo: 'https://github.com/sandylcruz/broken-table', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: '2048.jpg',
    title: '2048',
    info: 'This is a React clone of of the popular 2048 game. Animations were implemented with Framer Motion.',
    info2: '',
    url: 'https://sandylcruz.github.io/2048/',
    repo: 'https://github.com/sandylcruz/2048', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'access-it.jpg',
    title: 'Access-It',
    info: 'Access-It is a NPM package that contains WAI-ARIA accessible components. This package was built with Typescript and Javascript.',
    info2: '',
    url: 'https://sandylcruz.github.io/access-it',
    repo: 'https://github.com/sandylcruz/access-it', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'sandyleahcruz@icloud.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/sandy-cruz-9256a544/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/sandylcruz',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
