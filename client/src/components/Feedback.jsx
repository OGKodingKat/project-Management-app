import '../styles/Feedback.css';

import { useNavigate } from 'react-router-dom';

const Feedback = () => {
  const navigate = useNavigate();

  return (
    <div className="feedback-empty-page">
      <div className="empty-state">
        
        <h2>There is no feedback yet.</h2>
        <p>Got a suggestion? Found a bug that needs to be squashed? We love hearing about new ideas to improve our app.</p>
        <button className="add-feedback" onClick={() => navigate('/add-feedback')}>+ Add Feedback</button>
      </div>
    </div>
  );
};
export default Feedback;