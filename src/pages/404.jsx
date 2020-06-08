import { graphql, Link, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';

const NotFoundPage = () => {
  const data = useStaticQuery(graphql`
    query {
      astronautImage: file(relativePath: { eq: "hartenfeller-space-404.jpg" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 1720) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <div className="bg-black">
      <Layout>
        <SEO
          title="404: Not found"
          meta={[{ name: 'robots', content: 'noindex' }]}
        />
        <div className="w-full text-center">
          <h1 className="text-3xl text-gray-200 font-bold">NOT FOUND</h1>
          <h2 className="text-xl text-gray-300">
            Lost in Space - You just hit a route that doesn&#39;t exist.
          </h2>
          <div className="text-center my-4 text-xl text">
            <Link
              to="/"
              className="text-orange-400 hover:text-orange-600 hover:underline"
            >
              Homepage
            </Link>
            <span className="mx-4 text-gray-400">•</span>
            <Link
              to="/blog/"
              className="text-orange-400 hover:text-orange-600 hover:underline"
            >
              Blog
            </Link>
          </div>
          <div className="xl:w-2/3 m-auto">
            <Img fluid={data.astronautImage.childImageSharp.fluid} />
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default NotFoundPage;
