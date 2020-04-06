import React from 'react';
import PropTypes from 'prop-types';

const links = [
  {
    name: 'GitHub',
    href: 'https://github.com/phartenfeller',
    path:
      'M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12'
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/phartenfeller',
    path:
      'M23.954 4.569a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.061a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z'
  },
  {
    name: 'Xing',
    href: 'https://www.xing.com/profile/Philipp_Hartenfeller',
    path:
      'M18.188 0c-.517 0-.741.325-.927.66 0 0-7.455 13.224-7.702 13.657.015.024 4.919 9.023 4.919 9.023.17.308.436.66.967.66h3.454c.211 0 .375-.078.463-.22.089-.151.089-.346-.009-.536l-4.879-8.916a.022.022 0 010-.022L22.139.756c.095-.191.097-.387.006-.535C22.056.078 21.894 0 21.686 0h-3.498zM3.648 4.74c-.211 0-.385.074-.473.216-.09.149-.078.339.02.531l2.34 4.05c.004.01.004.016 0 .021L1.86 16.051a.52.52 0 000 .529c.085.142.239.234.45.234h3.461c.518 0 .766-.348.945-.667l3.734-6.609-2.378-4.155c-.172-.315-.434-.659-.962-.659H3.648v.016z'
  }
];

const LinkCard = ({ link }) => {
  return (
    <div className="bg-white items-center rounded-md shadow-lg py-10 px-10 transform duration-200 ease-in-out hover:scale-110 hover:opacity-75 blurry">
      <a href={link.href}>
        <div className="m-auto">
          <svg
            className="h-16 w-16 m-auto"
            style={{ color: '#544242' }}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentcolor"
          >
            <path d={link.path} />
          </svg>
          <div className="text-center mt-4 text-xl">{link.name}</div>
        </div>
      </a>
    </div>
  );
};

LinkCard.propTypes = {
  link: PropTypes.shape({
    href: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired
};

const SocialLinks = () => (
  <div className="-mt-32 px-48 grid gap-10 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-none">
    {links.map(link => (
      <LinkCard link={link} />
    ))}
  </div>
);

export default SocialLinks;
