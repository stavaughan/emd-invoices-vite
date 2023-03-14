import mongoose from 'mongoose';

import addressesSchema from '../subModels/addressesModel';
import nameSchema from '../subModels/nameModel';

const customerSchema = new mongoose.Schema(
  {
    clientID: String,
    contactIDs: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Contact',
      },
    ],
    busPfx: String,
    businessName: String,
    businessLogo: String,
    contactName: nameSchema,
    name: nameSchema,
    phone: String,
    email: String,
    address: addressesSchema,
    avatarID: String,
  },
  {
    timestamps: true,
  }
);

const Customer = mongoose.model('Customer', customerSchema, 'customers');

export default Customer;
