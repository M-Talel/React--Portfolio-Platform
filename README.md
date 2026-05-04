# Portfolio Showcase - Creative Agency Web Platform

A modern, responsive React-based web application for showcasing a creative agency's portfolio. This single-page application allows users to view projects, search/filter projects dynamically, and add new projects to the portfolio.

## Features

- **Landing Page**: Grid display of projects with detailed information
- **Add Projects**: Dynamic form to create and add new projects
- **Search/Filter**: Real-time search functionality to filter projects by title
- **Responsive Design**: Fully responsive layout for desktop, tablet, and mobile
- **Delete Projects**: Remove projects from the portfolio with confirmation

## Project Structure

```
src/
├── components/
│   ├── Header.jsx          # Navigation header with branding
│   ├── ProjectForm.jsx     # Form to add new projects
│   ├── ProjectList.jsx     # Grid container for project cards
│   ├── ProjectCard.jsx     # Individual project display card
│   └── SearchBar.jsx       # Search/filter input component
├── App.jsx                 # Main app component with state management
├── App.css                 # Comprehensive styling and responsive design
├── index.css               # Global styles and CSS variables
└── main.jsx                # Entry point
```

## Getting Started

Install dependencies and run the app locally:

```bash
cd "Summative Lab"
npm install
npm run dev
```

The application will be available at `http://localhost:5173`

## Sample Project

The application comes pre-loaded with a sample project showcasing different categories including web design, branding, photography, video production, illustration, and UI/UX design.

## Technologies Used

- **React**: UI library with hooks
- **Vite \***: Build tool and dev server
- **CSS**: Modern styling with gradients and animations
- **JavaScript**: Modern JavaScript features
