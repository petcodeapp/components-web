import React from 'react';

import IndexPage from './pages/index';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from '@chakra-ui/core';

function App() {
    return (
        <ThemeProvider>
            <Router>
                <Switch>
                    <Route path="/">
                        <IndexPage/>
                    </Route>
                </Switch>
            </Router>
        </ThemeProvider>
    );
}

export default App;
