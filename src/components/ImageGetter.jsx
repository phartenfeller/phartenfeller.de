import { graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import React from 'react';

const ImageGetter = ({ filename, classes, alt }) => {
  const filterImage = images => {
    return images.allImageSharp.edges.find(element => {
      // Match string after final slash
      return element.node.fluid.src.split('/').pop() === filename;
    });
  };

  return (
    <StaticQuery
      query={graphql`
        query {
          allImageSharp {
            edges {
              node {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      `}
      render={data => {
        return (
          <Img
            className={classes}
            fluid={filterImage(data).node.fluid}
            alt={alt}
          />
        );
      }}
    />
  );
};

ImageGetter.propTypes = {
  filename: PropTypes.string.isRequired,
  classes: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};

export default ImageGetter;
