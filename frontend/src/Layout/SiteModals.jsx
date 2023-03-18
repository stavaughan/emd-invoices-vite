import {
  NewCustomerForm,
  NewBusinessForm,
  NewServiceForm,
  BulkInvoiceForm,
  NewInvoiceForm,
  UpdateModals
} from '@/pages/Invoices/components/Forms';
import { ImageCropModal } from '@/components/Gallery/ImageTransformation';
import { NewUserRoleForm } from '@/pages/Admin/forms';

const SiteModals = () => {

  return (
    <>
      <NewInvoiceForm />
      <BulkInvoiceForm />
      <NewCustomerForm />
      <NewBusinessForm />
      <NewServiceForm />
      <ImageCropModal />
      <NewUserRoleForm />
      <UpdateModals />
    </>
  )
}

export default SiteModals
