import styled from 'styled-components';

interface IContainerProps {
  backdropUrl: string;
}

export const Container = styled.div<IContainerProps>`
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)) 0 0,
    url(${props => props.backdropUrl}) 10% 10%;
  background-size: 100% 100%, cover;
  position: relative;
  padding-top: 120px;

  ul {
    display: flex;
    margin-top: 10px;

    li {
      background: #3899bf;
      border-radius: 50px;
      font-size: 0.8rem;
      font-weight: 500;
      margin-right: 12px;
      padding: 6px;
    }
  }
`;

export const MovieInfo = styled.div`
  color: white;
  display: flex;
  margin: 0 auto;
  width: 65%;

  @media (max-width: 1650px) {
    width: 75%;
  }

  @media (max-width: 1500px) {
    width: 85%;
  }

  @media (max-width: 1200px) {
    width: 90%;
  }

  div {
    margin-left: 60px;

    @media (max-width: 1200px) {
      margin-left: 40px;
    }

    h1 {
      font-size: 3.2rem;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      margin-top: 30px;
      overflow: hidden;

      @media (max-width: 1500px) {
        font-size: 3rem;
      }

      @media (max-width: 1300px) {
        font-size: 2.6rem;
      }
    }

    p {
      display: -webkit-box;
      font-size: 1.2rem;
      margin-top: 30px;
      line-height: 26px;
      letter-spacing: 0.9px;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 7;
      overflow: hidden;

      @media (max-width: 1300px) {
        font-size: 1.1rem;
      }

      @media (max-width: 900px) {
        font-size: 1rem;
      }
    }
  }
`;

export const Poster = styled.img`
  border-radius: 12px 12px 0 0;
  height: 450px;
  width: 300px;
`;
