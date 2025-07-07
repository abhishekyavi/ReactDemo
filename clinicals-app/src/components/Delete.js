import React from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const Delete = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (id) {
      console.log('Starting delete operation for patient ID:', id);
      console.log('API endpoint URL:', `/api/patients/${id}`);
      
      axios
        .delete(`/api/patients/${id}`)
        .then((response) => {
          console.log('Delete API response:', response);
          console.log('Response status:', response.status);
          console.log('Response data:', response.data);
          
          // Handle successful deletion (status 200, 204, etc.)
          if (response.status === 200 || response.status === 204) {
            console.log('Patient deleted successfully, navigating to home page');
            navigate('/');
          } else {
            console.log('Unexpected response status:', response.status);
            navigate('/');
          }
        })
        .catch((error) => {
          console.error('Error deleting patient:', error);
          console.error('Error status:', error.response?.status);
          console.error('Error message:', error.message);
          console.error('Request URL:', error.config?.url);
          console.error('Full error response:', error.response);
          
          // If it's a 404 (patient not found) or similar, might still want to go home
          if (error.response?.status === 404) {
            console.log('Patient not found (404). This might indicate:');
            console.log('1. Patient does not exist');
            console.log('2. Incorrect API endpoint URL');
            console.log('3. Backend server is not running');
            console.log('Navigating to home page...');
            navigate('/');
          } else {
            console.log('Genuine error occurred, navigating to error page');
            navigate('/error');
          }
        });
    } else {
      console.log('No patient ID provided, navigating to home page');
      navigate('/');
    }
  }, [id, navigate]);

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h2>Deleting patient...</h2>
      <p>Please wait while we process your request.</p>
    </div>
  );
};

export default Delete;