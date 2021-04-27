import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
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
