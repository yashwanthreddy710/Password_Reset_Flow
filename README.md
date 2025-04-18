## Password Reset App
This is a full-stack application that allows users to register, login, and reset their password via email. It includes a secure token-based password reset flow, user management, and real-time validation.  
The frontend is built with **React.js** and deployed on **Netlify**. The backend uses **Node.js**, **Express**, and **MongoDB**, deployed on **Render**.

## Live URL:
- **Password-Reset-Flow:** [https://fastidious-phoenix-90d5c8.netlify.app/]

##  Features:
-  User Registration
-  Login with Validation
-  Password Reset via Email
-  Secure Token Verification
-  Success/Error Messages via State
-  MongoDB for persistent storage

## Technologies Used:
-Frontend: React.js, React Router.
-Backend: Node.js, Express.js.
-Database: MongoDB (Mongoose).
-Email: Nodemailer.
-Deployment: Netlify (Frontend), Render (Backend).

## API Endpoints:
- POST /api/users/register - Register user
- POST /api/users/login - Login user
- POST /api/users/forgot-password - Send reset email
- POST /api/users/reset-password/:token - Reset password
- GET /api/users/all-users - Get all registered users (excluding sensitive fields)

## Acknowledgment :
- Built as a full-stack project to practice React + Express development with deployment experience.



