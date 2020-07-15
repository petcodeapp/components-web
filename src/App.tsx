import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from '@chakra-ui/core';

import LoginPage from './pages/Login/index';

import theme from './theme';

function App() {
    return (
        <ThemeProvider theme={ theme }>
            <Router>
                <Switch>
                    <Route path='/'>
                        <LoginPage/>
                    </Route>
                </Switch>
            </Router>
        </ThemeProvider>
    );
}

export default App;
