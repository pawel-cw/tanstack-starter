import { Trans } from '@lingui/react/macro'
import { createFileRoute } from '@tanstack/react-router'
import {
  Code2,
  Database,
  Globe,
  Layers,
  Lock,
  Palette,
  Rocket,
  Server,
  Shield,
} from 'lucide-react'
import { Card } from '@/components/ui/card'

export const Route = createFileRoute('/')({ component: HomePage })

function HomePage() {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-5xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-6xl">
            <Trans>TanStack Starter 🚀</Trans>
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
            <Trans>
              A modern, production-ready boilerplate for building full-stack
              applications
            </Trans>
          </p>
        </div>

        {/* Core Features */}
        <div className="mt-16">
          <h2 className="text-center text-2xl font-semibold text-slate-900 dark:text-white">
            <Trans>Core Features</Trans>
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              icon={<Shield className="size-6" />}
              title="Type-Safe"
              description="End-to-end type safety with TypeScript and Drizzle ORM"
            />
            <FeatureCard
              icon={<Layers className="size-6" />}
              title="Full-Stack"
              description="Single codebase for frontend and backend with TanStack Start"
            />
            <FeatureCard
              icon={<Lock className="size-6" />}
              title="Authentication"
              description="Ready-to-use auth system with Better-Auth"
            />
            <FeatureCard
              icon={<Database className="size-6" />}
              title="Database"
              description="Serverless Postgres with Neon and Drizzle ORM"
            />
            <FeatureCard
              icon={<Globe className="size-6" />}
              title="Internationalization"
              description="Built-in i18n support with Lingui (DE, PL, EN)"
            />
            <FeatureCard
              icon={<Palette className="size-6" />}
              title="Modern UI"
              description="Beautiful components with shadcn/ui and Tailwind CSS"
            />
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mt-20">
          <h2 className="text-center text-2xl font-semibold text-slate-900 dark:text-white">
            <Trans>Tech Stack</Trans>
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {/* Frontend */}
            <Card className="p-6">
              <div className="mb-4 flex items-center gap-2">
                <Code2 className="size-5 text-slate-600 dark:text-slate-400" />
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                  <Trans>Frontend</Trans>
                </h3>
              </div>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                <TechItem name="TanStack Start" desc="React framework" />
                <TechItem name="TanStack Router" desc="Type-safe routing" />
                <TechItem name="TanStack Query" desc="Server state" />
                <TechItem name="React 19" desc="UI library" />
                <TechItem name="TypeScript" desc="Type safety" />
                <TechItem name="Tailwind CSS" desc="Styling" />
                <TechItem name="shadcn/ui" desc="UI components" />
                <TechItem name="Lingui" desc="Internationalization" />
              </ul>
            </Card>

            {/* Backend */}
            <Card className="p-6">
              <div className="mb-4 flex items-center gap-2">
                <Server className="size-5 text-slate-600 dark:text-slate-400" />
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                  <Trans>Backend</Trans>
                </h3>
              </div>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                <TechItem name="TanStack Start" desc="Server functions" />
                <TechItem name="Better-Auth" desc="Authentication" />
                <TechItem name="Neon Postgres" desc="Serverless database" />
                <TechItem name="Drizzle ORM" desc="Type-safe database" />
                <TechItem name="Zod" desc="Schema validation" />
              </ul>
            </Card>
          </div>
        </div>

        {/* Getting Started */}
        <div className="mt-20">
          <Card className="p-8">
            <div className="mb-6 flex items-center justify-center gap-2">
              <Rocket className="size-6 text-slate-900 dark:text-white" />
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
                <Trans>Getting Started</Trans>
              </h2>
            </div>
            <div className="space-y-4 text-slate-600 dark:text-slate-400">
              <CodeBlock>npm install</CodeBlock>
              <CodeBlock>npm run dev</CodeBlock>
              <p className="text-center text-sm">
                <Trans>
                  Visit{' '}
                  <a
                    href="/README.md"
                    className="font-medium text-slate-900 underline dark:text-white"
                  >
                    README.md
                  </a>{' '}
                  for detailed setup instructions
                </Trans>
              </p>
            </div>
          </Card>
        </div>

        {/* Footer */}
        <div className="mt-16 text-center text-sm text-slate-500 dark:text-slate-500">
          <Trans>Built with ❤️ for modern full-stack development</Trans>
        </div>
      </div>
    </div>
  )
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <Card className="p-6 transition-all hover:shadow-md">
      <div className="mb-3 flex items-center gap-3">
        <div className="rounded-lg bg-slate-100 p-2 text-slate-900 dark:bg-slate-800 dark:text-white">
          {icon}
        </div>
        <h3 className="font-semibold text-slate-900 dark:text-white">
          {title}
        </h3>
      </div>
      <p className="text-sm text-slate-600 dark:text-slate-400">
        {description}
      </p>
    </Card>
  )
}

function TechItem({ name, desc }: { name: string; desc: string }) {
  return (
    <li className="flex justify-between">
      <span className="font-medium text-slate-900 dark:text-white">{name}</span>
      <span className="text-slate-500 dark:text-slate-500">{desc}</span>
    </li>
  )
}

function CodeBlock({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-md bg-slate-900 px-4 py-3 font-mono text-sm text-slate-100">
      {children}
    </div>
  )
}
