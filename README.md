# TanStack Starter

A modern, production-ready full-stack boilerplate for building type-safe SaaS applications.

## ✨ Features

- **🚀 Full-Stack Framework**: TanStack Start for unified frontend and backend development
- **📝 Type Safety**: End-to-end type safety with TypeScript and Drizzle ORM
- **🔐 Authentication**: Ready-to-use auth system with Better-Auth
- **💾 Database**: Serverless Postgres with Neon and Drizzle ORM
- **🎨 Modern UI**: Beautiful components with shadcn/ui and Tailwind CSS
- **🌍 Internationalization**: Built-in i18n support with Lingui (German, Polish, English)
- **🔄 Data Fetching**: TanStack Query for server state management
- **🛣️ Routing**: Type-safe routing with TanStack Router
- **✅ Validation**: Schema validation with Zod
- **🎯 Developer Experience**: Hot reload, devtools, path aliases

## 📦 Tech Stack

### Frontend
- **[TanStack Start](https://tanstack.com/start)** - React framework for full-stack apps
- **[TanStack Router](https://tanstack.com/router)** - Type-safe routing
- **[TanStack Query](https://tanstack.com/query)** - Powerful server state management
- **[React 19](https://react.dev/)** - UI library
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety
- **[Tailwind CSS v4](https://tailwindcss.com/)** - Utility-first styling
- **[shadcn/ui](https://ui.shadcn.com/)** - Beautiful, accessible components
- **[Lingui](https://lingui.dev/)** - Internationalization (i18n)

### Backend
- **[TanStack Start](https://tanstack.com/start)** - Server functions
- **[Better-Auth](https://www.better-auth.com/)** - Modern authentication
- **[Neon Postgres](https://neon.tech/)** - Serverless PostgreSQL
- **[Drizzle ORM](https://orm.drizzle.team/)** - Type-safe database queries
- **[Zod](https://zod.dev/)** - Schema validation

### Development Tools
- **[Vite](https://vite.dev/)** - Fast build tool
- **[ESLint](https://eslint.org/)** - Code linting
- **[Prettier](https://prettier.io/)** - Code formatting
- **[Vitest](https://vitest.dev/)** - Unit testing framework

## 🚀 Getting Started

### Prerequisites

- Node.js 20+ and npm
- A [Neon](https://neon.tech/) database (free tier available)
- (Optional) Better-Auth configuration for production

### Installation

1. **Clone or use this template**

```bash
# If using as template
npx degit your-repo/tanstack-starter my-app
cd my-app
```

2. **Install dependencies**

```bash
npm install
```

3. **Set up environment variables**

Create a `.env` file in the root directory:

```bash
# Database (Neon Postgres)
DATABASE_URL="postgresql://user:password@host/database"

# Better-Auth
BETTER_AUTH_SECRET="your-secret-key-generate-with-openssl"
BETTER_AUTH_URL="http://localhost:3000"

# (Optional) Add other environment variables as needed
```

Generate a secure secret:
```bash
openssl rand -base64 32
```

4. **Set up the database**

```bash
# Push the schema to your database
npm run db:push

# Or generate migrations (recommended for production)
npm run db:generate
npm run db:migrate
```

5. **Start the development server**

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see your app! 🎉

## 📝 Available Scripts

### Development

```bash
npm run dev              # Start development server (port 3000)
npm run typecheck        # Check TypeScript types
npm run lint             # Lint code with ESLint
npm run format           # Format code with Prettier
npm run check            # Format and lint (auto-fix)
```

### Database

```bash
npm run db:generate      # Generate migrations from schema changes
npm run db:migrate       # Run migrations
npm run db:push          # Push schema directly (dev only)
npm run db:pull          # Pull schema from database
npm run db:studio        # Open Drizzle Studio (database GUI)
```

### Internationalization

```bash
npm run trans:extract    # Extract translatable strings
npm run trans:compile    # Compile translations
```

### Production

```bash
npm run build            # Build for production
npm run serve            # Preview production build
```

### Testing

```bash
npm run test             # Run tests with Vitest
```

## 🗂️ Project Structure

```
├── src/
│   ├── components/          # React components
│   │   ├── ui/             # shadcn/ui components
│   │   └── ...             # Your custom components
│   ├── db/                 # Database configuration
│   │   ├── index.ts        # Database client
│   │   └── schema.ts       # Drizzle schema
│   ├── lib/                # Utility functions
│   │   ├── auth.ts         # Better-Auth configuration
│   │   ├── auth-client.ts  # Auth client helpers
│   │   └── utils.ts        # General utilities
│   ├── locales/            # Translation files
│   │   ├── en/            # English
│   │   ├── de/            # German
│   │   └── pl/            # Polish
│   ├── routes/             # TanStack Router routes
│   │   ├── __root.tsx     # Root layout
│   │   ├── index.tsx      # Homepage
│   │   └── api/           # API routes
│   ├── integrations/       # Third-party integrations
│   ├── router.tsx          # Router configuration
│   └── styles.css          # Global styles
├── public/                 # Static assets
├── drizzle/               # Database migrations
└── ...config files
```

## 🔐 Authentication

This boilerplate includes a pre-configured Better-Auth setup with:

- Email/password authentication
- Session management
- Database adapter (Drizzle)
- React Start integration

### Adding Auth to Your Routes

```typescript
import { useSession } from '@/lib/auth-client'

export function MyProtectedComponent() {
  const { data: session } = useSession()
  
  if (!session) {
    return <div>Please log in</div>
  }
  
  return <div>Hello {session.user.name}!</div>
}
```

### Creating Auth Pages

You'll need to create your own login/signup pages. Example:

```typescript
import { signIn, signUp } from '@/lib/auth-client'

// In your login component
await signIn.email({
  email: 'user@example.com',
  password: 'password123'
})
```

See [Better-Auth documentation](https://www.better-auth.com/docs) for more details.

## 💾 Database

### Schema Definition

Define your database schema in `src/db/schema.ts`:

```typescript
import { pgTable, text, timestamp } from 'drizzle-orm/pg-core'

export const posts = pgTable('posts', {
  id: text('id').primaryKey(),
  title: text('title').notNull(),
  content: text('content').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
})
```

### Querying Data

```typescript
import { db } from '@/db'
import { posts } from '@/db/schema'

// Select all posts
const allPosts = await db.select().from(posts)

// Insert a post
await db.insert(posts).values({
  id: '1',
  title: 'Hello World',
  content: 'My first post!'
})
```

See [Drizzle ORM documentation](https://orm.drizzle.team/docs/overview) for more.

## 🌍 Internationalization

This boilerplate uses Lingui for i18n with macro-based translation.

### Adding Translations

1. Wrap user-facing text with `<Trans>` or `t` macro:

```typescript
import { Trans, t } from '@lingui/react/macro'

function MyComponent() {
  return (
    <div>
      <h1>
        <Trans>Welcome to my app</Trans>
      </h1>
      <input 
        placeholder={t`Enter your name`}
      />
    </div>
  )
}
```

2. Extract translatable strings:

```bash
npm run trans:extract
```

3. Translate in `src/locales/{lang}/messages.po` files

4. Compile translations:

```bash
npm run trans:compile
```

### Switching Languages

Edit `src/routes/__root.tsx` to change the active language:

```typescript
import { messages } from '@/locales/de/messages' // German
i18n.load('de', messages)
i18n.activate('de')
```

## 🎨 UI Components

This boilerplate includes shadcn/ui components. Add more as needed:

```bash
npx shadcn@latest add button
npx shadcn@latest add dialog
npx shadcn@latest add form
```

Components will be added to `src/components/ui/`.

See [shadcn/ui documentation](https://ui.shadcn.com/) for all available components.

## 🧪 Testing

This boilerplate uses Vitest for testing. Tests should be co-located with your code:

```
src/
├── components/
│   ├── Button.tsx
│   └── Button.test.tsx
```

Example test:

```typescript
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Button } from './Button'

describe('Button', () => {
  it('renders correctly', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByText('Click me')).toBeDefined()
  })
})
```

## 📦 Adding New Features

### 1. Add a New Route

Create a file in `src/routes/`:

```typescript
// src/routes/about.tsx
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  component: About
})

function About() {
  return <div>About page</div>
}
```

### 2. Add a Database Table

Update `src/db/schema.ts`, then:

```bash
npm run db:generate  # Generate migration
npm run db:migrate   # Apply migration
```

### 3. Add an API Route

Create a file in `src/routes/api/`:

```typescript
// src/routes/api/hello.ts
import { createFileRoute } from '@tanstack/react-router'
import { json } from '@tanstack/react-start'

export const Route = createFileRoute('/api/hello')({
  server: {
    handlers: {
      GET: async () => {
        return json({ message: 'Hello World' })
      }
    }
  }
})
```

## 🚢 Deployment

This boilerplate is ready to deploy to [Vercel](https://vercel.com/):

1. Push your code to GitHub
2. Import your repository in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy! 🎉

Make sure to:
- Set `BETTER_AUTH_URL` to your production URL
- Use production database credentials
- Generate a new `BETTER_AUTH_SECRET` for production

## 📚 Learn More

- [TanStack Start Docs](https://tanstack.com/start)
- [TanStack Router Docs](https://tanstack.com/router)
- [TanStack Query Docs](https://tanstack.com/query)
- [Drizzle ORM Docs](https://orm.drizzle.team)
- [Better-Auth Docs](https://www.better-auth.com)
- [shadcn/ui Docs](https://ui.shadcn.com)
- [Lingui Docs](https://lingui.dev)

## 🤝 Contributing

This is a boilerplate template. Feel free to customize it for your needs!

## 📄 License

MIT - Feel free to use this boilerplate for any project!

---

Built with ❤️ for modern full-stack development
