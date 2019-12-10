import React from 'react';

import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavBar from './components/AppNavBar';
import PostArea from './components/postArea';


function App() {
  return (
    <div className="App">
      <AppNavBar />
      <PostArea />
    </div>
  ); 
}

export default App;
