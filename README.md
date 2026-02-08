# Master Guide Portfolio

A professional, modern portfolio website for Master Guides built with **Next.js** and **React**.

## 🎨 Features

- **Professional Design**: Clean, modern interface using beige, blue, white, yellow, and green theme colors
- **Responsive Layout**: Fully responsive design that works on all devices
- **Multiple Pages**: Comprehensive portfolio with dedicated pages for:
  - 🏠 **Home**: Dynamic hero and featured sections
  - 👤 **Profile**: Detailed professional information and background
  - 🏆 **Honours**: Recognition and accolades received
  - 🎯 **Achievements**: Milestones and accomplishments
  - 📝 **Blog**: Categorized articles with filtering
  - 💫 **Mission**: Purpose, vision, and core values
  - 🤗 **Safe Space**: Welcoming community support information
  - 📧 **Contact**: Comprehensive contact form and information

- **Features**:
  - Smooth animations and transitions
  - Professional navigation with mobile menu
  - Interactive components
  - Clean, semantic HTML
  - Tailwind CSS for styling
  - TypeScript for type safety

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm, yarn, pnpm, or bun package manager

### Installation

1. Navigate to the project directory:
```bash
cd MasterGuide_Portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
MasterGuide_Portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Home page
│   │   ├── profile/
│   │   │   └── page.tsx        # Profile page
│   │   ├── honours/
│   │   │   └── page.tsx        # Honours page
│   │   ├── achievements/
│   │   │   └── page.tsx        # Achievements page
│   │   ├── blog/
│   │   │   └── page.tsx        # Blog page
│   │   ├── mission/
│   │   │   └── page.tsx        # Mission page
│   │   ├── safe-space/
│   │   │   └── page.tsx        # Safe space page
│   │   └── contact/
│   │       └── page.tsx        # Contact page
│   ├── components/
│   │   ├── Navigation.tsx      # Navigation component
│   │   └── Footer.tsx          # Footer component
│   └── styles/
│       └── globals.css         # Global styles
├── public/                     # Static assets
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.js
```

## 🎨 Color Scheme

The portfolio uses a professional color palette:

- **Beige**: Primary accent (#c09f88)
- **Blue**: Secondary color (#2d508d)
- **White**: Background & text
- **Yellow**: Accent highlights (#ffd999)
- **Green/Sage**: Complementary color (#2a9e7f)

All colors are defined in `tailwind.config.ts` and can be easily customized.

## 📝 Customization

### Update Profile Information

1. Edit `src/app/profile/page.tsx` to add your information
2. Replace image placeholders with actual photos
3. Update personal details and background

### Add Blog Posts

1. Edit `src/app/blog/page.tsx` to add new blog entries
2. Each post includes title, category, date, and excerpt
3. Add filtering categories as needed

### Customize Colors

Edit the color values in `tailwind.config.ts` to match your brand:

```typescript
colors: {
  primary: { /* beige colors */ },
  secondary: { /* blue colors */ },
  accent: { /* yellow colors */ },
  sage: { /* green colors */ },
}
```

### Update Navigation

Edit `src/components/Navigation.tsx` to modify navigation items and styling.

## 🔨 Build Commands

- **Development**: `npm run dev` - Start development server
- **Build**: `npm run build` - Build for production
- **Start**: `npm start` - Run production server
- **Lint**: `npm run lint` - Run ESLint

## 📚 Technologies Used

- **Next.js 14**: React framework for production
- **React 18**: UI library
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **PostCSS**: CSS processing

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will automatically detect Next.js and deploy

### Deploy to Other Platforms

The project can be deployed to any platform that supports Node.js:
- Netlify
- AWS
- Google Cloud
- DigitalOcean
- Heroku

Run `npm run build` first, then follow the platform's deployment instructions.

## 💡 Tips & Best Practices

1. **Update Metadata**: Edit `src/app/layout.tsx` to update page title and description
2. **Add Images**: Place images in the `public/` folder and reference them
3. **SEO Optimization**: Update metadata for better search engine visibility
4. **Mobile Testing**: Always test on mobile devices
5. **Performance**: Use Next.js Image component for optimized images

## 🤝 Contributing

Feel free to customize and extend this portfolio to match your specific needs.

## 📄 License

This project is free to use and modify.

## 📞 Support

For questions or issues, reach out through the contact page in the portfolio.

---

**Built with ❤️ using Next.js and React**
