# Polling System API

Welcome to the Polling System REST API! This project provides a RESTful API-based polling system developed using Node.js, Express.js, and MongoDB for the backend database.

## Features

- **Create a Question**: Add as many questions as you want.
- **Add Options**: Attach options to a specific question.
- **Vote on Options**: Cast a vote on an option of a question.
- **Delete Question**: Delete a question (with optional constraints).
- **Delete Option**: Remove an option from a question (with optional constraints).
- **View Question**: Display a question along with its options and votes.

## Required Routes

Here are the routes you can use to interact with the API:

- **POST** `/questions/create`: Create a new question.
- **POST** `/questions/:id/options/create`: Add options to a specific question identified by its ID.
- **DELETE** `/questions/:id/delete`: Delete a question by its ID. (Optional: A question can't be deleted if one of its options has votes)
- **DELETE** `/options/:id/delete`: Delete an option by its ID. (Optional: An option can't be deleted if it has at least one vote)
- **POST** `/options/:id/add_vote`: Increment the vote count for an option by its ID.
- **GET** `/questions/:id`: Retrieve a question, its options, and the votes given to each option, all based on its ID.

## Technologies Used
[![Languages Used](https://skillicons.dev/icons?i=nodejs,express,mongodb,postman)](https://skillicons.dev)
- **Node.js:** JavaScript runtime for building the backend server.
- **Express.js:** Web framework for Node.js to build APIs.
- **MongoDB:** NoSQL database used for storing questions, options, and votes.
- **Postman:** For Testing the API by making requests to the defined routes

## Installation

1. Clone the repository:

```bash
git clone https://github.com/MdIrfan-ul/PollingAPI.git
```

2. Navigate to the project directory:
```bash
cd polling-system-api
```

3. Install dependencies:
```bash
npm install
```

4. Set up your MongoDB connection in `.env` file:
```bash
MONGODB_URI=your_mongodb_connection_string
PORT =your_port_number
```

5. Start the server:
```bash
npm start
```
Now you can start testing the API using Postman or any REST API testing tool by making requests to the defined routes.

## ConnectMe 
[![Languages Used](https://skillicons.dev/icons?i=linkedin)](https://www.linkedin.com/in/mdirfanul/)
