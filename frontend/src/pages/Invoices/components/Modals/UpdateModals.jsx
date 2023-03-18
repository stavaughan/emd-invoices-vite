import React from 'react'
import { SentStatusForm, BulkSentStatus } from '../Forms';
import { InvoicesProvider } from '@/contexts/invoices-context';
import { AddBulkPaymentModal, AddPaymentModal, InvoicePrintModal } from '.';
import { SiteData } from '@/data';

const UpdateModals = () => {

  const { modalIDs } = SiteData;

  return (
    <InvoicesProvider>
      <SentStatusForm modalID={modalIDs.invoiceSentStat} />
      <AddBulkPaymentModal modalID={modalIDs.bulkInvoicePayments} />
      <InvoicePrintModal modalID={modalIDs.invoicePrint} />
      <AddPaymentModal modalID={modalIDs.invoicePayment} />
      <BulkSentStatus modalID={modalIDs.bulkSentStatus} />
    </InvoicesProvider>
  )
}

export default UpdateModals
