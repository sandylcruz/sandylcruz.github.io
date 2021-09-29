import React from 'react';

import { graphql, useStaticQuery } from 'gatsby';
import { Helmet } from 'react-helmet';
import App from '../components/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';

export default () => {
  const {
    siteContent: {
      head: { title, description },
    },
  } = useStaticQuery(graphql`
    query HeadQuery {
      siteContent {
        head {
          title
          description
        }
      }
    }
  `);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <html lang="en" />
        <meta name="description" content={description} />
      </Helmet>
      <App />
    </>
  );
};
