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



## Authentication

1. Basuc authenticatiobn
   - In every request we send creentials

2. Session storage (enter oncce emailid and password)
   - saved to two place db and browsers
   - server generates sessionID
   - Dleted after logout
   - not scalabale

3. JWT
   - give emailid and password at oncce
   - generates token 
   - token not saved to db stored at client side
   - token have three thiongs(header, payload, signature)
   - server gerates another token on the basis of payload

4. Oauth
   - authentication is possible using third party services

5. Oauth 2.0
   - here we are not sharing our credentials.
   - fake emil and password stored

- JWT and Oauth2.0 are are widely used
- Api key authenticatiobn used betweeb two server.


