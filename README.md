# Lawyer Lead Frontend

A modern web application built with Next.js for lawyer lead generation and client management. This platform helps law firms streamline their client acquisition process and manage their leads effectively.

## Features

- Modern, responsive UI with Tailwind CSS
- User authentication and authorization via Clerk
- Interactive landing pages with dynamic content
- Client management dashboard
- Calendar integration for scheduling consultations
- Analytics and reporting capabilities

## Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Authentication**: Clerk
- **UI Components**: 
  - Material UI
  - Radix UI
  - Framer Motion
- **Data Visualization**: Recharts
- **File Handling**: React Dropzone
- **Date Management**: date-fns

## Prerequisites

- Node.js 18+ 
- npm or yarn package manager

## Getting Started

1. Clone the repository
2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Set up environment variables:
Create a `.env.local` file in the root directory with the necessary environment variables.

4. Run the development server:
```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## Project Structure

- `/src/app` - Main application pages and routing
- `/src/components` - Reusable UI components
- `/public` - Static assets
- `/registry` - UI component registry

## Deployment

This project is configured for deployment on Vercel. The easiest way to deploy is to use the [Vercel Platform](https://vercel.com).

## License

This project is proprietary software. All rights reserved.
