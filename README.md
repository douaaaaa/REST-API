# Node.js Express REST API

This repository contains a RESTful API created using Node.js and Express.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js installed on your local machine
- npm or yarn package manager installed

## Get started

To install the dependencies and run the API, follow these steps:

1. Clone this repository to your local machine:

```terminal
  git clone https://github.com/douaaaaa/REST-API
```

2. Navigate to the project directory:

```terminal
  cd your_repository
```

3. Install dependencies using npm or yarn:

```terminal
  npm install express uuid dotenv
```

4. Start the server:

```terminal
  npm run dev
```

The server will start running at http://localhost:8000 by default.

## API Endpoints

- GET /users: Get all users or limited number of them using the query parameter "limit"
- GET /users/:id: Get a specific user using thier unique id
- POST /users: Create a new user
- DELETE /users/:id: Delete a specific user using their unique id
- PATCH /users/:id: Update user's data who is specified by their id (Partial Update)

## Usage

This API was developed primarily for learning purposes to deepen my understanding of backend web development using Node.js and Express. Below are examples demonstrating how to interact with the API endpoints. These examples showcase basic CRUD operations and illustrate how data can be retrieved, created, updated, and deleted through HTTP requests. Feel free to explore and modify the endpoints to see how they interact with different data and responses. As this project evolves, additional functionalities and improvements may be added based on continued learning and experimentation with Node.js and web APIs.

## Contributing

1. Fork the repository
2. Create a new branch

```terminal
  git checkout -b feature
```

3. Make your changes
4. Commit your changes

```terminal
  git commit -am 'Add feature'
```

5. Push to the branch

```terminal
  git push origin feature
```

6. Create a new Pull Request
