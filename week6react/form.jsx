import React, { useState } from 'react';

function FormExample() {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Hello, ${name}!`);
  };

  return (
    <div>
      <h1>Enter your name</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          placeholder="Your Name"
        />
        <button type="submit">Submit</button>
      </form>
      {name && <p>Hello, {name}!</p>}
    </div>
  );
}

export default FormExample;
