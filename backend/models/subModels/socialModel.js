import mongoose from 'mongoose';

const socialSchema = new mongoose.Schema({
  media: String,
  url: String,
  profileName: String,
  accountLink: String,
});

export default socialSchema;
