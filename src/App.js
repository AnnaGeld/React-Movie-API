
import './App.css';
import React from 'react';
import Moviebox from './Moviebox';
import SearchMovies from './components/SearchMovies';
function App() {

 

  return (
  
    <div className='container'>
     <h1 className='title'>Search Your Favourite Movies</h1>
     <SearchMovies/>
    </div> 
   
   
     
  );
}

export default App;
