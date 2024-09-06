import React from 'react';
import { useQuery, gql } from '@apollo/client';

// Define the GraphQL query
const GET_USER = gql`
  query GetUser($telegramId: String!) {
    getUser(telegramId: $telegramId) {
      telegramId
      coins
    }
  }
`;

function App() {
  // Use the query hook
  const { loading, error, data } = useQuery(GET_USER, {
    variables: { telegramId: '123456789' } // Replace with the actual telegramId
  });

  // Handle loading state
  if (loading) return <p>Loading...</p>;

  // Handle error state
  if (error) {
    console.error("GraphQL Error:", error);
    return <p>Error occurred.</p>;
  }

  // Render data
  return (
    <div>
      <h1>User Info</h1>
      <p>Telegram ID: {data.getUser.telegramId}</p>
      <p>Coins: {data.getUser.coins}</p>
    </div>
  );
}

export default App;
