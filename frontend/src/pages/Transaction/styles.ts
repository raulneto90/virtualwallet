import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;

  background: #fff;

  padding: 20px 32px;
  border-radius: 5px;

  margin: 32px auto;
  max-width: 500px;

  form {
    margin-top: 12px;

    input,
    select {
      width: 100%;
      height: 56px;
      padding: 0 16px;

      & + input,
      & + select {
        margin-top: 8px;
      }
    }

    button {
      background: #f9cc5e;
      color: #fff;
      border: none;
      border-radius: 5px;
      width: 100%;
      height: 56px;
      margin-top: 12px;
      font-size: 18px;

      transition: 0.2s;

      &:hover {
        background: #ffbc19;
      }
    }
  }
`;
