import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from '@chakra-ui/core';

import IndexPage from './pages/index';

import theme from './theme';

function App() {
    return (
        <ThemeProvider theme={ theme }>
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
