# Typescript Express Sequelize Template

You don't need to start your backend project from scratch anymore! This is a usefull, structured and supported with helpful examples, A backend template made mainly with four technologies: Express, Sequelize, Jest and Node server.
## Prerequisites
To be able to use this template, you need these technologies to be installed on your machine:
- NodeJS
- NPM
Also, you need to have any SQL database URL (this project has been tested with PostgreSQL-v12 database).
## Built with
This project has been created using these technologies:
- NodeJS
- Express
- Typescript
- Sequelize
- Hapi/Boom
- Jest
- ESLint
- Husky
## Installation
Follow these steps respectively:
### 1. Clone the template
At first, you need to clone this template on your local machine, it would be better for you to **fork** this repo to your account. Specially if you want to make changes on the template and use your version later (then clone your forked repo), otherwise, clone my repo by running this command on your terminal:
```
git clone https://github.com/mhmdtshref/typescript-express-sequelize-template.git
```
### 2. Add environments files
You need to add environment variables to be able to connect to server port, host and database server. There's an example of env file in `environment/.env.example`. You should create a new file for each development mode, for example, for local mode, create a file with the name `.env.local`, then copy the example file content, and replace the variables values with yours.
### 3. Install NPM packages
Now, you need to install packages of package.json and package-lock.json files, just run this command on the root directory: `environments/.env.example`
### 4. Run the app (initial app):
#### **Warning: By running this the up comming command, you'll create the user example table to the database.**
Just run the npm script command:
```
npm run serve:[ENVIRONMENT_NAME]
```
The template is supporting four environments, you can modify them from pakcage.json > scripts
npm install.For example, run the template `npm run serve:local`, to run the app using local environment mode.
## Features
- Full API call example (so you can track it and know how API call life cycle work).
- Using Typescript language.
- Setup testing evironment using Jest tests with coverage reporting.
- Separated files for relations/associations between sequelize models.
- Database models validations.
- Using MVC pattern.
- eslint linting and fixing scripts.
- Auto-fixing for linting errors before committing changes.
- Supporting Multiple environments.
- One place to handle errors.
- Error handling using Hapi/Boom module (consistant & structured errors).

## Developers:
| <img src="https://avatars3.githubusercontent.com/u/19406147?s=460&u=80bc717b8a02a14b7db59f24bf578efdcb0bfa2e&v=4" width="230" /> <br/> Mohamed Sharif|
|---------------------------------------------------------------------------------------------------------------------|
| <div align="center"> <a href="https://github.com/mhmdtshref"> <img src="https://cdn.iconscout.com/icon/free/png-256/github-153-675523.png" width="30" /> </a> <a href="https://www.linkedin.com/in/mhmdtshref/"> <img src="https://freeiconshop.com/wp-content/uploads/edd/linkedin-flat.png" width="30" /> </a> <a href="https://www.instagram.com/mhmdtshref/"><img src="https://www.shareicon.net/data/256x256/2016/12/13/863380_media_512x512.png" width="30" /></a> <a href="https://www.facebook.com/mhmdtshref"><img src="https://cdn3.iconfinder.com/data/icons/social-icons-5/606/Facebook.png" width="30" /></a> <a href="https://www.snapchat.com/add/mhmdtshref"><img src="https://story.snapchat.com/favicon.png" width="30" /></a> </div>                                                                                                            |

## License
This project is licensed under the MIT License - see the [LICENSE](https://github.com/mhmdtshref/typescript-express-sequelize-template/blob/master/LICENSE) file for details
