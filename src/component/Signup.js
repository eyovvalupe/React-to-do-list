import React, { useState } from 'react';

const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    check: false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleClick = (e) => {
    setFormData({
        ...formData,
        check: !formData.check
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can implement your registration logic
    console.log('Form submitted with data:', formData);
    // You can send the formData to your backend for registration process
  };

  return (
    <div className='container' style={{padding:100}}>
      <h2 className='mt-5 mb-5'>Sing up</h2>
      <form onSubmit={handleSubmit}>
        <div style={{display:"flex", flexDirection:"column"}}>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
            className='mb-3'
          />
        </div>
        <div style={{display:"flex", flexDirection:"column"}}>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className='mb-3'
          />
        </div>
        <div style={{display:"flex", flexDirection:"column"}}>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className='mb-3'
          />
        </div>
        <div style={{display:"flex", flexDirection:"column"}}>
          <label>Confirm Password:</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
            className='mb-3'
          />
        </div>
        <div style={{display: 'flex'}}>
            <input type='checkbox' checked={formData.check} onClick={handleClick} className='mb-3 mr-3'/>
            <p>By signing up, you agree with our&nbsp;</p><a href='' style={{textDecoration:'underline'}}>User agreement</a>
        </div>
        <button className='btn btn-success w-100' disabled={!formData.check} type="submit">Register</button>
      </form>
    </div>
  );
};

export default Signup;
