import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import theme from './utils/theme';
import './styles/index.css';
import { CoreProvider } from './providers/CoreProvider';
import { AuthorizedApolloProvider } from './libs/apollo';
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from './providers/AuthProvider'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AuthProvider>
        <ChakraProvider theme={theme}>
            <BrowserRouter>
                <AuthorizedApolloProvider>
                    <CoreProvider>
                        <App />
                    </CoreProvider>
                </AuthorizedApolloProvider>
            </BrowserRouter>
        </ChakraProvider>
    </AuthProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
