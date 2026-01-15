require('dotenv').config();
const connectDB = require('./config/database');
const User = require('./models/User');

async function resetAdmin() {
  await connectDB();

  // Delete existing admin
  await User.deleteOne({ username: 'Admin' });
  console.log('Old admin deleted');

  // Create new admin
  const adminUser = new User({
    username: 'Admin',
    email: 'admin@placegrad.com',
    password: 'Admin@123',
    role: 'admin',
    isEmailVerified: true,
    isActive: true,
    profile: { firstName: 'Admin', lastName: 'User' }
  });

  await adminUser.save();
  console.log('New admin created - Username: Admin, Password: Admin@123');
  process.exit(0);
}

resetAdmin().catch(err => {
  console.error('Error:', err);
  process.exit(1);
});
