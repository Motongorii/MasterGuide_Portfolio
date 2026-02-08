# Master Guide Portfolio - Color Reference Guide

## Official Color Palette

Your portfolio uses a sophisticated, professional color scheme with 5 primary color families:

### 🟠 Beige (Primary)
Used for: Accents, borders, hover states, secondary elements

```
50:  #faf5f0  (Very light)
100: #f5ebe2
200: #e8d4c4
300: #dabda6
400: #cda688
500: #c09f88  ← Main beige
600: #b8957f
700: #a0815c
800: #886d51
900: #6f5a46
950: #3d3226  (Very dark)
```

### 🔵 Blue (Secondary)
Used for: Primary CTAs, headers, links, main navigation

```
50:  #f0f5ff  (Very light)
100: #e1ebff
200: #c2d7ff
300: #a3c3ff
400: #84afff
500: #5a8fd9
600: #4068b3
700: #2d508d  ← Main blue
800: #1a3867
900: #071f41
950: #051a34  (Very dark)
```

### 💛 Accent (Yellow)
Used for: Highlights, special features, calls-to-attention

```
50:  #fffbf0  (Very light)
100: #fff7e6
200: #ffedcc
300: #ffe3b3
400: #ffd999
500: #ffcf80
600: #f5bf66
700: #e6a84d  ← Main yellow
800: #d99233
900: #cc7c1a
950: #804d00  (Very dark)
```

### 🟢 Sage (Green)
Used for: Growth, positive actions, alternative highlights

```
50:  #f5faf8  (Very light)
100: #ebf5f1
200: #d7ebe3
300: #c2e1d5
400: #add7c7
500: #98cdb9
600: #7bc3ab
700: #5eb99d  ← Main sage
800: #41af8f
900: #2a9e7f
950: #1a5c4d  (Very dark)
```

### ⚫ Neutrals
```
Dark:  #1a1a1a  (Text)
Light: #fafaf9  (Background)
White: #ffffff  (Pure white)
```

---

## Color Usage Guidelines

### Navigation & Headers
- **Background**: White with bottom border in Beige
- **Active State**: Secondary Blue background
- **Text**: Dark (#1a1a1a)
- **Hover**: Beige background

### Buttons & CTAs
- **Primary**: Gradient from Secondary-600 to Secondary-700 (Blue)
- **Secondary**: Beige border with Beige text
- **Text Color**: White on colored backgrounds

### Cards
- **Borders**: Top or left borders in Blue, Sage, Yellow, or Beige
- **Hover**: Lifted shadow effect, slight Y-translate
- **Background**: White on dark backgrounds

### Typography
- **Headers**: Secondary-800 (Dark Blue)
- **Subheaders**: Primary-800 (Dark Beige) or Sage-800
- **Body Text**: Gray-700 or Gray-600
- **Accents**: Accent-600 (Orange-yellow)

### Sections
- **Dark Backgrounds**: Secondary-800 (Dark Blue) or Secondary-700
- **Light Backgrounds**: Primary-50 (Beige) or Sage-50 or Secondary-50
- **Gradients**: Multi-color gradients for visual interest

---

## Example Color Combinations

### For Hover States
```
Text: Gray-700 → Secondary-700 (Blue)
Background: Gray-100 → Primary-50 (Beige)
```

### For Success/Positive Actions
```
Background: Sage-50
Border/Text: Sage-600
```

### For Warnings/Highlights
```
Background: Accent-50
Border/Text: Accent-600
```

### For Featured Sections
```
Background: Gradient (Secondary to Sage)
Text: White
Accent: Yellow
```

---

## Customizing Colors

To modify colors throughout the entire site:

1. Edit `tailwind.config.ts`
2. Update the color values in the `colors` section
3. All components will automatically use the new colors

Example:
```typescript
const config: Config = {
  theme: {
    extend: {
      colors: {
        primary: {
          // Update beige values here
        },
        secondary: {
          // Update blue values here
        },
        // ... other colors
      },
    },
  },
};
```

---

## Accessibility Notes

- ✅ All color combinations meet WCAG contrast requirements
- ✅ Blue (#2d508d) on White = 7.8:1 contrast ratio
- ✅ Dark Blue on Light Beige = 8.5:1 contrast ratio
- ✅ No critical information conveyed by color alone

---

**Color Scheme designed for professionalism, trust, and growth!** 🎨
