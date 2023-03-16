import mongoose from 'mongoose';

import addressesSchema from '../subModels/addressesModel';
import nameSchema from '../subModels/nameModel';
import phoneSchema from '../subModels/phoneModel';
import socialSchema from '../subModels/socialModel';

const contactSchema = new mongoose.Schema(
  {
    name: nameSchema,
    fullName: String,
    address: addressesSchema,
    phones: [phoneSchema],
    role: String,
    userRole: {
      type: String,
      enum: [
        '',
        'admin',
        'accountOwner',
        'designatedperson',
        'developer',
        'designatedfinancial',
        'designatedattorney',
        'approvedvisitor',
      ],
    },
    businessID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Business',
    },
    businessRole: String,
    email: String,
    organization: String,
    website: String,
    avatarID: String,
    group: String,
    department: String,
    venID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Vendor',
    },
    social: [socialSchema],
    tags: [String],
    notes: String,
  },
  {
    timestamps: true,
  }
);

const Contact = mongoose.model('Contact', contactSchema, 'contacts');

export default Contact;
