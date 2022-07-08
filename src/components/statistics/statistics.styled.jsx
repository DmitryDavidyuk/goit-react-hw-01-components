import styled from '@emotion/styled';

export const Statistics = styled.section`
  background-color: rgb(255, 250, 250);
`;

export const Title = styled.h2`
  font-size: 16p;
  color: #333333;
  text-align: center;
  padding-top: 16px;
  margin: 0 auto;
`;

export const StatList = styled.ul`
  display: flex;
  padding: 0;
  margin-bottom: 0;
`;

export const ItemList = styled.li`
  border: solid 1px teal;
  padding: 8px;
  background: linear-gradient(
    0deg,
    rgba(222, 222, 222, 1) ${props => props.percentage}%,
    rgba(255, 250, 250, 1) ${props => props.percentage}%
  );
`;

export const Percentage = styled.span`
  font-size: 16px;
  display: flex;
  justify-content: space-evenly;
`;
