import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  > header {
    background: #711DC5;
    padding: 20px 32px;
  }
`;

export const Menu = styled.nav`
  padding: 20px 32px;

  ul {
    list-style: none;

    li {
      display: flex;

      a {
        display: block;
        background: #F9CC5E;
        color: #fff;
        font-weight: bold;
        padding: 12px;
        border-radius: 5px;
        text-decoration: none;

        transition: 0.2s;

        & + a {
          margin-left: 12px;
        }

        &:hover {
          background: #FFBC1A;
        }
      }
    }
  }
`;

export const TransactionOverview = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Card = styled.div`
  background: #fff;
  border-radius: 5px;
  padding: 20px 32px;
  margin-top: -20px;

  > header {
    display: flex;
    justify-content: space-between;
    align-items: center;

      p {
        font-size: 20px;
        font-weight: lighter;
     }
  }

  h1 {
    margin-top: 12px;
    font-size: 32px;
  }
`;
