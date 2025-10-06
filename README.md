# LootLords - E-Commerce Fashion Store

A modern e-commerce platform built with React + Vite, featuring a comprehensive shopping experience with user authentication, product catalog, cart management, and order processing.

## 🚀 Features

- **Product Catalog**: Browse through various categories including clothing, shoes, accessories
- **User Authentication**: Sign up/Sign in with email and phone number
- **Shopping Cart**: Add items, manage quantities, and proceed to checkout
- **Favorites**: Save products for later
- **Order Management**: Track orders and view order history
- **Responsive Design**: Optimized for all devices
- **Promo Products**: Special deals and flash sales

## 🛠️ Tech Stack

- **Frontend**: React 18, React Router DOM
- **Build Tool**: Vite
- **Styling**: TailwindCSS
- **UI Components**: Custom components with class-variance-authority
- **Charts**: Recharts for analytics
- **Email**: EmailJS for communication
- **State Management**: React Context API

## 🚀 Deployment on Vercel

### Prerequisites

- Node.js 18+ installed
- Git repository connected to Vercel

### Build Configuration

The project includes proper Vercel configuration:

- `vercel.json` for SPA routing
- Optimized `vite.config.js`
- Proper dependency management in `package.json`

### Deploy Steps

1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect it's a Vite project
3. Build command: `npm run build`
4. Output directory: `dist`
5. Deploy automatically on push to main branch

### Environment Variables

Set these in your Vercel dashboard if needed:

```
VITE_API_URL=your_api_url
```

## 🔧 Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── common/         # Header, Footer, etc.
│   └── ui/             # Button, Input, etc.
├── pages/              # Route components
├── context/            # React Context providers
├── services/           # API services
└── styles/             # Global styles
```

## 🚨 Common Deployment Issues Fixed

1. **Vite Config**: Fixed `Base` -> `base` (case sensitivity)
2. **ESLint**: Updated configuration for latest ESLint version
3. **SPA Routing**: Added `vercel.json` for proper route handling
4. **Dependencies**: Added missing ESLint plugins

## 📄 License

This project is licensed under the MIT License.+ Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
