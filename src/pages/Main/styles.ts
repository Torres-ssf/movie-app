import styled from 'styled-components';

export const Container = styled.main`
  max-width: 1920px;
  min-width: 400px;

  section:first-of-type {
    @media (max-width: 600px) {
      display: none;
    }
  }

  section + section {
    margin-top: 10px;
    padding: 20px 40px;

    @media (max-width: 1500px) {
      padding: 20px;
    }

    @media (max-width: 900px) {
      padding: 10px;
    }
  }

  .paginatate-list {
    display: flex;
    margin: 10px 0 0;
    flex-wrap: wrap;
    justify-content: center;

    @media (max-width: 600px) {
      font-size: 0.9rem;
    }

    li {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 60px;

      a {
        border: none;
        border-radius: 5px;
        color: #3899bf;
        cursor: pointer;
        margin: 6px;
        padding: 8px 12px;
      }
    }

    li.active a {
      color: white;
      background-color: #3899bf;
    }

    li.disabled {
      display: none;
    }
  }
`;

export const MovieList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 20px;
  flex-wrap: wrap;
  margin-top: 10px;

  @media (max-width: 1650px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  }

  @media (max-width: 1380px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  @media (max-width: 1020px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (max-width: 720px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 500px) {
    grid-template-columns: 1fr 342px 1fr;

    li {
      grid-column-start: 2;
      grid-column-end: 3;
    }
  }
`;
