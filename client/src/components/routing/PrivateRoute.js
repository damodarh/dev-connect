import React from 'react';
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({ auth: { isAuthenticated, loading }, children }) => {
    if (!isAuthenticated && !loading) {
        // not logged in so redirect to login page with the return url
        return <Navigate to='/login' />;
    }
    // authorized so return child components
    else return children;
};

PrivateRoute.propTypes = {
    auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    auth: state.auth,
});

export default connect(mapStateToProps)(PrivateRoute);
