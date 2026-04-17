# GitHub Pages Deployment Guide

This guide will help you deploy your Secure By Faith portfolio to GitHub Pages.

## Prerequisites

- GitHub account
- Git installed on your computer
- Your portfolio code ready to push

## Step-by-Step Deployment

### 1. Create GitHub Repository

**Option A: For Personal Website (username.github.io)**
- Create a repository named: `your-username.github.io` (replace with your actual GitHub username)
- Example: `bonheurbyiringiro.github.io`
- Your site will be available at: `https://your-username.github.io`

**Option B: For Project Repository**
- Create a repository with any name (e.g., `cyberwise-portfolio`)
- Your site will be available at: `https://your-username.github.io/repository-name`
- **Important**: If using this option, you need to update `next.config.js`:

```javascript
// Uncomment and update these lines in next.config.js:
basePath: '/cyberwise-portfolio',  // Replace with your repo name
assetPrefix: '/cyberwise-portfolio',
```

### 2. Initialize Git and Push Code

Open terminal in your project folder and run:

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit your changes
git commit -m "Initial commit - Portfolio ready for deployment"

# Add your GitHub repository as remote
git remote add origin https://github.com/your-username/your-repo-name.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### 3. Configure GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top right)
3. In the left sidebar, click **Pages**
4. Under **Build and deployment**:
   - Source: Select **GitHub Actions**
5. Click **Save**

### 4. Automatic Deployment

Once you push to GitHub:
- The GitHub Actions workflow will automatically trigger
- It will build your Next.js site
- Deploy it to GitHub Pages
- You can monitor the deployment:
  1. Go to **Actions** tab in your repository
  2. Click on the latest workflow run
  3. Wait for it to complete (usually 2-3 minutes)

### 5. Access Your Website

**For username.github.io:**
- Visit: `https://your-username.github.io`

**For project repository:**
- Visit: `https://your-username.github.io/repository-name`

## Repository URLs

Replace `your-username` with your GitHub username:

### For Personal Site (Recommended)
```
Repository name: your-username.github.io
Site URL: https://your-username.github.io
```

### For Project Repository
```
Repository name: cyberwise-portfolio (or any name)
Site URL: https://your-username.github.io/cyberwise-portfolio
```

## Testing Before Deployment

Test your build locally:

```bash
# Build the static site
npm run build

# The output will be in the 'out' folder
# You can test it with any static server
```

## Updating Your Site

After initial deployment, to update your site:

```bash
# Make your changes
git add .
git commit -m "Update portfolio content"
git push

# GitHub Actions will automatically rebuild and deploy
```

## Troubleshooting

### Images Not Loading
- Make sure images are in the `public` folder
- Check that image paths start with `/` (e.g., `/profile.jpg`)

### 404 Page Not Found
- If using project repository, make sure you updated `basePath` and `assetPrefix` in `next.config.js`
- Clear browser cache and try again

### Build Fails
- Check the Actions tab for error details
- Ensure all dependencies are in `package.json`
- Test build locally: `npm run build`

### Custom Domain (Optional)

To use a custom domain like `securebyfaith.com`:

1. Add a `CNAME` file to the `public` folder with your domain
2. Configure DNS settings with your domain provider
3. See [GitHub's custom domain guide](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)

## What Was Configured

✅ Next.js configured for static export
✅ GitHub Actions workflow created (`.github/workflows/github-pages.yml`)
✅ `.nojekyll` file added (prevents Jekyll processing)
✅ Image optimization disabled (required for static export)
✅ Package scripts updated

## Support

For issues with:
- **GitHub Pages**: [GitHub Pages Documentation](https://docs.github.com/en/pages)
- **Next.js Export**: [Next.js Static Export Guide](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)

---

**Ready to deploy?** Follow the steps above and your portfolio will be live! 🚀
