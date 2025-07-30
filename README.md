# BEM Chatting App

Platform komunikasi khusus untuk anak-anak BEM — biar koordinasi kegiatan, rapat divisi, atau sekadar diskusi jadi makin lancar dan seru. ✌️

## Prerequisites

1. **MongoDB**: You need MongoDB running on your system. You can:
   - Install MongoDB locally: https://docs.mongodb.com/manual/installation/
   - Use MongoDB Atlas (cloud): https://www.mongodb.com/atlas
   - Use Docker: `docker run -d -p 27017:27017 --name mongodb mongo`

## Setup Instructions

1. **Install Dependencies**
   ```bash
   pnpm install
   ```

2. **Environment Variables**
   The `.env.local` file is already created with default values:
   ```
   MONGODB_URI=mongodb://localhost:27017/bem-chatting
   JWT_SECRET=your-super-secret-jwt-key-here-change-this-in-production
   NEXTAUTH_SECRET=your-nextauth-secret-here
   NEXTAUTH_URL=http://localhost:3000
   ```

3. **Start MongoDB** (if running locally)
   ```bash
   # On Windows
   net start MongoDB
   
   # On macOS/Linux
   sudo systemctl start mongod
   
   # Or using Docker
   docker start mongodb
   ```

4. **Run Development Server**
   ```bash
   pnpm dev
   ```

## Features Implemented

### Level 1 ✅ - Welcome to BEM Chatting Platform! (15 pts)
- ✅ Eye-catching Homepage
- ✅ App Name: "BEM Chatting"
- ✅ Description and features
- ✅ Hero Section
- ✅ Features showcase (Instan & Cepat, Terhubung Sesama, Sharing Makin Seru)
- ✅ Navigation Bar

### Level 2 ✅ - Hello from the other side! (20 pts)
- ✅ Messaging page with real-time interface
- ✅ React hooks implementation (useState, useEffect, useRef)
- ✅ Functional message sending interface

### Level 3 ✅ - Let's get everything dynamic! (35 pts)
- ✅ MongoDB integration with Mongoose
- ✅ CRUD operations for messages and users
- ✅ Basic Authentication with JWT
- ✅ Password hashing with bcrypt
- ✅ MVC pattern implementation:
  - **Models**: User and Message models in `/src/models/`
  - **Views**: React components in `/src/app/` and `/src/components/`
  - **Controllers**: API routes in `/src/app/api/`

### Level 4 ✅ - It's working!!! (20 pts)
- ✅ Frontend-Backend integration
- ✅ Authentication flow (register, login, logout)
- ✅ State management with React Context
- ✅ Local storage for session persistence
- ✅ User flow: Homepage → Register/Login → Messages

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/logout` - Logout user

### Users
- `GET /api/users` - Get all users (authenticated)

### Messages
- `GET /api/messages?receiver=userId` - Get messages between users
- `POST /api/messages` - Send new message
- `GET /api/messages/[id]` - Get specific message
- `PUT /api/messages/[id]` - Update message
- `DELETE /api/messages/[id]` - Delete message

## Database Models

### User Model
```javascript
{
  name: String (required),
  email: String (required, unique),
  password: String (required, hashed),
  avatar: String,
  isOnline: Boolean,
  lastSeen: Date,
  timestamps: true
}
```

### Message Model
```javascript
{
  sender: ObjectId (ref: User),
  receiver: ObjectId (ref: User),
  content: String (required),
  messageType: String (text/image/file),
  isRead: Boolean,
  readAt: Date,
  timestamps: true
}
```

## Testing the Application

1. **Register Users**: Create multiple accounts from `/register`
2. **Login**: Access `/login` with your credentials
3. **Send Messages**: Go to `/messages` and start chatting
4. **Features**:
   - Real-time messaging interface
   - User online status
   - Message history
   - Responsive design
   - Authentication persistence

## Technology Stack

- **Frontend**: Next.js 15, React 19, TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes, Node.js
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT with bcryptjs
- **Icons**: Lucide React
- **State Management**: React Context API
- **Storage**: localStorage for session persistence

## Project Structure

```
src/
├── app/
│   ├── api/
│   │   ├── auth/
│   │   │   ├── login/route.ts
│   │   │   ├── register/route.ts
│   │   │   └── logout/route.ts
│   │   ├── messages/
│   │   │   ├── route.ts
│   │   │   └── [id]/route.ts
│   │   └── users/route.ts
│   ├── login/page.tsx
│   ├── register/page.tsx
│   ├── messages/page.tsx
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   └── Navbar.tsx
├── contexts/
│   └── AuthContext.tsx
├── lib/
│   ├── dbConnect.ts
│   └── auth.ts
├── models/
│   ├── User.ts
│   └── Message.ts
└── types/
    └── global.d.ts
```

## Troubleshooting

1. **MongoDB Connection Error**: 
   - Make sure MongoDB is running
   - Check MONGODB_URI in .env.local

2. **JWT Errors**:
   - Ensure JWT_SECRET is set in .env.local
   - Clear localStorage and re-login

3. **Build Errors**:
   - Run `pnpm install` to ensure all dependencies are installed
   - Check for TypeScript errors
