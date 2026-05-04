import { useState, useMemo } from 'react'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import ProjectList from './components/ProjectList'
import ProjectForm from './components/ProjectForm'
import './App.css'

function App() {
  // Initial project for the current date
  const initialProjects = [
    {
      id: 1,
      title: 'Red Creative Launch Showcase',
      description: 'A bold new agency platform built to present creative work with modern visual impact.',
      category: 'Web Design',
      date: '2026-05-04',
      details: 'Single curated portfolio entry launched today with a polished design, responsive layout, and dynamic content controls.',
      image: ''
    }
  ];

  // State management
  const [projects, setProjects] = useState(initialProjects);
  const [searchTerm, setSearchTerm] = useState('');

  // Filter projects based on search term
  const filteredProjects = useMemo(() => {
    return projects.filter(project =>
      project.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [projects, searchTerm]);

  // Add new project
  const handleAddProject = (newProjectData) => {
    const newProject = {
      ...newProjectData,
      id: Math.max(...projects.map(p => p.id), 0) + 1
    };
    setProjects([newProject, ...projects]);
  };

  // Delete project
  const handleDeleteProject = (projectId) => {
    if (window.confirm('Are you sure you want to delete this project?')) {
      setProjects(projects.filter(project => project.id !== projectId));
    }
  };

  return (
    <div className="app">
      <Header />
      
      <main className="main-content">
        <section className="form-container">
          <ProjectForm onAddProject={handleAddProject} />
        </section>

        <section className="projects-container">
          <div className="projects-header">
            <h2>Our Projects</h2>
            <p className="project-count">
              Showing {filteredProjects.length} of {projects.length} projects
            </p>
          </div>

          <SearchBar 
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
          />

          <ProjectList
            projects={filteredProjects}
            onDelete={handleDeleteProject}
          />
        </section>
      </main>

    </div>
  );
}

export default App
