import React from "react"
import { Route, Routes } from "react-router"
import Header from "./components/Header";
import Home  from "./components/Home";
import MovieDetail  from "./components/MovieDetail";
import PageNotFound  from "./components/PageNotFound";
import Footer from "./components/Footer";

function App() {

  return (
    <>
        <div className="">
            <Header />
            <div className=" mx-[40px]">
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/movie/:imdbID" element={<MovieDetail />}/>
                    <Route path="*" element={<PageNotFound />}/>
                </Routes>
            </div>
            <Footer />
        </div>
    </>
  )
}

export default App
