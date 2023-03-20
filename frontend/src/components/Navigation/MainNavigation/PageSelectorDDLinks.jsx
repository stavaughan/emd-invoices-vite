import { useContext, useMemo } from 'react';
import { NavLink } from 'react-router-dom';
import { DataContext } from '@/contexts';
import { useSelector } from 'react-redux';
import { useNavLogic } from '..';

const PageSelectorDDLinks = ({ small, option }) => {

	const { allowedPIDs, allowedPage } = useNavLogic();

	const { setIsNavCollapsed } = useContext(DataContext);
  const { user } = useSelector(state => state.auth);
  const userID = user?.userID || '';
  const access = user?.access || '';

	const pids = useMemo(() => allowedPIDs(option.label, access), [option.label, access, allowedPIDs]);

	if (!pids?.length) {
		return null
	}

	return (
		<ul
			className={`dropdown-menu dropdown-menu-end text-sm font-medium${small ? ' show' : ''}`}
			id={`${option._id}-${small ? 'sm' : 'lg'}`}
		>
			{pids.map(pid => {
				const page = allowedPage(pid);
				return (
					<li key={page?._id}>
						<NavLink
							className="dropdown-item"
							role="button"
							onClick={() => setIsNavCollapsed(true)}
							to={userID ? `/${userID}/${page?.path}` : '/'}
						>
							{page?.label}
						</NavLink>
					</li>
				);
			})}
		</ul>
	)
};

export default PageSelectorDDLinks;
