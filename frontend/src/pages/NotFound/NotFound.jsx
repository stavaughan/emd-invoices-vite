import clsx from 'clsx';
import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { CenteredBrand } from '@/components/Blocks/Brand';
import { SettingsContext } from '@/contexts';
import { SvgIcons } from '@/components/SVGs';
import { AlertPage, Headerless } from '@/Layout';
import ErrorBoundary from '@/state/ErrorBoundary';

const NotFound = () => {

	const { settings, isLoading } = useSelector(state => state.settings);

	const navigate = useNavigate();

	const { screen } = useContext(SettingsContext);

	const onClickHandler = (e) => {
		e.preventDefault()
		navigate('/', { replace: true })
	};

	return (
		<Headerless
			settings={settings}
			isLoading={isLoading}
		>
			<ErrorBoundary>
				<AlertPage
					title="404 Page Not Found"
					label="Return Home"
					BackGroundSVG={SvgIcons.NotFoundSVG}
					BrandBlock={(
						<div className={clsx(
							'container position-relative',
							screen?.isSmall && 'mt-2'
						)}>
							<CenteredBrand
								loading={isLoading}
								isSmall={screen?.isSmall}
								settings={settings}
							/>
						</div>
					)}
					onClickHandler={onClickHandler}
				/>
			</ErrorBoundary>
		</Headerless>
	);
};

export default NotFound;
