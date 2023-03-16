import { FontAwesomeIcon as FAIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import TitleDescriptionLarge from './TitleDescriptionLarge';
import { useMobile } from '@/hooks';

import Classes from './SectionIcon.module.css';

const SectionIconTitle = ({
	icon,
	title,
	description,
	iconColor,
	titleClass,
	subTitleClass,
	stylesTitle,
	stylesSubTitle
}) => {

	const { isXSmall } = useMobile();

	return (
		<div className="d-flex justify-content-start align-items-center mb-4 gap-3">
			{icon && (
				<div className={clsx(
					Classes['icon-circle'],
					'flex-shrink-0',
					iconColor
				)}>
					<FAIcon icon={icon} />
				</div>
			)}
			<TitleDescriptionLarge
				title={title}
				description={description}
				titleClass={titleClass}
				subTitleClass={subTitleClass}
				stylesTitle={stylesTitle}
				stylesSubTitle={stylesSubTitle}
        isXSmall={isXSmall}
			/>
		</div>
	)
}

export default SectionIconTitle
