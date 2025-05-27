# Nordcom E-commerce Platform

A modern, full-stack e-commerce platform built with Next.js and Node.js, offering a seamless shopping experience with robust backend capabilities.

![Nordcom Banner](./public/banner.png)

## 🚀 Features

- **Modern UI/UX** - Responsive design with Tailwind CSS
- **User Authentication** - Secure login/signup with JWT
- **Product Management** - Advanced filtering and search
- **Shopping Cart** - Real-time updates with Redux
- **Payment Integration** - Secure checkout process
- **Order Management** - Track order status and history
- **Admin Dashboard** - Comprehensive control panel
- **API Documentation** - Detailed endpoint documentation

## ⚙️ Tech Stack

### Frontend

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Redux Toolkit
- Embla Carousel
- Lucide Icons

### Backend

- Node.js
- Express.js
- Prisma ORM
- PostgreSQL
- JWT Authentication

## 🛠️ Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/nordcom.git
cd nordcom
```

2. Install dependencies for both frontend and backend:

```bash
# Frontend
cd clients
npm install

# Backend
cd ../server
npm install
```

3. Set up environment variables:

```bash
# Frontend (.env.local)
NEXT_PUBLIC_API_URL=http://localhost:5000
NEXT_PUBLIC_STRIPE_PUBLIC_KEY=your_stripe_public_key

# Backend (.env)
DATABASE_URL="postgresql://username:password@localhost:5432/nordcom"
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
```

4. Run the development servers:

```bash
# Frontend (http://localhost:3000)
npm run dev

# Backend (http://localhost:5000)
npm run dev
```

## 📁 Project Structure

```
nordcom/
├── clients/                # Frontend Next.js application
│   ├── app/               # App router pages
│   ├── components/        # Reusable components
│   ├── lib/              # Utilities and helpers
│   └── store/            # Redux store configuration
│
└── server/               # Backend Express.js application
    ├── controllers/      # Route controllers
    ├── models/          # Prisma schema and models
    ├── routes/          # API routes
    └── middleware/      # Custom middleware
```

## 🔑 Environment Variables

Required environment variables for the project:

```env
# Frontend (.env.local)
NEXT_PUBLIC_API_URL
NEXT_PUBLIC_STRIPE_PUBLIC_KEY

# Backend (.env)
DATABASE_URL
JWT_SECRET
STRIPE_SECRET_KEY
```

## 📚 API Documentation

API documentation is available at `/api-docs` when running the development server. It includes detailed information about:

- Authentication endpoints
- Product management
- Order processing
- User management
- Admin operations

## 🧪 Testing

Run the test suites:

```bash
# Frontend tests
npm run test

# Backend tests
npm run test
```

## 🚀 Deployment

The application can be deployed using Vercel for the frontend and your preferred hosting service for the backend:

```bash
# Deploy frontend to Vercel
npm run deploy

# Build backend for production
npm run build
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Contributing

Contributions are welcome! Please read our [Contributing Guide](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## 📞 Support

For support, email support@nordcom.com or join our Slack channel.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Prisma](https://www.prisma.io/)
- [PostgreSQL](https://www.postgresql.org/)

---

Built with ❤️ by [Your Name](https://github.com/your-username)
