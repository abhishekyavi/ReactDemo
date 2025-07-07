import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom'; // <-- import useParams

const AddClinicals = () => {
  const { id: patientId } = useParams(); // <-- get patientId from URL params
  const [patient, setPatient] = useState(null);

  useEffect(() => {
    if (patientId) {
      console.log('Fetching patient with ID:', patientId);
      axios.get(`/api/patients/${patientId}`)
        .then(response => setPatient(response.data))
        .catch(error => console.error('Error fetching patient:', error));
    }
  }, [patientId]);

  useEffect(() => {
    if (patient) {
      console.log('Patient data:', patient);
    }
  }, [patient]);

  if (!patientId) {
    return <div>No patient ID provided.</div>;
  }

  if (!patient) {
    return <div>Loading patient details...</div>;
  }

  return (
    <div>
      <h2>Patient Details</h2>
      <p><strong>First Name:</strong> {patient.firstName}</p>
      <p><strong>Last Name:</strong> {patient.lastName}</p>
      <p><strong>Age:</strong> {patient.age}</p>
      
      <a href="/">Back to Home</a>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const componentName = e.target.componentName.value;
          const componentValue = e.target.componentValue.value;
          try {
            await axios.post('/api/clinicaldata', {
             
              "componentName" :componentName,
              "componentValue":componentValue,
               patient:{
                id: patientId
               }
            });
            alert('Clinical data saved successfully!');
          } catch (error) {
            alert('Error saving clinical data.');
            console.error(error);
          }
        }}
      >
        <div>
          <label>
            Component Name:
            <input type="text" name="componentName" required />
          </label>
        </div>
        <div>
          <label>
            Component Value:
            <input type="text" name="componentValue" required />
          </label>
        </div>
        <button type="submit">Save Clinical Data</button>
      </form>
      
    </div>
  );
};

export default AddClinicals;