# Model-View-Controller (MVC) Challenge: Tech Blog

This Tech Blog Application is a CMS-style blog site that allows developers to publish their blog posts and comment on other developers' posts. The application follows the Model-View-Controller (MVC) paradigm and uses Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.

## Getting Started

The application's folder structure follows the Model-View-Controller paradigm. The express-handlebars package is used to use Handlebars.js for Views. MySQL2 and Sequelize packages are used to connect to a MySQL database for Models. An Express.js API is created for Controllers.

The dotenv package is used to use environment variables. The bcrypt package is used to hash passwords, and the express-session and connect-session-sequelize packages are used to add authentication.

Note: The express-session package stores the session data on the client in a cookie. When the user is idle on the site for more than a set time, the cookie expires, and the user is required to sign in again.

## Usage

1. Open the deployed [application](https://monicapong-techblog.herokuapp.com) on Heroku
2. On the homepage, you can view existing blog posts, navigate to the dashboard or homepage, and log in.
3. If you are not logged in and try to access the dashboard or any other protected route, you will be redirected to the login page.
4. To sign up for a new account, click the "Sign Up" link in the navigation bar and fill out the form with your username and password.
5. After signing up or logging in, you will be redirected to the dashboard where you can view, edit, or delete your own blog posts.
6. To create a new blog post, click the "New Post" button on the dashboard and fill out the form with a title and content.
7. To edit or delete an existing blog post, click the corresponding button on the dashboard.
8. To view a blog post and its comments, click on the post title on the homepage or dashboard. You can add a new comment by filling out the form at the bottom of the page.
9. To log out, click the "Log Out" button in the navigation bar.

## Local Installation Instructions

1. Clone the repository to your local machine.
2. Install the necessary packages by running **npm install** in the root directory.
3. Create a new MySQL database and update the **.env.EXAMPLE** file with your database credentials. Then, rename the file to  **.env** .
4. Seed the database by running  **npm run seed** .
5. Start the application by running  **npm start** .

## Technologies Used

* Handlebars.js: templating language
* Sequelize: ORM for MySQL database
* Express.js: web framework
* express-session and connect-session-sequelize: authentication middleware.
* bcrypt: password hashing
* dotenv: environment variable management
* MySQL2: MySQL database driver

## Contributing 
If you would like to contribute to this project, please fork the repository and submit a pull request

