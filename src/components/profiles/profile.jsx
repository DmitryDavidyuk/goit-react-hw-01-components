import PropTypes from 'prop-types';
import {
  CardProfile,
  Description,
  TagLocation,
  ProfileName,
  Stats,
  Label,
  Avatar,
} from 'components/profiles/profile.styled';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  followers,
  views,
  likes,
}) => {
  return (
    <CardProfile>
      <Description>
        <Avatar src={avatar} alt="User avatar" width="250" />
        <ProfileName>{username}</ProfileName>
        <TagLocation>@{tag}</TagLocation>
        <TagLocation>{location}</TagLocation>
      </Description>

      <Stats>
        <li>
          <Label>Followers</Label>
          <Label>{followers}</Label>
        </li>
        <li>
          <Label>Views</Label>
          <Label>{views}</Label>
        </li>
        <li>
          <Label>Likes</Label>
          <Label>{likes}</Label>
        </li>
      </Stats>
    </CardProfile>
  );
};

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};
