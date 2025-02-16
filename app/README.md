# Pixel Oracle

A simple web app that generates random, category-specific responses to your questions.

## Features
- Ask a question and select a category (Romance, Wealth, Career).
- Receive a random response tailored to the selected category.
- Responsive design for all screen sizes.

## Technologies Used
- React
- Google Fonts ("Press Start 2P")
- CSS

## Deployment
### Vercel
1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```
2. Deploy:
   ```bash
   vercel
   ```

### GitHub Pages
1. Install `gh-pages`:
   ```bash
   npm install gh-pages --save-dev
   ```
2. Update `package.json`:
   ```json
   "homepage": "https://<username>.github.io/pixel-oracle",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```
3. Deploy:
   ```bash
   npm run deploy
   ```

## Local Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/<username>/pixel-oracle.git
   cd pixel-oracle
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the app:
   ```bash
   npm start
   ```

## License
MIT License