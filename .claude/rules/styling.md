---
path_scope: "*.tsx,*.css,src/styles/**"
---

# Styling and Theming Standards

## Theme: Clean Minimal UI

- Base theme: **black and white** with **grey variants**
- Visual style: flat backgrounds, soft borders, neutral color hierarchy
- Avoid vibrant/saturated colors unless semantic (error, success)
- Consistent corner radius and balanced spacing

## WCAG Accessibility

- Follow latest WCAG guidelines
- Maintain sufficient color contrast (text/background)
- All interactive elements keyboard accessible
- Include appropriate ARIA roles/labels

## Tailwind Usage

- Use utility classes directly in JSX
- Avoid custom CSS unless necessary (complex layout/animation)
- Use `@apply` only in global/shared styles, not component JSX
- Prefer Tailwind's default spacing, sizing, typography scales

## Color Palette

### Backgrounds
```
bg-white, bg-black, bg-gray-50, bg-gray-100
```

### Text
```
text-black, text-white, text-gray-700, text-gray-500
```

### Borders
```
border-gray-200, border-gray-300
```

### Interactive States
```
hover:bg-gray-100, focus:outline-none, disabled:opacity-50
```

## Spacing & Layout

- Use consistent spacing utilities (`p-x`, `m-x`)
- Avoid hardcoded pixel values - use Tailwind scale
- Maintain vertical rhythm with margin/padding

## Typography

- Use Tailwind typography scale for font sizes
- Single readable sans-serif font
- Avoid mixing multiple font families

## Components

- Use `rounded` utilities for consistent border radius
- Use `shadow` utilities minimally for subtle depth
- All components responsive and mobile-friendly by default

## Example

```tsx
return (
  <div className="bg-white text-gray-800 p-4 rounded border border-gray-200 shadow-sm">
    <h2 className="text-lg font-semibold">Section Title</h2>
    <p className="text-sm text-gray-600">Clean, minimal UI block.</p>
  </div>
);
```
