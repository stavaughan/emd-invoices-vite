import React, { useCallback, useState, useMemo } from 'react';
import { ProductsContainer } from './components';
import { InvoicesProvider } from '@/contexts/invoices-context';
import { StartingPointsPage } from '@/Layout';
import { useSelector } from 'react-redux';
import { useItemDelete, useItemUpdate } from '@/hooks';
import { usePagination } from '@/components/Navigation/Pagination';

const Products = () => {

	const [selSID, setSelSID] = useState('');

	const { services, isLoading } = useSelector(state => state.invoicedata);

	const { setDeleteId, deleteId } = useItemDelete('services')
	const { setID, setReqBody, setReady } = useItemUpdate('services');

	const filteredData = useMemo(() => {
		if (selSID) {
			const filtered = [...services].filter(item => item._id === selSID);
			return filtered;
		} else {
			return [...services];
		}
	}, [services, selSID]);

	const setDataUpdate = useCallback((id, reqBody) => {
		setID(id);
		setReqBody(reqBody);
		setReady(true);
	}, [setID, setReqBody, setReady]);

	const hasData = services?.length > 0;

	const { currentPage, bodyFooter, countFooter } = usePagination({
		data: filteredData,
		itemLabel: 'item',
		itemsPerPage: 20
	});

	return (
		<InvoicesProvider>
			<StartingPointsPage
				dataKey="products"
				noPageData={!isLoading && !hasData}
			>
				<ProductsContainer
					services={currentPage?.items}
					loading={isLoading}
					deleteId={deleteId}
					setDataUpdate={setDataUpdate}
					setDeleteId={setDeleteId}
					bodyFooter={bodyFooter}
					pageCountInfo={countFooter}
					setSelSID={setSelSID}
					selSID={selSID}
				/>
			</StartingPointsPage>
		</InvoicesProvider>
	)
};

export default Products;
