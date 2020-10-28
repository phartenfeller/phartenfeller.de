import { graphql, StaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

const BlogGifGetter = ({ filename, classes, alt }) => {
  const filterGif = (gifs) => {
    return gifs.allFile.edges.find((element) => {
      return `${element.node.name}.gif` === filename;
    });
  };

  return (
    <StaticQuery
      query={graphql`
        query {
          allFile(filter: { extension: { eq: "gif" } }) {
            edges {
              node {
                publicURL
                name
              }
            }
          }
        }
      `}
      render={(data) => {
        return (
          <img
            src={filterGif(data).node.publicURL}
            alt={alt}
            className={classes}
          />
        );
      }}
    />
  );
};

BlogGifGetter.propTypes = {
  filename: PropTypes.string.isRequired,
  classes: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default BlogGifGetter;
