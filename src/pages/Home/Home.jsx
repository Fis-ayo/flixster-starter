import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import MovieList from "../../components/MovieList/MovieList"
import SearchBar from "../../components/SearchBar/SearchBar"
// import SortDropDown from "../../components/SortDropDown/SortDropDown"
import React from "react"


export default function Home() {

    return (
        <div>
            <Header />
            <SearchBar />
            <MovieList />
            <Footer />
        </div>
    );
}