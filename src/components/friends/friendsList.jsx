const Friends = ({ avatar, name, isOnline }) => {
  return (
    <li className="item">
      <span className="status">{isOnline}</span>
      <img className="avatar" src={avatar} alt={avatar} width="48" />
      <p className="name">{name}</p>
    </li>
  );
};

export const FriendsList = ({ friends }) => {
  return (
    <ul className="friend-list">
      {friends.map(({ id, avatar, name, isOnline }) => (
        <Friends key={id} avatar={avatar} name={name} isOnline={isOnline} />
      ))}
    </ul>
  );
};
