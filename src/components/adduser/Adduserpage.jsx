import React, { useState } from 'react';
import axios from "axios";
import './adduser.css';


function Adduserpage() {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 6;
  };

  const handleFirstnameChange = (e) => {
    setFirstname(e.target.value);
  };

  const handleLastnameChange = (e) => {
    setLastname(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};
    

    if (!firstname) {
      newErrors.firstname = 'First name is required';
    }

    if (!lastname) {
      newErrors.lastname = 'Last name is required';
    }

    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!password) {
      newErrors.password = 'Password is required';
    } else if (!validatePassword(password)) {
      newErrors.password = 'Password must be at least 6 characters long';
    }

    setErrors(newErrors);


    if (Object.keys(newErrors).length === 0) {

    const HOSTED_SERVER_URL = 'http://localhost:2005';

    try {
      const response = await axios.post(`${HOSTED_SERVER_URL}/users`, {
        firstname,
        lastname,
        email,
        password,
      });

      // console.log('Response',response);

      if (response &&  response.data && response.data.statusCode) {
        alert('Form submited successfully');
        console.log('Form submited successfully');
        setFirstname('');
        setLastname('');
        setEmail('');
        setPassword('');
      } else {
        console.error('Form submission failed');
      }
    } 
     catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        console.error('Server responded with an error:', error.response.data.message);
      } else if (error.request) {
        // The request was made but no response was received
        console.error('No response received from the server.');
      } else {
        // Something happened in setting up the request that triggered an error
        console.error('Error during form submission:', error.message);
      }
    }
    

    setSubmitting(false);
  }

  };

  return (
    <div>
      <div className="bg_img1">
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name:</label>
          <input type="text" value={firstname} onChange={handleFirstnameChange} />
          {errors.firstname && <p className='error-message' >{errors.firstname}</p>}
        </div>
        <div>
          <label>Last Name:</label>
          <input type="text" value={lastname} onChange={handleLastnameChange} />
          {errors.lastname && <p className='error-message' >{errors.lastname}</p>}
        </div>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={handleEmailChange} />
          {errors.email && <p className='error-message' >{errors.email}</p>}
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={handlePasswordChange} />
          {errors.password && <p className='error-message' >{errors.password}</p>}
        </div>
        <button type="submit"  disabled={submitting}>{submitting ? 'Submitting...' : 'Submit'} </button>
      </form>
      </div>
    </div>
  );
}


export default Adduserpage;