import { useMemo } from 'react';
import { controlProps } from '@/globals/js';
import { useMobile } from '@/hooks';

const WebSiteLink = ({
  url,
  shortLabel,
  className,
  length = 35
}) => {

  const { isXSmall } = useMobile();

  const shortUrl = useMemo(() => {
    const urlLabel = url.split('//')[1];
    const lengthTest = (urlLabel?.length > (length * .5) && isXSmall) || urlLabel?.length > length;
    return lengthTest ? shortLabel : urlLabel;
  }, []);

  return (
    <a
      {...className && { className }}
      {...controlProps.newTab(url)}
      role="button"
    >
      {shortUrl}
    </a>
  );
};

export default WebSiteLink;
