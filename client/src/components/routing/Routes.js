import React from 'react';
import PropTypes from 'prop-types';
import Alert from '../Layout/Alert';
import { Route, Switch } from 'react-router';
import PrivateRoute from './PrivateRoute';
import Register from '../auth/Register';
import Login from '../auth/Login';
import Dashboard from '../dashboard/Dashboard';
import CreateProfile from '../profile-form/CreateProfile';
import EditProfile from '../profile-form/EditProfile';
import AddExperience from '../profile-form/AddExperience';
import AddEducation from '../profile-form/AddEducation';
import Profiles from '../profiles/Profiles';
import Profile from '../profile/Profile';
import Posts from '../posts/Posts';
import Post from '../post/Post';
import NotFound from '../Layout/NotFound';

const Routes = (props) => {
  return (
    <section className='container'>
      <Alert />
      <Switch>
        <Route exact path='/register' component={Register}></Route>
        <Route exact path='/login' component={Login}></Route>
        <Route exact path='/profiles' component={Profiles}></Route>
        <Route exact path='/profile/:id' component={Profile}></Route>
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
        <PrivateRoute exact path='/posts' component={Posts}></PrivateRoute>
        <PrivateRoute exact path='/posts/:id' component={Post}></PrivateRoute>
        <Route component={NotFound} />
      </Switch>
    </section>
  );
};

Routes.propTypes = {};

export default Routes;
