# Accessibility Widget Demo

A comprehensive, fully-featured accessibility widget for React applications. This widget allows users to customize their browsing experience with various accessibility features.

## Features

### 🔤 Font Size Adjustment
- Adjustable from 80% to 200%
- Easy increment/decrement buttons
- Slider control for precise adjustment

### 🎨 Contrast Modes
- **Normal**: Standard contrast
- **High Contrast**: Enhanced contrast for better visibility
- **Dark Mode**: Dark background with light text

### 📏 Spacing Controls
- **Line Spacing**: Adjust vertical spacing between lines (100% - 200%)
- **Letter Spacing**: Adjust horizontal spacing between characters (100% - 150%)

### 🔤 Dyslexic-Friendly Font
- Toggle OpenDyslexic font for improved readability
- Designed specifically for users with dyslexia

### 🖱️ Cursor Size
- **Normal**: Default cursor size
- **Large**: 2x cursor size
- **Extra Large**: 3x cursor size

### 🔗 Link Highlighting
- Enhanced link visibility with bold styling
- Yellow background highlights
- Thick underlines for better recognition

### 📖 Reading Guide
- Horizontal line that follows your cursor
- Helps maintain focus while reading
- Useful for tracking across wide content

### 📐 Text Alignment
- Left, Center, or Right alignment
- Applies to all text content

## Installation

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Run production server
pnpm start
```

## Usage

The accessibility widget automatically appears as a floating button in the bottom-right corner of the screen. Click it to open the settings panel and customize your experience.

### Integration

To integrate the accessibility widget into your own React application:

```tsx
import { AccessibilityProvider } from "@/contexts/AccessibilityContext";
import { AccessibilityWidget } from "@/components/AccessibilityWidget";

function App() {
  return (
    <AccessibilityProvider>
      <YourContent />
      <AccessibilityWidget />
    </AccessibilityProvider>
  );
}
```

## Accessibility Features

- **Keyboard Navigation**: Full keyboard support with visible focus indicators
- **ARIA Labels**: Proper ARIA labels for screen readers
- **Persistent Settings**: Settings are saved to localStorage and persist across sessions
- **Responsive Design**: Works on all screen sizes
- **Touch-Friendly**: Large touch targets for mobile devices

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Technologies Used

- **React 18**: UI framework
- **TypeScript**: Type safety
- **Tailwind CSS**: Styling
- **Vite**: Build tool
- **Lucide React**: Icons
- **Express**: Production server

## Project Structure

```
roisite/
├── client/
│   ├── src/
│   │   ├── components/
│   │   │   └── AccessibilityWidget.tsx
│   │   ├── contexts/
│   │   │   └── AccessibilityContext.tsx
│   │   ├── lib/
│   │   │   └── utils.ts
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── index.css
│   ├── public/
│   │   └── favicon.svg
│   └── index.html
├── server/
│   └── index.ts
├── package.json
├── vite.config.ts
├── tailwind.config.ts
└── tsconfig.json
```

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Support

For issues and questions, please open an issue on GitHub.
