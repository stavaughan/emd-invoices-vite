import { useMemo, useCallback } from 'react';
import { SideBarList } from '.';
import { useMobile } from '@/hooks';
import { useSelector } from 'react-redux';
import clsx from 'clsx';

const SideBar = ({
  section,
  setSection,
  contentSections,
  sideNavCollapsed,
  setSideNavCollapsed,
  navID
}) => {

  const { isXSmall } = useMobile();
  const { user } = useSelector(state => state.auth);
  const access = user?.access || '';

  const allowedSections = useCallback((sections, accessID) => {
    const allowed = sections.filter(_ => _.display && _.access.includes(accessID));
    return {
      sections: allowed,
      categories: [...new Set(allowed.map(_ => _.category))]
    }
  }, []);

  const { sections, categories } = useMemo(() => {
    return allowedSections(contentSections, access)
  }, [contentSections, access, allowedSections]);

  const listData = useCallback((cat) => sections.filter(_ => _.category === cat), [sections])

  return (
    <div
      className={clsx(
        "navbar-collapse border-0",
        sideNavCollapsed && 'collapse'
      )}
      style={{ width: '100%' }}
      id={navID}
    >
      <div className="navbar-nav flex-column">
        {categories.map(category => (
          <SideBarList
            key={category + 'sidebarSection'}
            title={category}
            margin={isXSmall ? "mb-1" : "mb-4"}
            listData={listData(category)}
            setSideNavCollapsed={setSideNavCollapsed}
            section={section}
            setSection={setSection}
          />
        ))}
      </div>
    </div>
  )
}

export default SideBar
