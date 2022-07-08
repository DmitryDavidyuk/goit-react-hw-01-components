import styled from '@emotion/styled';

export const FriendList = styled.ul`
  margin-top: 0;
  display: block;
  /* border: 1px solid #000; */

  padding: 0;
  background-color: rgb(255, 250, 250);
`;

export const FriendsCard = styled.li`
  display: flex;
  border: 1px solid #000;
  align-items: center;
  padding: 4px;
  margin: 8px 0;
  box-shadow: 2px 2px 2px #a8a8a8;
  justify-content: center;
`;

export const IsOnline = styled.span`
  width: 15px;
  height: 15px;
  border-radius: 50px;
  background-color: ${props => {
    return props.isOnline ? '#00ff00dd' : '#ff0000';
  }};
`;
