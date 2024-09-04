import { useEffect, useState } from "react";

import MovieCard from "./MovieCard";
import './App.css'
import searchIcon from './search.svg'


const API_URL = 'http://www.omdbapi.com?apiKey=436625c1';



const App = () => {
    //setting state manager for changing value to save
    let [movies, setMovies] = useState([])
    let [searchText, setSearchText] = useState("")
    // search functionn for fetching movies data
    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        console.log(data.Search)
        setMovies(data.Search);
    }

    useEffect(() => {
        searchMovies("Batman");
    }, []);

    // this will render when app calls from root
    return (
        <div className="app">
            <h2>Movie Land</h2>
            <div className='search'>
                <input placeholder="Search movie names" value={searchText}
                    onChange={(e) => {
                        let x = e.target.value.length
                        setSearchText(e.target.value) // settig search text with updated text
                        if (x > 2) {
                            searchMovies(e.target.value) // calls search function when input something
                        }
                    }}
                />
                <img src={searchIcon} alt='search.icon'
                    onClick={() => {
                        searchMovies(searchText)// calls search function when clicks
                    }}
                />
            </div>
            {// iterate through mvoiers if there else show Empty div 
                movies?.length > 0 ? (
                    <div className="container">
                        {movies.map((movie) => {
                            return <MovieCard movieData={movie} />
                        })}
                    </div>
                ) : (
                    <div className="empty">
                        <h2>
                            No Movies Found
                        </h2>
                    </div>
                )
            }
        </div>
    )
}
//exports the app
export default App;