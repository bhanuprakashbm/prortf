const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Build the project
console.log('Building the project...');
execSync('npm run build', { stdio: 'inherit' });

// Create .nojekyll file
console.log('Creating .nojekyll file...');
fs.writeFileSync(path.join(__dirname, 'build', '.nojekyll'), '');

// Create a copy of index.html as 404.html
console.log('Creating 404.html file...');
const indexHtml = fs.readFileSync(path.join(__dirname, 'build', 'index.html'), 'utf8');
fs.writeFileSync(path.join(__dirname, 'build', '404.html'), indexHtml);

// Create a robots.txt file
console.log('Creating robots.txt file...');
fs.writeFileSync(path.join(__dirname, 'build', 'robots.txt'), 'User-agent: *\nAllow: /');

// Initialize git in the build folder
console.log('Initializing git in the build folder...');
execSync('cd build && git init && git add . && git commit -m "Deploy to GitHub Pages"', { stdio: 'inherit' });

// Force push to gh-pages branch
console.log('Pushing to gh-pages branch...');
execSync('cd build && git push -f https://github.com/bhanuprakashbm/portfolio.git master:gh-pages', { stdio: 'inherit' });

console.log('Deployment complete!'); 