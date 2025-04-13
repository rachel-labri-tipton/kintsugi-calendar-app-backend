# Kintsugi Calendar App

Welcome to the Kintsugi Calendar App! This application is designed to help users manage their events, projects, and themes in a beautifully crafted calendar interface inspired by the Japanese art of Kintsugi, which emphasizes the beauty of imperfection.

## Project Structure

The project is divided into two main parts: the backend and the frontend.

### Backend

The backend is built using Node.js and Express. It provides RESTful APIs for managing users, events, projects, themes, and calendar views.

- **Models**: 
  - `userModel.js`: Defines the User model.
  - `eventModel.js`: Defines the Event model.
  - `projectModel.js`: Defines the Project model.
  - `themeModel.js`: Defines the Theme model.
  - `calendar`:
    - `dayModel.js`: Defines the Day model.
    - `monthModel.js`: Defines the Month model.
    - `weekModel.js`: Defines the Week model.

- **Routes**:
  - `userRoutes.js`: Handles user-related routes.
  - `eventRoutes.js`: Handles event-related routes.
  - `projectRoutes.js`: Handles project-related routes.
  - `themeRoutes.js`: Handles theme-related routes.
  - `calendarRoutes.js`: Handles calendar view routes (month, week, day).

- **Main Files**:
  - `app.js`: Sets up the Express application and middleware.
  - `server.js`: Entry point for starting the server.

### Frontend

The frontend is built using React. It provides a user-friendly interface for interacting with the backend APIs.

- **Components**:
  - **Calendar**:
    - `DayView.jsx`: Displays events for a specific day.
    - `MonthView.jsx`: Displays events for a specific month.
    - `WeekView.jsx`: Displays events for a specific week.
  - **Event**:
    - `EventForm.jsx`: Allows users to create or edit events.
    - `EventList.jsx`: Displays a list of events.
  - **Project**:
    - `ProjectForm.jsx`: Allows users to create or edit projects.
    - `ProjectList.jsx`: Displays a list of projects.
  - **Theme**:
    - `ThemeSelector.jsx`: Allows users to select a theme.
    - `ThemePreview.jsx`: Displays a preview of the selected theme.
  - **User**:
    - `UserForm.jsx`: Allows users to create or edit user profiles.
    - `UserProfile.jsx`: Displays user profile information.

- **Main Files**:
  - `App.jsx`: Sets up routing and renders components.
  - `index.js`: Entry point for the frontend application.

## Getting Started

To get started with the Kintsugi Calendar App, follow these steps:

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the backend directory and install dependencies:
   ```
   cd backend
   npm install
   ```

3. Start the backend server:
   ```
   npm start
   ```

4. Navigate to the frontend directory and install dependencies:
   ```
   cd frontend
   npm install
   ```

5. Start the frontend application:
   ```
   npm start
   ```

## License

This project is licensed under the MIT License. See the LICENSE file for details.