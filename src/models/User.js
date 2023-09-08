import bcrypt from 'bcrypt';
import mongoose from 'mongoose';

import { AUTH } from '../constants';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  password: { type: String },
  location: String,
});

userSchema.pre('save', async function () {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, AUTH.SALT);
  }
});

const User = mongoose.model('User', userSchema);

export default User;
