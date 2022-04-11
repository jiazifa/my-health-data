import React from "react";
import { Route, Routes } from "react-router-dom";
import DashBoard from "../DashBoard";

const Home = () => {
    return (
        <div>
            Home
            <Routes>
                <Route path="dashboard" element={<DashBoard />} />
            </Routes>
        </div>
    )
}

export default Home;