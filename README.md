# Angular Todo Application

This repository contains an Angular application for managing a simple Todo list. The app includes features such as user login and logout, a welcome page, and a Todo listing page. It interacts with a backend service through a service layer, with built-in error handling and basic authentication.

## Table of Contents

- [Features](#features)-
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Running the Application](#running-the-application)
- [Service Layer](#service-layer)
- [Error Handling](#error-handling)
- [Authentication](#authentication)
- [Contributing](#contributing)
- [License](#license)

## Features

- User login and logout functionality
- Welcome page with user greetings
- Todo listing page for viewing, adding, and deleting todos
- Service layer to interact with the backend API
- Basic error handling for user interactions
- Basic authentication for secure access

## Technologies Used

- **Angular**: Framework for building the web application
- **TypeScript**: Programming language for Angular development
- **HTML/CSS**: Markup and styling for the application
- **RxJS**: Library for handling asynchronous data
- **Angular Router**: For routing between different views

## Getting Started

### Prerequisites

- Node.js (v12 or later)
- Angular CLI

### Clone the Repository

```bash
git clone https://github.com/yourusername/angular-todo-app.git
cd angular-todo-app

### Service Layer
The application includes a service layer that handles HTTP requests to the backend. This layer manages all interactions with the backend API for todos, including creating, retrieving, updating, and deleting todos.

### Error Handling
The application implements error handling to manage failed API requests gracefully. Users will receive appropriate feedback for any issues that occur during interactions.

### Authentication
Basic authentication is implemented to secure the application. Users must log in to access the Todo listing page. Credentials are verified against the backend service.
