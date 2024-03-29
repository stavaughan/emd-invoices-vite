import mongoose from 'mongoose';

import addressSchema from './addressModel';

const addressesSchema = new mongoose.Schema(
  {
    physical: addressSchema,
    sameAsPhysical: {
      type: Boolean,
      default: true,
    },
    mailing: addressSchema,
  },
  {
    _id: false,
  }
);

export default addressesSchema;
