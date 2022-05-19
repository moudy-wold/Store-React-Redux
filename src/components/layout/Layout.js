import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import Clothes from "../Clothes/Clothes";
import Mobile from "../Mobile/Mobile";
import Computer from "../Computer/Computer";
import Navbar from "../NavBar/Navbar";
import Card from '../card/card';
import Footer from '../footer/footer';
import Header from '../Header/Header';

export default function Layout() {
    return (
        <div className="layout">
            <Header />
            <main>
                <Navbar />
                <div className='wrapper'>
                    <Routes>
                        <Route path="/home" element={<Home />} />
                        <Route path="/clothes" element={<Clothes />} />
                        <Route path="/mobile" element={<Mobile />} />
                        <Route path="/computer" element={<Computer />} />
                    </Routes>
                </div>
                <Card />
            </main>
            <Footer />
        </div>
    )
}
