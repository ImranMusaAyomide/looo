import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './CreateUseCase.css';

const CreateUseCase = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    steps: [''],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleStepChange = (index, value) => {
    const newSteps = [...formData.steps];
    newSteps[index] = value;
    setFormData((prev) => ({ ...prev, steps: newSteps }));
  };

  const addStep = () => {
    setFormData((prev) => ({ ...prev, steps: [...prev.steps, ''] }));
  };

  const removeStep = (index) => {
    if (formData.steps.length <= 1) return;
    setFormData((prev) => ({
      ...prev,
      steps: prev.steps.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Use case submitted:', formData);
  };

  return (
    <div className="create-use-case">
      {/* Page Header */}
      <header className="create-use-case-header">
        <nav className="create-use-case-breadcrumb" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span className="breadcrumb-sep">/</span>
          <a href="#use-cases">Use Cases</a>
          <span className="breadcrumb-sep">/</span>
          <span className="breadcrumb-current">Create</span>
        </nav>
        <p className="create-use-case-kicker">Use Cases</p>
        <h1 className="create-use-case-title">Create a new use case</h1>
        <p className="create-use-case-subtitle">
          Define a clear scenario so your team knows when and how to apply this template. 
          Add a title, description, and optional steps to guide everyone.
        </p>
      </header>

      {/* Main Content */}
      <main className="create-use-case-main">
        <form id="create-use-case-form" className="create-use-case-form" onSubmit={handleSubmit}>
          <section className="create-use-case-card create-use-case-card-basics">
            <h2 className="create-use-case-card-title">Basics</h2>
            <p className="create-use-case-card-desc">Core information about your use case.</p>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                id="title"
                name="title"
                type="text"
                placeholder="e.g. Customer onboarding flow"
                value={formData.title}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="category">Category</label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
              >
                <option value="">Select a category</option>
                <option value="onboarding">Onboarding</option>
                <option value="sales">Sales</option>
                <option value="support">Support</option>
                <option value="marketing">Marketing</option>
                <option value="internal">Internal</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                name="description"
                rows={5}
                placeholder="Describe when this use case applies and what outcome you expect..."
                value={formData.description}
                onChange={handleChange}
              />
            </div>
          </section>

          <section className="create-use-case-card create-use-case-card-steps">
            <h2 className="create-use-case-card-title">Steps (optional)</h2>
            <p className="create-use-case-card-desc">Add ordered steps to guide users through this use case.</p>
            <div className="steps-list">
              {formData.steps.map((step, index) => (
                <div key={index} className="step-row">
                  <span className="step-number" aria-hidden="true">{index + 1}</span>
                  <input
                    type="text"
                    placeholder={`Step ${index + 1}`}
                    value={step}
                    onChange={(e) => handleStepChange(index, e.target.value)}
                    className="step-input"
                  />
                  <button
                    type="button"
                    className="step-remove"
                    onClick={() => removeStep(index)}
                    disabled={formData.steps.length <= 1}
                    title="Remove step"
                    aria-label={`Remove step ${index + 1}`}
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
            <button type="button" className="add-step-btn" onClick={addStep}>
              <span className="add-step-icon">+</span> Add step
            </button>
          </section>
        </form>
      </main>

      {/* Page Footer */}
      <footer className="create-use-case-footer">
        <div className="create-use-case-footer-inner">
          <p className="create-use-case-footer-tip">
            <span className="tip-icon">💡</span> You can edit this use case later from the Use Cases list.
          </p>
          <div className="create-use-case-actions">
            <Link to="/" className="create-use-case-cancel">Cancel</Link>
            <button
              type="submit"
              form="create-use-case-form"
              className="create-use-case-submit"
            >
              Create use case
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CreateUseCase;
