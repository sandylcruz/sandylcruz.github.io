const { nanoid } = require('nanoid');

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs = `
    type AboutMe {
      content: String!
      resume: String!
      img: String!
    }

    type Project {
      title: String!
      info: String!
      info2: String!
      url: String!
      repo: String!
      id: String!
      img: String!
    }

    type Network {
      id: String!
      url: String!
      name: String!
    }

    type Hero {
      name: String!
    }

    type Head {
      title: String!
      description: String!
    }

    type Contact {
      email: String!
    }

    type Footer {
      id: String!
      name: String!
      url: String!
    }

    type SiteContent {
      aboutMe: AboutMe!
      head: Head!
      hero: Hero!
      networks: [Network!]!
      projects: [Project!]!
      contact: Contact!
      footer: Footer!
    }

    type Query {
      siteContent: SiteContent!
    }
  `;
  createTypes(typeDefs);
};

exports.createResolvers = ({ createResolvers }) => {
  const resolvers = {
    Query: {
      siteContent: {
        type: 'SiteContent',
        resolve() {
          return {
            __typename: 'SiteContent',
            aboutMe: {
              content: `
I’m a full-stack software engineer with experience with React, JavaScript, Ruby, Ruby on Rails, Redux, ESLint, ES6, SQL, styled-components, HTML5, and CSS3.
              `,
              img: 'profile.jpg',
              resume:
                'https://drive.google.com/file/d/18ZW7E9QJZdXfsYrsmQzX3as7yWT0Mevv/view?usp=sharing',
            },
            projects: [
              {
                __typename: 'Project',
                title: 'BrokenTable',
                info: 'BrokenTable is a restaurant reservation application built on React/Redux, Ruby on Rails, and a PostgreSQL database.',
                info2:
                  'It features integrated Google Maps, Resy, and TomTom API with geolocation based searching to display restaurants on map. BrokenTable manages scheduling and booking CRUD through custom transactional database operations using Active Record and PostgreSQL.',
                url: 'https://broken-table.herokuapp.com/',
                repo: 'https://github.com/sandylcruz/broken-table',
                id: nanoid(),
                img: 'broken_table.jpg',
              },
              {
                __typename: 'Project',
                title: 'AccessIt',
                info: 'Access-It is a NPM package that contains WAI-ARIA accessible components. This package was built with Typescript and Javascript.',
                info2: '',
                url: 'https://sandylcruz.github.io/access-it',
                repo: 'https://github.com/sandylcruz/access-it',
                id: nanoid(),
                img: 'access-it.jpg',
              },
              {
                __typename: 'Project',
                title: '2048',
                info: 'This is a React clone of of the popular 2048 game. Animations were implemented with Framer Motion.',
                info2: '',
                url: 'https://sandylcruz.github.io/2048/',
                repo: 'https://github.com/sandylcruz/2048',
                id: nanoid(),
                img: '2048.jpg',
              },
            ],
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
            hero: {
              name: 'Sandy Cruz.',
            },
            head: {
              title: 'Sandy Cruz | Software Engineer',
              description: 'Website for Sandy Cruz',
            },
            contact: {
              email: 'sandycrz@icloud.com',
            },
          };
        },
      },
    },
  };
  createResolvers(resolvers);
};
