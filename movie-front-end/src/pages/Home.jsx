import '../css/Home.css'
import { useState } from "react"
import MovieCard from "../components/MovieCard"
export default function Home() {

    const [searchQuery, setSearchQuery] = useState("")

    function handleSearch(event) {
        event.preventDefault();
        alert(searchQuery)
        setSearchQuery("-----")
    }

    const movies = [
        { id: 1, title: "john Wick", release_date: "2020" },
        { id: 2, title: "Terminator", release_date: "1990" },
        { id: 3, title: "The Matrix", release_date: "2020" },
        { id: 3, title: "The Matrix Reloaded", release_date: "2022" }
    ]

    return (
        <div className='home'>
            <form onSubmit={handleSearch} className="search-form">
                <input type="text" placeholder="Search for Movie"
                    className="search-input"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit" className="search-button">Search</button>
            </form>

            <div className="movies-grid">
                {movies.map(movie =>
                 movie.title.toLowerCase().startsWith(searchQuery.toLowerCase()) &&   <MovieCard movie={movie} key={movie.id} />
                )}
            </div>

        </div>
    )
}
