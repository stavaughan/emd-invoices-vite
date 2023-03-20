import clsx from 'clsx';
import { useMobile } from '@/hooks';

import Classes from './GradientText.module.css';

const GradientTitleBlock = ({ title, gradient }) => {

	const { isXSmall } = useMobile();

	const gradientClass = Classes['title-gradient'];
	const regularClass = clsx(isXSmall ? 'h2' : 'h1', 'text-primary font-bold');

	return (
		<h1
			className={gradient ? gradientClass : regularClass}
			{...!gradient && { style: { letterSpacing: isXSmall ? '.089rem' : '.095rem' } }}
		>
			<span {...gradient && { className: Classes['text-gradient--title'] }}>
          {title}
			</span>
		</h1>
	)
}

export default GradientTitleBlock
