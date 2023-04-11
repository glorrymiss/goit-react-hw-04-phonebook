import styled from '@emotion/styled';

export const Label = styled.label`
  font-size: 26px;
`;

export const Button = styled.button`
  font-size: 18px;
  width: 110px;
  background-color: azure;
  padding: 4px;
  border: none;
  border-radius: 8px;

  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.12), 2px 4px 4px rgba(0, 0, 0, 0.06),
    2px 4px 4px rgba(0, 0, 0, 0.16);

  :active {
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.12);
  }
`;

export const Input = styled.input`
  font-size: 14px;
  min-width: 200px;
  margin-top: 6px;
  padding: 6px;
  display: block;
  border: 3px solid brown;
  outline: transparent;
  box-shadow: 2px 2px 1px rgba(0, 5, 5, 0.12);
`;
