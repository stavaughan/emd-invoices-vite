import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

const PortalWrapper = ({ rootName, children }) => {

  const modalRoot = document.getElementById(rootName);
  const modalElement = document.createElement('div');

  useEffect(() => {
    modalRoot.appendChild(modalElement);
    return () => {
      modalRoot.removeChild(modalElement);
    };
  }, [modalElement]);

    return <>{ReactDOM.createPortal(<>{children}</>, modalRoot)}</>
}

export default PortalWrapper;
