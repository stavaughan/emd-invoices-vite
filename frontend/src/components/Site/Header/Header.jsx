import React, { useContext } from 'react';
import { BrandComponent } from '@/components/Blocks';
import { SettingsContext } from '@/contexts';
import clsx from 'clsx';

const Header = ({ settings, isLoading }) => {

	const { isSmall } = useContext(SettingsContext).screen;

	const developer = settings?.developer;
	const siteBranding = settings?.siteBranding;

	return (
		<header className="d-print-none">
			<nav
				className="navbar navbar-expand-md navbar-dark navbar-vibrant"
				aria-label="primary"
			>
				<div className="container-fluid">
					<div className={clsx(isSmall ? 'pb-1' : 'ms-5 pb-2')}>
						<BrandComponent
							baseName={developer?.name}
							mark={siteBranding?.mark}
							isLoading={isLoading}
							small={isSmall}
						/>
					</div>
				</div>
			</nav>
		</header>
	)
};

export default Header;
