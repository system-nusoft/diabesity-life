# Diabesity Website Clone

A pixel-perfect Next.js clone of the diabesity.life website, built with TypeScript, Tailwind CSS, and shadcn/ui components.

## Features

- **Exact Design Match**: Pixel-perfect recreation following the original diabesity.life website
- **Responsive Design**: Fully responsive layout that works on all devices
- **Authentic Sections**:
  - Hero section with slider navigation
  - Mission section with dark/light split layout
  - Latest news/insights with category tags
  - Knowledge section with image overlay
  - Help/services with colored gradient overlays
  - Donation section with circular button
  - FAQ/Questions section with colorful boxes
  - Blog/support cards
  - Contact specialist CTA
- **Typography**: Uses Sora for headings and Epilogue for body text
- **Color Scheme**: Purple primary (#623295), orange accents (#ff9d5c)
- **Mobile Navigation**: Responsive hamburger menu for mobile devices

## Tech Stack

- **Framework**: Next.js 15.5.4 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Fonts**: Sora (headings), Epilogue (body text)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository or navigate to the project directory:
```bash
cd ~/Documents/diabesity-clone
```

2. Install dependencies (if not already installed):
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open your browser and navigate to:
```
http://localhost:3000
```
(If port 3000 is in use, it will automatically use port 3001)

## Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```
diabesity-clone/
├── app/
│   ├── layout.tsx          # Root layout with Header and Footer
│   ├── page.tsx            # Home page with all sections
│   └── globals.css         # Global styles and theme variables
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── Footer.tsx          # Footer with links and contact info
│   └── ui/                 # shadcn/ui components
│       ├── button.tsx
│       └── card.tsx
└── lib/
    └── utils.ts            # Utility functions
```

## Customization

### Colors

The color scheme is defined in `app/globals.css` using CSS custom properties:
- **Primary**: Purple (#623295)
- **Secondary**: Gold/Yellow (#FFCE59)

To change colors, modify the `:root` variables in `app/globals.css`.

### Content

All content can be edited in:
- `app/page.tsx` - Main page sections
- `components/Header.tsx` - Navigation menu items
- `components/Footer.tsx` - Footer links and contact information

## Deployment

### Vercel (Recommended)

The easiest way to deploy is using Vercel:

```bash
npm install -g vercel
vercel
```

### Other Platforms

Build the project and deploy the `.next` folder:

```bash
npm run build
npm start
```

## License

This is a clone project for educational purposes.

## Credits

- Original website: https://diabesity.life/
- Built with [Next.js](https://nextjs.org/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
