import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { SvgIcons } from '@/components/SVGs';
import { AlertPage, Headerless } from '@/Layout';
import ErrorBoundary from '@/state/ErrorBoundary';

const Unauthorized = () => {

	const { settings, isLoading } = useSelector(state => state.setting);

	const navigate = useNavigate();

	useEffect(() => {
		window.onbeforeunload = () => {
			navigate('/');
		}
		return () => {
			window.onbeforeunload = null;
		}
	}, [navigate]);

	return (
		<Headerless
			settings={settings}
			isLoading={isLoading}
		>
			<ErrorBoundary>
				<AlertPage
					title="Unauthorized Access."
					label="Go Back"
					BackGroundSVG={SvgIcons.AccessDeniedIcon}
					onClickHandler={() => navigate('/')}
				/>
			</ErrorBoundary>
		</Headerless>
	)
}

export default Unauthorized
