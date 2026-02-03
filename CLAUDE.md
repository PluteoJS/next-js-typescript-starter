# Next.js TypeScript Starter

## Tech Stack
- Next.js 14+ with App Router
- TypeScript (strict mode)
- Tailwind CSS
- ShadCN UI components
- Redux Toolkit for state management

## Commands
```bash
yarn dev          # Start development server
yarn build        # Production build
yarn lint         # Run ESLint
yarn type-check   # TypeScript check
```

## Directory Structure
```
src/
├── app/          # Next.js pages and layouts
├── components/   # Reusable UI components
│   └── lib/shadcn/  # ShadCN CLI-managed (DO NOT MODIFY)
├── services/api/ # API service logic and Axios setup
├── store/        # Redux Toolkit store and slices
├── utils/        # Utility/helper functions
└── styles/       # Tailwind style constants
```

## Critical Rules

### ShadCN Components
**DO NOT MODIFY** files in `src/components/lib/shadcn/ui/`. Create wrapper components instead.

### Async Code
Always use `async/await` over `.then()` chains.

### Imports
Import order (enforced by ESLint):
1. External libraries
2. Aliased internal (`@/services`, `@/components`)
3. Relative imports

Separate groups with blank lines.

## Rules Reference
- TypeScript conventions: `.claude/rules/typescript.md`
- React patterns: `.claude/rules/react.md`
- Styling guide: `.claude/rules/styling.md`
- ShadCN usage: `.claude/rules/shadcn.md`
- Git commits: `.claude/rules/git-commits.md`
