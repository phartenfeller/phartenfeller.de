import PropTypes from 'prop-types';
import React from 'react';
import svg from '../images/svg';

const types = {
  github: {
    icon: svg.github,
    text: 'Code',
    ariaLabel: 'Code on GitHub',
    textColor: 'text-gray-200',
    iconColor: 'text-gray-500',
    bg: 'bg-gray-900',
    bgHover: 'bg-gray-800',
    bgActive: 'bg-black',
    focusBorder: 'border-gray-600'
  },
  purple: {
    icon: svg.compass,
    text: 'Open',
    ariaLabel: 'Open page',
    textColor: 'text-gray-200',
    iconColor: 'text-purple-400',
    bg: 'bg-purple-700',
    bgHover: 'bg-purple-600',
    bgActive: 'bg-purple-800',
    focusBorder: 'border-purple-500'
  },
  green: {
    icon: svg.compass,
    text: 'Open',
    ariaLabel: 'Open page',
    textColor: 'text-white',
    iconColor: 'text-green-400',
    bg: 'bg-green-700',
    bgHover: 'bg-green-600',
    bgActive: 'bg-green-800',
    focusBorder: 'border-green-500'
  },
  twitter: {
    icon: svg.twitter,
    text: 'Twitter',
    ariaLabel: 'My Twitter page',
    textColor: 'text-white',
    iconColor: 'text-blue-400',
    bg: 'bg-blue-700',
    bgHover: 'bg-blue-600',
    bgActive: 'bg-blue-800',
    focusBorder: 'border-blue-500'
  },
  email: {
    icon: svg.mail,
    text: 'contact@hartenfeller.dev',
    ariaLabel: 'Send me an email',
    textColor: 'text-white',
    iconColor: 'text-indigo-400',
    bg: 'bg-indigo-700',
    bgHover: 'bg-indigo-600',
    bgActive: 'bg-indigo-800',
    focusBorder: 'border-indigo-500'
  }
};

const LinkButton = ({ type, link }) => {
  const options = types[type];
  if (!options) throw new Error('Type does not exist for component LinkButton');

  return (
    <>
      <a href={link} className="inline-flex rounded-md mr-3">
        <button
          type="button"
          aria-label={options.ariaLabel}
          className={`inline-flex items-center px-4 py-2 border-2 border-transparent text-sm ${options.iconColor} leading-5 font-medium rounded-md ${options.bg} hover:${options.bgHover} focus:outline-none focus:${options.focusBorder} active:${options.bgActive} transform duration-150 ease-in-out hover:scale-105`}
        >
          <svg
            className="-ml-1 mr-2 h-5 w-5"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path fillRule="evenodd" d={options.icon} clipRule="evenodd" />
          </svg>
          <span className={`${options.textColor}`}>{options.text}</span>
        </button>
      </a>
    </>
  );
};

LinkButton.propTypes = {
  type: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
};

export default LinkButton;
