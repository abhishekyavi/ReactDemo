import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const Home = () => {
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get('http://my-app-abhishek1426-dev.apps.rm3.7wse.p1.openshiftapps.com/api/patients')
      .then(response => {
        setPatients(response.data);
        setLoading(false);
      })
      .catch(err => {
        setError('Failed to fetch patient details.');
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h2>Patient Details</h2>
      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
           
          </tr>
        </thead>
        <tbody>
          {patients.map(patient => (
            <tr key={patient.id}>
              <td>{patient.id}</td>   
              <td>{patient.firstName}</td>
              <td>{patient.lastName}</td>
              <td>{patient.age}</td>
              <td>
                <Link to={`/AddClinicals/${patient.id}`}>Add Clinicals data</Link>
              </td>
              
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/AddPatient">Add Patient</Link>
      <br />
     
    </div>
  );
};

export default Home;