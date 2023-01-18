import React from "react";
import ReactDOM from 'react-dom/client';
import MovieCard from "./MovieCard";
function SearchMovies (){

    const [query,setQuery] = React.useState("");
    const [movies,setMovies] = React.useState([]);

const searchMovies = async (e) => {
    e.preventDefault();
     const url =  `https://api.themoviedb.org/3/search/movie?api_key=414c1de4377ef5beeaf6320a98942e56&language=en-US&query=${query}&page=1&include_adult=false`;
try {
    const res = await fetch(url);
    const data = await res.json();
    
    setMovies(data.results)
    
}catch(err){
    console.error(err);
}
 
}

    return (
        <>
        <form className="form" onSubmit={searchMovies}>
            <label htmlFor="query" className="label">Movie Name</label>
            <input className="input" value={query} onChange={(e) => setQuery (e.target.value)}  type="text" name="query" placeholder="Search Movies Here" ></input>
            <button className="button" type="submit" >Search</button>
        </form>
        <div className="card-list">
            {movies.filter(movie => movie.poster_path).map(movie => (
             <MovieCard movie={movie} key={movie.id}/>
            ))}       
              
           
        </div>
        </>
    )
}

export default SearchMovies;