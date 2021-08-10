import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Sandy Cruz | Software Engineer', // e.g: 'Name | Developer'
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
    'I’m a full-stack software engineer with experience with React, JavaScript, Ruby, Ruby on Rails, Redux, ESLint, ES6, SQL, styled-components, HTML5, and CSS3.',
  paragraphTwo:
    'Ever since middle school, I’ve been interested in technology. I remember making a photoshop competition website on Geocities with basic HTML and CSS. As a former speech-language pathologist, I started making small applications to speed up writing evaluations, like a calculator that determines a client’s percentage of delay. From there, I got more and more interested in building applications. My background taught me how communicate high-level topics to a wide range of people, ranging from two-year-olds to parents.',
  paragraphThree:
    'Over the last year, I have I created an open-sourced npm package with WAI-ARIA accessible components. I also created a clone of OpenTable / Resy using Ruby on the backend, React on the frontend, and Postgres as the database. Currently I’m working on creating a todo-list application with calendar integration. I’m really interested in using my new skills to give back to the community and make websites more accessible. ',
  resume: 'https://drive.google.com/file/d/1Y2cMJJSiccEIVDFICdwTCt-srnjHu9hh/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'broken_table.jpg',
    title: 'BrokenTable',
    info: 'BrokenTable is a restaurant reservation application built on React/Redux, Ruby on Rails, and a PostgreSQL database.',
    info2:
      'It features integrated Google Maps, Resy, and TomTom API with geolocation based searching to display restaurants on map. BrokenTable manages scheduling and booking CRUD through custom transactional database operations using Active Record and PostgreSQL.',
    url: 'https://broken-table.herokuapp.com/',
    repo: 'https://github.com/sandylcruz/broken-table', // if no repo, the button will not show up
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
  {
    id: nanoid(),
    img: '2048.jpg',
    title: '2048',
    info: 'This is a React clone of of the popular 2048 game. Animations were implemented with Framer Motion.',
    info2: '',
    url: 'https://sandylcruz.github.io/2048/',
    repo: 'https://github.com/sandylcruz/2048', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'sandycrz@icloud.com',
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
