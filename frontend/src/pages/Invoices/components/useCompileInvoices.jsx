import { useMemo, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useSnapShot } from './SnapShot';

const useCompileInvoices = () => {

  	// TODO: create a 'invoiceSettings' collection for user customizations as this is for a real world scenario from a private repot. Just don't have time to do it now.
	const customGroupName = 'design';

	const {
    services,
    invoices,
    filteredInvoices,
    selectedInvoice,
    isLoading: l1,
  } = useSelector(state => state.invoicedata)
	const { customers, isLoading: l2 } = useSelector(state => state.customers)
	const { businesses, isLoading: l3 } = useSelector(state => state.businesses);

  const loading = useMemo(() => [l1, l2, l3].includes(true), [l1, l2, l3])

	const { snapShotData } = useSnapShot(invoices);

	const year = useMemo(() => {
		const invoiceYearFirstInvoice = selectedInvoice?.dateCreated;
		const invoiceYear = new Date(invoiceYearFirstInvoice).getFullYear();
		const currentYear = new Date().getFullYear();
		const suffix = invoiceYear === currentYear ? ' YTD' : '';
		return invoiceYear + suffix;
	}, [selectedInvoice?.dateCreated]);

	const initTitle = useMemo(() => `Invoices ${year}`, [year]);

	const [tableTitle, setTableTitle] = useState('');

	const titleTest = useMemo(() => {
		const filter1words = ['Overdue', 'by', 'not', 'Sent', 'Partially', 'Paid', 'results:'];
		return [
			filter1words.includes(tableTitle.split(' ')[1]),
			tableTitle.split(' ')[2] === 'group:',
		]
	}, [tableTitle])

	useEffect(() => {
		if (!titleTest.includes(true) && !!selectedInvoice?.dateCreated) {
			setTableTitle(initTitle);
		}
	}, [initTitle, titleTest, selectedInvoice?.dateCreated]);

	const hasData = [filteredInvoices, customers, services, businesses].every(data => data?.length);

	return {
		loading,
		initTitle,
		tableTitle,
		snapShotData,
		groupDisplayed: titleTest[1],
		selectedInvoice,
		filteredInvoices,
    customGroupName,
		services,
		customers,
		businesses,
		hasData,
		setTableTitle
	}
}

export default useCompileInvoices
