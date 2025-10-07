# App Marquinha Perfeita

## Overview

This is a full-stack web application for a Brazilian tanning/bronzing service called "Marquinha Perfeita" (Perfect Tan Line). The application is a landing page with pricing tiers designed to help users track their tanning progress, receive personalized tips, and achieve their ideal tan safely. It features a modern, vibrant design with pink/coral gradients and includes sections for benefits, pricing plans (Basic and Premium), bonuses, testimonials, and a footer.

The application is built as a monorepo with a React frontend using shadcn/ui components and Tailwind CSS, an Express backend, and PostgreSQL database support through Drizzle ORM.

## Recent Changes

**October 7, 2025**
- Fresh GitHub import successfully configured for Replit environment
- Dependencies installed (npm install)
- Database schema pushed successfully using Drizzle (`npm run db:push`)
- Development workflow configured and running on port 5000
- Deployment configured for autoscale with build (`npm run build`) and start (`npm start`) commands
- Application verified working with beautiful landing page displaying correctly

**October 6, 2025**
- Project imported and configured for Replit environment
- Database connection verified (PostgreSQL via Neon)
- Database schema migrated successfully using Drizzle
- Development workflow configured and running on port 5000
- Deployment configured for autoscale with build and start commands
- Updated bonuses section with 10 new bonus items (total value R$ 57,90):
  1. Checklist da Marquinha Perfeita (R$ 4,90)
  2. Calendário de Exposição ao Sol (R$ 6,50)
  3. Receitas de Bronzeamento Caseiro (R$ 7,90)
  4. Guia de Proteção Inteligente (R$ 5,90)
  5. Lista de Produtos Baratinhos que Funcionam (R$ 4,50)
  6. Roteiro de Alongamentos na Praia (R$ 3,90)
  7. Receitas Detox Pós-Sol (R$ 5,50)
  8. Mini-Guia de Pós-Bronze (R$ 6,90)
  9. Checklist de Itens para Praia/Piscina (R$ 3,90)
  10. Desafio 7 Dias da Marquinha Perfeita (R$ 8,00)
- Created new "Problems & Solutions" section showing pain points and solutions
- Changed all references from "curso" to "aplicativo" throughout the site
- Updated pricing section: removed photo tracking and progress reports from Premium plan
- Fixed "MAIS POPULAR" badge on Premium plan card
- Added guarantee section: "E Se Eu Não Gostar do Aplicativo?" with 7-day money-back guarantee

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React 18 with TypeScript and Vite as the build tool

**Routing**: wouter for client-side routing (lightweight React Router alternative)

**UI Components**: shadcn/ui component library (Radix UI primitives with Tailwind CSS styling)
- Rationale: Provides accessible, customizable components with a consistent design system
- Theme: "new-york" style variant with neutral base color
- All components use CSS variables for theming

**Styling**: Tailwind CSS with custom configuration
- Custom color scheme focused on pink/coral gradients (primary: hsl(340, 100%, 70%))
- Custom fonts: Inter (sans), Poppins (display), Playfair Display (serif)
- Dark mode support via class-based theming

**State Management**: @tanstack/react-query for server state
- Configured with infinite staleTime and disabled refetching
- Custom query client with API request helpers

**Animations**: Framer Motion for scroll-triggered and interaction animations

**Structure**:
- `/client/src/pages` - Page components (home, not-found)
- `/client/src/components` - Feature components and UI primitives
- `/client/src/hooks` - Custom React hooks
- `/client/src/lib` - Utility functions and configurations

### Backend Architecture

**Framework**: Express.js with TypeScript

**Server Structure**:
- Hot module reloading in development via Vite middleware
- Custom logging middleware for API requests
- Raw body capture for webhook support
- Production build uses esbuild for bundling

**Data Layer**: Currently uses in-memory storage (MemStorage class)
- Interface-based design (IStorage) for easy swapping to database implementation
- Basic user CRUD operations defined

**API Design**:
- All routes prefixed with `/api`
- Routes registered in `/server/routes.ts`
- HTTP server created for future WebSocket support

**Development Setup**:
- Vite dev server in middleware mode for frontend
- Server-side rendering template injection
- Replit-specific plugins for development (cartographer, dev-banner, runtime-error-modal)

### Database Architecture

**ORM**: Drizzle ORM configured for PostgreSQL

**Schema Location**: `/shared/schema.ts` for type sharing between frontend and backend

**Current Schema**:
- Users table with id (UUID), username (unique), password fields
- Zod validation schemas using drizzle-zod for type-safe inserts

**Migration Strategy**: 
- Migrations output to `/migrations` directory
- Push command available via `npm run db:push`

**Connection**: Neon serverless PostgreSQL driver (@neondatabase/serverless)
- Rationale: Serverless-optimized for edge and serverless environments
- Configuration via DATABASE_URL environment variable

### External Dependencies

**UI Libraries**:
- Radix UI primitives for accessible component foundation
- Embla Carousel for carousel/slider functionality
- cmdk for command palette UI
- date-fns for date manipulation
- Lucide React for icons (supplemented with FontAwesome via CDN)

**Database & ORM**:
- Drizzle ORM with drizzle-kit for migrations
- @neondatabase/serverless for PostgreSQL connection
- connect-pg-simple for PostgreSQL session store (configured but not actively used)

**Form Handling**:
- react-hook-form for form state management
- @hookform/resolvers for validation integration
- Zod for schema validation

**Build Tools**:
- Vite for frontend bundling and dev server
- esbuild for backend production builds
- PostCSS with Tailwind and Autoprefixer

**Development Tools**:
- Replit-specific tooling (@replit/vite-plugin-*)
- tsx for running TypeScript directly in development

**Notable Configuration**:
- Path aliases configured: `@/` maps to client/src, `@shared/` to shared directory
- TypeScript strict mode enabled
- ESNext module system with bundler resolution