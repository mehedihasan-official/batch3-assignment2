import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL as string);
    console.log('🟢 MongoDB connected');
  } catch (error) {
    console.error('🔴 MongoDB connection failed');
    process.exit(1);
  }
};

export default connectDB;
