import { FriendList } from './components/FriendList/FriendList';
import { TransactionHistory } from './components/TransactionHistory/TransactionHistory';

import friends from './data/friends.json';
import transactions from './data/transactions.json';
import './App.css';
import '../node_modules/modern-normalize/modern-normalize.css';

export const App = () => {
  return (
    <>
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};
