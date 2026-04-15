# MERN Session Authentication Client

A React client for MERN stack authentication with session management.

## Features

- User registration and login
- Session-based authentication
- Protected profile page
- Modern, responsive UI design
- API proxy configuration for development

## Setup

1. Install dependencies:
   ```bash
   npm install
   npm install react-router-dom
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Make sure the server is running on port 5000.

## API Endpoints

- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Verify current session
- `GET /api/profile` - Get user profile (protected)

## Components

- `Home` - Landing page
- `Login` - User login form
- `Register` - User registration form
- `Profile` - Protected user profile page

## Styling

The app uses modern CSS with gradients, shadows, and responsive design.
