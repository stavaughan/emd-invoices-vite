import mongoose from 'mongoose';

import accountLoginSchema from './accountLoginModel';

const socialSchema = new mongoose.Schema({
  media: String,
  url: String,
  profileName: String,
  accountLink: String,
  login: accountLoginSchema,
});

export default socialSchema;
