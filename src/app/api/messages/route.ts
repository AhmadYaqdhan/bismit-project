import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import Message from '@/models/Message';
import User from '@/models/User';
import { verifyToken, getTokenFromHeader } from '@/lib/auth';

// GET - Get all messages between two users
export async function GET(request: NextRequest) {
  try {
    await dbConnect();
    
    const authHeader = request.headers.get('authorization');
    const token = getTokenFromHeader(authHeader || undefined);

    if (!token) {
      return NextResponse.json(
        { error: 'No token provided' },
        { status: 401 }
      );
    }

    const decoded = verifyToken(token);
    if (!decoded) {
      return NextResponse.json(
        { error: 'Invalid token' },
        { status: 401 }
      );
    }

    const { searchParams } = new URL(request.url);
    const receiverId = searchParams.get('receiver');
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '50');

    if (!receiverId) {
      return NextResponse.json(
        { error: 'Receiver ID is required' },
        { status: 400 }
      );
    }

    // Get messages between sender and receiver
    const messages = await Message.find({
      $or: [
        { sender: decoded.userId, receiver: receiverId },
        { sender: receiverId, receiver: decoded.userId }
      ]
    })
    .populate('sender', 'name email avatar')
    .populate('receiver', 'name email avatar')
    .sort({ createdAt: -1 })
    .limit(limit)
    .skip((page - 1) * limit);

    // Mark messages as read
    await Message.updateMany(
      {
        sender: receiverId,
        receiver: decoded.userId,
        isRead: false
      },
      {
        isRead: true,
        readAt: new Date()
      }
    );

    return NextResponse.json({
      messages: messages.reverse(), // Reverse to show oldest first
      page,
      limit
    }, { status: 200 });

  } catch (error) {
    console.error('Get messages error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// POST - Send a new message
export async function POST(request: NextRequest) {
  try {
    await dbConnect();
    
    const authHeader = request.headers.get('authorization');
    const token = getTokenFromHeader(authHeader || undefined);

    if (!token) {
      return NextResponse.json(
        { error: 'No token provided' },
        { status: 401 }
      );
    }

    const decoded = verifyToken(token);
    if (!decoded) {
      return NextResponse.json(
        { error: 'Invalid token' },
        { status: 401 }
      );
    }

    const { receiver, content, messageType = 'text' } = await request.json();

    // Validation
    if (!receiver || !content) {
      return NextResponse.json(
        { error: 'Receiver and content are required' },
        { status: 400 }
      );
    }

    // Check if receiver exists
    const receiverUser = await User.findById(receiver);
    if (!receiverUser) {
      return NextResponse.json(
        { error: 'Receiver not found' },
        { status: 404 }
      );
    }

    // Create message
    const message = await Message.create({
      sender: decoded.userId,
      receiver,
      content,
      messageType
    });

    // Populate sender and receiver data
    const populatedMessage = await Message.findById(message._id)
      .populate('sender', 'name email avatar')
      .populate('receiver', 'name email avatar');

    return NextResponse.json({
      message: 'Message sent successfully',
      data: populatedMessage
    }, { status: 201 });

  } catch (error) {
    console.error('Send message error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
