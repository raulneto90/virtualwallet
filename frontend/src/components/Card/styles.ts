import styled from 'styled-components';

export const Container = styled.div`
  margin-top: -50px;
  width: 352px;
  height: 136px;
  background-color: var(--white);
  padding: 25px 32px;
  border-radius: 5px;

  display: flex;
  justify-content: space-between;

  h2 {
    font-size: 16px;
    font-weight: normal;
    color: var(--title);
    line-height: 24px;
  }

  p {
    font-size: 32px;
    line-height: 54px;
    color: var(--title);
    font-weight: 500;
  }
`;