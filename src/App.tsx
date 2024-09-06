// In src/App.tsx
import { useState } from 'react';
import { ApolloClient, InMemoryCache, gql, useMutation } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:4000', // Replace with your deployed backend URL
  cache: new InMemoryCache(),
});

const ADD_COINS = gql`
  mutation AddCoins($telegramId: String!, $coins: Int!) {
    addCoins(telegramId: $telegramId, coins: $coins) {
      coins
    }
  }
`;

const App: React.FC = () => {
  const [coins, setCoins] = useState(0);
  const [addCoins] = useMutation(ADD_COINS);

  const handleTap = () => {
    setCoins(coins + 1);
    addCoins({ variables: { telegramId: "your-telegram-id", coins: coins + 1 } });
  };

  return (
    <div className="App">
      <h1>TapMe Clicker Game</h1>
      <p>Your Coins: {coins}</p>
      <button onClick={handleTap} className="tap-button">Tap!</button>
    </div>
  );
};

export default App;
