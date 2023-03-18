import React from 'react';
import { controlProps } from '@/globals/js';
import { useSelector } from 'react-redux';

import { FontAwesomeIcon as FAIcon } from '@fortawesome/react-fontawesome';

const LinkOrModal = ({ link }) => {

  const { settings } = useSelector(state => state.settings);
  const siteInfo = settings?.siteInfo || null;
  const coffeeLink = siteInfo?.coffeeLink || '';

  return (
    <>
      {link?.modalID ? (
        <span
          className="text-sm text-gray-300-hover p-0"
          role="button"
          {...controlProps.modalOpen(link.modalID)}
        >
          {link.label}
        </span>
      ) : (
        <a
          className="text-sm text-gray-300-hover p-0"
          {...controlProps.newTab(coffeeLink ? link?.url + coffeeLink : link?.url)}
        >
          {coffeeLink && <FAIcon icon="mug-hot" className="me-1" />}
          {link.label}
        </a>
      )}
    </>
  )
}

export default LinkOrModal
