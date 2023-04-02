import React from 'react'

const KnockoutLogo = ({ width = 55 }) => {

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
			viewBox="0 0 510 510"
			width={width}
			height="100%"
      aria-hidden="true"
    >
        <rect x="10" y="50" rx="50" ry="50" width="440" height="440" stroke="#e2e2e2" fill="transparent" strokeWidth="20"/>
				<rect x="210" y="-120" rx="40" ry="40" width="290" height="290" stroke="#fff" fill="transparent" strokeWidth="23" transform="rotate(45)"/>
				<circle cx="235" cy="270" r="100" stroke="#c3c3c3" fill="transparent" strokeWidth="20"/>
    </svg>
  )
}

export default KnockoutLogo
