import React from 'react';

const IconWrapper = (props) => (
	<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
	>
		<defs>
			<linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
				<stop
					offset="0%"
					style={{
						stopColor: 'var(--cyan-300)',
						stopOpacity: '1'
					}}
				/>
				<stop
					offset="100%"
					style={{
						stopColor: 'var(--indigo-700)',
						stopOpacity: '1'
					}}
				/>
			</linearGradient>
		</defs>
		<g
			fill="none"
			fillRule="evenodd"
		>
			{props.children}
		</g>
	</svg>
);

export default IconWrapper;
