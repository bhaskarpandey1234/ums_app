User Management System 🚀
A modern, full-stack application for managing users, their hobbies, and visualizing their connections with an interactive interface. Built with a robust React + TypeScript frontend and a reliable Spring Boot + PostgreSQL backend.

Table of Contents
Features
Technology Stack
Setup Instructions
Prerequisites
Backend Setup
Frontend Setup
Environment Variables
API Documentation
Project Structure
Known Issues
Contributing
License
Features ✨
CRUD Operations: Manage users and their hobbies seamlessly.
Interactive Visualizations: Visualize user data relationships with react-flow.
Notifications: Real-time success/error notifications using react-toastify.
Responsive Design: Mobile-friendly and optimized for all screen sizes.
Scalable Backend: A Spring Boot backend integrated with PostgreSQL.
Technology Stack 🛠️
Frontend
Framework: React (v19)
Language: TypeScript
Libraries: react-flow, react-toastify
Styling: CSS Modules
Backend
Framework: Spring Boot
Language: Java (v11+)
Database: PostgreSQL
Build Tool: Maven
Setup Instructions 🏗️
Prerequisites
Ensure the following tools are installed:

Node.js: v18 or higher
Java: v11 or higher
PostgreSQL: Running locally
Maven

Backend Setup

Navigate to the backend directory:
cd backend

Set up the database:

Create a PostgreSQL database named user_management_db.
Update the .env file with your database credentials (see Environment Variables).
Build and run the backend:

bash
Copy
Edit
mvn clean install
mvn spring-boot:run
Verify the backend:

Swagger UI: http://localhost:8080/swagger-ui/
Test API endpoint: http://localhost:8080/api/users.
Frontend Setup
Navigate to the frontend directory:

bash
Copy
Edit
cd frontend
Install dependencies:

bash
Copy
Edit
npm install
Set up environment variables:

Create a .env file (refer to Environment Variables).
Run the development server:

bash
Copy
Edit
npm start
Open the app in your browser at http://localhost:3000.

Environment Variables 🌐
Backend (.env)
plaintext
Copy
Edit
SPRING_DATASOURCE_URL=jdbc:postgresql://localhost:5432/user_management_db
SPRING_DATASOURCE_USERNAME=your_db_username
SPRING_DATASOURCE_PASSWORD=your_db_password
SERVER_PORT=8080
Frontend (.env)
plaintext
Copy
Edit
REACT_APP_API_URL=http://localhost:8080/api
API Documentation 📚
Base URL: http://localhost:8080/api
User Endpoints
Get All Users

GET /users
Response: Returns a list of all users.
Create User

POST /users
Request Body:
json
Copy
Edit
{
  "username": "John Doe",
  "age": 25,
  "hobbies": ["Reading", "Traveling"]
}
Update User

PUT /users/{id}
Request Body:
json
Copy
Edit
{
  "username": "John Doe",
  "age": 26,
  "hobbies": ["Reading", "Gaming"]
}
Delete User

DELETE /users/{id}
Project Structure 📁
Frontend
java
Copy
Edit
frontend/
├── src/
│   ├── components/
│   │   ├── UserManagement/
│   │   │   ├── UserForm.tsx
│   │   │   ├── UserSidebar.tsx
│   │   │   ├── UserList.tsx
│   │   │   └── UserVisualization.tsx
│   ├── context/
│   │   └── UserContext.tsx
│   ├── utils/
│   │   └── api.ts
│   ├── App.tsx
├── public/
├── package.json
└── .env
Backend
css
Copy
Edit
backend/
├── src/main/java/com/example/
│   ├── controller/
│   │   └── UserController.java
│   ├── service/
│   │   └── UserService.java
│   ├── entity/
│   │   └── User.java
│   ├── repository/
│   │   └── UserRepository.java
│   └── UserManagementApplication.java
├── src/main/resources/
│   ├── application.properties
├── pom.xml
└── .env
Known Issues ⚠️
React Warnings: Unused variables like nodes and User may throw warnings. Clean up unused code.
API URL Errors: Ensure .env files are correctly configured.
Database Connection: Verify PostgreSQL credentials in the backend .env.
Contributing 🤝
We welcome contributions! Follow these steps:

Fork the repository.
Create a feature branch:
bash
Copy
Edit
git checkout -b feature-name
Commit and push changes:
bash
Copy
Edit
git commit -m "Add feature-name"
git push origin feature-name
Submit a Pull Request for review.

