[Description]

# Installation
Run through these steps in order:
### 1. Clone the template
At first, you need to clone this template on your local machine, use this on your terminal
```
git clone https://github.com/mhmdtshref/typescript-express-sequelize-template.git
```
### 2. Add environments files
You need to add environment variables to be able to connect to server port, host and database server. There's an example of env file in `environment/.env.example`. You should create a new file for each development mode, for example, for local mode, create a file with the name `.env.local`, then copy the example file content, and replace the variables values with yours.
### 3. Install NPM packages
Now, you need to install packages stored in package.json and package-lock.json files, just run this command on the root directory: `environments/.env.example`
### 4. Run the app (initial app):
Warning: By running this the up comming command, you'll create the user example table to the database.
Just run the npm script command:
```
npm run serve:[ENVIRONMENT_NAME]
```
The template is supporting four environments, you can modify them from pakcage.json > scripts
npm install.For example, run the template `npm run serve:local`, to run the app using local environment mode.
# Usage
[Useage instructions]

# Developed by:
[Developers thumbnails]

# License
[MIT](https://github.com/mhmdtshref/typescript-express-sequelize-template/blob/master/LICENSE)
