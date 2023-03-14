import { Cloudinary } from "@cloudinary/url-gen";
import { useLoadAppData } from '@/hooks';
import { createContext, useMemo, useCallback, useState } from 'react';

const CLOUDINARY_NAME = import.meta.env?.REACT_APP_CLOUDINARY_NAME || '';

const DataContext = createContext({
  visibleElems: {},
  setVisibleElems: () => { },
  isNavCollapsed: true,
  cloudImage: () => { },
  screen: {}
});

export const DataProvider = (props) => {

  const cloudinaryImage = useMemo(() => {
    const cld = new Cloudinary({
      cloud: {
        cloudName: CLOUDINARY_NAME
      }
    });
    return cld
  }, [])

  const cloudImage = useCallback((pid) => {
    return cloudinaryImage.image(pid)
  }, [cloudinaryImage])

  useLoadAppData();

  const [visibleElems, setVisibleElems] = useState({
    invoices: 'show'
  })

  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  return (
    <DataContext.Provider
      value={{
        isNavCollapsed,
        setIsNavCollapsed,
        setVisibleElems,
        cloudImage,
        visibleElems
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};

export default DataContext;