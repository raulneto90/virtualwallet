import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const ReportContainer = styled.div`
  max-width: 1200px;
  margin: 32px auto;

  background: #fff;
  padding: 20px 32px;
  border-radius: 5px;

  form {
    margin-top: 32px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .interval {
      margin-top: 12px;

      h3 {
        font-weight: lighter;
        margin-bottom: 10px;
      }

      input[type='date'] {
        height: 40px;

        & + input[type='date'] {
          margin-left: 20px;
        }
      }
    }

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
  }
`;

export const Transactions = styled.div`
  margin-top: 64px;
  max-width: 1200px;
  margin: 32px auto;
  display: flex;
  flex-direction: column;

  button {
    align-self: flex-end;

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
