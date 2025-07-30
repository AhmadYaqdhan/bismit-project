import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import User from '@/models/User';

export async function GET() {
  try {
    console.log('Testing MongoDB connection...');
    await dbConnect();
    console.log('MongoDB connected successfully');
    
    // Test basic operations
    const userCount = await User.countDocuments();
    console.log(`Current user count: ${userCount}`);
    
    return NextResponse.json({
      status: 'success',
      message: 'MongoDB connection successful',
      userCount,
      timestamp: new Date().toISOString()
    }, { status: 200 });

  } catch (error: any) {
    console.error('MongoDB connection error:', error);
    return NextResponse.json({
      status: 'error',
      message: 'MongoDB connection failed',
      error: error.message,
      timestamp: new Date().toISOString()
    }, { status: 500 });
  }
}
