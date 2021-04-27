import styled from 'styled-components';

export const Container = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;

  justify-content: center;

  width: 352px;
  height: 136px;
  border-radius: 5px;
  padding: 20px 32px;

  header {
    display: flex;
    justify-content: space-between;

    .income {
      color: #33cc95;
    }

    .outcome {
      color: #e62e4d;
    }
  }

  h1 {
    margin-top: 14px;
    font-size: 32px;
    font-weight: 500;
    color: #363f5f;
  }
`;
