import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/NavBar/Navbar';
import Home from './pages/Home';
import Blogs from './pages/Blogs';
import Blog from './pages/Blog';
import Events from './pages/Events';
import Team from './pages/Team';
import Roles from './pages/Roles';
import { ChakraProvider } from '@chakra-ui/react';

function App() {
    return (
        <ChakraProvider>
            <Router>
                <Navbar />zzz
                <Switch>
                    <Route path="/team">
                        <Team />
                    </Route>
                    <Route path="/events">
                        <Events />
                    </Route>
                    <Route path="/Blogs">
                        <Blogs />
                    </Route>
                    <Route path="/Blog">
                        <Blog />
                    </Route>
                    <Route path="/Roles">
                        <Roles />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </Router>
        </ChakraProvider>
    );
}

export default App;