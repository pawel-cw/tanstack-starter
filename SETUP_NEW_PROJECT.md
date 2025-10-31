# Setting Up a New Project from TanStack Starter

This guide walks you through customizing this boilerplate for your new project.

## Initial Setup

### 1. Clone or Download

```bash
# Option A: Clone as template
git clone https://github.com/your-username/tanstack-starter.git my-new-project
cd my-new-project
rm -rf .git
git init

# Option B: Use GitHub's "Use this template" button
```

### 2. Update Project Identity

#### package.json
```bash
# Update these fields:
- name: "my-project-name"
- version: "0.1.0"
- description: "Your project description"
```

#### Page Title (src/routes/__root.tsx)
```typescript
{
  title: 'Your App Name',
}
```

#### Favicon
Replace files in `public/`:
- `favicon.ico`
- `logo192.png`
- `logo512.png`

Update `public/manifest.json`:
```json
{
  "name": "Your App Name",
  "short_name": "Your App",
  "description": "Your app description"
}
```

### 3. Customize Branding

#### Colors (src/styles.css)
Update CSS variables:
```css
:root {
  --primary: your-primary-color;
  --accent: your-accent-color;
  /* ... other colors */
}
```

#### Homepage (src/routes/index.tsx)
Replace the boilerplate homepage with your landing page or dashboard.

### 4. Configure Environment

```bash
cp .env.example .env
```

Update `.env` with your credentials:
```env
DATABASE_URL="your-neon-postgres-url"
BETTER_AUTH_SECRET="your-secret-key"
BETTER_AUTH_URL="http://localhost:3000"
```

### 5. Update Cursor Rules (Optional)

Edit `.cursorrules` to add project-specific guidelines:
- Remove boilerplate instructions
- Add your domain-specific rules
- Update scopes in git commit examples

### 6. Internationalization

If you don't need all three languages:

#### Keep only needed languages
```bash
# Remove unneeded locale folders
rm -rf src/locales/de  # If you don't need German
rm -rf src/locales/pl  # If you don't need Polish
```

#### Update lingui.config.js
```javascript
locales: ['en'], // Remove unused locales
```

#### Add new languages
```javascript
// In lingui.config.js
locales: ['en', 'fr', 'es'], // Add your languages

// Create directories
mkdir -p src/locales/fr src/locales/es

// Extract and compile
npm run trans:extract
npm run trans:compile
```

### 7. Database Schema

Edit `src/db/schema.ts` for your data model:

```typescript
import { pgTable, text, timestamp } from 'drizzle-orm/pg-core'

// Remove example tables if any
// Add your tables
export const posts = pgTable('posts', {
  id: text('id').primaryKey(),
  title: text('title').notNull(),
  content: text('content'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
})
```

Then generate and run migrations:
```bash
npm run db:generate
npm run db:migrate
```

### 8. Authentication Pages

The boilerplate includes auth setup but not UI pages. Create:

- `src/routes/login.tsx` - Login page
- `src/routes/signup.tsx` - Signup page
- `src/routes/forgot-password.tsx` - Password reset

See `QUICKSTART.md` for example implementations.

### 9. Clean Up Boilerplate Files (Optional)

Remove files you don't need:
```bash
rm SETUP_NEW_PROJECT.md  # This file
rm QUICKSTART.md         # Keep or customize
rm CONTRIBUTING.md       # Update for your project
```

### 10. Initialize Git

```bash
git add .
git commit -m "chore: initialize project from tanstack-starter"
```

## Customization Checklist

- [ ] Update `package.json` name and description
- [ ] Change page title in `src/routes/__root.tsx`
- [ ] Replace favicon and logos
- [ ] Update `public/manifest.json`
- [ ] Customize colors in `src/styles.css`
- [ ] Configure `.env` file
- [ ] Update database schema
- [ ] Remove/add languages as needed
- [ ] Create auth pages (login, signup)
- [ ] Replace homepage content
- [ ] Update `.cursorrules` with project rules
- [ ] Clean up boilerplate documentation
- [ ] Initialize git repository
- [ ] Update README.md with project-specific info

## Next Steps

1. **Add your first feature**
   - Create a new route
   - Add database tables
   - Build your UI

2. **Set up CI/CD**
   - Configure GitHub Actions
   - Add automated tests
   - Set up deployment

3. **Enhance auth**
   - Add OAuth providers
   - Implement role-based access
   - Add password reset flow

4. **Add integrations**
   - Email service
   - Payment processor
   - Analytics

## Common Customizations

### Multi-tenancy

Add workspace/organization support:

```typescript
// src/db/schema.ts
export const workspaces = pgTable('workspaces', {
  id: text('id').primaryKey(),
  name: text('name').notNull(),
  createdAt: timestamp('created_at').defaultNow(),
})

export const posts = pgTable('posts', {
  id: text('id').primaryKey(),
  workspaceId: text('workspace_id')
    .notNull()
    .references(() => workspaces.id),
  // ... other fields
})
```

### Dark Mode Toggle

Add a theme switcher:

```typescript
// Use Tailwind's dark mode class strategy
// Already configured in the boilerplate!
```

### Email Service

Add Resend or SendGrid:

```bash
npm install resend
# or
npm install @sendgrid/mail
```

### File Uploads

Add Vercel Blob or Cloudflare R2:

```bash
npm install @vercel/blob
# or  
npm install @cloudflare/workers-types
```

## Need Help?

- Check `README.md` for full documentation
- See `QUICKSTART.md` for common tasks
- Review `.cursorrules` for code standards
- Open an issue on GitHub

---

Happy building! 🚀

