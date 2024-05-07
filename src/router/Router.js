import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import FicheLogement from "../pages/FicheLogement/FicheLogement"

function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/fiche-logement/:id" element={<FicheLogement />} />
            </Routes>
        </Router>
    );
}

export default AppRouter;