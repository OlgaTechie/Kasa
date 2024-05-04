import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/Home/Home';
import About from './pages/About/About';
import NotFound from './pages/NotFound/NotFound';
import PropertyDetails from './components/PropertyDetails/PropertyDetails';

function AppRouter() {
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/property/id' component={PropertyDetails} />
                <Route path='/about' component={About} />
                <Route component={NotFound} />
            </Switch>
        </Router>
    );
}

export default AppRouter;