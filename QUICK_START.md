# 🚀 Quick Start Guide - Master Guide Portfolio

## In 3 Easy Steps, You'll Have Your Site Running!

### ⚡ Step 1: Install Dependencies (2 minutes)

Open PowerShell and run:

```powershell
cd "c:\Users\antom\Desktop\MY PROJECTS\MasterGuide_Portfolio"
npm install
```

*This downloads and installs all necessary packages.*

---

### ⚡ Step 2: Start the Development Server (30 seconds)

```powershell
npm run dev
```

You'll see output like:
```
- ready started server on 0.0.0.0:3000, url: http://localhost:3000
```

---

### ⚡ Step 3: Open in Browser (10 seconds)

Visit: **http://localhost:3000**

🎉 **Your portfolio is now live!**

---

## 📝 Navigation Menu (All 8 Pages Available)

From the home page, click:
- 🏠 **Home** - Main showcase
- 👤 **Profile** - About you
- 🏆 **Honours** - Awards & recognition
- 🎯 **Achievements** - Milestones
- 📝 **Blog** - Articles & insights
- 💫 **Mission** - Your purpose
- 🤗 **Safe Space** - Community support
- 📧 **Contact** - Get in touch

---

## 🛠️ Common Commands

```bash
# Development
npm run dev          # Start dev server

# Production
npm run build        # Build for production
npm start            # Run production server

# Code Quality
npm run lint         # Check code quality
```

---

## 📝 Quick Customization

### Update Your Name & Info
Edit: `src/app/profile/page.tsx`
- Replace "Your Name"
- Update your bio
- Change experience

### Add Your Photo
1. Save image to `public/` folder (e.g., `profile.jpg`)
2. Edit `src/app/profile/page.tsx`
3. Replace the gradient box with an image tag

### Update Contact Info
Edit: `src/app/contact/page.tsx`
- Change email address
- Update phone number
- Add location
- Update social media links

### Change Colors
Edit: `tailwind.config.ts`
- Modify hex color values
- All pages update automatically

### Edit Blog Posts
Edit: `src/app/blog/page.tsx`
- Modify blog post array
- Add/remove posts
- Change categories

---

## 🌐 Deploying to the Web

### Easy: Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Select your GitHub repository
5. Click "Deploy"

**That's it! Your site is live! 🎉**

### Alternative Hosting
- Netlify
- GitHub Pages
- AWS Amplify
- DigitalOcean

---

## ✅ What You Have

✅ 8 fully-designed pages
✅ Professional color scheme
✅ Responsive design (mobile, tablet, desktop)
✅ Contact form
✅ Blog with filtering
✅ Navigation menu
✅ Footer with social links
✅ All ready to customize

---

## 🎨 Current Theme

- **Beige** accents (#c09f88)
- **Blue** primary (#2d508d)
- **Green/Sage** secondary (#2a9e7f)
- **Yellow** highlights (#ffd999)
- **Clean white** backgrounds

All colors can be changed in `tailwind.config.ts`

---

## 📚 Documentation Files

- **README.md** - Full documentation
- **PROJECT_SETUP.md** - Detailed setup guide
- **COLOR_GUIDE.md** - Color palette reference
- **DELIVERY_SUMMARY.md** - Feature overview

---

## 🆘 Troubleshooting

**Q: Port 3000 is already in use?**
```bash
npm run dev -- --port 3001
```

**Q: npm command not found?**
- Install Node.js from nodejs.org
- Restart your terminal

**Q: Changes not showing?**
- Hard refresh: Ctrl+Shift+R (or Cmd+Shift+R on Mac)
- Clear browser cache
- Restart dev server

**Q: Build errors?**
```bash
rm -rf .next
npm run build
```

---

## 💡 Pro Tips

1. **Use VS Code** - Install "ES7+ React/Redux/React-Native snippets"
2. **Live Preview** - Dev server auto-reloads on file changes
3. **Mobile Testing** - Use Chrome DevTools (F12) to test mobile view
4. **TypeScript** - Provides code hints and catches errors early
5. **Tailwind** - Hover over classes to see what they do

---

## 🎯 Next Immediate Tasks

1. ✅ Run `npm install` (installs dependencies)
2. ✅ Run `npm run dev` (starts server)
3. ✅ Open http://localhost:3000 (view site)
4. ✅ Edit `profile/page.tsx` (add your info)
5. ✅ Replace placeholders (add real content)
6. ✅ Deploy to Vercel (go live)

---

## 📞 You're Ready!

Everything is set up and ready to use. Your Master Guide portfolio is complete with:

- ✅ Professional design
- ✅ All 8 pages
- ✅ Responsive layout
- ✅ Contact form
- ✅ Blog system
- ✅ Mobile menu
- ✅ Footer
- ✅ Full documentation

**Start the dev server and see your site come to life!** 🚀

---

**Happy building! 🌟**

For detailed information, see README.md or PROJECT_SETUP.md
