import React from "react"
import { NavLink, Route, Routes } from "react-router-dom"
// import { Switch } from "react-router-dom";
import { Layout, Typography, Space } from "antd"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Homepage from "./pages/Homepage"
import Exchanges from "./pages/Exchanges"
import Cryptocurrencies from "./pages/Cryptocurrencies"
import CryptoDetails from "./pages/CryptoDetails"
import News from "./pages/News"

function App() {
    return(
        <div className='app'>
            <div className=" navbar">
                <Navbar />
            </div>
            <div className=" main">
                <Layout>
                    <div className=" routes">
                        <Routes>
                            <Route exact path="/" element={<Homepage />} />
                            <Route exact path="/exchanges" element={<Exchanges />} />
                            <Route exact path="/cryptocurrencies" element={<Cryptocurrencies />} />
                            <Route exact path="/crypto/:coinId" element={<CryptoDetails />} />
                            <Route exact path="/news" element={<News />} />
                        </Routes>
                    </div>
                </Layout>
                <div className=" footer">
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default App
