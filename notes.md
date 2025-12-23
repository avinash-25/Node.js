## Types of rendering

1. old SSR
   - the rendering page will displayed on the UI
   - all things are done by the server only
   - so it becomes slow

2. csr (react)
   - we request about page then server points index.html file and only (empty, div tag) and script tag will be send
   - problem is optimization
   - initial slow loading
   - probelm in seo

3. ssr using nextjs
   - when we request for about page then about component , about.html, the bundle related to about page
   - not whole part 

4. SSR and ISR

### Reading heavy file

- for read the file firat we have to set the header
- then pass the file path and type

## Third party modules

- whenever we are installing any modules from npm or any other managers, we nust have to one file 'package.json' --> inside the root of the folder
- to create package.json file run a command npm init -y
- to install package npm i/install package_name
- npm i mongodb
- npm i express-async-handler
  
  - a folder will be created --> node_modules
  - a file will will be created --> package.lock.json
  - dependencies will added in .json file

***This will be discussed again in express***

1. we hae to connect or nodejs project with mongodb --> class MongoClient
2. connect() which is present inside the MongoClient
3. create a databse with the help of db("databaseName)
4. create a collection with the help of createCollection("collectionName)

