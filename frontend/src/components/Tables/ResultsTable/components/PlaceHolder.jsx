import React from 'react'
import { SvgIcons } from '@/components/SVGs'
import { PlaceholderImage } from ".";

const PlaceHolder = ({ fileType }) => {
	return (
		<>
			{fileType === "pdf" ? (
				<SvgIcons.PdfFile />
			) : (
				<PlaceholderImage
					width="5.46rem"
					height="5.46rem"
				/>
			)}
		</>
	)
}

export default PlaceHolder
