import React, { useCallback } from 'react';
import { BusinessesContainer } from './components';
import { InvoicesProvider } from '@/contexts/invoices-context';
import { StartingPointsPage } from '@/Layout';
import { useSelector } from 'react-redux';
import { useItemDelete, useItemUpdate } from '@/hooks';
import { usePagination } from '@/components/Navigation/Pagination';

const Businesses = () => {

	const { businesses, isLoading } = useSelector(state => state.businesses);

	const { setDeleteId, deleteId } = useItemDelete('businesses')
	const { setID, setReqBody, setReady } = useItemUpdate('businesses');

	const setDataUpdate = useCallback((id, reqBody) => {
		setID(id);
		setReqBody(reqBody);
		setReady(true);
	}, [setID, setReqBody, setReady]);

	const hasData = businesses?.length > 0;

	const { currentPage, bodyFooter, countFooter } = usePagination({
		data: businesses,
		itemLabel: 'item',
		itemsPerPage: 20
	});

	return (
		<InvoicesProvider>
			<StartingPointsPage
				containerProps={{ className: 'py-3 px-xl-3' }}
				dataKey="businesses"
				noPageData={!isLoading && !hasData}
			>
				<BusinessesContainer
					businesses={currentPage?.items}
					loading={isLoading}
					deleteId={deleteId}
					setDataUpdate={setDataUpdate}
					setDeleteId={setDeleteId}
					bodyFooter={bodyFooter}
					pageCountInfo={countFooter}
				/>
			</StartingPointsPage>
		</InvoicesProvider>
	)
};

export default Businesses;
