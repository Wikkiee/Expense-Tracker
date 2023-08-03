<div align="center">
  <p>
      <img width="40%" src="https://i.imgur.com/bF9YAEu.png">
  </p>
  <b><h3>A MERN Stack Project</h3></b>
</div>
<br>

Expense Tracker is a web application that allows you to track your expenses in a simple and easy-to-use 
way. The application is built using React and Express.js, which are two of the most popular JavaScript 
frameworks. This makes the application fast, reliable, and scalable


## Frontend technologies 
- React.js
- Material UI
- Tailwind CSS
- Vite 
## Backend technologies 
- Node Js
- Express.js
- Passport.js
- MongoDB 
## Features

- **Simple and Minimal User Interface:** A clean and intuitive user interface that allows users to manage their expenses effortlessly.

- **Expense Management:** Users can add and delete their expenses with ease.

- **Local Browser Storage:** Utilize the browser's local storage to store expense data on the user's device, ensuring data persistence across sessions.

- **Persistent Login System:** Implement a secure login system that allows users to access their expense data from any device after authentication.

- **Data Synchronization:** For enhanced data security and seamless user experience, sync local browser storage data with the central database.

- **User Authentication and Authorization:** Ensure that only authorized users can access the expense data and perform relevant actions.



## Demo
-> Live Demo : <a href="https://expense-tracker-wikkie.vercel.app"> Expense Tracker X Preview</a> <br>
-> Figma Design : <a href="https://www.figma.com/file/GzRU26lYc4s1BrRkyhyfOX/Expense---Tracker?type=design&node-id=0%3A1&mode=design&t=9qBRGq2LOnlIxA9N-1"> Expense Tracker X UI Design</a>
## Screenshot

![App Screenshot](https://i.imgur.com/bw5D9EO.png)

## Installation
Clone the repository
```bash
  git clone https://github.com/Wikkiee/Expense-Tracker.git
```

Instruction - Frontend

```bash
  cd Expense-Tracker/Frontend
  npm install
  npm run dev
```
Instruction - Backend

```bash
  cd Expense-Tracker/Backend
  npm install
  npm run dev
```
    
## Configuration

To make the project fully functional, you need to set up the .env environment variable. Follow the steps below to set up the .env file:

**Frontend:** 

Create a new .env file in the root directory of the project (Expense-Tracker/Frontend/.env).

Inside the '.env' file, add the necessary environment variables in the following format:

```bash
    VITE_API_URL=http://localhost:5000
```

**Backend:** 

Create a new .env file in the root directory of the project (Expense-Tracker/Bakcend/src/.env).

Inside the '.env' file, add the necessary environment variables in the following format:

```bash
    DATABASE_URL=
    DATABASE_NAME=
    DATABASE_USERNAME=
    DATABASE_PASSWORD=
    SESSION_SECRETS=
    CORS=http://localhost:4000
    PORT=5000
```
Note:-
```bash
    Check the url format
    URL = mongodb+srv://${process.env.DATABASE_USERNAME}:${process.env.DATABASE_PASSWORD}@${process.env.DATABASE_URL}/?retryWrites=true&w=majority
```
## Support

-> For support, discord me - `#_wikkie_`.


## License

[MIT](https://choosealicense.com/licenses/mit/)

