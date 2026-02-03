---
path_scope: "src/components/lib/shadcn/**"
---

# ShadCN UI Components

## DO NOT MODIFY

Files in `src/components/lib/shadcn/ui/` are managed by the ShadCN CLI and may be overwritten during updates.

**Never edit these files directly.**

## Customization Approach

### Create Wrapper Components

For custom behavior or styling, create wrappers in `src/components/`:

```tsx
// src/components/CustomButton/CustomButton.tsx
import { Button } from "@/components/lib/shadcn/ui/button";

interface iCustomButtonProps {
  label: string;
  variant?: "primary" | "secondary";
}

const CustomButton: FC<iCustomButtonProps> = ({ label, variant = "primary" }) => {
  return (
    <Button
      className={variant === "primary" ? "bg-black text-white" : "bg-gray-100"}
    >
      {label}
    </Button>
  );
};

export default CustomButton;
```

### Apply Tailwind Classes

Use `className` prop to extend ShadCN components:

```tsx
<Button className="w-full mt-4">Submit</Button>
```

## Adding New ShadCN Components

Use the CLI to add components:

```bash
npx shadcn@latest add button
npx shadcn@latest add dialog
```

Components are installed to `src/components/lib/shadcn/ui/`.

## AI Assistance Rules

- Never suggest modifications to `src/components/lib/shadcn/ui/**`
- Focus suggestions on wrapper components
- Recommend `className` overrides for styling
