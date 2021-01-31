import styled from 'styled-components';

interface IContainerProps {
  backdropUrl: string;
}

interface IRatingParams {
  rating: number;
}

export const Container = styled.div<IContainerProps>`
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)) 0 0,
    url(${props => props.backdropUrl}) 10% 10%;
  background-size: 100% 100%, cover;
  position: relative;
  padding-top: 120px;
`;

export const MovieInfoContainer = styled.div`
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
`;

export const MovieInfo = styled.div`
  margin-left: 60px;

  @media (max-width: 1200px) {
    margin-left: 40px;
  }

  div {
    display: flex;

    span {
      margin-right: 20px;
    }

    ul {
      display: flex;
      align-items: center;
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
`;

export const Poster = styled.img`
  border-radius: 12px 12px 0 0;
  height: 450px;
  width: 300px;
`;

export const MovieRating = styled.span<IRatingParams>`
  align-items: center;
  border-radius: 10px;
  color: #fff;
  display: flex;
  font-size: 1.5rem;
  font-weight: 700;
  justify-content: center;
  margin-top: 12px;
  width: 48px;
  height: 48px;
  background-color: ${props => {
    if (props.rating > 6) {
      return '#66CC33';
    }

    if (props.rating >= 4) {
      return '#F8CC33';
    }

    return '#F31700';
  }};
`;
