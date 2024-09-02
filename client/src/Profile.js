import React, { useState, useEffect } from 'react';

function Profile() {
  const [formData, setFormData] = useState({
    name: '',
    selectedOptions: []
  });

  const [submittedData, setSubmittedData] = useState(null);

  const options = ['Computer Science', 'Engineering', 'Information Technology', 'Artificial Intelligence', 'Finance', 'Manufacturing', 'Soft Skills', 'Racing', 'New Innovation', 'Leadership talks'];

  const [data, setData] = useState([]);

  const [data2, setData2] = useState([]);

  useEffect(() => {
    // Fetch data from the backend when the component mounts
    fetchUpcomingData();
  }, []);

  const fetchUpcomingData = async () => {
    try {
      const response = await fetch('http://localhost:5001/get/user/intererst');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const jsonData = await response.json();
      if (jsonData.length > 0) {
        setData(jsonData);
      } else {
        console.log('Received an empty list');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    // Fetch data from the backend when the component mounts
    fetchPointData();
  }, []);

  const fetchPointData = async () => {
    try {
      const response = await fetch('http://localhost:5001/get/point/data');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const jsonData = await response.json();
      setData2(jsonData);
      console.log(jsonData)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  
  // Load form data from local storage on component mount
  useEffect(() => {
    const savedFormData = localStorage.getItem('formData');
    if (savedFormData) {
      setFormData(JSON.parse(savedFormData));
    }
  }, []);

  // Load submitted data from local storage on component mount
  useEffect(() => {
    const savedSubmittedData = localStorage.getItem('submittedData');
    if (savedSubmittedData) {
      setSubmittedData(JSON.parse(savedSubmittedData));
    }
  }, []);

  // Save form data to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(formData));
  }, [formData]);

  // Save submitted data to local storage whenever it changes
  useEffect(() => {
    if (submittedData) {
      localStorage.setItem('submittedData', JSON.stringify(submittedData));
    }
  }, [submittedData]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    let updatedSelectedOptions = [...formData.selectedOptions];

    if (checked) {
      updatedSelectedOptions.push(value);
    } else {
      updatedSelectedOptions = updatedSelectedOptions.filter(option => option !== value);
    }

    setFormData({
      ...formData,
      selectedOptions: updatedSelectedOptions
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form Data:', formData);
    setSubmittedData(formData); // Store the form data in submittedData state
    // Add your form submission logic here
    

    fetch('http://localhost:5001/profile/data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ data: formData })
    })
      .then(response => {
        if (response.ok) {
          console.log('Data sent successfully');
        } else {
          console.error('Failed to send data');
        }
      })
      .catch(error => {
        console.error('Error sending data:', error);
      });
  };

  return (
    <div>
      <div className="flex-container">
        <div className="login-container">
          <h2>A little about yourself:</h2>
          <form className="login-form" onSubmit={handleSubmit}>
            
            <br />
            <div>
              <label>Select your interests:</label>
              {options.map(option => (
                <div key={option}>
                  <label>
                    <input
                      type="checkbox"
                      value={option}
                      checked={formData.selectedOptions.includes(option)}
                      onChange={handleCheckboxChange}
                    />
                    {option}
                  </label>
                </div>
              ))}
            </div>
            <br />
            <button type="submit">Submit</button>
          </form>
        </div>
        <div className="login-container">
          <h2>Summary of Your Interests:</h2>
          <h5>You need to toggle pages to see reflected changes</h5>
          {submittedData && (
            <div>
              
              <h4>Interests:</h4>
              <ul>

              {data.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}

                
              </ul>

            </div>

          )}

          <br></br>
          <h4>Points: {data2} </h4>

        </div>
      </div>
    </div>
  );
}

export default Profile;
