import mongoose from 'mongoose';

import getters from '../../lib/getters';
import addressesSchema from './addressesModel';
import fileSchema from './fileModel';
import nameSchema from './nameModel';
import socialSchema from './socialModel';

const spouseSchema = new mongoose.Schema(
  {
    status: {
      type: String,
      enum: ['deceased', 'living', 'incapacitated'],
    },
    name: nameSchema,
    address: addressesSchema,
    email: {
      type: String,
      set: getters.toLower,
    },
    phone: String,
    information: {
      SSN: String,
      DOB: String,
      DOD: String,
    },
    files: [fileSchema],
    socialAccounts: [socialSchema],
  },
  {
    timestamps: true,
    _id: false,
  }
);

export default spouseSchema;
