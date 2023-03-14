import React from 'react'
import { SvgIcons } from '@/components/SVGs'

const BrandLogo = ({ color, width }) => {

	return (
		<div>
			{color ? (
				<SvgIcons.ColorLogo width={width} />
			) : (
				<SvgIcons.KnockoutLogo width={width} />
			)}
		</div>
	)
}

export default BrandLogo
