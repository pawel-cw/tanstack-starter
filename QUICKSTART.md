# 🚀 Quick Start Guide

This guide will help you get up and running with TanStack Starter in under 5 minutes.

## Step 1: Clone the Repository

```bash
git clone <your-repo-url>
cd tanstack-starter
```

Or use as a template on GitHub.

## Step 2: Install Dependencies

```bash
npm install
```

## Step 3: Set Up Environment Variables

1. Copy the example environment file:

```bash
cp .env.example .env
```

2. Get a free Neon database:
   - Visit [neon.tech](https://neon.tech/)
   - Create a new project
   - Copy the connection string
   - Paste it into `.env` as `DATABASE_URL`

3. Generate a secure auth secret:

```bash
openssl rand -base64 32
```

4. Update `.env`:

```env
DATABASE_URL="postgresql://user:password@host/database?sslmode=require"
BETTER_AUTH_SECRET="your-generated-secret"
BETTER_AUTH_URL="http://localhost:3000"
```

## Step 4: Set Up the Database

Push the auth schema to your database:

```bash
npm run db:push
```

This creates the necessary tables for authentication (user, session, account, verification).

## Step 5: Start Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) - you should see the starter homepage! 🎉

## Next Steps

### 1. Build Your First Feature

Replace the homepage content in `src/routes/index.tsx` with your own:

```typescript
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ 
  component: HomePage 
})

function HomePage() {
  return (
    <div>
      <h1>My App</h1>
    </div>
  )
}
```

### 2. Add a New Page

Create `src/routes/about.tsx`:

```typescript
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({ 
  component: About 
})

function About() {
  return <div>About page</div>
}
```

Visit [http://localhost:3000/about](http://localhost:3000/about)

### 3. Create Auth Pages

Create login and signup pages. Example `src/routes/login.tsx`:

```typescript
import { createFileRoute } from '@tanstack/react-router'
import { signIn } from '@/lib/auth-client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useState } from 'react'

export const Route = createFileRoute('/login')({ 
  component: Login 
})

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async () => {
    await signIn.email({ email, password })
  }

  return (
    <div className="mx-auto max-w-md p-8">
      <h1 className="mb-6 text-2xl font-bold">Login</h1>
      <div className="space-y-4">
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={handleLogin}>Sign In</Button>
      </div>
    </div>
  )
}
```

### 4. Add Database Tables

Edit `src/db/schema.ts` to add your tables:

```typescript
import { pgTable, text, timestamp } from 'drizzle-orm/pg-core'

export const posts = pgTable('posts', {
  id: text('id').primaryKey(),
  title: text('title').notNull(),
  content: text('content').notNull(),
  userId: text('user_id').notNull().references(() => user.id),
  createdAt: timestamp('created_at').defaultNow().notNull(),
})
```

Generate and apply migration:

```bash
npm run db:generate
npm run db:migrate
```

### 5. Add UI Components

Install shadcn/ui components as needed:

```bash
npx shadcn@latest add button
npx shadcn@latest add form
npx shadcn@latest add dialog
npx shadcn@latest add table
```

See all components at [ui.shadcn.com](https://ui.shadcn.com)

### 6. Customize Branding

- Update `src/routes/__root.tsx` meta tags
- Replace favicon in `public/favicon.ico`
- Update colors in `src/styles.css`
- Modify `package.json` name and description

## Common Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server |
| `npm run build` | Build for production |
| `npm run db:studio` | Open database GUI |
| `npm run db:push` | Push schema changes (dev) |
| `npm run db:generate` | Generate migrations |
| `npm run trans:extract` | Extract translations |
| `npm run lint` | Lint code |
| `npm run format` | Format code |
| `npm run typecheck` | Check TypeScript |

## Troubleshooting

### Database Connection Issues

- Make sure your `DATABASE_URL` is correct
- Check that your IP is whitelisted in Neon dashboard
- Verify the database exists

### Authentication Not Working

- Ensure `BETTER_AUTH_SECRET` is set
- Check that database tables were created (`npm run db:push`)
- Verify `BETTER_AUTH_URL` matches your dev server

### Build Errors

- Clear cache: `rm -rf .tanstack .vinxi node_modules/.vite`
- Reinstall: `npm install`
- Check TypeScript: `npm run typecheck`

## Need Help?

- Read the full [README.md](./README.md)
- Check [TanStack Start docs](https://tanstack.com/start)
- Review [Better-Auth docs](https://www.better-auth.com)
- Open an issue on GitHub

Happy building! 🚀

