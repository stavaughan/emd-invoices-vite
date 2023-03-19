import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { DDLabelsSmall, DDLabelsLarge } from '@/components/Navigation/MainNavigation';
import { BrandComponent } from '@/components/Blocks';
import { useSelector } from 'react-redux'
import { DataContext, SettingsContext } from '@/contexts';
import { MenuIcon } from '@heroicons/react/outline';
import { useUserID } from '@/hooks';
import { HeaderLinks } from '.';
import clsx from 'clsx';

const SiteHeader = ({ loading }) => {

	const { screen } = useContext(SettingsContext);
  const { isSmall, isXXLarge } = screen;
	const { isNavCollapsed, setIsNavCollapsed } = useContext(DataContext);
	const { userID } = useUserID();
	const { settings } = useSelector(state => state.settings);

	const developer = settings?.developer;
	const branding = settings?.siteBranding;
  const brandName = branding?.brand || developer?.name;
  const brandMark = branding?.mark || developer?.mark;

	return (
		<header className="d-print-none">
			<nav
				className="navbar navbar-expand-md navbar-dark navbar-vibrant"
				aria-label="primary"
			>
				<div className="container-fluid">
          <div className={clsx(
						isSmall ? 'pb-1' : 'pb-2',
						isXXLarge ? 'ms-4' : 'ms-2'
					)}>
						<Link to="/">
							<BrandComponent
								baseName={brandName}
                mark={brandMark}
								isLoading={loading}
								small={isSmall}
							/>
						</Link>
					</div>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-target="#navbarCollapse"
						aria-controls="navbarCollapse"
						aria-expanded={!isNavCollapsed ? true : false}
						aria-label="Toggle navigation"
						onClick={() => setIsNavCollapsed(!isNavCollapsed)}
					>
						<MenuIcon className="navbar-toggler-icon" />
					</button>
					<div
						id="navbarCollapse"
						className={clsx(
							isNavCollapsed && 'collapse',
							'navbar-collapse',
							isXXLarge ? 'me-5' : 'me-3'
						)}
					>
						<ul className={clsx(
							'navbar-nav',
							isSmall && 'mt-4 ps-4 pb-3'
						)}>
							<DDLabelsLarge loading={loading} />
							<DDLabelsSmall />
							{userID && <HeaderLinks isLoading={loading} />}
						</ul>
					</div>
				</div>
			</nav>
		</header>
	)
};

export default SiteHeader;
