# PluteoJS Next.js Starter

A production-ready Next.js TypeScript starter template with Redux Toolkit, Axios services, and shadcn/ui components.

Created by [Muhammad Swalah](https://swalahamani.com) at [HeedLabs](https://heedlabs.com).

> **Looking for a full-stack solution?** Check out the [PluteoJS Full-Stack Monorepo Template](https://github.com/PluteoJS/pluteojs-template) with Next.js, Express API, Drizzle ORM, and Turborepo.

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript 5.9+ (strict mode)
- **Styling**: Tailwind CSS 4, shadcn/ui
- **State Management**: Redux Toolkit
- **HTTP Client**: Axios with interceptors
- **Code Quality**: ESLint 9, Prettier, Husky
- **Git Workflow**: Commitlint, standard-version

## Getting Started

### Prerequisites

- Node.js 20.9 or higher
- Yarn 4.7+

### Installation

```bash
# Clone the repository
git clone https://github.com/PluteoJS/next-js-typescript-starter.git
cd next-js-typescript-starter

# Install dependencies
yarn install
```

### Development

```bash
# Start development server with Turbopack
yarn start:dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### Build

```bash
# Create production build
yarn build

# Start production server
yarn start:production
```

### Code Quality

```bash
# Run ESLint and TypeScript checks
yarn lint

# Check code formatting
yarn format
```

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/             # React components
│   ├── lib/shadcn/         # shadcn/ui components (DO NOT MODIFY)
│   └── ...                 # Custom components
├── services/               # API services
│   └── api/
│       ├── PluteoJS/       # Axios instance & interceptors
│       └── index.ts        # Service exports
├── store/                  # Redux Toolkit
│   ├── index.ts            # Store configuration
│   ├── Hooks.ts            # Typed hooks
│   └── example/            # Example slice
├── utils/                  # Helper utilities
└── customTypes/            # TypeScript type definitions
```

## Key Features

### Redux Toolkit

Pre-configured state management with typed hooks:

```tsx
import { useAppSelector, useAppDispatch } from "@/store/Hooks";

const user = useAppSelector((state) => state.example.value);
const dispatch = useAppDispatch();
```

### Axios Services

API service architecture with request/response interceptors:

```tsx
import { apiServer } from "@/services/api/PluteoJS";

const response = await apiServer.get("/endpoint");
```

### shadcn/ui Components

Install components using the CLI:

```bash
npx shadcn-ui@latest add button
npx shadcn-ui@latest add dialog
```

Import from the configured path:

```tsx
import { Button } from "@/components/lib/shadcn/ui/button";
```

> **Note:** Do not modify files in `src/components/lib/shadcn/ui/`. Create wrapper components instead.

### Git Workflow

- **Husky**: Pre-commit hooks for linting and formatting
- **Commitlint**: Enforces [Conventional Commits](https://www.conventionalcommits.org/)
- **standard-version**: Automated versioning and changelog

## Useful Commands

| Command              | Description                              |
| -------------------- | ---------------------------------------- |
| `yarn start:dev`     | Start development server with Turbopack |
| `yarn build`         | Create production build                  |
| `yarn start:production` | Start production server               |
| `yarn lint`          | Run ESLint and TypeScript checks         |
| `yarn format`        | Check code formatting with Prettier      |
| `yarn check-types`   | Run TypeScript type checking             |

## Configuration

### Environment Variables

Copy `.env.development` for local development:

```bash
NEXT_PUBLIC_API_URL=http://localhost:3000/api
```

### TypeScript

Strict mode is enabled with custom naming conventions:
- Interfaces: `iInterfaceName` (prefix with `i`)
- Types: `typeNameType` (suffix with `Type`)

### ESLint

Uses ESLint 9 flat config with:
- TypeScript support
- React hooks rules
- Import ordering
- Prettier integration

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Redux Toolkit Documentation](https://redux-toolkit.js.org/)
- [shadcn/ui Documentation](https://ui.shadcn.com)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## Related Projects

- [PluteoJS Full-Stack Template](https://github.com/PluteoJS/pluteojs-template) - Complete monorepo with Next.js, Express API, Drizzle ORM, and Turborepo

## License

MIT
