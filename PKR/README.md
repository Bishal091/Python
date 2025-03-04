# Poker Game Platform

A real-time multiplayer poker game platform built with Next.js, NestJS, and WebSocket.

## Tech Stack

### Frontend
- Next.js (React framework)
- Tailwind CSS
- WebSocket (Socket.IO)
- Zustand (State Management)
- NextAuth.js (Authentication)

### Backend
- NestJS
- WebSocket (Socket.IO)
- Redis
- PostgreSQL
- Prisma ORM

## Project Structure

```
poker-game-platform/
├── frontend/           # Next.js frontend application
├── backend/           # NestJS backend application
├── docker/            # Docker configuration files
└── docs/             # Project documentation
```

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- PostgreSQL
- Redis
- Docker (optional)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd poker-game-platform
```

2. Install dependencies:
```bash
npm install
cd frontend && npm install
cd ../backend && npm install
```

3. Set up environment variables:
```bash
# Frontend (.env.local)
cp frontend/.env.example frontend/.env.local

# Backend (.env)
cp backend/.env.example backend/.env
```

4. Start the development servers:
```bash
npm run dev
```

The application will be available at:
- Frontend: http://localhost:3000
- Backend: http://localhost:4000

## Features

- Real-time multiplayer poker gameplay
- User authentication and authorization
- Virtual currency system
- Leaderboards and statistics
- Responsive design
- Secure WebSocket communication

## Development

### Frontend Development
```bash
cd frontend
npm run dev
```

### Backend Development
```bash
cd backend
npm run dev
```

## Deployment

The application can be deployed using Docker:

```bash
docker-compose up -d
```

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details. 