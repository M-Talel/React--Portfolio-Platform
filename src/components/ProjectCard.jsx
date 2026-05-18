function ProjectCard({ project, onDelete }) {
  return (
    <div className="project-card">
      {/*
        The app's form collects an `image` URL, but the current UI intentionally
        does not render it (the project image area is just a colored block).

        This keeps the demo dependency-free and avoids layout issues from
        loading arbitrary external images.

        If you want image previews, replace this placeholder with an <img>
        and consider adding basic styling + an `alt` tag.
      */}
      <div className="project-image"></div>

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
          // Inline handler keeps the card self-contained: it passes just the
          // project id back up to the parent.
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

