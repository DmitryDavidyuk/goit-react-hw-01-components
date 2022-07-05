import users from 'components/profiles/user.json';
import data from 'components/statistics/data.json';
import friends from 'components/friends/friends.json';
import { ProfileList } from 'components/profiles/profileList';
import { Statiistics } from 'components/statistics/statistics';
import { FriendsList } from 'components/friends/friendsList';

export default function App() {
  return (
    <div className="container">
      <ProfileList items={users} />
      <Statiistics title="Upload stats" stats={data} />
      <FriendsList friends={friends} />;
    </div>
  );
}
