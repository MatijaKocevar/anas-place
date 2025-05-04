# Ana's Place

A modern web application for a nail salon business, built with Next.js 15, featuring user authentication, admin dashboard, and Instagram integration.

## 🚀 Features

- **Modern UI/UX**: Clean and responsive design with TailwindCSS
- **Authentication**: Secure user management with Clerk
- **Admin Dashboard**: Manage users, bookings, and receipts
- **Gallery Integration**: Instagram feed integration (coming soon)
- **Booking System**: Appointment scheduling system (in development)
- **Multilingual**: Slovenian language support
- **Database**: PostgreSQL with Prisma ORM
- **Responsive Design**: Mobile-first approach with adaptive sidebar

## 🛠️ Tech Stack

- **Frontend**: Next.js 15, React, TailwindCSS
- **Authentication**: Clerk
- **Database**: PostgreSQL (hosted on Neon.tech)
- **ORM**: Prisma
- **State Management**: TanStack Query (React Query)
- **UI Components**: Radix UI, Lucide Icons
- **Deployment**: Vercel

## 📋 Prerequisites

Before you begin, ensure you have:
- Node.js 18 or later
- npm or yarn
- PostgreSQL database
- Clerk account for authentication
- Instagram Developer account (for gallery features)

## 🚀 Quick Start

1. Clone and install dependencies:
```bash
git clone https://github.com/yourusername/anas-place.git
cd anas-place
npm install
```

2. Configure environment variables by copying `.env.example` to `.env.local`

3. Run database migrations:
```bash
npx prisma generate
npx prisma migrate dev
```

4. Start the development server:
```bash
npm run dev
```
