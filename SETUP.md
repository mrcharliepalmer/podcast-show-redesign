# Setup Guide - GitHub Repository

## Initializing Git and Pushing to GitHub

### Step 1: Initialize Git Repository

```bash
cd ~/podcast-show-redesign
git init
git add .
git commit -m "Initial commit: Simplified redesign of The Podcast Show London website"
```

### Step 2: Create GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in
2. Click the "+" icon in the top right corner
3. Select "New repository"
4. Name it: `podcast-show-redesign` (or your preferred name)
5. **Don't** initialize with README (we already have one)
6. Click "Create repository"

### Step 3: Connect and Push

GitHub will show you commands. Use these:

```bash
git remote add origin https://github.com/YOUR_USERNAME/podcast-show-redesign.git
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

### Step 4: View Your Site (Optional)

You can use GitHub Pages to host a live preview:

1. Go to your repository on GitHub
2. Click "Settings" → "Pages"
3. Under "Source", select "main" branch
4. Click "Save"
5. Your site will be available at: `https://YOUR_USERNAME.github.io/podcast-show-redesign/`

## Local Preview

To preview the site locally before pushing:

1. Open `index.html` in your web browser
2. Or use a local server:
   ```bash
   # Python 3
   python3 -m http.server 8000
   
   # Then visit: http://localhost:8000
   ```

## Making Changes

After making changes:

```bash
git add .
git commit -m "Description of your changes"
git push
```

## Next Steps

- Customize colors and branding
- Add actual images and logos
- Connect booking forms to your backend
- Add analytics tracking
- Test on various devices
