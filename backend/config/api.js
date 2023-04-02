import Admin from '../models/app/adminModel';
import Contact from '../models/app/contactModel';
import Esec from '../models/app/esecModel';
import Settings from '../models/app/settingsModel';
import User from '../models/app/userModel';
import UserPermissions from '../models/app/userPermissionsModel';
import UserRoles from '../models/app/userRolesModel';
import Business from '../models/invoices/businessModel';
import Customer from '../models/invoices/customerModel';
import Invoice from '../models/invoices/invoiceModel';
import Service from '../models/invoices/serviceModel';

const api = [
  {
    endpoint: 'app-settings',
    test: 'siteName',
    Model: Settings,
  },
  {
    endpoint: 'contacts',
    test: 'fullName',
    Model: Contact,
  },
  {
    endpoint: 'users',
    test: 'email',
    Model: User,
  },
  {
    endpoint: 'businesses',
    test: 'email',
    Model: Business,
  },
  {
    endpoint: 'customers',
    test: 'email',
    Model: Customer,
  },
  {
    endpoint: 'invoices',
    test: 'number',
    Model: Invoice,
  },
  {
    endpoint: 'invoices/many',
    test: 'number',
    Model: Invoice,
  },
  {
    endpoint: 'services',
    test: '_sID',
    Model: Service,
  },
  {
    endpoint: 'admin-store',
    test: 'action',
    Model: Admin,
  },
  {
    endpoint: 'user-roles',
    test: 'roleID',
    Model: UserRoles,
  },
  {
    endpoint: 'user-permissions',
    test: 'pid',
    Model: UserPermissions,
  },
  {
    endpoint: 'esec',
    test: 'dataString',
    Model: Esec,
  },
];

export default api;
