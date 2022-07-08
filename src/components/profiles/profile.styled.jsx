import styled from '@emotion/styled';

export const CardProfile = styled.div`
  width: 250px;
  background-color: rgb(255, 250, 250);
  justify-content: center;
`;

export const Description = styled.div`
  display: inline-block;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const TagLocation = styled.p`
  color: rgba(0, 0, 0, 0.5);
  margin: 15 15;
`;

export const ProfileName = styled.p`
  font-size: 25px;
  font-weight: 800;
`;

export const Stats = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(222, 222, 222);
  padding: 0 20px;
  padding-bottom: 20px;
  margin: 0;
`;

export const Label = styled.span`
  display: inline-block;
  padding: 15px 0;
  color: rgb(146, 146, 146);
`;

export const Avatar = styled.img`
  border-radius: 50%;
`;
