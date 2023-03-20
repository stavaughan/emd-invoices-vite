import clsx from 'clsx';
import { IconWrapper } from '.';

import styles from './PageTitle.module.scss';

const TitleIcon = ({ icon }) => {

	return (
		<div className="avatar-lg position-relative mt-2">
			<span className={clsx(
				styles['header--avatar-img'],
				'rounded position-absolute top-50 start-0 translate-middle-y'
			)}>
				<IconWrapper>
          <rect
            fill="var(--teal-200)"
            opacity=".3"
            width="18"
            height="18"
            rx="2"
            //transform="translate(12,0) rotate(45)"
          />
          {icon}
				</IconWrapper>
			</span>
		</div>
	)
}

export default TitleIcon
