import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Feedback from './components/Feedback';
import AddFeedbackForm from './components/AddFeedbackForm'; // <- import the form
import './styles/Layout.css';

function App() {
  return (
    <Router>
      <Layout />
      <main>
        <Routes>
          <Route path="/" element={<Feedback />} />
          <Route path="/add-feedback" element={<AddFeedbackForm />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
