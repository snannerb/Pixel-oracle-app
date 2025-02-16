import React, { useState } from 'react';
import './App.css';
import responses from './data/responses.json';

function App() {
  const [question, setQuestion] = useState('');
  const [category, setCategory] = useState('romance');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!question.trim()) {
      setResponse('Please enter a question.');
      return;
    }
    setIsLoading(true);
    setTimeout(() => {
      try {
        const categoryResponses = responses[category];
        const randomResponse = categoryResponses[Math.floor(Math.random() * categoryResponses.length)];
        setResponse(randomResponse);
      } catch (error) {
        setResponse('Unable to generate a response. Please try again.');
      } finally {
        setIsLoading(false);
      }
    }, 1000); // Simulate a delay for loading
  };

  return (
    <div className="container">
      <h1>Pixel Oracle</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="Ask your question..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="romance">Romance</option>
          <option value="wealth">Wealth</option>
          <option value="career">Career</option>
        </select>
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Loading...' : 'Submit'}
        </button>
      </form>
      <div className="response">{response}</div>
    </div>
  );
}

export default App;