# GitHub Setup for Podcast Show Redesign

Follow these steps to put the project on GitHub and keep it in sync across computers.

---

## Part 1: On this computer (initial setup)

### Step 1: Create a new GitHub repository

1. Go to [github.com](https://github.com) and sign in
2. Click the **+** button (top right) → **New repository**
3. Name it: `podcast-show-redesign` (or whatever you prefer)
4. **Do not** add a README, .gitignore, or license (the project already has these)
5. Click **Create repository**

### Step 2: Initialize Git and push from this computer

Open Terminal in the project folder and run:

```bash
cd /Users/mrcharliepalmer/podcast-show-redesign

# Initialize git
git init

# Add all files
git add .

# First commit
git commit -m "Initial commit - Podcast Show Redesign"

# Add GitHub as remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/podcast-show-redesign.git

# Push to GitHub (main branch)
git branch -M main
git push -u origin main
```

---

## Part 2: On your other computer

### Step 1: Clone the repo

```bash
cd ~/Projects   # or wherever you keep projects

git clone https://github.com/YOUR_USERNAME/podcast-show-redesign.git

cd podcast-show-redesign
```

### Step 2: Run the site locally

```bash
npx serve
```
Then open `http://localhost:3000` in your browser.

---

## Part 3: Daily workflow (when you make changes)

### On this computer (after editing):

```bash
cd /Users/mrcharliepalmer/podcast-show-redesign

git add .
git commit -m "Describe your changes"
git push
```

### On your other computer (to get the latest):

```bash
cd ~/path/to/podcast-show-redesign

git pull
```

---

## Optional: Enable GitHub Pages (view live in browser)

1. Go to your repo on GitHub
2. **Settings** → **Pages** (left sidebar)
3. Under **Source**, select **Deploy from a branch**
4. Branch: **main**, folder: **/ (root)**
5. Click **Save**

Then visit: `https://YOUR_USERNAME.github.io/podcast-show-redesign/`

---

## Quick reference

| Action | Command |
|--------|---------|
| Save changes locally | `git add .` then `git commit -m "message"` |
| Push to GitHub | `git push` |
| Get latest on other computer | `git pull` |
| Check status | `git status` |
