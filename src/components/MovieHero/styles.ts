import styled from 'styled-components';

interface IContainerProps {
  backdropUrl: string;
}

export const Container = styled.div<IContainerProps>`
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)) 0 0,
    url(${props => props.backdropUrl}) 10% 10%;
  background-size: 100% 100%, cover;
  position: relative;
  padding-top: 160px;

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
  width: 80%;

  div {
    margin-left: 60px;

    h1 {
      font-size: 3.2rem;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
    }

    p {
      font-size: 1.2rem;
      margin-top: 30px;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 6;
      overflow: hidden;
    }
  }
`;

export const Poster = styled.img`
  border-radius: 12px;
  height: 450px;
  width: 300px;
  z-index: 99;
`;
