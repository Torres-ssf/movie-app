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

  @media (max-width: 1100px) {
    padding-top: 90px;
  }

  @media (max-width: 900px) {
    padding-top: 60px;
  }

  @media (max-width: 800px) {
    padding-top: 0;
  }
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

  @media (max-width: 900px) {
    width: 100%;
  }
`;

export const MovieInfo = styled.div`
  margin-left: 60px;

  @media (max-width: 1200px) {
    margin-left: 40px;
  }

  @media (max-width: 900px) {
    margin-left: 20px;
  }

  div {
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    margin-top: 10px;

    span {
      margin-right: 20px;
    }

    ul {
      display: flex;
      flex-wrap: wrap;
      align-items: center;

      li {
        background: #3899bf;
        border-radius: 50px;
        font-size: 0.8rem;
        font-weight: 500;
        margin: 10px 12px 10px 0;
        padding: 6px;

        @media (max-width: 900px) {
          padding: 4px;
        }
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

    @media (max-width: 1000px) {
      font-size: 2.2rem;
    }
    @media (max-width: 880px) {
      font-size: 2rem;
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
      font-size: 0.9rem;
      -webkit-line-clamp: 6;
    }

    @media (max-width: 700px) {
      font-size: 0.9rem;
      -webkit-line-clamp: 4;
    }
  }
`;

export const Poster = styled.img`
  border-radius: 12px 12px 0 0;
  height: 450px;
  width: 300px;

  @media (max-width: 900px) {
    height: 375px;
    width: 250px;
  }

  @media (max-width: 700px) {
    font-size: 0.9rem;
    -webkit-line-clamp: 4;
  }
`;

export const MovieRating = styled.span<IRatingParams>`
  align-items: center;
  border-radius: 10px;
  color: #fff;
  display: flex;
  font-size: 1.5rem;
  font-weight: 700;
  justify-content: center;
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

  @media (max-width: 900px) {
    font-size: 1.2rem;
    width: 40px;
    height: 40px;
  }
`;
