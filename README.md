# Project Management Web Application

## Overview
This web application allows users to view and update their tasks, while superusers can create, view, and edit projects and tasks.

### Frontend
- **Framework:** ReactJS

### Backend
- **Framework:** Django

## How to Run

### 1. Backend (Django)

1. Enter virtual environment:
    ```bash
    .\env\Scripts\activate
    ```
2. Navigate to the backend directory:
    ```bash
    cd backend
    ```
3. Make migrations:
    ```bash
    python manage.py makemigrations
    ```
4. Run migrations:
    ```bash
    python manage.py migrate
    ```
5. Run the server:
    ```bash
    python manage.py runserver
    ```

### 2. Frontend

1. Navigate to the frontend directory:
    ```bash
    cd frontend
    ```
2. Install dependencies:
    ```bash
    npm i
    ```
3. Start the React app:
    ```bash
    npm run start
    ```
