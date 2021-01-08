import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './component/App';
import reportWebVitals from './reportWebVitals';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ApolloProvider } from '@apollo/client';
import { defaultDataIdFromObject, ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
    uri: 'https://cors-anywhere.herokuapp.com/https://tmdb.apps.quintero.io/',
    cache: new InMemoryCache({
        dataIdFromObject(responseObject) {
            switch (responseObject.__typename) {
                case 'Movies':
                    return JSON.stringify(responseObject);
                default:
                    return defaultDataIdFromObject(responseObject);
            }
        }
    }),
});

ReactDOM.render(
    <React.StrictMode>
        <CssBaseline />
        <ApolloProvider client={client}>
            <App />
        </ApolloProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
