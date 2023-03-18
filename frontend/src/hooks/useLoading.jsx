import { useMemo } from 'react';
import { useSelector } from 'react-redux';

const useLoading = () => {

	const { isLoading: l1 } = useSelector(state => state.settings);
	const { isLoading: l2 } = useSelector(state => state.userRoles);
	const { isLoading: l3 } = useSelector(state => state.userPermissions);
	const { isLoading: l4 } = useSelector(state => state.auth);
	const { isLoading: l5 } = useSelector(state => state.users);
	const { isLoading: l6 } = useSelector(state => state.contacts);
  const { isLoading: l7 } = useSelector(state => state.invoicedata);
  const { isLoading: l8 } = useSelector(state => state.customers);
  const { isLoading: l9 } = useSelector(state => state.businesses);

	const dataLoading = useMemo(() => {
		return [l1, l2, l3, l4, l5, l6, l7, l8, l9].includes(true)
	}, [l1, l2, l3, l4, l5, l6, l7, l8, l9])

	return { loading: dataLoading }
}

export default useLoading;
