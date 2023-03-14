import React from 'react'
import { useNavigate, useLocation, Outlet } from 'react-router-dom';
import { DataProvider } from '@/contexts/data-context';
import { DatesProvider } from '@/contexts/dates-context';

const DataLayer = ({ user }) => {

	const location = useLocation();
	const navigate = useNavigate();

	if(!user?._id) {
		navigate('/login', { state: { from: location } })
	}

	return (
		<DataProvider>
			<DatesProvider>
				<Outlet />
			</DatesProvider>
		</DataProvider>
	)
}

export default DataLayer
