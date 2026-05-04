import ProjectCard from './ProjectCard';

function ProjectList({ projects, onDelete }) {
  if (projects.length === 0) {
    return (
      <div className="empty-state">
        <p>No projects found. Create one to get started!</p>
      </div>
    );
  }

  return (
    <div className="projects-grid">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default ProjectList;