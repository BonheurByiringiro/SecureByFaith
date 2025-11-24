# GitHub Actions Workflow Setup

## 📋 Workflows Created

### 1. **deploy.yml** - Automatic Deployment
- Deploys to Vercel on every push to `main`
- Creates preview deployments for pull requests
- Runs build and lint checks before deployment

### 2. **code-quality.yml** - Code Quality Checks
- Runs TypeScript type checking
- Runs ESLint for code quality
- Tests build process
- Runs on all pushes and PRs

## 🔐 Required GitHub Secrets

You need to add these secrets to your GitHub repository for automatic deployment:

### Step 1: Get Vercel Tokens

1. Go to [Vercel Dashboard](https://vercel.com/account/tokens)
2. Create a new token named "GitHub Actions"
3. Copy the token

### Step 2: Get Vercel Project IDs

1. Go to your Vercel project settings
2. Copy your **Project ID**
3. Copy your **Organization ID** (Team ID)

Or use Vercel CLI:
```bash
npm i -g vercel
vercel login
vercel link
```

This will create a `.vercel/project.json` file with your IDs.

### Step 3: Add Secrets to GitHub

1. Go to your GitHub repository: `https://github.com/BonheurByiringiro/SecurebyFaith`
2. Click **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret**
4. Add these three secrets:

| Secret Name | Description | Where to Find |
|-------------|-------------|---------------|
| `VERCEL_TOKEN` | Your Vercel API token | [Vercel Account Tokens](https://vercel.com/account/tokens) |
| `VERCEL_ORG_ID` | Your Vercel organization ID | Project Settings or `.vercel/project.json` |
| `VERCEL_PROJECT_ID` | Your Vercel project ID | Project Settings or `.vercel/project.json` |

## 🚀 How It Works

### Automatic Deployment Flow:

1. **Push to GitHub** → Workflow triggers
2. **Install dependencies** → `npm ci`
3. **Run quality checks** → Linting & type checking
4. **Build project** → `npm run build`
5. **Deploy to Vercel** → Production deployment
6. **Done!** → Your site is live at securebyfaith.com

### For Pull Requests:

1. Creates a **preview deployment**
2. Runs all quality checks
3. Posts preview URL in PR comments
4. Perfect for testing changes before merging

## ✅ Benefits

- ✨ **Automatic deployments** - Push code, get live site
- 🔍 **Quality checks** - Catch errors before deployment
- 🚀 **Fast deployments** - Live in under 2 minutes
- 🔄 **Preview deployments** - Test changes safely
- 📊 **Build logs** - Easy debugging in GitHub Actions tab

## 🛠️ Manual Deployment (Alternative)

If you prefer manual deployment without GitHub Actions:

1. Install Vercel CLI: `npm i -g vercel`
2. Login: `vercel login`
3. Deploy: `vercel --prod`

## 📝 Workflow Customization

### To disable automatic deployment:
Comment out or delete the `deploy.yml` file

### To add more checks:
Edit `.github/workflows/code-quality.yml` and add:
- Unit tests
- E2E tests
- Security scans
- Lighthouse performance tests

## 🎯 Next Steps

1. ✅ Push workflows to GitHub
2. ⏳ Set up Vercel project
3. 🔐 Add GitHub secrets
4. 🚀 Push code and watch it deploy automatically!

---

**Need Help?**
- [GitHub Actions Docs](https://docs.github.com/en/actions)
- [Vercel CLI Docs](https://vercel.com/docs/cli)
