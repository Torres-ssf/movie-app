import styled from 'styled-components';

export const Container = styled.nav`
  height: 40px;

  ul {
    height: 100%;
    display: flex;
    border-bottom: 1px solid #3899bf;
    flex: 1;

    li {
      display: flex;
      margin-right: 16px;
    }
  }

  button {
    border: none;
    background: transparent;
    color: #3899bf;
    cursor: pointer;
    height: 36px;
    font-size: 1rem;
    font-weight: 500;
    text-decoration: none;
  }
`;
