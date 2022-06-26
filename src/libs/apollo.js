import React from 'react';
import {
    ApolloClient,
    ApolloProvider,
    createHttpLink,
    InMemoryCache,
} from "@apollo/client";
import config from '../config/index'

export const AuthorizedApolloProvider = ({ children }) => {

	const httpLink = createHttpLink({
		uri: config.serverUrl + '/graphql',
	});

	const apolloClient = new ApolloClient({
		link: httpLink,
		cache: new InMemoryCache()
	});

	return (
		<ApolloProvider client={apolloClient}>
			{ children }
		</ApolloProvider>
	)
};