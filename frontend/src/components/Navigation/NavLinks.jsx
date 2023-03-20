import React, { useContext, useMemo, useCallback } from 'react';
import { setSelectContactID } from '@/features/contacts/contactsSlice';
import { DataContext, SettingsContext } from '@/contexts';
import { useNavLogic } from '@/components/Navigation';
import { NavLink } from 'react-router-dom';
import { PageObjects, Global } from '@/globals/js';
import { useDispatch, useSelector } from 'react-redux';
import clsx from 'clsx';

const NavLinks = ({ pageID }) => {

  const { userAuthLink } = useNavLogic();

  const dispatch = useDispatch();

  const { setIsNavCollapsed } = useContext(DataContext);
  const { user } = useSelector(state => state.auth);
  const contactID = user?.contactID || '';
  const userID = user?.userID || '';
  const access = user?.access || '';

  const { smallText } = useContext(SettingsContext).fontSize;

  const filteredLinks = useMemo(() => {
    const links = PageObjects.HEADER_NAV(pageID);
    return links?.length ? links.filter(link => userAuthLink(link, access)) : [];
  }, [access, pageID, userAuthLink]);

  const linkText = useCallback((value) => Global.upperCaseFirst(value), [])

  const onClickNavLink = () => {
    if (pageID === 'userprofile') {
      dispatch(setSelectContactID({ id: contactID }));
    }
    setIsNavCollapsed(true);
  }

  return (
    <ul
      className="nav nav-tabs nav-overflow header-tabs ps-2"
      style={{ letterSpacing: '.05rem' }}
    >
      {filteredLinks?.length ? filteredLinks.map(page => {
        const linkTo = (page._id === 'home' || !userID) ? '/' : `/${userID}/${page.path}`;
        return (
          <li
            key={page._id}
            className="nav-item">
            <NavLink
              to={linkTo}
              active={page._id !== 'home' ? 'true' : 'false'}
              className={clsx(
                smallText,
                "nav-link text-secondary",
                page._id === 'home' && 'home-link',
              )}
              {...userID && { onClick: onClickNavLink }}
            >
              {linkText(page?.label)}
            </NavLink>
          </li>
        )
      }) : null}
    </ul>
  );
};

export default NavLinks;
