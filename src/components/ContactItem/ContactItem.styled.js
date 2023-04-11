import styled from '@emotion/styled';

export const Item = styled.li`
  font-size: 22px;
  display: flex;
  gap: 30px;
  font-weight: 500;
`;

export const Button = styled.button`
  font-size: 14px;
  padding: 4px 8px;
  background-color: transparent;
  border-radius: 4px;
  border: none;
  box-shadow: 2px 2px 1px rgba(0, 5, 5, 0.12), -1px -1px 1px rgba(0, 5, 5, 0.12);
  cursor: pointer;
  :hover {
    background-color: cornsilk;
  }
  :active {
    background-color: burlywood;
  }
`;
