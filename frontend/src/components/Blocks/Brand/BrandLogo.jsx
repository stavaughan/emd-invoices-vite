import React, { useMemo } from 'react'
import { SvgIcons } from '@/components/SVGs';
import { ColorLogo, KnockoutLogo } from '@/components/SVGs/components';

const BrandLogo = ({ hasLogo, color, width }) => {

  const colorLogo = useMemo(() => {
    return hasLogo
      ? <SvgIcons.ColorLogo width={width} />
      : <ColorLogo  mult={1.5}/>
  }, [hasLogo, width])

  const knockoutLogo = useMemo(() => {
    return hasLogo
      ? <SvgIcons.KnockoutLogo width={width} />
      : <KnockoutLogo  mult={1.5}/>
  }, [hasLogo, width])

  return <div>{color ? colorLogo : knockoutLogo}</div>
}

export default BrandLogo
