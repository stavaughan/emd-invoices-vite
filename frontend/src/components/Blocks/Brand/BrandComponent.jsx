import React from 'react';
import { SkeletonElem } from '@/components/LoadingSkeleton';
import { BrandLogo } from '.';
import clsx from 'clsx';

import Classes from './BrandComponent.module.css';

const BrandMark = ({ mark }) => {
  if (!mark) return null;
  return (
    <sup className={Classes['emd-brand--trademark']}>
      {mark === 'trademark' ? '\u2122' : '\u24C7'}
    </sup>
  )
};

const BrandComponent = ({
  isLoading,
  baseName,
  mark,
  subName,
  color,
  small
}) => {

  const name = baseName ? baseName.toUpperCase() : '';

  return (
    <div className={clsx(
      'd-flex justify-content-start align-items-center',
      Classes[color ? 'emd-brand--color' : 'emd-brand--non-color'],
      small && Classes['emd-brand--small']
    )}>
      <div {...!!baseName && { className: Classes['emd-brand--logo'] }}>
        {isLoading
          ? <SkeletonElem width="55" height="80" />
          : <BrandLogo color={color} width="55" hasLogo={!!baseName} />}
      </div>
      {isLoading && (
        <div>
          <div className={clsx(Classes['emd-brand--name'], 'leading-5')}>
              <SkeletonElem
                width={small ? '80px' : '180px'}
                height="25px"
              />
          </div>
        </div>
      )}
      {(!isLoading && !!baseName) && (
        <div>
          <div className={clsx(Classes['emd-brand--name'], 'leading-5')}>
            {name}
            <BrandMark mark={mark} />
          </div>
          {subName && (
            <div className={clsx(small ? 'text-xxs' : 'text-xs', 'text-gray-400')}>
              {subName}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default BrandComponent;
