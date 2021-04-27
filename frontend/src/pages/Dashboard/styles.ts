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
    color: #212228;
  }
`;

export const Transactions = styled.div`
  max-width: 1200px;
  margin: 32px auto;
`;

export const TransactionsList = styled.table`
  width: 100%;
  max-width: 1200px;
  margin: 20px auto;

  thead {
    width: 100%;

    tr {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 12px 20px;

      th {
        color: #212228;
        font-weight: lighter;
      }
    }
  }

  tbody {
    width: 100%;

    tr {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: #fff;
      border-radius: 5px;
      padding: 12px 20px;

      td {
        font-weight: regular;
      }

      & + tr {
        margin-top: 8px;
      }
    }
  }
`;
