import mongoose from 'mongoose';

import getters from '../../lib/getters';
import accountLoginSchema from './accountLoginModel';
import addressesSchema from './addressesModel';

const primaryOwnerSchema = new mongoose.Schema(
  {
    name: String,
    address: addressesSchema,
    phone: String,
    email: {
      type: String,
      set: getters.toLower,
    },
    login: accountLoginSchema,
  },
  {
    _id: false,
  }
);

export default primaryOwnerSchema;
