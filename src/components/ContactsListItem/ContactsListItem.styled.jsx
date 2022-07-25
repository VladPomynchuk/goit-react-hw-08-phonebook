import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  :not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const RemoveBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
`;
