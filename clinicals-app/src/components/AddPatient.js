import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const AddPatient = () => {
  const [patient, setPatient] = useState({
    firstName: '',
    lastName: '',
    age: ''
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setPatient({
      ...patient,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/api/patients', patient);
      setMessage('Patient saved successfully!');
      setPatient({ firstName: 'firstName', lastName: 'lastName', age: 'age' });
      toast.success('Patient saved successfully!');
    } catch (error) {
      setMessage('Error saving patient.');
    }
  };

  return (
    <div>
      <h2>Add Patient</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name:</label>
          <input
            type="text"
            name="firstName"
            value={patient.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={patient.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Age:</label>
          <input
            type="number"
            name="age"
            value={patient.age}
            onChange={handleChange}
            required
            min="0"
          />
        </div>
        <button type="submit">Save Patient</button>
      </form>
      {message && <p>{message}</p>}
      Link to <a href="/">Home</a>
    </div>
  );
};

export default AddPatient;