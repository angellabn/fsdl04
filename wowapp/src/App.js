import React from 'react';
import './App.css';
import Header from './Header';
function App() {
  // Define some variables
  const userName = 'Angella';
  const userAge = 19;
  const isLoggedIn = true;

  return (
    <div className="App">
      <header className="App-header">
        {/* JSX Comment */}
        <h1>Welcome to React yaar, {userName}!</h1>
        <p>Your age is: {userAge}</p>
        <p>{isLoggedIn ? 'You are logged in' : 'Please log in'}</p>

        {/* Using inline styles */}
        <p style={{ color: 'pink', fontSize: '20px' }}>dimaag bht khrab hai mera aaj hehe.</p>
      </header>
    </div>
  );
}


export default App;
