import React from 'react'
import { Redirect, Route } from 'react-router'
import useAuth from './../../Hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const { allContext: { user: { email, displayName } } } = useAuth();
    return (
        <Route

            {...rest}
            render={({ location }) =>
                email || displayName ? (children) :
                    (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: location }
                            }}
                        />
                    )
            }



        >

        </Route>
    )
}

export default PrivateRoute
