# Git Commit Conventions

## Format

Uses Conventional Commits (commitlint/config-conventional):

```
type(scope): description
```

- **type**: Required, lowercase
- **scope**: Optional, in parentheses
- **description**: Required, lowercase start, no period, max 72 chars

## Commit Types

| Type | Description |
|------|-------------|
| `feat` | New feature |
| `fix` | Bug fix |
| `docs` | Documentation only |
| `style` | Formatting, no code change |
| `refactor` | Code change, no feature/fix |
| `test` | Adding/updating tests |
| `chore` | Build, config, tooling |
| `perf` | Performance improvement |
| `ci` | CI/CD changes |
| `build` | Build system changes |
| `revert` | Revert previous commit |

## Rules

### NEVER Include AI Attribution
- No `Co-Authored-By` lines
- No references to Claude, AI tools, or assistants
- Commits should appear human-authored

### Unit Commits
- One logical change per commit
- Keep commits atomic and focused
- Split unrelated changes into separate commits

## Examples

```bash
# Feature
feat(auth): add password reset flow

# Bug fix
fix(api): handle null response in user fetch

# Refactor
refactor(store): simplify cart reducer logic

# Documentation
docs(readme): update installation instructions

# Chore
chore(deps): upgrade next to 14.1.0
```

## Bad Examples

```bash
# Too vague
fix: stuff

# Too long
feat(authentication): implement the complete user authentication flow with password reset and email verification

# AI attribution (NEVER do this)
feat: add button

Co-Authored-By: Claude <noreply@anthropic.com>
```
