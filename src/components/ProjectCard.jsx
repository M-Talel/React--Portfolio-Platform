function ProjectCard({ project, onDelete }) {
  return (
    <div className="project-card">
      <div className="project-image">
      </div>
      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <div className="project-meta">
          <span className="project-category">{project.category}</span>
          <span className="project-date">{project.date}</span>
        </div>
        <p className="project-details">{project.details}</p>
        <button 
          className="delete-btn"
          onClick={() => onDelete(project.id)}
          aria-label="Delete project"
        >
          ✕ Remove
        </button>
      </div>
    </div>
  );
}

export default ProjectCard;
