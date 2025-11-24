# 🚀 Deployment Guide

## Quick Deploy to Vercel

### Step 1: Push to GitHub

```bash
# Initialize git repository
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: CyberWise AI Portfolio"

# Create GitHub repository and push
git remote add origin https://github.com/BonheurByiringiro/cyberwise-portfolio.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy to Vercel

1. Go to [vercel.com/new](https://vercel.com/new)
2. Click "Import Git Repository"
3. Select your `cyberwise-portfolio` repository
4. Vercel will auto-detect Next.js settings
5. Click "Deploy"
6. Wait 2-3 minutes for deployment

Your site will be live at: `https://cyberwise-portfolio.vercel.app`

### Step 3: Add Custom Domain

1. In Vercel dashboard, go to your project
2. Click "Settings" → "Domains"
3. Add your domain: **securebyfaith.com**
4. Follow the DNS configuration steps

#### DNS Configuration for Namecheap

**For Root Domain (securebyfaith.com):**
- Type: `A Record`
- Host: `@`
- Value: `76.76.21.21` (Vercel IP)
- TTL: Automatic

**For www subdomain:**
- Type: `CNAME`
- Host: `www`
- Value: `cname.vercel-dns.com`
- TTL: Automatic

**Wait 10-60 minutes** for DNS propagation.

## Alternative: Deploy to Netlify

1. Go to [netlify.com](https://app.netlify.com)
2. Click "Add new site" → "Import existing project"
3. Connect your GitHub repository
4. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
5. Click "Deploy site"

## Environment Variables

If you add features that need API keys:

1. In Vercel/Netlify dashboard
2. Go to "Settings" → "Environment Variables"
3. Add:
   - `EMAIL_API_KEY` (if using contact form)
   - `NEXT_PUBLIC_GA_ID` (if using analytics)

## Custom Domain Checklist

- [ ] Register domain (securebyfaith.com)
- [ ] Add domain in Vercel/Netlify
- [ ] Configure DNS records
- [ ] Wait for DNS propagation (up to 48 hours, usually 10-30 min)
- [ ] Enable SSL/HTTPS (automatic with Vercel/Netlify)
- [ ] Test site at your custom domain

## Performance Optimization

Your site is already optimized with:
- ✅ Next.js App Router
- ✅ Automatic code splitting
- ✅ Image optimization
- ✅ Static generation
- ✅ Edge runtime ready

## Monitoring

Add analytics (optional):

1. **Google Analytics**:
   - Get GA ID from [analytics.google.com](https://analytics.google.com)
   - Add to `.env.local`
   - Use `next/script` to add tracking

2. **Vercel Analytics** (built-in):
   - Automatically enabled on Vercel
   - No setup needed!

## Troubleshooting

### Build Failed
```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```

### Domain Not Working
- Check DNS records are correct
- Wait longer for propagation
- Clear browser cache
- Try incognito mode

### Slow Performance
- Enable Vercel Edge Network
- Optimize images (already done with Next.js)
- Check Core Web Vitals in Vercel dashboard

## Next Steps

After deployment:
1. Test on mobile devices
2. Share your portfolio URL
3. Add to LinkedIn profile
4. Update GitHub README with live link
5. Submit to search engines

---

**Need Help?** 
- Vercel Docs: https://vercel.com/docs
- Next.js Docs: https://nextjs.org/docs
