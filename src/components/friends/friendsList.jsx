import {
  FriendList,
  FriendsCard,
  IsOnline,
} from 'components/friends/friends.styled';

export const FriendsList = ({ friends }) => {
  return (
    <FriendList>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <Friends key={id} avatar={avatar} name={name} isOnline={isOnline} />
      ))}
    </FriendList>
  );
};

const Friends = ({ avatar, name, isOnline }) => {
  return (
    <FriendsCard>
      <IsOnline isOnline={isOnline}></IsOnline>
      <img className="avatar" src={avatar} alt={avatar} width="48" />
      <p className="name">{name}</p>
    </FriendsCard>
  );
};
