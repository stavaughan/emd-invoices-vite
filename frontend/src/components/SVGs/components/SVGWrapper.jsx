import React from "react";

const SVGWrapper = ({
	width,
	height,
	viewBox,
	children,
	...props
}) => {

	const viewBoxHeight = ['100%', '100vh', '100vw', 'auto'].includes(height)
		? width : height;

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox={viewBox || `0 0 ${width || "24"} ${viewBoxHeight || "24"}`}
			width={width || "24"}
			height={height || "24"}
			{...props}
		>
			{children}
		</svg>
	)
};

export default SVGWrapper;
