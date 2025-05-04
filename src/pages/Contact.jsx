import React, { useState } from 'react'
import img from '../assets/contact.svg'

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
    alert('Form submitted successfully!');
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-between max-w-6xl mx-auto px-4 py-12">
      {/* Left side - Form */}
      <div className="w-full lg:w-1/2 mb-8 lg:mb-0 pr-0 lg:pr-8">
        <div className="text-left mb-8">
          <h1 className="text-4xl font-bold text-blue-900 mb-2">Talk to our Expert</h1>
          <p className="text-lg text-blue-900">
            Schedule a meeting with one of our investment advisors to discuss your growth objectives.
          </p>
        </div>
        
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First name*"
                className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last name*"
                className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email address*"
                className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone number*"
                className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          
          <div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message*"
              rows="4"
              className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
          
          <div>
            <button
              onClick={handleSubmit}
              className="bg-blue-900 text-white py-3 px-8 rounded uppercase font-bold tracking-wider hover:bg-blue-800 transition duration-200"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
      
      {/* Right side - Image */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <img 
          src={img} 
          alt="Contact illustration" 
          className="w-full max-w-md"
        />
      </div>
    </div>
  );
};

export default Contact;