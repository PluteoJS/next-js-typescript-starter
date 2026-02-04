# Components Directory

## Folder Structure

Each component in its own PascalCase folder:

```
ComponentName/
├── ComponentName.tsx    # Main implementation
├── ComponentName.test.tsx  # Tests (optional)
└── index.ts            # Barrel export
```

## Barrel Export

```ts
import ComponentName from "./ComponentName";
export default ComponentName;
```

## Props Interface

```tsx
interface iComponentNameProps {
  requiredProp: string;
  optionalProp?: number;
}

const ComponentName: FC<iComponentNameProps> = ({ requiredProp, optionalProp = 0 }) => {
  // ...
};

ComponentName.displayName = "ComponentName";

export default ComponentName;
```

## displayName Requirement

Always set `displayName` for debugging:

```tsx
ComponentName.displayName = "ComponentName";
```

## ShadCN Components

Located in `lib/shadcn/ui/`. **DO NOT MODIFY** - create wrappers instead.

See `.claude/rules/react.md` for full React patterns.
