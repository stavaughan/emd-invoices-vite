import { SvgIcons } from '@/components/SVGs'
import clsx from 'clsx';

const IncreaseDecrease = ({ direction, children }) => {

	return (
		<span className="d-flex align-items-center">
			<span className={clsx(
				'svg-icon svg-icon-3 me-2',
				`svg-icon-${direction === 'up' ? 'success' : 'danger'}`
			)}>
				{direction === 'up'
					? <SvgIcons.ArrowUp />
					: <SvgIcons.ArrowDown />}
			</span>
			{children}
		</span>
	)
}

export default IncreaseDecrease
