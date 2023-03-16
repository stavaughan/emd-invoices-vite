import mongoose from 'mongoose';

import getters from '../../lib/getters';
import socialSchema from '../subModels/socialModel';

const settingsSchema = new mongoose.Schema(
  {
    siteName: String,
    copyRight: {
      link: {
        type: String,
        required: true,
        set: getters.toLower,
      },
      label: {
        type: String,
        required: true,
      },
    },
    appType: {
      type: String,
      enum: [
        'guardianship-elder',
        'guardianship-minor',
        'organization',
        'personal',
        'business',
        'other',
      ],
    },
    siteBranding: {
      brand: {
        type: String,
        required: true,
      },
      logo: {
        type: String,
        required: true,
      },
    },
    social: [socialSchema],
    developer: {
      name: {
        type: String,
        required: true,
      },
      subName: String,
      url: {
        type: String,
        set: getters.toLower,
      },
    },
    siteData: Object,
  },
  {
    timestamps: true,
  }
);

const Settings = mongoose.model('Setting', settingsSchema, 'app-settings');

export default Settings;
