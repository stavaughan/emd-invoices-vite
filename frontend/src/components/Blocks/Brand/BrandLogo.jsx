import { ColorLogo, KnockoutLogo } from '@/components/SVGs/components';

const BrandLogo = ({ color, width }) => {
  return <div>{color ? <ColorLogo width={width} /> : <KnockoutLogo width={width} />}</div>
}

export default BrandLogo
