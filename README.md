# Simple CRUD with Docker

## Project Overview

This project is a web-based application that allows users to be added with a picture and a name. The entire application runs using `docker compose up`, ensuring a seamless deployment process.

## Team Members

- **Nurlykhan Yessenzhan** (Student Number: 41505)

## Technologies Used

- **Backend:** Node.js
- **Database:** MongoDB
- **Frontend:** React (served with Nginx)
- **Containerization:** Docker, Docker Compose

## Project Structure

The project consists of three main containers:

1. **mongodb_server** - The MongoDB database server
2. **backend** - Node.js Express server
3. **frontend** - React application served with Nginx

## Features (Functionalities)

This project implements **four CRUD functionalities**, satisfying the requirement for a **5-grade evaluation**:

1. **Create** a user (with an uploaded image and name)
2. **Read** user details
3. **Update** user information
4. **Delete** a user

## Setup & Installation

### Prerequisites

Ensure that you have **Docker** and **Docker Compose** installed on your machine.

### Running the Project

1. Clone the repository:
   ```sh
   git clone <your-repo-url>
   cd <your-repo-folder>
   ```
2. Ensure that the `.env` file is set up with the correct credentials. This includes MongoDB and Cloudinary configurations.
3. Start the application using Docker Compose:
   ```sh
   docker compose up --build
   ```
4. The frontend will be available at:
   ```
   http://127.0.0.1/
   ```

## Environment Variables

Ensure the following environment variables are correctly set:

### MongoDB Configuration (inside `.env`),these are mine by the way:

```
DB_USER=ikboljonme
DB_PASSWORD=FcP2smDgn2tmrx4j
DB_HOST=cluster0.gjqry.mongodb.net
DB_NAME=test
```

### Cloudinary Configuration (You can get your API keys on CLOUDINARY.COM)

```
CLOUDINARY_CLOUD_NAME=di7hi91ar
CLOUDINARY_API_KEY=159913842285669
CLOUDINARY_API_SECRET=wwMIhhoS24svlFLXtTe3YEVVyMU
```

## API Endpoints

| Method | Endpoint    | Description         |
| ------ | ----------- | ------------------- |
| POST   | `/user`     | Create a new user   |
| GET    | `/user`     | Get all users       |
| GET    | `/user/:id` | Get user by ID      |
| PUT    | `/user/:id` | Update user details |
| DELETE | `/user/:id` | Delete a user       |

## Grading Criteria Fulfilled

✅ 4 CRUD functionalities implemented (Grade 5)  
✅ 3 containers used (MongoDB, Backend, Frontend)  
✅ Runs seamlessly with `docker compose up`

## Submission Details

Submit the repository URL containing this project to the professor.

---

### Notes

- Ensure Docker is running before executing `docker compose up`.
- The `.env` file is provided with credentials to ensure local deployment works without extra configuration.
- Cloudinary is used for storing user-uploaded images.

**This project meets all the required criteria and is ready for submission! 🚀**
# Simple-CRUD-with-docker
# Simple-CRUD-with-docker
