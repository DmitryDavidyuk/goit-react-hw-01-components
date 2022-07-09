import styled from '@emotion/styled/';

export const Table = styled.table`
  border: 1px solid #eee;
  table-layout: fixed;
  width: 100%;
  margin-bottom: 20px;
  th {
    font-weight: 200;
    font-size: 12px;
    padding: 2px;
    background: #efefef;
    border: 1px solid #dddddd;
  }
  td {
    padding: 5px 0;
    border: 1px solid #eee;
    text-align: left;
  }
  tbody tr:nth-of-type(odd) {
    background: #fff;
  }
  tbody tr:nth-of-type(even) {
    background: #f7f7f7;
  }
`;
