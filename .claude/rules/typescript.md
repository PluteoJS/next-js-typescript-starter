# TypeScript Coding Standards

## Naming Conventions

### Interfaces
- Prefix with `i`, use PascalCase
- Examples: `iUser`, `iAuthPayload`, `iComponentProps`

### Type Aliases
- Suffix with `Type`, use camelCase
- Examples: `authType`, `tokenResponseType`

### Variables & Functions
- Use self-explanatory names
- `currentUserId` not `id`, `i`, or `k`
- `calculateTotal` not `calc`

## Function Style

### Block Body Required
Always use block body with explicit `return`:

```ts
// Correct
const getUserName = (user: iUser): string => {
  return user.name;
};

// Avoid
const getUserName = (user: iUser): string => user.name;
```

### Async/Await
Always use `async/await` over `.then()`:

```ts
// Correct
const userName = await getUserNameById(id);

// Avoid
getUserNameById(id).then((name) => console.log(name));
```

## Code Organization

### Spacing
Add empty lines between:
- Logical code blocks
- Variable declarations and function calls
- Different hook calls in React

### Imports
Group in order (enforced by ESLint):
1. External libraries
2. Aliased internal modules (`@/services`)
3. Relative imports

Separate groups with blank line.

## Type Safety

- Define types for props, return values, function arguments
- Avoid `any` - use proper types/interfaces
- Avoid `as` assertions unless narrowing is required

## Readability

- Keep functions short and focused
- Use early returns over deep nesting
- Use `const` by default, `let` only when mutation needed
- Replace magic numbers/strings with enums or named constants
- Avoid inline chaining of `.map()`, `.filter()` - use readable multi-line

## Documentation

- JSDoc for exported functions and complex utilities
- Inline comments for non-obvious logic, side effects, state intent

## Example

```ts
import { getUserById } from "@/services/userService";

export enum UserRole {
  Admin = "admin",
  Editor = "editor",
  Viewer = "viewer",
}

interface iUserProps {
  id: string;
  name: string;
  role: UserRole;
}

/**
 * Fetches the user name based on user ID.
 */
const getUserNameById = async (userId: string): Promise<string> => {
  const user = await getUserById(userId);

  // Return the name of the user if found
  return user.name;
};
```
