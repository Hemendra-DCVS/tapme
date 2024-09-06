import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider, InMemoryCache } from '@apollo/client';
import App from './App'; // Import your App component

// Create an Apollo Client instance
const client = new ApolloClient({
  uri: 'http://localhost:4000', // Replace with your GraphQL server URL
  cache: new InMemoryCache()
});

// Render the App component with ApolloProvider
ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);
