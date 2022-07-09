import React, { useEffect, useRef } from 'react';
import {
    ApolloClient,
    ApolloProvider,
    createHttpLink,
    InMemoryCache,
} from "@apollo/client";
import { setContext } from 'apollo-link-context';
import config from '../config/index'
import { useAuth } from '../providers/AuthProvider'

export const AuthorizedApolloProvider = ({ children }) => {
    const { isAuthenticated } = useAuth();

	const httpLink = createHttpLink({
		uri: config.serverUrl + '/graphql',
	});

    const getAuthLink = () =>
        setContext((_, { headers }) => {
            // we'll directly grab the token from localstorage as the compiler doesn't waits until the token is set in state
            const token = window.localStorage.getItem('token');
            if (token) {
                return {
                    headers: {
                        ...headers,
                        authorization: 'Bearer ' + token,
                    },
                };
            } else {
                return headers;
            }
        }
    );

    const apolloClient = new ApolloClient({
        link: getAuthLink().concat(httpLink),
        cache: new InMemoryCache(),
    });

    const apolloClientRef = useRef(apolloClient);

    // update the headers
    useEffect(() => {
        apolloClientRef.current = new ApolloClient({
            link: getAuthLink().concat(httpLink),
            cache: new InMemoryCache(),
        });
    }, [isAuthenticated]);

	return (
		<ApolloProvider client={apolloClientRef.current}>
			{ children }
		</ApolloProvider>
	)
};