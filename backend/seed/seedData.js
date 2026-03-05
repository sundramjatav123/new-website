const dotenv = require('dotenv');
const bcrypt = require('bcryptjs');
const connectDB = require('../config/db');
const Admin = require('../models/Admin');

dotenv.config();

async function seed() {
  await connectDB();
  const hashed = await bcrypt.hash('admin123', 10);
  await Admin.findOneAndUpdate(
    { email: 'admin@alphawebstudio.com' },
    { email: 'admin@alphawebstudio.com', password: hashed },
    { upsert: true }
  );
  console.log('Admin seeded');
  process.exit(0);
}

seed();
