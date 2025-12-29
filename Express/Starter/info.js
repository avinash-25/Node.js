//! Express ==> framework of NodeJS. (which is used to build web applications)

//& it is a minimal routing web framework (TODO: minimal, flexible, middleware, API, RESTApi's, routing)

//~ ==> collection of lib/modules.
//~ ==> framework provides a blueprint, using which we can build any application
//~ every framework follows a particular architecture (creation of folders and files) --> MVC architecture
//! IOC: (inversion of control) --> the execution control is in the hands of framework, express will decide which function to call.
//? MVC --> Models(database), Views(UI--> deprecated, ejs, pug, express-handle-bars), Controllers(logic)

//! in backend folder, a file must be present --> 'package.json' and only one file should be there

//! package.json ==> it is the heart of the project. it stores all the meta-data of the project like name, author, description, license and etc.. and along with that it stores dependencies
//! command to create package.json file --> "npm init -y" (this will create a file with default values)
//! command to create package.json file --> "npm init" (npm initialize) (this will ask for user input)

//? dependencies ==> it means, the different third party packages we are installing from the npm. without these dependencies the application will not run.
//? production dependency (this is the default setting)
//? development dependency (it is used during development process and is not considered after deployment). (the application will run without development dependency)

//! after creating .json file --> we can install third party packages
//? npm i/install package_name (that will be saved as prod dep)
//? npm i/install package_name1 pN2 pN3 ..... (that will be saved as prod dep)

//? to save as development dependency -->
// npm i package_name -D

//? to install globally
// npm i packageName -G(global)
// this can accessible in any project locally.
// 

//& after installing we will see three changes
// 1) a new folder will be created (node_modules) : this will store all the source code of the installed packages.
// 2) a new file will be created (package-lock.json): it contains all the information of the dependent packages (version-number, integrity, etc,..)
// 3) if .json file dependency will be added