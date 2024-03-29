import * as React from 'react';
import { protectedRoutes, RequireAuth } from '@/ProtectedRoutes';
import { Routes, Route } from 'react-router-dom';
import { SelectedPage, DataLayer } from '@/Layout';
import { useSelector } from 'react-redux';
import { SettingsContextProvider } from '@/contexts/settings-context';
import { useLoadData } from '@/hooks';
import { faIconList } from '@/theme';
import Pages from '@/pages';
import { Loader } from '@/components/Loader';
import {
	Login,
	ForgotPassword,
	ResetPassword,
	RequestAccess,
	ActivateAccount,
	VerifyAccount,
	SetupNewAccount
} from '@/pages/Login';

import 'react-toastify/dist/ReactToastify.css';

faIconList();

const App = () => {

	const { isLoading } = useLoadData({ dataName: 'settings' });
  const { user } = useSelector(state => state.auth);

  if (isLoading) {
    return <Loader />
  }

	return (
		<SettingsContextProvider>
      <div className="hide">Site loaded...</div>
			<Routes>
				<Route path="/" element={<DataLayer user={user} />}>
					<Route index element={<SelectedPage pageID="home" />} />
					{protectedRoutes.map(page => {
						const subID = page?.subPath ? `/:${page.subPath}` : '';
						return (
							<Route
								key={page.pid}
								element={(
									<RequireAuth
										allowedRoles={page?.roles}
										access={user?.access}
									/>
								)}>
								<Route
									path={`${user?._id}/${page.path + subID}`}
									element={<SelectedPage pageID={page.pid} />}
								/>
							</Route>
						)
					})}
          <Route path='/credits' element={<SelectedPage pageID="credits" />} />
					<Route path="unauthorized" element={<Pages.Unauthorized />} />
          {/* <Route path="api" element={<Pages.Unauthorized />} />
				  <Route path='*' element={<Pages.NotFound />} /> */}
				</Route>
				<Route path="/login" element={<Login />} />
				<Route path="/activate" element={<ActivateAccount />} />
				<Route path="/forgot-password" element={<ForgotPassword />} />
				<Route path="/request-access" element={<RequestAccess />} />
				<Route path="/verify" element={<VerifyAccount />} />
				<Route path="/reset" element={<ResetPassword />} />
				<Route path="/account-setup" element={<SetupNewAccount />} />
				<Route path='/legal/terms-of-use' element={<Pages.TermsOfService />} />
				<Route path='/legal/privacy-policy' element={<Pages.PrivacyPolicy />} />
        <Route path="/api" element={<Pages.Unauthorized />} />
				<Route path='/*' element={<Pages.NotFound />} />

			</Routes>
		</SettingsContextProvider>
	);
};

export default App;
