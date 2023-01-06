#From https://medium.com/swlh/deploy-vue-app-to-github-pages-2ada48d7397e
#!/usr/bin/env sh
# abort on errors
set -e
# build
npm run build
# navigate into the build output directory
cd dist
# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME
git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:liammccon/vue-portfolio.git master:gh-pages
cd -
