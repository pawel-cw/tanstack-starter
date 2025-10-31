# Git Commit Message Rules

## Format

Follow the **Conventional Commits** specification with this structure:

```
<type>(<scope>): <subject>

[optional body]

[optional footer(s)]
```

## Type (Required)

Use one of these types:

- **feat**: New feature for the user
- **fix**: Bug fix for the user
- **docs**: Documentation changes only
- **style**: Code style changes (formatting, missing semicolons, etc.) - no logic change
- **refactor**: Code restructuring without changing behavior
- **perf**: Performance improvements
- **test**: Adding or updating tests
- **chore**: Maintenance tasks (dependencies, build config, etc.)
- **ci**: CI/CD configuration changes
- **revert**: Reverting a previous commit

## Scope (Optional but Recommended)

Scope indicates the area of the codebase affected. Common scopes:

- **db**: Database schema, migrations, or queries
- **auth**: Authentication and authorization
- **ui**: User interface components
- **api**: API routes and endpoints
- **i18n**: Internationalization
- **deps**: Dependency updates
- **config**: Configuration files
- **docs**: Documentation
- **tests**: Testing infrastructure

Add your own feature-specific scopes as your project grows.

Examples:

- `feat(auth): add password reset functionality`
- `fix(db): resolve connection pool timeout`
- `docs(readme): update installation instructions`

## Subject Line (Required)

### Rules:

1. **Aim for 72 characters** (hard limit: 100)
2. **Use imperative mood** ("add" not "added" or "adds")
3. **Don't capitalize first letter** (lowercase)
4. **No period at the end**
5. **Be specific and clear**

**Why these limits?**

- 72 chars displays well on all platforms without truncation
- 100 chars is the absolute maximum before it gets unwieldy
- Shorter is better, but don't sacrifice clarity

### Good Examples:

✅ `feat(schedule): add weekly view navigation` (42 chars)
✅ `fix(employee): prevent duplicate email addresses` (52 chars)
✅ `refactor(db): extract query helpers to separate file` (60 chars)
✅ `feat(schedule): add drag-and-drop shift creation with conflict detection` (76 chars)
✅ `chore(deps): update drizzle-orm to v0.39.0 and migrate deprecated APIs` (76 chars)

### Bad Examples:

❌ `feat: Added some stuff` (vague, wrong tense, capitalized)
❌ `fixed bugs` (missing type/scope, not imperative)
❌ `feat(schedule): Add new employee scheduling feature with drag and drop support and automatic conflict detection for overlapping shifts` (119 chars - way too long!)
❌ `Update employee management feature with new functionality.` (capitalized, period at end, vague)
❌ `WIP` (not descriptive)

## Body (Optional)

Use body for:

- **Why** this change was needed
- **What** problem it solves
- **How** it works (if complex)
- Breaking changes or important notes

### Rules:

1. **Wrap at 80 characters** per line (or let your editor handle it)
2. **Separate from subject with blank line**
3. **Use bullet points** for multiple points
4. **Write in full sentences**

**Note**: Modern editors and Git tools handle wrapping well. Focus on clarity over exact character counts.

### Example:

```
feat(schedule): add shift conflict detection

Validates shifts before saving to prevent double-booking employees.
Checks both time overlap and employee availability constraints.

- Shows warning dialog if conflict detected
- Allows manager to override with confirmation
- Logs conflicts for audit trail
```

## Footer (Optional)

Use footer for:

- **Breaking changes**: `BREAKING CHANGE: <description>`
- **Issue references**: `Closes #123`, `Fixes #456`, `Relates to #789`
- **Reviewed by**: `Reviewed-by: Name <email>`
- **Co-authored by**: `Co-authored-by: Name <email>`

### Example:

```
feat(auth)!: migrate to better-auth v2

BREAKING CHANGE: Session API has changed. All sessions will be
invalidated and users need to log in again.

Closes #45
```

## Special Cases

### Breaking Changes

Indicate with `!` after type/scope AND in footer:

```
feat(api)!: change shift endpoint response format

BREAKING CHANGE: The /api/shifts endpoint now returns an object
with pagination metadata instead of a plain array.
```

### Revert Commits

```
revert: feat(schedule): add weekly view navigation

This reverts commit 1234567. Caused performance issues on large datasets.
```

### Work in Progress (Avoid in main branch)

If absolutely necessary for feature branches:

```
wip(schedule): partial implementation of drag-and-drop

Not ready for review. Saving progress before switching branches.
```

## Multi-Line Commit Commands

### Using `git commit` (opens editor):

```bash
git commit
```

### Inline multi-line (terminal):

```bash
git commit -m "feat(schedule): add shift conflict detection" \
  -m "" \
  -m "Validates shifts before saving to prevent double-booking." \
  -m "Shows warning dialog if conflict detected."
```

## Quick Reference

```
# Simple commit
git commit -m "fix(auth): resolve session timeout issue"

# With body
git commit -m "feat(employee): add avatar upload" \
  -m "" \
  -m "Integrates with Cloudflare R2 for storage."

# With issue reference
git commit -m "fix(db): prevent migration rollback errors" \
  -m "" \
  -m "Closes #123"

# Breaking change
git commit -m "feat(api)!: restructure shift response format" \
  -m "" \
  -m "BREAKING CHANGE: Endpoints now return ISO 8601 dates."
```

## Commit Message Checklist

Before committing, verify:

- [ ] Type is correct and from allowed list
- [ ] Scope is relevant (if used)
- [ ] Subject is ≤100 chars (ideally ≤72), imperative mood, lowercase, no period
- [ ] Body explains WHY (if needed)
- [ ] Breaking changes marked with `!` and in footer
- [ ] Issue references included (if applicable)
- [ ] Commit is focused (single logical change)

## Philosophy

**Why these rules?**

1. **Consistency**: Makes history readable and searchable
2. **Automation**: Enables changelog generation and semantic versioning
3. **Clarity**: Forces you to think about what you're committing
4. **Communication**: Helps team understand changes quickly
5. **Tooling**: Works with conventional-changelog, semantic-release, etc.

## Example Commits

```
feat(db): add neon postgres configuration
fix(i18n): correct lingui macro import paths
docs(readme): add quick start guide
chore(deps): update tanstack packages to latest
refactor(auth): extract session helpers to separate module
test(api): add integration tests for user endpoints
ci: add database migration step to deployment
```

## Tools

Consider installing:

- **commitlint**: Enforce rules automatically
- **husky**: Run commitlint on pre-commit hook
- **commitizen**: Interactive CLI for creating commits

```bash
# Optional: Install commitlint
npm install --save-dev @commitlint/cli @commitlint/config-conventional
```

---

**Remember**: Good commit messages are a gift to your future self and your team. Take the extra 30 seconds to write them well.
