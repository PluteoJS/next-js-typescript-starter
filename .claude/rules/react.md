---
path_scope: "*.tsx,src/components/**"
---

# React Component Guidelines

## Folder Structure

Each component in its own PascalCase folder:
```
ComponentName/
├── ComponentName.tsx    # Main implementation
└── index.ts            # Barrel export
```

### Barrel Export Pattern
```ts
import ComponentName from "./ComponentName";
export default ComponentName;
```

## Props Interface

- Name as `iComponentNameProps`
- Type strictly with TypeScript
- Use destructuring to access props
- Mark optional props with `?`

```tsx
interface iButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
}

const Button: FC<iButtonProps> = ({ label, onClick, disabled = false }) => {
  return (
    <button onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
};
```

## Hooks Organization

- Group hooks logically
- Separate each hook with a blank line
- Clean up effects with subscriptions/timers

```tsx
const [email, setEmail] = useState("");

const [isLoading, setIsLoading] = useState(false);

useEffect(() => {
  const interval = setInterval(() => {
    // logic
  }, 1000);

  return () => clearInterval(interval);
}, []);
```

## Controlled Components

Always use controlled inputs:
```tsx
const [email, setEmail] = useState("");

return <input value={email} onChange={(e) => setEmail(e.target.value)} />;
```

## Component Structure

- Keep components small, single responsibility
- Use internal render helpers for modular JSX
- Avoid nested conditionals - use early returns

```tsx
const renderUserInfo = () => {
  return <div>{user.name}</div>;
};

return <div>{renderUserInfo()}</div>;
```

## State Naming

Use descriptive names reflecting purpose:
```tsx
const [isModalVisible, setIsModalVisible] = useState(false);
```

## Event Handlers

Strongly type event handlers:
```tsx
const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
};
```

## Styling

- Components must be responsive by default
- Prefer Tailwind CSS utility classes
- Avoid hardcoded layout values

## Reusability

- Create wrapper components instead of modifying library defaults
- Ensure public-facing components are composable
