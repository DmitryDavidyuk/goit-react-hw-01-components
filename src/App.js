import Profile from './components/profile';
import users from './user.json';

export default function App() {
  return users.map(user => (
    <Profile
      key={user.username}
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      followers={user.stats.followers}
      views={user.stats.views}
      likes={user.stats.likes}
    />
  ));
}
