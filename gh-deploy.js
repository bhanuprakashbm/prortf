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

// Set up GitHub Pages custom domain config
console.log('Setting up GitHub Pages config...');
execSync('git checkout --orphan gh-pages-new', { stdio: 'inherit' });
execSync('git reset --hard', { stdio: 'inherit' });
execSync('cp -r build/* .', { stdio: 'inherit' });
execSync('cp build/.nojekyll .', { stdio: 'inherit' });
execSync('git add --all', { stdio: 'inherit' });
execSync('git commit -m "Deploy to GitHub Pages"', { stdio: 'inherit' });
execSync('git push -f origin gh-pages-new:gh-pages', { stdio: 'inherit' });
execSync('git checkout -f main', { stdio: 'inherit' });
execSync('git branch -D gh-pages-new', { stdio: 'inherit' });

console.log('Deployment complete! Your site should be available at https://bhanuprakashbm.github.io/portfolio/');
console.log('If you are still seeing a 404 error, check your GitHub repository settings under Pages tab.'); 