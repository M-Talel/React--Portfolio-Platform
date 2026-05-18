import { useState } from 'react';

function ProjectForm({ onAddProject }) {
  // Controlled form state.
  // Using a single object keeps the form scalable: each input maps to a
  // `formData` field with the same `name`.
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: 'Web Design',
    date: '',
    details: '',
    image: '',
  });

  // Generic handler for controlled form inputs.
  // Because each input shares the same `name` attribute as a field in
  // `formData`, we can update the correct property dynamically.
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Use the functional form of setState to avoid issues with stale
    // closures when multiple updates happen quickly.
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

  // Minimal validation for required fields.
  // Note: HTML `required` is already set on some inputs, but we still
  // validate here so the parent never receives an incomplete payload
  // (useful if browser behavior differs or if inputs are changed later). 
  if (!formData.title || !formData.description || !formData.image) {
      alert('Please fill in all required fields');
      return;
    }

    // Pass the form payload back to the parent so it can update
    // application state (projects list).
    // The parent is responsible for enriching it (e.g., assigning an id).
    onAddProject(formData);

    // Reset to defaults after successful submission.
    setFormData({
      title: '',
      description: '',
      category: 'Web Design',
      date: '',
      details: '',
      image: '',
    });
  };

  return (
    <section className="form-section">
      <h2>Add New Project</h2>
      <form className="project-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Project Title *</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter project title"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description *</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Enter project description"
            rows="3"
            required
          ></textarea>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="category">Category</label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
            >
              <option value="Web Design">Web Design</option>
              <option value="Branding">Branding</option>
              <option value="Photography">Photography</option>
              <option value="Video Production">Video Production</option>
              <option value="Illustration">Illustration</option>
              <option value="UI/UX Design">UI/UX Design</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="date">Date Completed</label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="details">Project Details</label>
          <textarea
            id="details"
            name="details"
            value={formData.details}
            onChange={handleChange}
            placeholder="Enter additional details about the project"
            rows="3"
          ></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="image">Image URL *</label>
          <input
            type="url"
            id="image"
            name="image"
            value={formData.image}
            onChange={handleChange}
            placeholder="https://example.com/image.jpg"
            required
          />
        </div>

        <button type="submit" className="submit-btn">
          Add Project
        </button>
      </form>
    </section>
  );
}

export default ProjectForm;

