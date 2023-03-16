import React from 'react'

const Layout = ({ header, className = 'content', children }) => {

	return (
      <div className="content-wrap">
        <div className={className}>
          {header}
          <main>
            {children}
          </main>
        </div>
      </div>
	);
};

export default Layout;
