import React from 'react';
import '../styles/AddFeedbackForm.css';
import { useNavigate } from 'react-router-dom';

const AddFeedbackForm = () => {
  const navigate = useNavigate();

  return (
    <div className="form-page">
      <div className="form-container">
        <button className="go-back" onClick={() => navigate(-1)}>← Go Back</button>
        <div className="form-header">
          <div className="form-icon">+</div>
          <h2>Create New Feedback</h2>
        </div>

        <label className="form-label">Feedback Title</label>
        <p className="form-description">Add a short, descriptive headline</p>
        <input className="form-input" type="text" placeholder="Feedback title" />

        <label className="form-label">Category</label>
        <p className="form-description">Choose a category for your feedback</p>
        <select className="form-input">
          <option>Feature</option>
          <option>UI</option>
          <option>UX</option>
          <option>Bug</option>
          <option>Enhancement</option>
        </select>

        <label className="form-label">Feedback Detail</label>
        <p className="form-description">Include any specific comments on what should be improved, added, etc.</p>
        <textarea className="form-input" rows="5" placeholder="Detailed feedback" />

        <button className="submit-btn">Add Feedback</button>
        <button className="cancel-btn" onClick={() => navigate(-1)}>Cancel</button>
      </div>
    </div>
  );
};

export default AddFeedbackForm;