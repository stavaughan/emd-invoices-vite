import mongoose from 'mongoose';

import getters from '../../lib/getters';
import socialSchema from '../subModels/socialModel';

const settingsSchema = new mongoose.Schema(
  {
    siteName: String,
    copyRight: {
      link: {
        type: String,
        set: getters.toLower,
      },
      label: String,
    },
    siteBranding: {
      brand: String,
      mark: String,
      logo: String,
    },
    social: [socialSchema],
    developer: {
      name: String,
      mark: String,
      subName: String,
      url: {
        type: String,
        set: getters.toLower,
      },
    },
    siteInfo: {
      name: String,
      siteName: String,
      description: String,
      businessName: String,
      streetAddress: String,
      city: String,
      state: String,
      zipCode: String,
      phone: String,
      email: String,
      website: String,
      coffeeLink: String,
    },
  },
  {
    timestamps: true,
  }
);

const Settings = mongoose.model('Setting', settingsSchema, 'app-settings');

export default Settings;
