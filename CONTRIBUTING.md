# Contributing to TanStack Starter

Thank you for your interest in contributing to TanStack Starter! This document provides guidelines for contributing to this boilerplate.

## How to Contribute

### Reporting Issues

If you find a bug or have a suggestion:

1. Check if the issue already exists in GitHub Issues
2. If not, create a new issue with:
   - Clear title and description
   - Steps to reproduce (for bugs)
   - Expected vs actual behavior
   - Your environment (OS, Node version, etc.)

### Suggesting Enhancements

We welcome suggestions for improvements:

- New features that benefit most projects
- Better defaults or configurations
- Documentation improvements
- Performance optimizations

Please open an issue to discuss major changes before implementing them.

## Development Setup

1. **Fork and clone the repository**

```bash
git clone https://github.com/pawel-cw/tanstack-starter.git
cd tanstack-starter
```

2. **Install dependencies**

```bash
npm install
```

3. **Set up environment**

```bash
cp .env.example .env
# Add your DATABASE_URL and BETTER_AUTH_SECRET
```

4. **Run the development server**

```bash
npm run dev
```

## Code Standards

Please follow the coding standards defined in [.cursorrules](./.cursorrules):

### TypeScript
- Use strict mode
- Always use `type`, never `interface`
- Avoid `any` - use `unknown` if needed

### React Components
- Use function declarations (not arrow functions)
- Named exports for components
- Type all props with `type`

### Commit Messages

Follow [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>(<scope>): <subject>

[optional body]

[optional footer]
```

See [.cursor/rules/git-commits.md](./.cursor/rules/git-commits.md) for detailed guidelines.

**Examples:**
- `feat(auth): add OAuth provider support`
- `fix(db): resolve connection pool leak`
- `docs(readme): improve setup instructions`
- `chore(deps): update tanstack packages`

## Pull Request Process

1. **Create a feature branch**

```bash
git checkout -b feat/your-feature-name
```

2. **Make your changes**
   - Follow code standards
   - Add tests if applicable
   - Update documentation

3. **Test your changes**

```bash
npm run typecheck
npm run lint
npm run test
```

4. **Commit with conventional format**

```bash
git commit -m "feat(scope): add new feature"
```

5. **Push and create PR**

```bash
git push origin feat/your-feature-name
```

Then create a Pull Request on GitHub with:
- Clear title following conventional commits format
- Description of changes and motivation
- Screenshots for UI changes
- Link to related issues

## What We're Looking For

### High Priority

- Bug fixes
- Security improvements
- Performance optimizations
- Documentation improvements
- Test coverage
- TypeScript type improvements

### Medium Priority

- New shadcn/ui component additions
- Better default configurations
- Example implementations
- Developer experience improvements

### Low Priority (Discuss First)

- New major dependencies
- Breaking changes
- Architecture changes
- Framework version updates

## Code Review

All submissions require review. We'll:

- Check code quality and standards
- Test functionality
- Verify documentation
- Ensure no breaking changes (or properly documented)

## Testing

When adding features:

1. Add unit tests for utilities
2. Add integration tests for API routes
3. Update existing tests if behavior changes
4. Ensure all tests pass: `npm run test`

## Documentation

Update relevant documentation:

- `README.md` - For setup or feature changes
- `QUICKSTART.md` - For getting started changes
- `CHANGELOG.md` - Add your changes to Unreleased section
- Code comments - For complex logic

## Project Structure

Understand the structure before contributing:

```
src/
├── components/        # React components
│   ├── ui/           # shadcn/ui components
│   └── ...           # Custom components
├── db/               # Database (Drizzle)
├── lib/              # Utilities and helpers
├── locales/          # Translations (Lingui)
├── routes/           # TanStack Router routes
└── styles.css        # Global styles
```

## Release Process

Maintainers handle releases:

1. Update version in `package.json`
2. Update `CHANGELOG.md`
3. Create GitHub release
4. Tag with version number

## Questions?

- Open a GitHub Discussion for general questions
- Open an Issue for bugs or feature requests
- Check existing documentation first

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

Thank you for contributing to TanStack Starter! 🎉

