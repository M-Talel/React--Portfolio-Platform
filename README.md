# Portfolio Showcase - Creative Agency Web Platform

A modern, responsive React-based web application for showcasing a creative agency's portfolio. This single-page application (SPA) allows creative agencies, freelancers, and professionals to display their work, manage projects dynamically, and provide an interactive experience for potential clients and collaborators.

Built with React and Vite, this application features a clean, professional interface with real-time search capabilities, dynamic project management, and full responsiveness across all devices.

---

## Features

### Core Functionality

- **Project Gallery**: Display projects in an elegant responsive grid layout with comprehensive project information including title, description, category, date, and detailed project information
- **Dynamic Project Management**: Add new projects to the portfolio on-the-fly with a user-friendly form interface
- **Real-time Search & Filter**: Instantly search and filter projects by title with live results as you type
- **Project Deletion**: Remove projects from the portfolio with a confirmation dialog to prevent accidental deletions
- **Responsive Design**: Fully responsive and mobile-optimized layout that adapts beautifully to desktop, tablet, and mobile devices

### User Experience

- **Clean, Professional UI**: Modern design with smooth transitions and visual hierarchy
- **Intuitive Navigation**: Easy-to-use header and navigation structure
- **Visual Feedback**: Confirmation dialogs and form validation for safe operations
- **Performance Optimized**: Uses React hooks and memoization for efficient rendering

---

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** 
- **npm** 
- **Git**
- A code editor like Visual Studio Code or any text editor of your choice

---

## Setup Instructions

Step 1: Clone or Navigate to the Project.
Step 2: Install all necessary dependencies(react, npm, etc.)
Step 3: Start the Development Server.
Step 4: Access the Application

---

## Usage Guide

### Viewing Projects

1. **Browse the Portfolio**: When you first load the application, you'll see the landing page with a grid of existing projects
2. **View Project Details**: Each project card displays:
   - Project title
   - Description
   - Category
   - Date created
   - Detailed information about the project

### Adding New Projects

1. **Open the Project Form**: Click on the "Add Project" section or button in the application
2. **Fill in Project Details**:
   - **Title**: The name of your project
   - **Description**: A brief overview of the project
   - **Category**: Select from categories like Web Design, Branding, Photography, Video Production, Illustration, UI/UX Design, etc.
   - **Date**: The project completion or publication date
   - **Details**: More comprehensive information about the project
   - **Image URL** (optional): Link to a project image

3. **Submit the Form**: Click "Add Project" to add your project to the portfolio
4. **Confirmation**: The new project will appear at the top of the project grid

### Searching and Filtering Projects

1. **Use the Search Bar**: Located at the top of the project list
2. **Type a Project Name**: Start typing to filter projects in real-time
3. **Clear Search**: Clear the search field to see all projects again

### Deleting Projects

1. **Locate the Project**: Find the project you want to delete in the grid
2. **Click Delete**: Click the delete button on the project card
3. **Confirm Deletion**: A confirmation dialog will appear asking "Are you sure you want to delete this project?"
4. **Confirm or Cancel**: Click "OK" to delete or "Cancel" to keep the project

---

## Project Structure

```
Summative Lab/
├── README.md                 
├── package.json              
├── vite.config.js            
├── eslint.config.js          
├── index.html                
├── public/                   
│   └── (public assets)
│
└── src/
    ├── main.jsx              
    ├── App.jsx               
    ├── App.css               
    ├── index.css             
    │
    ├── assets/               
    │
    └── components/           
        ├── Header.jsx        
        ├── SearchBar.jsx     
        ├── ProjectForm.jsx   
        ├── ProjectList.jsx   
        └── ProjectCard.jsx   
```

### Component Details

- **Header.jsx**: Displays the agency/portfolio branding and main navigation
- **SearchBar.jsx**: Input field that updates search term state in real-time
- **ProjectForm.jsx**: Form with fields for project title, description, category, date, details, and image URL
- **ProjectList.jsx**: Maps through filtered projects and renders ProjectCard components
- **ProjectCard.jsx**: Displays individual project information with delete functionality
- **App.jsx**: Main component managing application state (projects and search term) and handling project addition/deletion

---

## State Management

The application uses React's built-in state management with hooks:

- **`useState`**: Manages projects array and search term state
- **`useMemo`**: Optimizes filter operation to recalculate only when projects or searchTerm changes

