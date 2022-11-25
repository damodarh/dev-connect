import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import Landing from './components/Layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Alert from './components/Layout/Alert';
//Redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';

import './App.css';
import Dashboard from './components/dashboard/Dashboard';
import PrivateRoute from './components/routing/PrivateRoute';

if (localStorage.token) {
    setAuthToken(localStorage.token);
}

const App = () => {
    useEffect(() => {
        store.dispatch(loadUser());
    }, []);

    return (
        <Provider store={store}>
            <Router>
                <Fragment>
                    <Navbar />
                    <Routes>
                        <Route exact path='/' element={<Landing />} />
                    </Routes>
                    <section className='container'>
                        <Alert />
                        <Routes>
                            <Route
                                exact
                                path='/register'
                                element={<Register />}
                            ></Route>
                            <Route
                                exact
                                path='/login'
                                element={<Login />}
                            ></Route>
                            <Route
                                exact
                                path='/dashboard'
                                element={<PrivateRoute><Dashboard /></PrivateRoute>}
                            ></Route>
                        </Routes>
                    </section>
                </Fragment>
            </Router>
        </Provider>
    );
};

export default App;
