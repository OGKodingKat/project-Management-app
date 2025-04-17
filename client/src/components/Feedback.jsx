import React, { useEffect, useState } from 'react';
import '../styles/Feedback.css';
import { useNavigate } from 'react-router-dom';

const Feedback = () => {
  const navigate = useNavigate();
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        const res = await fetch('/api/feedbacks'); // 🔥 Uses /api as the prefix
        if (!res.ok) throw new Error('Failed to fetch');
        const data = await res.json();
        setFeedbacks(data);
      } catch (err) {
        console.error('Failed to fetch feedbacks:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchFeedbacks();
  }, []);

  return (
    <div className="feedback-page">
      {loading ? (
        <p>Loading...</p>
      ) : feedbacks.length === 0 ? (
        <div className="empty-state">
          <h2>There is no feedback yet.</h2>
          <p>
            Got a suggestion? Found a bug that needs to be squashed? We love hearing about new ideas to improve our app.
          </p>
          <button className="add-feedback" onClick={() => navigate('/add-feedback')}>
            + Add Feedback
          </button>
        </div>
      ) : (
        <div className="feedback-list">
          <h2>All Feedback</h2>
          {feedbacks.map((fb) => (
            <div key={fb.id} className="feedback-card">
              <h3>{fb.title}</h3>
              <p><strong>Category:</strong> {fb.category}</p>
              <p>{fb.description}</p>
              <p><em>Status: {fb.status}</em></p>
            </div>
          ))}
          <button className="add-feedback" onClick={() => navigate('/add-feedback')}>
            + Add Feedback
          </button>
        </div>
      )}
    </div>
  );
};

export default Feedback;
