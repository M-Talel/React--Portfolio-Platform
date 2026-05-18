import { useState, useMemo } from 'react'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import ProjectList from './components/ProjectList'
import ProjectForm from './components/ProjectForm'
import './App.css'

function App() {
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

  const [projects, setProjects] = useState(initialProjects);
  const [searchTerm, setSearchTerm] = useState('');

  // Memoize filtering so we only recompute the filtered list when either
  // the source projects array or the user's search term changes.
  // This avoids re-filtering on unrelated state updates.
  const filteredProjects = useMemo(() => {
    const normalizedSearch = searchTerm.toLowerCase();

    return projects.filter((project) => {
      // We normalize the project title and compare it to the normalized
      // search term for a case-insensitive match.
      return project.title.toLowerCase().includes(normalizedSearch);
    });
  }, [projects, searchTerm]);


  const handleAddProject = (newProjectData) => {
    // Projects are stored only in React state (no backend).
    // We generate a new unique `id` by taking the current max `id` and
    // incrementing it.
    //
    // Note: this is safe for this in-memory app because the array lives
    // only in the current browser session.
    const nextId = Math.max(...projects.map((p) => p.id), 0) + 1;

    const newProject = {
      ...newProjectData,
      id: nextId,
    };

    // Prepend so new projects appear first in the gallery.
    setProjects([newProject, ...projects]);
  };


  const handleDeleteProject = (projectId) => {
    // Deletions are destructive, so we ask for confirmation.
    // `window.confirm` keeps this example dependency-free.
    if (window.confirm('Are you sure you want to delete this project?')) {
      // Filter creates a new array (immutability) so React can detect
      // state changes correctly.
      setProjects(projects.filter((project) => project.id !== projectId));
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
