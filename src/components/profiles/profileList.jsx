import { Profile } from './profile';

export const ProfileList = ({ items }) => {
  return items.map(item => (
    <Profile
      key={item.username}
      username={item.username}
      tag={item.tag}
      location={item.location}
      avatar={item.avatar}
      followers={item.stats.followers}
      views={item.stats.views}
      likes={item.stats.likes}
    />
  ));
};

export default ProfileList;
