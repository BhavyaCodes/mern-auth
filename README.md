# MERN authentication demo app

<img src="/.github/demo.png">

## Features of the application

- Ability to create account, login and logout, 1 account per email
- Add a profile image which is uploaded to aws s3 server
- Edit your profile, image, DOB, first name, email and last name. If you do decide to edit email be sure to login with that email next time
- Multipage Signup form
- A useUser hook to access and modify the logged in user
- password validation for signing up (passwords match, min length: 6, min one uppercase letter)
- Strong typed code
- one script to build server(express) and client(CRA)
- http-proxy-middleware for dev environment to avoid any CORS error when running CRA on separate server. Note that the middleware only runs on `dev` mode and not in production
- Separate `tsconfig.json` for client and server

## Running the project locally

- clone the repo
  `git clone <url>`
  `cd mern-auth`
- install dependencies for server when in the root of the project
  `npm install`
- install dependencies for client
  from root of the project do
  `cd client`
  `npm install`
  `cd ..`
- add environment variables, refer (.env.example)[./.env.example]
- start the dev server
  `npm run dev`
- visit `http://localhost:3000`

### Made using

- React
- Express.js
- MongoDB
- TypeScript
- Material-UI (partially)
