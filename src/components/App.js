import users from './profiles/user.json';
import ProfileList from './profiles/profileList';

export default function App() {
  return (
    <div>
      <ProfileList items={users} />
    </div>
  );
}
