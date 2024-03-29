import { AlertBanner } from '@/components/Alerts';
import { Loader } from '@/components/Loader';
import { ModalPrintWrapper } from '@/components/Modals/components';
import { InvoicesProvider } from '@/contexts/invoices-context';
import { SiteData } from '@/data';
import { Suspense, useMemo, useRef } from 'react';
import { useSelector } from 'react-redux';
import { ComponentToPrint } from '@/services';
import { Global } from '@/globals/js';
import { InvoicesGroup } from '..';
import { useMobile } from '@/hooks';

const DisplayGroupModal = ({ groupName = 'invoice' }) => {

	const { isXSmall } = useMobile();

	const printRef = useRef(null);

	const { filteredInvoices } = useSelector(state => state.invoicedata)

	const firstInvoice = filteredInvoices[0];

	const documentTitle = useMemo(() => {
		return `${groupName}_group_${firstInvoice?.groupID}`;
	}, [firstInvoice?.groupID, groupName])

	return (
		<ModalPrintWrapper
			modalID={SiteData.modalIDs.invoicesGroup}
			modalName={SiteData.modalIDs.invoicesGroup}
			modalTitle={`${Global.upperCaseFirst(groupName)} Group ${firstInvoice?.groupID}`}
		>
			{filteredInvoices?.length ? (
				<Suspense fallback={<Loader />}>
					<InvoicesProvider>
						<ComponentToPrint
							printRef={printRef}
							documentTitle={documentTitle}
							top={isXSmall ? '-.5%' : '.8%'}
							right={isXSmall ? '2%' : '5%'}
						>
							<InvoicesGroup
								printRef={printRef}
								invoices={filteredInvoices}
                groupName={groupName}
								invoice={firstInvoice}
							/>
						</ComponentToPrint>
					</InvoicesProvider>
				</Suspense>
			) : (
				<AlertBanner>
					No designs found with group# {firstInvoice?.groupID}...
				</AlertBanner>
			)}
		</ModalPrintWrapper>
	)
}

export default DisplayGroupModal
