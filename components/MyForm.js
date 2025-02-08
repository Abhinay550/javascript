import React, { useState } from 'react';
import '../styles/stylee.css'; // Corrected import statement

const MyForm = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [skills, setSkills] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      <h2>Student Login Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Age:</label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Skills:</label>
          <input
            type="text"
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      {submitted && (
        <div className="submitted-info">
          <h3>Submitted Information</h3>
          <p>Name: {name}</p>
          <p>Age: {age}</p>
          <p>Skills: {skills}</p>
        </div>
      )}
    </div>
  );
};

export default MyForm;