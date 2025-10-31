# Project Rules

This directory contains project-specific rules and guidelines for AI assistants and developers.

## Files

### [git-commits.md](./git-commits.md)

Comprehensive guide for writing commit messages following Conventional Commits specification.

**Quick Reference:**

- Format: `<type>(<scope>): <subject>`
- Types: feat, fix, docs, style, refactor, perf, test, chore, ci
- Subject: ≤50 chars, imperative mood, lowercase, no period
- Examples:
  - `feat(schedule): add weekly view navigation`
  - `fix(auth): resolve session timeout issue`

## Root Configuration

### [.cursorrules](../../.cursorrules)

Main configuration file for Cursor AI with:

- Tech stack overview
- Code standards
- File naming conventions
- Import organization
- i18n requirements
- Security guidelines
- Common commands

## Adding New Rules

When adding new rules:

1. Create a new `.md` file in this directory
2. Use clear headings and examples
3. Reference it in the main `.cursorrules` file
4. Update this README

## Philosophy

Rules exist to:

- Maintain consistency across the codebase
- Speed up development with clear guidelines
- Reduce cognitive load with established patterns
- Make onboarding easier for new contributors
- Enable better AI assistance with clear context

**Balance**: Rules should help, not hinder. If a rule doesn't make sense in context, discuss and adapt.
