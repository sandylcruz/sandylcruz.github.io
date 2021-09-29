import React from 'react';

import { graphql, useStaticQuery } from 'gatsby';
import { Container } from 'react-bootstrap';
import { Link } from 'react-scroll';

const Footer = () => {
  const {
    siteContent: { networks },
  } = useStaticQuery(graphql`
    query NetworksQuery {
      siteContent {
        networks {
          id
          url
          name
        }
      }
    }
  `);

  return (
    <footer className="footer navbar-static-bottom">
      <Container>
        <span className="back-to-top">
          <Link to="hero" smooth duration={1000}>
            <i className="fa fa-angle-up fa-2x" aria-hidden="true" />
          </Link>
        </span>
        <div className="social-links">
          {networks &&
            networks.map((network) => {
              const { id, name, url } = network;
              return (
                <a
                  key={id}
                  href={url || 'https://github.com/cobidev/gatsby-simplefolio'}
                  rel="noopener noreferrer"
                  target="_blank"
                  aria-label={name}
                >
                  <i className={`fa fa-${name || 'refresh'} fa-inverse`} />
                </a>
              );
            })}
        </div>
        <hr />
      </Container>
    </footer>
  );
};

export default Footer;
