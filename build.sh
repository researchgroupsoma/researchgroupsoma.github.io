npm i

npm run build

cp -R dist/. docs

cp docs/index.html docs/404.html

git add .

git commit -m "Deploy"

git push