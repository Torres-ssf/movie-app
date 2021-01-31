import styled, { css } from 'styled-components';

interface IListItemProps {
  selected: boolean;
}

export const Container = styled.nav`
  display: flex;
  justify-content: center;
  margin-bottom: 8px;
  height: 44px;

  ul {
    height: 100%;
    display: flex;
    border-bottom: 1px solid #3899bf;
    flex: 1;
  }

  select {
    display: none;
    background: white;
    border: 2px solid #3899bf;
    border-radius: 5px;
    padding: 6px;
    font-size: 1rem;
  }

  @media (max-width: 700px) {
    align-items: center;
    height: unset;
    flex-direction: column;

    ul {
      display: none;
    }

    select {
      display: flex;
      margin-top: 4px;
      margin-bottom: 10px;
    }
  }
`;

export const ListItem = styled.li<IListItemProps>`
  display: flex;
  margin-right: 16px;

  ${props =>
    props.selected &&
    css`
      font-weight: 700;
      border-bottom: 3px solid #3899bf;

      button {
        font-weight: 700;
      }
    `}
`;

export const Button = styled.button`
  border: none;
  background: transparent;
  color: #3899bf;
  cursor: pointer;
  height: 36px;
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none;
`;
