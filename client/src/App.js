import React, { Fragment, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
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
import CreateProfile from './components/profile-form/CreateProfile';
import EditProfile from './components/profile-form/EditProfile';
import AddExperience from './components/profile-form/AddExperience';
import AddEducation from './components/profile-form/AddEducation';
import Profiles from './components/profiles/Profiles';
import Profile from './components/profile/Profile';
import Posts from './components/posts/Posts';
import Post from './components/post/Post';

if (localStorage.token) {
    setAuthToken(localStorage.token);
}

const App = () => {
    useEffect(() => {
        store.dispatch(loadUser());
    }, []);

    return (
        <Provider store={store}>
            <BrowserRouter>
                <Fragment>
                    <Navbar />
                    <Switch>
                        <Route exact path='/' component={Landing} />
                        <section className='container'>
                            <Alert />
                            <Route
                                exact
                                path='/register'
                                component={Register}
                            ></Route>
                            <Route
                                exact
                                path='/login'
                                component={Login}
                            ></Route>
                            <Route
                                exact
                                path='/profiles'
                                component={Profiles}
                            ></Route>
                            <Route
                                exact
                                path='/profile/:id'
                                component={Profile}
                            ></Route>
                            <PrivateRoute
                                exact
                                path='/dashboard'
                                component={Dashboard}
                            ></PrivateRoute>
                            <PrivateRoute
                                exact
                                path='/create-profile'
                                component={CreateProfile}
                            ></PrivateRoute>
                            <PrivateRoute
                                exact
                                path='/edit-profile'
                                component={EditProfile}
                            ></PrivateRoute>
                            <PrivateRoute
                                exact
                                path='/add-experience'
                                component={AddExperience}
                            ></PrivateRoute>
                            <PrivateRoute
                                exact
                                path='/add-education'
                                component={AddEducation}
                            ></PrivateRoute>
                            <PrivateRoute
                                exact
                                path='/posts'
                                component={Posts}
                            ></PrivateRoute>
                            <PrivateRoute
                                exact
                                path='/posts/:id'
                                component={Post}
                            ></PrivateRoute>
                        </section>
                    </Switch>
                </Fragment>
            </BrowserRouter>
        </Provider>
    );
};

export default App;
