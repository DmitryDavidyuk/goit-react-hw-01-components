import users from 'components/profiles/user.json';
import data from 'components/statistics/data.json';
import friends from 'components/friends/friends.json';
import transactions from 'components/transaction/transactions.json';
import { ProfileList } from 'components/profiles/profileList';
import { StatiisticsList } from 'components/statistics/statisticsList';
import { FriendsList } from 'components/friends/friendsList';
import { Container } from './App.styled';
import { TransactionHistory } from 'components/transaction/transactionHistory';

export const App = () => {
  return (
    <Container>
      <ProfileList items={users} />
      <StatiisticsList title="Upload stats" stats={data} />
      <FriendsList friends={friends} />;
      <TransactionHistory items={transactions} />
    </Container>
  );
};
