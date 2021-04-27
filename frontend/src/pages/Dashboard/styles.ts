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

export const ListType = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    background: #f9cc5e;
    color: #fff;
    font-weight: bold;
    border: none;
    border-radius: 5px;
    padding: 12px;

    transition: 0.2s;

    &:hover {
      background: #ffbc1a;
    }

    & + button {
      margin-left: 5px;
    }
  }

  button.active {
    background: #ffbc1a;
  }
`;

export const Transactions = styled.div`
  max-width: 1200px;
  margin: 32px auto;
`;

export const TableContainer = styled.section`
  margin-top: 12px;
  table {
    width: 100%;
    border-spacing: 0 8px;

    th {
      color: #212228;
      font-weight: normal;
      padding: 20px 32px;
      text-align: left;
      font-size: 16px;
      line-height: 24px;
    }

    td {
      padding: 20px 32px;
      border: 0;
      background: #fff;
      font-size: 16px;
      font-weight: normal;
      color: #212228;
      &.title {
        color: #212228;
      }
      &.income {
        color: #12a454;
      }
      &.outcome {
        color: #e83f5b;
      }
    }
    td:first-child {
      border-radius: 8px 0 0 8px;
    }
    td:last-child {
      border-radius: 0 8px 8px 0;
    }
  }
`;
